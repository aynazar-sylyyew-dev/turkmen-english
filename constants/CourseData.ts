import courseData from "@/assets/data/course_content.json";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface CourseData {
  chapters: Chapter[];
  scenarios: ConversationScenario[];
}

export interface ConversationScenario {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  isFree: boolean;
  description: string;
  goal: string;
  tasks: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  phrasebook?: PhrasebookEntry[];
}

interface PhrasebookEntry {
  target: string;
  transliteration?: string;
  translation: string;
}

export interface Chapter {
  id: number;
  title: string;
  lessons: Lesson[];
  review?: Lesson;
}

export interface Lesson {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  completionCount: number;
  questions: Question[];
}

interface BaseQuestion {
  id: number;
}

// `target` is the text in the language being taught; `transliteration` is its
// optional pronunciation aid (pinyin for Chinese, absent for English);
// `translation` is the learner's own language.
interface Phrase {
  target: string;
  transliteration?: string;
}

export interface Word {
  target: string;
  transliteration?: string;
  translation: string;
}

interface PhraseDetail extends Phrase {
  words: Word[];
  breakdown: string;
}

export interface SpeakingOption {
  id: number;
  translation: string;
  phrase: PhraseDetail;
}

export interface ListeningOption {
  id: number;
  translation: string;
}

// --- Existing question types ---

interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple_choice";
  phrase: Phrase;
  options: SpeakingOption[];
  correctOptionId: number;
  instruction?: string;
}

interface SingleResponseQuestion extends BaseQuestion {
  type: "single_response";
  phrase: Phrase;
  options: [SpeakingOption];
}

interface ListeningMultipleChoiceQuestion extends BaseQuestion {
  type: "listening_mc";
  phrase: PhraseDetail;
  options: ListeningOption[];
  correctOptionId: number;
}

// --- New question types ---

export interface FlashcardOption {
  id: number;
  translation: string;
  target: string;
  transliteration?: string;
}

interface FlashcardQuestion extends BaseQuestion {
  type: "flashcard";
  phrase: Phrase;
  instruction: string;
  options: FlashcardOption[];
  correctOptionId: number;
}

interface FillBlankOption {
  id: number;
  target: string;
  transliteration?: string;
}

interface FillBlankQuestion extends BaseQuestion {
  type: "fill_blank";
  sentence: string;
  sentenceTransliteration?: string;
  blankedWord: string;
  correctAnswer: string;
  hint?: string;
  instruction: string;
  options?: FillBlankOption[];
}

export interface MatchPair {
  id: number;
  left: string;
  leftTransliteration?: string;
  right: string;
}

interface MatchPairsQuestion extends BaseQuestion {
  type: "match_pairs";
  instruction: string;
  pairs: MatchPair[];
}

export interface GrammarExample {
  target: string;
  transliteration?: string;
  translation: string;
}

export interface GrammarPracticeOption {
  id: number;
  text: string;
}

export interface GrammarPractice {
  question: string;
  options: GrammarPracticeOption[];
  correctOptionId: number;
}

interface GrammarQuestion extends BaseQuestion {
  type: "grammar";
  rule: {
    title: string;
    explanation: string;
    examples: GrammarExample[];
  };
  practice: GrammarPractice[];
}

// --- Free-text types ---
// The learner types an answer; it is matched with lib/grading.ts, which folds
// case, apostrophes and trailing punctuation before comparing. `answer` is
// always accepted, `acceptableAnswers` only widens what else passes.

interface TransformationQuestion extends BaseQuestion {
  type: "transformation";
  /** What to do with the sentence, e.g. "Make it negative". */
  instruction: string;
  /** The sentence to transform. */
  input: string;
  answer: string;
  acceptableAnswers?: string[];
  hint?: string;
  explanation?: string;
}

interface ReadingQuestion extends BaseQuestion {
  type: "reading";
  /** The passage to read. */
  text: string;
  /** The question asked about the passage. */
  prompt: string;
  answer: string;
  acceptableAnswers?: string[];
  hint?: string;
  explanation?: string;
}

interface OddOneOutQuestion extends BaseQuestion {
  type: "odd_one_out";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// --- Non-graded steps ---
// Steps the learner passes through rather than answers. They are navigable and
// must be completed, but they never reach the score, the accuracy, the XP or
// the exam pool. See `isGradedQuestion` below — that predicate, not the type
// name, is what every counter must ask.

interface TheoryQuestion extends BaseQuestion {
  type: "theory";
  title?: string;
  body: string;
  examples?: string[];
  emoji?: string;
}

interface WritingQuestion extends BaseQuestion {
  type: "writing";
  prompt: string;
  /** Words required before the step can be completed. Defaults to 1. */
  minWords?: number;
  placeholder?: string;
  hint?: string;
}

export type Question =
  | MultipleChoiceQuestion
  | SingleResponseQuestion
  | ListeningMultipleChoiceQuestion
  | FlashcardQuestion
  | FillBlankQuestion
  | MatchPairsQuestion
  | GrammarQuestion
  | TransformationQuestion
  | ReadingQuestion
  | OddOneOutQuestion
  | TheoryQuestion
  | WritingQuestion;

/**
 * The types whose prompt is spoken aloud and therefore carry a `phrase`.
 * Everything else renders and grades itself.
 */
export type AudioQuestion =
  | MultipleChoiceQuestion
  | SingleResponseQuestion
  | ListeningMultipleChoiceQuestion;

export function isAudioQuestion(question: Question): question is AudioQuestion {
  return (
    question.type === "multiple_choice" ||
    question.type === "single_response" ||
    question.type === "listening_mc"
  );
}

/** Question types that carry no score. Everything else is graded. */
const NON_GRADED_TYPES: ReadonlySet<Question["type"]> = new Set([
  "theory",
  "writing",
] satisfies Question["type"][]);

/**
 * Whether a step counts toward score, accuracy, XP and the exam pool.
 *
 * Every denominator that means "how well did you do" must filter on this.
 * Counters that mean "how far along are you" — the progress bar, the n/N
 * label, the nav-bar circles — must NOT: the learner still walks through
 * non-graded steps.
 */
export function isGradedQuestion(question: Question): boolean {
  return !NON_GRADED_TYPES.has(question.type);
}

export const COURSE_DATA = courseData as unknown as CourseData;
