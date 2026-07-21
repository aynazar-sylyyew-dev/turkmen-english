import {
  countWords,
  matchesAnswer,
  meetsMinWords,
  normalizeAnswer,
} from "@/lib/grading";

// Parity suite: these cases are ported one-for-one from the English course's
// own src/content/evaluate.test.ts, so the poured-in content grades exactly as
// it did in the app it came from. Do not relax them without checking that
// donor content still passes.

describe("normalizeAnswer", () => {
  it("folds case and collapses whitespace", () => {
    expect(normalizeAnswer("  i HAVE   cats ")).toBe("i have cats");
  });

  it("normalizes every apostrophe variant to ASCII", () => {
    expect(normalizeAnswer("don’t")).toBe("don't");
    expect(normalizeAnswer("donʼt")).toBe("don't");
    expect(normalizeAnswer("don`t")).toBe("don't");
    expect(normalizeAnswer("don´t")).toBe("don't");
  });

  it("strips trailing punctuation but keeps it inside the sentence", () => {
    expect(normalizeAnswer("I have cats.")).toBe("i have cats");
    expect(normalizeAnswer("Yes!?")).toBe("yes");
    expect(normalizeAnswer("No, I don't")).toBe("no, i don't");
  });
});

describe("matchesAnswer — text exercises", () => {
  const answer = "I have cats.";
  const acceptable = ["I have got cats"];

  it("ignores case and extra whitespace", () => {
    expect(matchesAnswer("  i HAVE   cats. ", answer, acceptable)).toBe(true);
  });

  it("ignores trailing punctuation the learner left off", () => {
    expect(matchesAnswer("I have cats", answer, acceptable)).toBe(true);
  });

  it("normalizes typographic apostrophes", () => {
    expect(matchesAnswer("don’t", "don't")).toBe(true);
    expect(matchesAnswer("DON`T", "don't")).toBe(true);
  });

  it("accepts values from acceptableAnswers", () => {
    expect(matchesAnswer("i have got cats", answer, acceptable)).toBe(true);
  });

  it("still accepts the canonical answer when variants are listed", () => {
    expect(matchesAnswer("i have cats", answer, acceptable)).toBe(true);
  });

  it("rejects a wrong answer, blank input and non-strings", () => {
    expect(matchesAnswer("i have dogs", answer, acceptable)).toBe(false);
    expect(matchesAnswer("   ", answer, acceptable)).toBe(false);
    expect(matchesAnswer("", answer, acceptable)).toBe(false);
    expect(matchesAnswer(42, answer, acceptable)).toBe(false);
    expect(matchesAnswer(null, answer, acceptable)).toBe(false);
    expect(matchesAnswer(undefined, answer, acceptable)).toBe(false);
  });

  it("works without any acceptableAnswers", () => {
    expect(matchesAnswer("Apples", "apples")).toBe(true);
    expect(matchesAnswer("yes!", "yes")).toBe(true);
    expect(matchesAnswer("NO", "no")).toBe(true);
    expect(matchesAnswer("books", "books")).toBe(true);
  });
});

describe("countWords", () => {
  it("counts whitespace-separated words", () => {
    expect(countWords("one two three")).toBe(3);
    expect(countWords("  one   two three four ")).toBe(4);
  });

  it("returns 0 for blank text", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
  });
});

describe("meetsMinWords — free writing", () => {
  it("passes when the response is long enough", () => {
    expect(meetsMinWords("one two three", 3)).toBe(true);
    expect(meetsMinWords("  one   two three four ", 3)).toBe(true);
  });

  it("fails when the response is too short", () => {
    expect(meetsMinWords("one two", 3)).toBe(false);
    expect(meetsMinWords("", 3)).toBe(false);
  });

  it("requires at least one word when minWords is absent", () => {
    expect(meetsMinWords("hi")).toBe(true);
    expect(meetsMinWords("   ")).toBe(false);
  });

  it("rejects non-strings", () => {
    expect(meetsMinWords(3, 1)).toBe(false);
    expect(meetsMinWords(null, 1)).toBe(false);
  });
});
