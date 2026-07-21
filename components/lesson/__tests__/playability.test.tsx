import { act, create, type ReactTestRenderer } from "react-test-renderer";
import { COURSE_DATA, type Question } from "@/constants/CourseData";
import LessonContent from "../LessonContent";

// jest.mock is hoisted above the imports by babel-plugin-jest-hoist.
// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));
jest.mock("@/lib/haptics", () => ({
  haptics: {
    tap: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
    heavy: jest.fn(),
  },
}));
jest.mock("@/lib/tts", () => ({ speak: jest.fn(), stopSpeaking: jest.fn() }));
jest.mock("expo-router", () => ({ router: { push: jest.fn(), back: jest.fn() } }));

/**
 * Ф5: proof that every question type shipped in the course actually renders.
 *
 * The engine tests verify the data and the gating; nothing there would notice
 * a question type with no branch in LessonContent's dispatch — the lesson
 * would simply show a blank screen with a working "next" bar, which is the
 * kind of defect that reaches a user before it reaches a stack trace.
 *
 * So: take a real question of each type straight out of the shipped course,
 * mount the real lesson runner on it, and require that something is drawn.
 */

const ALL_QUESTIONS = COURSE_DATA.chapters.flatMap((c) =>
  c.lessons.flatMap((l) => l.questions),
);

/** One real example of every type present in the course. */
const SAMPLES = [...new Set(ALL_QUESTIONS.map((q) => q.type))].map((type) => ({
  type,
  question: ALL_QUESTIONS.find((q) => q.type === type)!,
}));

const render = (questions: Question[]) => {
  let tree!: ReactTestRenderer;
  act(() => {
    tree = create(
      <LessonContent questions={questions} lessonId="playability" />,
    );
  });
  return tree;
};

/** Every string drawn anywhere in the tree. */
const texts = (tree: ReactTestRenderer): string[] => {
  const found: string[] = [];
  const walk = (node: unknown): void => {
    if (typeof node === "string") {
      found.push(node);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }
    if (node && typeof node === "object" && "children" in node) {
      walk((node as { children: unknown }).children);
    }
  };
  walk(tree.toJSON());
  return found;
};

describe("playability — every shipped question type renders", () => {
  it("covers all eight types the course actually contains", () => {
    expect(SAMPLES.map((s) => s.type).sort()).toEqual([
      "fill_blank",
      "match_pairs",
      "odd_one_out",
      "reading",
      "text_choice",
      "theory",
      "transformation",
      "writing",
    ]);
  });

  it.each(SAMPLES.map((s) => [s.type, s.question] as const))(
    "renders a real %s question",
    (type, question) => {
      const tree = render([question]);
      const drawn = texts(tree).filter((t) => t.trim().length > 0);

      // Something beyond the progress chrome has to be on screen. A missing
      // dispatch branch renders the header and nav bar and nothing else.
      expect({ type, drawn: drawn.length > 3 }).toEqual({ type, drawn: true });
    },
  );

  it("renders the first step of every chapter's first lesson", () => {
    for (const chapter of COURSE_DATA.chapters) {
      const lesson = chapter.lessons[0];
      const tree = render(lesson.questions);

      const drawn = texts(tree).filter((t) => t.trim().length > 0);
      expect({ chapter: chapter.id, drawn: drawn.length > 3 }).toEqual({
        chapter: chapter.id,
        drawn: true,
      });

      act(() => {
        tree.unmount();
      });
    }
  });
});
