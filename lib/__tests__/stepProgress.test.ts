import {
  COURSE_FIXTURE as mockCourse,
  THEORY_FIXTURE as mockTheory,
} from "./fixtures/course";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CourseStep } from "@/lib/courseSteps";
import { incrementLessonCompletion } from "@/lib/lessonProgress";
import { saveExamResult } from "@/lib/examResult";
import {
  computeStepStates,
  isChapterUnlocked,
  markTheoryStepDone,
  getTheoryStepsDone,
  isTheoryStepDone,
  getChapterStepStates,
  getCourseUnlocks,
} from "@/lib/stepProgress";

// The engine runs for real; only the course data underneath is a fixture.
// (jest.mock is hoisted above the imports by babel-plugin-jest-hoist; the
// `mock` prefix is what lets the factory close over an imported value.)
jest.mock("@/assets/data/course_content.json", () => mockCourse);
jest.mock("@/assets/data/theory_content", () => ({ THEORY_DATA: mockTheory }));


beforeEach(async () => {
  await AsyncStorage.clear();
});

const mk = (
  key: string,
  kind: CourseStep["kind"],
  subtype: CourseStep["subtype"],
  index: number,
  lessonId?: string,
): CourseStep => ({ key, chapterId: 1, kind, subtype, index, title: "", lessonId });

const SAMPLE: CourseStep[] = [
  mk("intro", "theory", "intro", 0),
  mk("vocab", "theory", "vocab", 1),
  mk("lesson-1.1", "practice", "practice", 2, "1.1"),
  mk("exam", "exam", "exam", 3),
];

describe("computeStepStates — strict sequential gating", () => {
  const states = (
    theoryDone: string[],
    practiceDone: string[],
    examPassed: boolean,
  ) =>
    computeStepStates(SAMPLE, {
      theoryDone: new Set(theoryDone),
      practiceDone: new Set(practiceDone),
      examPassed,
    }).map((s) => s.state);

  it("opens only the first step when nothing is done", () => {
    expect(states([], [], false)).toEqual([
      "current",
      "locked",
      "locked",
      "locked",
    ]);
  });

  it("advances the current marker as theory steps complete", () => {
    expect(states(["intro"], [], false)).toEqual([
      "done",
      "current",
      "locked",
      "locked",
    ]);
    expect(states(["intro", "vocab"], [], false)).toEqual([
      "done",
      "done",
      "current",
      "locked",
    ]);
  });

  it("unlocks the exam only after the lesson is done", () => {
    expect(states(["intro", "vocab"], ["1.1"], false)).toEqual([
      "done",
      "done",
      "done",
      "current",
    ]);
  });

  it("marks everything done once the exam is passed", () => {
    expect(states(["intro", "vocab"], ["1.1"], true)).toEqual([
      "done",
      "done",
      "done",
      "done",
    ]);
  });

  it("derives exam/practice done from their own flags, not theory", () => {
    const result = computeStepStates(SAMPLE, {
      theoryDone: new Set(["intro", "vocab"]),
      practiceDone: new Set(),
      examPassed: true,
    });
    expect(result.find((s) => s.step.key === "exam")?.done).toBe(true);
    expect(result.find((s) => s.step.key === "lesson-1.1")?.done).toBe(false);
  });

  it("tracks each lesson of a multi-lesson chapter independently", () => {
    const twoLessons: CourseStep[] = [
      mk("lesson-1.1", "practice", "practice", 0, "1.1"),
      mk("lesson-1.2", "practice", "practice", 1, "1.2"),
      mk("exam", "exam", "exam", 2),
    ];
    const result = computeStepStates(twoLessons, {
      theoryDone: new Set(),
      practiceDone: new Set(["1.1"]),
      examPassed: false,
    });

    expect(result.map((s) => s.state)).toEqual(["done", "current", "locked"]);
  });
});

describe("isChapterUnlocked — cross-chapter gating", () => {
  // c0 has nothing gradable (no exam), c1 and c2 are examinable
  const examinable = [false, true, true];

  it("unlocks the first chapter and the first examinable chapter unconditionally", () => {
    const passed = [false, false, false];
    expect(isChapterUnlocked(0, examinable, passed)).toBe(true);
    expect(isChapterUnlocked(1, examinable, passed)).toBe(true);
  });

  it("locks a later chapter until the previous exam is passed", () => {
    expect(isChapterUnlocked(2, examinable, [false, false, false])).toBe(false);
    expect(isChapterUnlocked(2, examinable, [false, true, false])).toBe(true);
  });

  it("treats non-examinable predecessors as transparent", () => {
    const ex = [true, false, true];
    expect(isChapterUnlocked(2, ex, [true, false, false])).toBe(true);
    expect(isChapterUnlocked(2, ex, [false, false, false])).toBe(false);
  });
});

describe("theory step storage", () => {
  it("records and reads completed theory steps idempotently", async () => {
    expect(await getTheoryStepsDone(1)).toEqual(new Set());
    await markTheoryStepDone(1, "intro");
    await markTheoryStepDone(1, "intro"); // idempotent
    await markTheoryStepDone(1, "vocab");
    expect(await getTheoryStepsDone(1)).toEqual(new Set(["intro", "vocab"]));
    expect(await isTheoryStepDone(1, "intro")).toBe(true);
    expect(await isTheoryStepDone(1, "grammar-0")).toBe(false);
    expect(await getTheoryStepsDone(2)).toEqual(new Set()); // independent
  });
});

describe("getChapterStepStates — integration across stores", () => {
  it("composes theory store + practice (lessonProgress) + exam (examResult)", async () => {
    const before = await getChapterStepStates(1);
    expect(before.total).toBe(8);
    expect(before.doneCount).toBe(0);
    expect(before.steps[0].state).toBe("current");

    await markTheoryStepDone(1, "intro");
    await incrementLessonCompletion("1.1");
    await saveExamResult(1, { correct: 8, total: 10 }); // 80% → passed

    const after = await getChapterStepStates(1);
    expect(after.examPassed).toBe(true);
    expect(after.steps.find((s) => s.step.key === "lesson-1.1")?.done).toBe(true);
    expect(after.steps.find((s) => s.step.key === "lesson-1.2")?.done).toBe(false);
    expect(after.steps.find((s) => s.step.key === "exam")?.done).toBe(true);
  });

  it("counts each lesson of a chapter separately", async () => {
    await incrementLessonCompletion("1.1");
    await incrementLessonCompletion("1.2");

    const states = await getChapterStepStates(1);
    const practice = states.steps.filter((s) => s.step.kind === "practice");
    expect(practice.every((s) => s.done)).toBe(true);
  });
});

describe("getCourseUnlocks — course map data", () => {
  it("unlocks the next chapter only after the previous exam is passed", async () => {
    const before = await getCourseUnlocks();
    expect(before.find((c) => c.chapterId === 1)!.unlocked).toBe(true);
    expect(before.find((c) => c.chapterId === 2)!.unlocked).toBe(false);

    await saveExamResult(1, { correct: 9, total: 10 });

    const after = await getCourseUnlocks();
    expect(after.find((c) => c.chapterId === 1)!.passed).toBe(true);
    expect(after.find((c) => c.chapterId === 2)!.unlocked).toBe(true);
  });

  it("does not let a chapter without an exam block the ones after it", async () => {
    // Chapter 3 has only non-graded steps, so it is not examinable and must be
    // transparent to gating — chapter 4 depends on chapter 2's exam instead.
    await saveExamResult(1, { correct: 9, total: 10 });
    await saveExamResult(2, { correct: 9, total: 10 });

    const unlocks = await getCourseUnlocks();
    expect(unlocks.find((c) => c.chapterId === 3)!.unlocked).toBe(true);
    expect(unlocks.find((c) => c.chapterId === 4)!.unlocked).toBe(true);
  });

  it("reports per-lesson progress in the chapter summary", async () => {
    await incrementLessonCompletion("1.1");

    const c1 = (await getCourseUnlocks()).find((c) => c.chapterId === 1)!;
    expect(c1.total).toBe(8);
    expect(c1.doneCount).toBe(1);
  });
});
