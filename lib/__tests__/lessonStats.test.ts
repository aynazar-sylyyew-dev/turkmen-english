import type { Question } from "@/constants/CourseData";
import { computeLessonStats } from "@/lib/lessonStats";

const flashcard = (id: number): Question => ({
  id,
  type: "flashcard",
  phrase: { target: "好", transliteration: "hǎo" },
  instruction: "Saýla",
  options: [{ id: 1, translation: "good", target: "好", transliteration: "hǎo" }],
  correctOptionId: 1,
});

const grammar = (id: number): Question => ({
  id,
  type: "grammar",
  rule: { title: "是-jümle", explanation: "", examples: [] },
  practice: [],
});

const matchPairs = (id: number): Question => ({
  id,
  type: "match_pairs",
  instruction: "Baglaň",
  pairs: [{ id: 1, left: "好", right: "good" }],
});

const theory = (id: number): Question => ({
  id,
  type: "theory",
  title: "Present simple",
  body: "...",
});

const writing = (id: number): Question => ({
  id,
  type: "writing",
  prompt: "Write about your day",
  minWords: 20,
});

describe("computeLessonStats", () => {
  it("all correct → 100%, no wrongQuestions, byType fully correct", () => {
    const questions = [flashcard(1), grammar(2), matchPairs(3)];
    const stats = computeLessonStats(questions, 3, new Set(), {});

    expect(stats.correctAnswers).toBe(3);
    expect(stats.totalQuestions).toBe(3);
    expect(stats.accuracy).toBe(100);
    expect(stats.firstTryCorrect).toBe(3);
    expect(stats.wrongQuestions).toBeUndefined();
    expect(stats.byType).toEqual([
      { type: "flashcard", correct: 1, total: 1 },
      { type: "grammar", correct: 1, total: 1 },
      { type: "match_pairs", correct: 1, total: 1 },
    ]);
  });

  it("one wrong → rounded accuracy, wrong list, per-type split, attempts", () => {
    const questions = [flashcard(1), flashcard(2), grammar(3)];
    const stats = computeLessonStats(questions, 2, new Set([2]), { 2: 3 });

    expect(stats.accuracy).toBe(67); // round(2/3 * 100)
    expect(stats.firstTryCorrect).toBe(2); // 3 total − 1 wrong
    expect(stats.wrongQuestions).toEqual([
      {
        translation: "good",
        phrase: { target: "好", transliteration: "hǎo" },
        attempts: 3,
      },
    ]);
    expect(stats.byType).toEqual([
      { type: "flashcard", correct: 1, total: 2 },
      { type: "grammar", correct: 1, total: 1 },
    ]);
  });

  it("wrong without recorded attempts defaults to 1", () => {
    const questions = [flashcard(1)];
    const stats = computeLessonStats(questions, 0, new Set([1]), {});

    expect(stats.wrongQuestions?.[0].attempts).toBe(1);
    expect(stats.accuracy).toBe(0);
  });
});

describe("computeLessonStats — non-graded steps", () => {
  it("theory and writing never reach the denominator", () => {
    // Walked through 5 steps, but only 2 of them were answerable.
    const questions = [theory(1), flashcard(2), writing(3), grammar(4), theory(5)];
    const stats = computeLessonStats(questions, 2, new Set(), {});

    expect(stats.totalQuestions).toBe(2);
    expect(stats.accuracy).toBe(100); // 2 of 2 graded, not 2 of 5
    expect(stats.firstTryCorrect).toBe(2);
  });

  it("keeps accuracy honest when a graded step was missed", () => {
    const questions = [theory(1), flashcard(2), flashcard(3), writing(4)];
    const stats = computeLessonStats(questions, 1, new Set([3]), {});

    expect(stats.totalQuestions).toBe(2);
    expect(stats.accuracy).toBe(50);
    expect(stats.firstTryCorrect).toBe(1);
  });

  it("never emits a byType row for a non-graded type", () => {
    const questions = [theory(1), writing(2), flashcard(3)];
    const stats = computeLessonStats(questions, 1, new Set(), {});

    expect(stats.byType).toEqual([{ type: "flashcard", correct: 1, total: 1 }]);
    expect(stats.byType?.some((b) => b.type === "theory")).toBe(false);
    expect(stats.byType?.some((b) => b.type === "writing")).toBe(false);
  });

  it("a lesson with no graded steps scores 0, not NaN", () => {
    // React Native renders NaN as the literal text "NaN%" and as a zero-width
    // bar without throwing, so this has to be asserted rather than assumed.
    const stats = computeLessonStats([theory(1), writing(2)], 0, new Set(), {});

    expect(stats.accuracy).toBe(0);
    expect(Number.isNaN(stats.accuracy)).toBe(false);
    expect(stats.totalQuestions).toBe(0);
    expect(stats.firstTryCorrect).toBe(0);
    expect(stats.byType).toEqual([]);
  });

  it("an empty lesson scores 0, not NaN", () => {
    const stats = computeLessonStats([], 0, new Set(), {});

    expect(stats.accuracy).toBe(0);
    expect(stats.totalQuestions).toBe(0);
    expect(stats.byType).toEqual([]);
    expect(stats.wrongQuestions).toBeUndefined();
  });

  it("a non-graded step cannot enter the wrong-answer review", () => {
    // Defensive: even if an id leaked into wrongQuestions, the review list is
    // graded-only, so a theory block can never be shown as a mistake.
    const questions = [theory(1), flashcard(2)];
    const stats = computeLessonStats(questions, 1, new Set([1]), {});

    expect(stats.wrongQuestions).toBeUndefined();
  });
});
