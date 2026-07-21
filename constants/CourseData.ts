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

export type Question =
  | MultipleChoiceQuestion
  | SingleResponseQuestion
  | ListeningMultipleChoiceQuestion
  | FlashcardQuestion
  | FillBlankQuestion
  | MatchPairsQuestion
  | GrammarQuestion;

export const COURSE_DATA = courseData as unknown as CourseData;
