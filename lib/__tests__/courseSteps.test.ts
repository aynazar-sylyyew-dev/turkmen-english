import {
  COURSE_FIXTURE as mockCourse,
  THEORY_FIXTURE as mockTheory,
} from "./fixtures/course";
import {
  buildChapterSteps,
  getChapterGradableCount,
  getChapterQuestionCount,
  getOrderedChapterIds,
  isChapterExaminable,
} from "@/lib/courseSteps";

// The engine runs for real; only the course data underneath is a fixture.
// (jest.mock is hoisted above the imports by babel-plugin-jest-hoist; the
// `mock` prefix is what lets the factory close over an imported value.)
jest.mock("@/assets/data/course_content.json", () => mockCourse);
jest.mock("@/assets/data/theory_content", () => ({ THEORY_DATA: mockTheory }));


describe("courseSteps — chapter ids", () => {
  it("returns ordered chapter ids", () => {
    const ids = getOrderedChapterIds();
    expect(ids).toEqual([1, 2, 3, 4]);
    expect(ids).toEqual([...ids].sort((a, b) => a - b));
  });
});

describe("buildChapterSteps", () => {
  it("orders theory, then one step per lesson, then the exam", () => {
    const steps = buildChapterSteps(1);

    expect(steps.map((s) => s.key)).toEqual([
      "intro",
      "vocab",
      "grammar-0",
      "grammar-1",
      "dialogue-0",
      "lesson-1.1",
      "lesson-1.2",
      "exam",
    ]);
    steps.forEach((s, i) => expect(s.index).toBe(i));
    expect(new Set(steps.map((s) => s.key)).size).toBe(steps.length);
  });

  it("gives every lesson of a chapter its own practice step", () => {
    const practice = buildChapterSteps(1).filter((s) => s.kind === "practice");

    expect(practice).toHaveLength(2);
    expect(practice.map((s) => s.lessonId)).toEqual(["1.1", "1.2"]);
    // Multi-lesson chapters label each step; a single-lesson chapter falls back
    // to the generic localized label.
    expect(practice.map((s) => s.title)).toEqual(["Lesson one", "Lesson two"]);
    expect(buildChapterSteps(2)[0].title).toBe("");
  });

  it("emits no theory steps for a chapter without theory content", () => {
    expect(buildChapterSteps(2).map((s) => s.key)).toEqual([
      "lesson-2.1",
      "exam",
    ]);
  });

  it("numbers grammar/dialogue steps with sectionIndex and a title", () => {
    const grammar = buildChapterSteps(1).filter((s) => s.subtype === "grammar");

    grammar.forEach((s, i) => {
      expect(s.key).toBe(`grammar-${i}`);
      expect(s.sectionIndex).toBe(i);
      expect(s.title.length).toBeGreaterThan(0);
    });
  });

  it("gives a chapter with nothing gradable a practice step but no exam", () => {
    // Otherwise the chapter would gate the whole course behind an exam that
    // has no questions to ask and can never be passed.
    const steps = buildChapterSteps(3);

    expect(steps.map((s) => s.key)).toEqual(["lesson-3.1"]);
    expect(steps.some((s) => s.kind === "exam")).toBe(false);
    expect(isChapterExaminable(3)).toBe(false);
    expect(getChapterQuestionCount(3)).toBe(2); // both steps are navigable…
    expect(getChapterGradableCount(3)).toBe(0); // …but neither is scored
  });

  it("counts only graded questions toward examinability", () => {
    expect(getChapterQuestionCount(1)).toBe(4);
    expect(getChapterGradableCount(1)).toBe(3); // one theory step among them
    expect(isChapterExaminable(1)).toBe(true);
  });

  it("returns no steps for an empty or unknown chapter", () => {
    expect(buildChapterSteps(4)).toEqual([]);
    expect(buildChapterSteps(9999)).toEqual([]);
    expect(isChapterExaminable(9999)).toBe(false);
    expect(getChapterQuestionCount(9999)).toBe(0);
    expect(getChapterGradableCount(9999)).toBe(0);
  });
});
