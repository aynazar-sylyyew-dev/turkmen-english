import { COURSE_DATA, isGradedQuestion, type Question } from "@/constants/CourseData";

/**
 * Conformance check for the SHIPPED course data.
 *
 * constants/CourseData.ts has to cast the imported JSON, because TypeScript
 * widens JSON string literals and a discriminated union can never be satisfied
 * that way. That cast means the compiler verifies nothing about the real file —
 * these tests are what stands in for it. They run against the actual data, so a
 * bad conversion fails here rather than as a blank screen on a device.
 */

const REQUIRED_FIELDS: Record<Question["type"], string[]> = {
  multiple_choice: ["phrase", "options", "correctOptionId"],
  single_response: ["phrase", "options"],
  listening_mc: ["phrase", "options", "correctOptionId"],
  flashcard: ["phrase", "instruction", "options", "correctOptionId"],
  fill_blank: ["instruction", "correctAnswer"],
  match_pairs: ["instruction", "pairs"],
  grammar: ["rule", "practice"],
  transformation: ["instruction", "input", "answer"],
  reading: ["text", "prompt", "answer"],
  text_choice: ["prompt", "options", "correctIndex"],
  odd_one_out: ["prompt", "options", "correctIndex"],
  theory: ["body"],
  writing: ["prompt"],
};

const allQuestions = COURSE_DATA.chapters.flatMap((c) =>
  c.lessons.flatMap((l) => l.questions.map((q) => ({ q, lessonId: l.id }))),
);

describe("shipped course data", () => {
  it("has chapters, each with lessons, each with questions", () => {
    expect(COURSE_DATA.chapters.length).toBeGreaterThan(0);
    for (const chapter of COURSE_DATA.chapters) {
      expect(chapter.lessons.length).toBeGreaterThan(0);
      for (const lesson of chapter.lessons) {
        expect(lesson.questions.length).toBeGreaterThan(0);
      }
    }
  });

  it("only contains known question types", () => {
    const known = new Set(Object.keys(REQUIRED_FIELDS));
    const unknown = [
      ...new Set(allQuestions.map(({ q }) => q.type).filter((t) => !known.has(t))),
    ];
    expect(unknown).toEqual([]);
  });

  it("gives every question the fields its type declares", () => {
    const missing: string[] = [];
    for (const { q, lessonId } of allQuestions) {
      for (const field of REQUIRED_FIELDS[q.type]) {
        if ((q as unknown as Record<string, unknown>)[field] === undefined) {
          missing.push(`${lessonId} q${q.id} (${q.type}): missing ${field}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it("keeps question ids unique so progress cannot collide", () => {
    const ids = allQuestions.map(({ q }) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("never ships an empty answer for a typed exercise", () => {
    const empty: string[] = [];
    for (const { q, lessonId } of allQuestions) {
      const answer =
        q.type === "fill_blank"
          ? q.correctAnswer
          : q.type === "reading" || q.type === "transformation"
            ? q.answer
            : null;
      if (answer !== null && answer.trim() === "") {
        empty.push(`${lessonId} q${q.id} (${q.type})`);
      }
    }
    expect(empty).toEqual([]);
  });

  it("keeps every correctIndex inside its options array", () => {
    const bad: string[] = [];
    for (const { q, lessonId } of allQuestions) {
      if (q.type !== "text_choice" && q.type !== "odd_one_out") continue;
      if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
        bad.push(`${lessonId} q${q.id}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it("leaves every chapter examinable and every lesson answerable", () => {
    // A lesson of pure theory would strand the learner; a chapter with nothing
    // gradable would gate the rest of the course behind an unpassable exam.
    for (const chapter of COURSE_DATA.chapters) {
      const chapterGraded = chapter.lessons
        .flatMap((l) => l.questions)
        .filter(isGradedQuestion);
      expect({ chapter: chapter.id, graded: chapterGraded.length > 0 }).toEqual({
        chapter: chapter.id,
        graded: true,
      });
      for (const lesson of chapter.lessons) {
        expect({
          lesson: lesson.id,
          graded: lesson.questions.some(isGradedQuestion),
        }).toEqual({ lesson: lesson.id, graded: true });
      }
    }
  });
});
