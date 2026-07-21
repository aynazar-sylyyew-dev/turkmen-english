/**
 * Course fixtures for the step-engine tests.
 *
 * The step engine used to be tested against the real shipped course, which made
 * the assertions hostage to content edits and impossible to write for cases the
 * current content happens not to contain. These fixtures are mounted over the
 * two data modules instead (see the `jest.mock` calls in the test files), so
 * the real CourseData/courseSteps/stepProgress code still runs — only the data
 * underneath is controlled.
 *
 * Shapes deliberately covered:
 *   chapter 1 — full theory + TWO lessons (the multi-lesson case the Chinese
 *               course never exercises, and the English course always will)
 *   chapter 2 — no theory at all, one lesson
 *   chapter 3 — a lesson of purely NON-GRADED steps: it must get a practice
 *               step but NO exam, or the chapter would gate the rest of the
 *               course behind an exam that cannot be passed
 *   chapter 4 — no lessons at all
 */

const graded = (id: number) => ({
  id,
  type: "flashcard",
  phrase: { target: "x", transliteration: "x" },
  instruction: "",
  options: [{ id: 1, translation: "x", target: "x" }],
  correctOptionId: 1,
});

const theoryStep = (id: number) => ({ id, type: "theory", body: "..." });
const writingStep = (id: number) => ({ id, type: "writing", prompt: "..." });

export const COURSE_FIXTURE = {
  chapters: [
    {
      id: 1,
      title: "Chapter one",
      lessons: [
        { id: "1.1", title: "Lesson one", questions: [graded(101), graded(102)] },
        { id: "1.2", title: "Lesson two", questions: [theoryStep(103), graded(104)] },
      ],
    },
    {
      id: 2,
      title: "Chapter two",
      lessons: [{ id: "2.1", title: "Only lesson", questions: [graded(201)] }],
    },
    {
      id: 3,
      title: "Reading-only chapter",
      lessons: [
        {
          id: "3.1",
          title: "Nothing to grade",
          questions: [theoryStep(301), writingStep(302)],
        },
      ],
    },
    { id: 4, title: "Empty chapter", lessons: [] },
  ],
  scenarios: [],
};

export const THEORY_FIXTURE = {
  1: {
    introduction: "Intro text",
    vocabulary: [{ target: "x", transliteration: "x", translation: "x" }],
    grammar: [
      { title: "Rule one", explanation: "", examples: [] },
      { title: "Rule two", explanation: "", examples: [] },
    ],
    dialogues: [{ title: "Dialogue one", lines: [] }],
    tips: [],
  },
};
