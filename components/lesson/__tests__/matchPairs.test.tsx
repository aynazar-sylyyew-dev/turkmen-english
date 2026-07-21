import { act, create, type ReactTestRenderer } from "react-test-renderer";
import type { MatchPair } from "@/constants/CourseData";
import MatchPairsMode from "../MatchPairsMode";

// jest.mock is hoisted above the imports by babel-plugin-jest-hoist.
// eslint-disable-next-line @typescript-eslint/no-require-imports
jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));
jest.mock("@/lib/haptics", () => ({
  haptics: { tap: jest.fn(), success: jest.fn(), error: jest.fn() },
}));

/**
 * Parity with the English course's own matching semantics
 * (src/content/evaluate.ts): a pair is satisfied by the VALUE of its right
 * side, so two cards showing the same word are interchangeable.
 *
 * Three shipped exercises depend on this — 6.1/e7, 9.1/e6 and 13.1/e7 all
 * repeat a right-hand form on purpose to contrast verb forms. Matching by pair
 * id instead would score a visually correct choice as a mistake and, because
 * any mistake fails the whole exercise, mark those three permanently wrong.
 */

// The real pairs of donor exercise 9.1 / e6.
const CONTRASTING_FORMS: MatchPair[] = [
  { id: 1, left: "I", right: "work" },
  { id: 2, left: "you", right: "work" },
  { id: 3, left: "he", right: "works" },
  { id: 4, left: "she", right: "works" },
];

const UNIQUE_RIGHTS: MatchPair[] = [
  { id: 1, left: "cat", right: "pişik" },
  { id: 2, left: "dog", right: "it" },
];

/**
 * Drive the component the way a learner does: tap a left card, then a right.
 *
 * The right column is shuffled at mount, so Math.random is pinned to keep the
 * order equal to `pairs` — otherwise "tap the card belonging to pair 2" would
 * mean a different card on every run.
 */
const mount = (pairs: MatchPair[]) => {
  const random = jest.spyOn(Math, "random").mockReturnValue(0.5);
  const onAnswer = jest.fn();
  let tree!: ReactTestRenderer;
  act(() => {
    tree = create(<MatchPairsMode instruction="Match" pairs={pairs} onAnswer={onAnswer} />);
  });
  random.mockRestore();

  // Render order is the whole left column, then the whole right column; the
  // same handler shows up once per nesting level, so dedupe on its identity.
  const cards = () => {
    const seen = new Set<unknown>();
    return tree.root
      .findAll((n) => typeof n.props?.onPress === "function")
      .filter((n) => {
        if (seen.has(n.props.onPress)) return false;
        seen.add(n.props.onPress);
        return true;
      });
  };

  const tap = (side: "left" | "right", pairId: number) => {
    const index = pairs.findIndex((p) => p.id === pairId);
    if (index < 0) throw new Error(`no pair ${pairId}`);
    const all = cards();
    const node = side === "left" ? all[index] : all[pairs.length + index];
    if (!node) throw new Error(`no ${side} card for pair ${pairId}`);
    act(() => {
      node.props.onPress?.();
    });
  };

  return { tree, onAnswer, tap };
};

const settle = () =>
  act(() => {
    jest.advanceTimersByTime(1000);
  });

/** How many pairs the component currently reports as matched. */
const matchedCount = (tree: ReactTestRenderer): number => {
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
  const progress = found.find((t) => /\d+\s*\/\s*\d+/.test(t));
  return progress ? Number(progress.match(/(\d+)\s*\//)![1]) : -1;
};

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

describe("MatchPairsMode — matches by value, like the donor", () => {
  it("accepts a right card from another pair when the text is identical", () => {
    const { onAnswer, tap } = mount(CONTRASTING_FORMS);

    // Deliberately cross-matched: every left card is paired with the OTHER
    // card carrying the same word, which is what a learner sees as correct.
    tap("left", 1); // I
    tap("right", 2); // the other card reading "work"
    tap("left", 2); // you
    tap("right", 1); // the first card reading "work"
    tap("left", 3); // he
    tap("right", 4); // the other card reading "works"
    tap("left", 4); // she
    tap("right", 3); // the first card reading "works"
    settle();

    // Every choice was visually correct, so the exercise is passed outright.
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("still accepts the straightforward one-to-one matching", () => {
    const { onAnswer, tap } = mount(CONTRASTING_FORMS);

    [1, 2, 3, 4].forEach((id) => {
      tap("left", id);
      tap("right", id);
    });
    settle();

    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("rejects a genuinely different right side", () => {
    const { tree, onAnswer, tap } = mount(CONTRASTING_FORMS);

    tap("left", 1); // I
    tap("right", 3); // "works" — wrong form

    // The pair is not consumed, so the exercise cannot be finished by it.
    expect(matchedCount(tree)).toBe(0);
    expect(onAnswer).not.toHaveBeenCalled();
  });

  it("passes an ordinary exercise with distinct right sides", () => {
    const { onAnswer, tap } = mount(UNIQUE_RIGHTS);

    tap("left", 1);
    tap("right", 1);
    tap("left", 2);
    tap("right", 2);
    settle();

    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("does not consume a pair when the right side is wrong", () => {
    const { tree, onAnswer, tap } = mount(UNIQUE_RIGHTS);

    tap("left", 1); // cat
    tap("right", 2); // "it" — belongs to dog

    expect(matchedCount(tree)).toBe(0);
    expect(onAnswer).not.toHaveBeenCalled();
  });
});
