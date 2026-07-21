import AsyncStorage from "@react-native-async-storage/async-storage";
import { COURSE_DATA, isGradedQuestion } from "@/constants/CourseData";
import {
  buildChapterSteps,
  getChapterGradableCount,
  getOrderedChapterIds,
  isChapterExaminable,
} from "@/lib/courseSteps";
import { computeLessonStats } from "@/lib/lessonStats";
import { incrementLessonCompletion } from "@/lib/lessonProgress";
import {
  EXAM_PASS_THRESHOLD,
  getAllExamResults,
  saveExamResult,
} from "@/lib/examResult";
import {
  BACKUP_KEYS,
  buildBackup,
  parseBackup,
  restoreEntries,
} from "@/lib/backup";
import { getChapterStepStates, getCourseUnlocks } from "@/lib/stepProgress";

/**
 * Ф5 acceptance, run against the REAL shipped course rather than fixtures.
 *
 * These are the migration document's acceptance criteria expressed as code, so
 * they can be re-run after any later change instead of being re-clicked by
 * hand: every chapter reachable and playable, chapter N+1 gated behind exam N,
 * the exam drawing 15 graded questions at a 70% sticky threshold, non-graded
 * steps kept out of the score, and a backup round-trip that preserves step
 * progress and exam results.
 */

const CHAPTER_IDS = getOrderedChapterIds();
const EXAM_QUESTION_COUNT = 15;

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe("acceptance — the course is complete and playable", () => {
  it("ships 20 chapters of 4 lessons", () => {
    expect(CHAPTER_IDS).toHaveLength(20);
    expect(CHAPTER_IDS).toEqual([...CHAPTER_IDS].sort((a, b) => a - b));
    for (const chapter of COURSE_DATA.chapters) {
      expect({ id: chapter.id, lessons: chapter.lessons.length }).toEqual({
        id: chapter.id,
        lessons: 4,
      });
    }
  });

  it("gives every chapter a step list ending in an exam", () => {
    for (const id of CHAPTER_IDS) {
      const steps = buildChapterSteps(id);
      const practice = steps.filter((s) => s.kind === "practice");

      expect({ id, practice: practice.length }).toEqual({ id, practice: 4 });
      expect({ id, last: steps.at(-1)?.kind }).toEqual({ id, last: "exam" });
      // Keys stay unique within a chapter, otherwise progress collides.
      expect(new Set(steps.map((s) => s.key)).size).toBe(steps.length);
      steps.forEach((s, i) => expect(s.index).toBe(i));
    }
  });

  it("routes every practice step to a lesson that has questions", () => {
    for (const chapter of COURSE_DATA.chapters) {
      for (const step of buildChapterSteps(chapter.id)) {
        if (step.kind !== "practice") continue;
        const lesson = chapter.lessons.find((l) => String(l.id) === step.lessonId);
        expect({ step: step.key, found: Boolean(lesson) }).toEqual({
          step: step.key,
          found: true,
        });
        expect(lesson!.questions.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("acceptance — chapter locks", () => {
  /** Finish every lesson of a chapter and pass its exam. */
  const completeChapter = async (chapterId: number) => {
    const chapter = COURSE_DATA.chapters.find((c) => c.id === chapterId)!;
    for (const lesson of chapter.lessons) {
      await incrementLessonCompletion(String(lesson.id));
    }
    await saveExamResult(chapterId, { correct: 15, total: 15 });
  };

  it("opens only the first chapter on a fresh install", async () => {
    const unlocks = await getCourseUnlocks();

    expect(unlocks.find((c) => c.chapterId === 1)!.unlocked).toBe(true);
    const locked = unlocks.filter((c) => c.chapterId > 1 && !c.unlocked);
    expect(locked).toHaveLength(CHAPTER_IDS.length - 1);
  });

  it("keeps chapter N+1 shut until chapter N's exam is passed", async () => {
    // Finishing the lessons is not enough — the exam is the gate.
    const chapter1 = COURSE_DATA.chapters[0];
    for (const lesson of chapter1.lessons) {
      await incrementLessonCompletion(String(lesson.id));
    }

    let unlocks = await getCourseUnlocks();
    expect(unlocks.find((c) => c.chapterId === 2)!.unlocked).toBe(false);

    await saveExamResult(1, { correct: 15, total: 15 });

    unlocks = await getCourseUnlocks();
    expect(unlocks.find((c) => c.chapterId === 2)!.unlocked).toBe(true);
    expect(unlocks.find((c) => c.chapterId === 3)!.unlocked).toBe(false);
  });

  it("opens the whole course exactly as chapters are passed in order", async () => {
    for (const id of CHAPTER_IDS) {
      const unlocks = await getCourseUnlocks();
      expect({ id, unlocked: unlocks.find((c) => c.chapterId === id)!.unlocked }).toEqual({
        id,
        unlocked: true,
      });
      await completeChapter(id);
    }

    const final = await getCourseUnlocks();
    expect(final.every((c) => c.unlocked)).toBe(true);
    expect(final.every((c) => c.passed)).toBe(true);
  });

  it("marks a chapter's steps done once its lessons and exam are finished", async () => {
    await completeChapter(1);

    const states = await getChapterStepStates(1);
    expect(states.doneCount).toBe(states.total);
    expect(states.examPassed).toBe(true);
    expect(states.steps.every((s) => s.state === "done")).toBe(true);
  });
});

describe("acceptance — the chapter exam", () => {
  it("has at least 15 graded questions to draw from in every chapter", () => {
    for (const id of CHAPTER_IDS) {
      expect({ id, gradable: getChapterGradableCount(id) >= EXAM_QUESTION_COUNT }).toEqual({
        id,
        gradable: true,
      });
      expect(isChapterExaminable(id)).toBe(true);
    }
  });

  it("never offers a theory block or a writing task in the exam pool", () => {
    for (const chapter of COURSE_DATA.chapters) {
      const pool = chapter.lessons
        .flatMap((l) => l.questions)
        .filter(isGradedQuestion);

      expect(pool.some((q) => q.type === "theory")).toBe(false);
      expect(pool.some((q) => q.type === "writing")).toBe(false);
    }
  });

  it("passes at the 70% threshold and fails just below it", async () => {
    expect(EXAM_PASS_THRESHOLD).toBe(70);

    const justBelow = await saveExamResult(1, { correct: 10, total: 15 }); // 67%
    expect(justBelow.passed).toBe(false);

    const atThreshold = await saveExamResult(2, { correct: 11, total: 15 }); // 73%
    expect(atThreshold.passed).toBe(true);
  });

  it("keeps a pass sticky — a worse retake cannot revoke it", async () => {
    await saveExamResult(3, { correct: 14, total: 15 }); // 93%, passed
    const afterBadRetake = await saveExamResult(3, { correct: 3, total: 15 }); // 20%

    expect(afterBadRetake.passed).toBe(true);

    const stored = await getAllExamResults();
    expect(stored[3].passed).toBe(true);
    // The best score survives too, so the result screen cannot regress.
    expect(stored[3].bestAccuracy).toBeGreaterThanOrEqual(93);
  });
});

describe("acceptance — non-graded steps stay out of the score", () => {
  it("scores a real lesson on its graded questions only", () => {
    // Chapter 1 lesson 1 is a genuine mix of theory, writing and exercises.
    const lesson = COURSE_DATA.chapters[0].lessons[0];
    const graded = lesson.questions.filter(isGradedQuestion);
    const nonGraded = lesson.questions.length - graded.length;

    expect(nonGraded).toBeGreaterThan(0); // the case is actually exercised

    const stats = computeLessonStats(lesson.questions, graded.length, new Set(), {});

    expect(stats.totalQuestions).toBe(graded.length);
    expect(stats.accuracy).toBe(100);
    expect(stats.byType?.some((b) => b.type === "theory")).toBe(false);
    expect(stats.byType?.some((b) => b.type === "writing")).toBe(false);
  });

  it("never lets a full course lesson produce NaN accuracy", () => {
    for (const chapter of COURSE_DATA.chapters) {
      for (const lesson of chapter.lessons) {
        const stats = computeLessonStats(lesson.questions, 0, new Set(), {});
        expect({
          lesson: lesson.id,
          nan: Number.isNaN(stats.accuracy),
        }).toEqual({ lesson: lesson.id, nan: false });
      }
    }
  });
});

describe("acceptance — backup round-trip", () => {
  it("carries step progress and exam results through export and import", async () => {
    // Play a little: finish two lessons, pass one exam, read some theory.
    await incrementLessonCompletion("1.1");
    await incrementLessonCompletion("1.2");
    await saveExamResult(1, { correct: 15, total: 15 });
    await AsyncStorage.setItem("total_xp", "420");

    const entries = await AsyncStorage.multiGet(BACKUP_KEYS);
    const backup = buildBackup(entries, "2026-07-21T00:00:00.000Z");

    // The two keys that used to be missing must actually be in the payload.
    expect(Object.keys(backup.data)).toEqual(
      expect.arrayContaining(["lesson_progress", "exam_results", "total_xp"]),
    );

    const json = JSON.stringify(backup);
    await AsyncStorage.clear();
    expect((await getCourseUnlocks()).find((c) => c.chapterId === 2)!.unlocked).toBe(
      false,
    );

    const parsed = parseBackup(json);
    expect(parsed).not.toBeNull();
    const restored = restoreEntries(parsed!);
    await AsyncStorage.multiSet(restored);

    // Progress is back: the exam is passed and chapter 2 is open again.
    const results = await getAllExamResults();
    expect(results[1].passed).toBe(true);
    expect((await getCourseUnlocks()).find((c) => c.chapterId === 2)!.unlocked).toBe(
      true,
    );
    expect(await AsyncStorage.getItem("total_xp")).toBe("420");

    const states = await getChapterStepStates(1);
    expect(states.steps.find((s) => s.step.key === "lesson-1.1")?.done).toBe(true);
    expect(states.steps.find((s) => s.step.key === "lesson-1.2")?.done).toBe(true);
  });

  it("refuses a backup from another app", () => {
    expect(parseBackup(JSON.stringify({ app: "turkmen-chinese", data: {} }))).toBeNull();
  });
});
