/**
 * Answer matching for free-text exercises.
 *
 * Ported from the English course's `src/content/evaluate.ts`. The
 * normalization pipeline is the answer-matching contract itself: without it,
 * typed answers fail en masse over a capital letter, a curly apostrophe or a
 * trailing full stop, and every content author has to spell out a dozen
 * `acceptableAnswers` per exercise.
 *
 * Keep this module pure — it is the one piece of grading that is unit-tested
 * against the donor's own parity suite.
 */

/**
 * Fold a typed answer to its comparable form. Order matters:
 * case → apostrophe variants → whitespace runs → trailing punctuation.
 *
 * Only TRAILING punctuation is stripped; punctuation inside the sentence is
 * meaningful ("I don't know, John" must not collapse into "I don't know John").
 */
export function normalizeAnswer(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?,;:]+$/g, "")
    .trim();
}

/**
 * True when `input` matches the expected answer or any of its accepted
 * variants, after normalization.
 *
 * `answer` is always part of the candidate set, so `acceptableAnswers` only
 * ever widens what passes — it can never override the canonical answer.
 * A non-string or blank input is always false.
 */
export function matchesAnswer(
  input: unknown,
  answer: string,
  acceptableAnswers?: string[],
): boolean {
  const provided = typeof input === "string" ? normalizeAnswer(input) : "";
  if (!provided) return false;
  return [answer, ...(acceptableAnswers ?? [])].some(
    (candidate) => normalizeAnswer(candidate) === provided,
  );
}

/** Words in a free-text response. Blank and whitespace-only text count as 0. */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Whether a free-writing response is long enough to count as attempted.
 *
 * This is a completion check, not a correctness check — writing steps are
 * never scored (see `isGraded` in constants/CourseData.ts). Defaults to
 * requiring a single word so a missing `minWords` can't make a step
 * impossible to finish.
 */
export function meetsMinWords(input: unknown, minWords?: number): boolean {
  if (typeof input !== "string") return false;
  return countWords(input) >= (minWords ?? 1);
}
