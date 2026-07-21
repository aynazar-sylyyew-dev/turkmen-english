import { act, create, type ReactTestRenderer } from "react-test-renderer";
import { TextInput, TouchableOpacity } from "react-native";
import OddOneOutMode from "../OddOneOutMode";
import TextAnswerMode from "../TextAnswerMode";
import TheoryBlock from "../TheoryBlock";
import WritingMode from "../WritingMode";

// jest.mock is hoisted above the imports by babel-plugin-jest-hoist. The
// animation driver has to be required lazily inside the factory — this is the
// form reanimated documents, and importing it eagerly loads the real native
// module instead of the stub.
// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));
jest.mock("@/lib/haptics", () => ({
  haptics: { tap: jest.fn(), success: jest.fn(), error: jest.fn() },
}));
jest.mock("@/lib/tts", () => ({ speak: jest.fn(), stopSpeaking: jest.fn() }));

// These cover the behaviour the migration hinges on: typed answers grade
// through lib/grading, and the non-graded steps can advance the lesson WITHOUT
// ever reporting a correctness result. A regression here silently inflates
// every learner's score, which no type check would catch.

const render = (element: React.ReactElement) => {
  let tree!: ReactTestRenderer;
  act(() => {
    tree = create(element);
  });
  return tree;
};

/** The single footer button every exercise renders last. */
const footer = (tree: ReactTestRenderer) =>
  tree.root.findAllByType(TouchableOpacity).at(-1)!;

const press = (node: { props: { onPress?: () => void } }) =>
  act(() => {
    node.props.onPress?.();
  });

/** Every string rendered anywhere in the tree, however deeply nested. */
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

/**
 * The tappable option cards. RN's Pressable is a memo+forwardRef component, so
 * findAllByType misses it and a role query returns the same card once per
 * nesting level — dedupe on the handler identity to get one node per option.
 */
const options = (tree: ReactTestRenderer) => {
  const seen = new Set<unknown>();
  return tree.root
    .findAll(
      (n) =>
        typeof n.props?.onPress === "function" &&
        n.props?.accessibilityRole === "button",
    )
    .filter((n) => {
      if (seen.has(n.props.onPress)) return false;
      seen.add(n.props.onPress);
      return true;
    });
};

describe("TextAnswerMode — typed answers", () => {
  const base = {
    instruction: "Make it plural",
    answer: "I have cats.",
    acceptableAnswers: ["I have got cats"],
    onAnswer: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  it("accepts an answer that differs only by case, spacing and punctuation", () => {
    const onAnswer = jest.fn();
    const tree = render(<TextAnswerMode {...base} onAnswer={onAnswer} />);

    act(() => {
      tree.root.findByType(TextInput).props.onChangeText("  i HAVE   cats ");
    });
    press(footer(tree)); // check
    press(footer(tree)); // continue

    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("accepts a listed variant and rejects a wrong answer", () => {
    const accept = jest.fn();
    const acceptTree = render(<TextAnswerMode {...base} onAnswer={accept} />);
    act(() => {
      acceptTree.root.findByType(TextInput).props.onChangeText("i have got cats");
    });
    press(footer(acceptTree));
    press(footer(acceptTree));
    expect(accept).toHaveBeenCalledWith(true);

    const reject = jest.fn();
    const rejectTree = render(<TextAnswerMode {...base} onAnswer={reject} />);
    act(() => {
      rejectTree.root.findByType(TextInput).props.onChangeText("i have dogs");
    });
    press(footer(rejectTree));
    press(footer(rejectTree));
    expect(reject).toHaveBeenCalledWith(false);
  });

  it("cannot be submitted while the field is empty", () => {
    const onAnswer = jest.fn();
    const tree = render(<TextAnswerMode {...base} onAnswer={onAnswer} />);

    expect(footer(tree).props.disabled).toBe(true);
    press(footer(tree));
    expect(onAnswer).not.toHaveBeenCalled();
  });

  it("reveals the expected answer after a wrong attempt", () => {
    const tree = render(<TextAnswerMode {...base} onAnswer={jest.fn()} />);
    act(() => {
      tree.root.findByType(TextInput).props.onChangeText("nope");
    });
    press(footer(tree));

    expect(texts(tree)).toContain("I have cats.");
  });
});

describe("TextAnswerMode — dictation", () => {
  const dictation = {
    instruction: "Haýsy sözi eşitdiň?",
    answer: "boxes",
    audioText: "boxes",
    onAnswer: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  it("never renders the word it is asking the learner to hear", () => {
    const tree = render(<TextAnswerMode {...dictation} />);

    // The whole point of a dictation: seeing the word would make it copying.
    expect(texts(tree).join(" ")).not.toContain("boxes");
  });

  it("speaks the word instead, through the app's single TTS entry point", () => {
    const { speak } = jest.requireMock("@/lib/tts");
    const tree = render(<TextAnswerMode {...dictation} />);

    // The listen button is the first tappable; the footer is the last.
    const listen = tree.root.findAllByType(TouchableOpacity)[0];
    press(listen);

    expect(speak).toHaveBeenCalledWith("boxes");
  });

  it("grades what was typed against what was spoken", () => {
    const onAnswer = jest.fn();
    const tree = render(<TextAnswerMode {...dictation} onAnswer={onAnswer} />);

    act(() => {
      tree.root.findByType(TextInput).props.onChangeText("Boxes.");
    });
    press(footer(tree));
    press(footer(tree));

    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("shows no listen button when the exercise carries no audio", () => {
    const tree = render(
      <TextAnswerMode instruction="Write it" answer="x" onAnswer={jest.fn()} />,
    );

    // Only the footer button exists.
    expect(tree.root.findAllByType(TouchableOpacity)).toHaveLength(1);
  });
});

describe("OddOneOutMode", () => {
  const base = {
    prompt: "Which one doesn't belong?",
    options: ["cat", "dog", "table"],
    correctIndex: 2,
  };

  it("reports true for the odd option and false for the others", () => {
    const right = jest.fn();
    const rightTree = render(<OddOneOutMode {...base} onAnswer={right} />);
    press(options(rightTree)[2]); // "table" — the odd one
    press(footer(rightTree));
    press(footer(rightTree));
    expect(right).toHaveBeenCalledWith(true);

    const wrong = jest.fn();
    const wrongTree = render(<OddOneOutMode {...base} onAnswer={wrong} />);
    press(options(wrongTree)[0]); // "cat"
    press(footer(wrongTree));
    press(footer(wrongTree));
    expect(wrong).toHaveBeenCalledWith(false);
  });

  it("cannot be submitted before an option is picked", () => {
    const onAnswer = jest.fn();
    const tree = render(<OddOneOutMode {...base} onAnswer={onAnswer} />);

    expect(footer(tree).props.disabled).toBe(true);
    expect(onAnswer).not.toHaveBeenCalled();
  });
});

describe("non-graded steps never report correctness", () => {
  it("TheoryBlock advances with onContinue and exposes no onAnswer", () => {
    const onContinue = jest.fn();
    const tree = render(
      <TheoryBlock body="Some explanation" onContinue={onContinue} />,
    );

    press(footer(tree));

    // It advances the lesson while reporting nothing: TheoryBlock has no
    // onAnswer prop at all, so it cannot be wired into scoring by mistake.
    expect(onContinue).toHaveBeenCalledTimes(1);
  });

  it("WritingMode stays locked until the word count is met, then continues", () => {
    const onContinue = jest.fn();
    const tree = render(
      <WritingMode prompt="Write about your day" minWords={3} onContinue={onContinue} />,
    );

    expect(footer(tree).props.disabled).toBe(true);

    act(() => {
      tree.root.findByType(TextInput).props.onChangeText("only two");
    });
    expect(footer(tree).props.disabled).toBe(true);
    press(footer(tree));
    expect(onContinue).not.toHaveBeenCalled();

    act(() => {
      tree.root.findByType(TextInput).props.onChangeText("now three words");
    });
    expect(footer(tree).props.disabled).toBe(false);
    press(footer(tree)); // submit
    press(footer(tree)); // continue

    expect(onContinue).toHaveBeenCalledTimes(1);
  });

  it("WritingMode requires a single word when minWords is absent", () => {
    const onContinue = jest.fn();
    const tree = render(
      <WritingMode prompt="Anything" onContinue={onContinue} />,
    );

    expect(footer(tree).props.disabled).toBe(true);
    act(() => {
      tree.root.findByType(TextInput).props.onChangeText("hi");
    });
    expect(footer(tree).props.disabled).toBe(false);
  });
});
