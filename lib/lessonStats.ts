import type { Question } from "@/constants/CourseData";
import { T } from "@/lib/strings";

export interface WrongQuestion {
  translation: string;
  phrase: {
    target: string;
    transliteration: string;
  };
  attempts: number;
}

export interface TypeBreakdown {
  type: string;
  correct: number;
  total: number;
}

export interface LessonStats {
  correctAnswers: number;
  totalQuestions: number;
  accuracy: number;
  wrongQuestions?: WrongQuestion[];
  /** Правильных вопросов с первой попытки (честная метрика для экзамена). */
  firstTryCorrect?: number;
  /** Разбивка по типам упражнений (для экрана результата экзамена). */
  byType?: TypeBreakdown[];
}

/**
 * Чистая агрегация завершённого прохождения урока/экзамена в LessonStats.
 * `wrongQuestions` и `questionAttempts` ключуются по id вопроса.
 *
 * Вынесено из LessonContent, чтобы скоринг не зависел от UI и покрывался тестами.
 */
export function computeLessonStats(
  questions: Question[],
  correctAnswersCount: number,
  wrongQuestions: Set<number>,
  questionAttempts: Record<number, number>,
): LessonStats {
  const accuracy = Math.round((correctAnswersCount / questions.length) * 100);

  const wrongQuestionsList = questions
    .filter((q) => wrongQuestions.has(q.id))
    .map((q) => {
      let translation = "";
      let target = "";
      let transliteration = "";

      if (q.type === "listening_mc") {
        translation =
          q.options.find((opt) => opt.id === q.correctOptionId)?.translation || "";
        target = q.phrase.target;
        transliteration = q.phrase.transliteration ?? "";
      } else if (q.type === "multiple_choice" || q.type === "single_response") {
        const option = q.options[0];
        translation = option.translation;
        target = option.phrase.target;
        transliteration = option.phrase.transliteration ?? "";
      } else if (q.type === "flashcard") {
        const correct = q.options.find((opt) => opt.id === q.correctOptionId);
        translation = correct?.translation || "";
        target = q.phrase.target;
        transliteration = q.phrase.transliteration ?? "";
      } else if (q.type === "fill_blank") {
        translation = q.correctAnswer;
        target = q.sentence;
        transliteration = q.sentenceTransliteration ?? "";
      } else if (q.type === "match_pairs") {
        translation = T.screen.matchPairsLabel;
        target = q.pairs.map((p) => p.left).join(", ");
        transliteration = "";
      } else if (q.type === "grammar") {
        translation = q.rule.title;
        target = "";
        transliteration = "";
      }

      return {
        translation,
        phrase: {
          target,
          transliteration,
        },
        attempts: questionAttempts[q.id] || 1,
      };
    });

  // First-try metrics — a question counts as passed only if it was never wrong
  // (not in wrongQuestions). This is the honest score for the exam and the
  // basis for the per-type breakdown.
  const firstTryCorrect = questions.length - wrongQuestions.size;
  const typeAgg: Record<string, { correct: number; total: number }> = {};
  questions.forEach((q) => {
    const agg = (typeAgg[q.type] ??= { correct: 0, total: 0 });
    agg.total += 1;
    if (!wrongQuestions.has(q.id)) agg.correct += 1;
  });
  const byType = Object.entries(typeAgg).map(([type, v]) => ({
    type,
    correct: v.correct,
    total: v.total,
  }));

  return {
    correctAnswers: correctAnswersCount,
    totalQuestions: questions.length,
    accuracy,
    wrongQuestions:
      wrongQuestionsList.length > 0 ? wrongQuestionsList : undefined,
    firstTryCorrect,
    byType,
  };
}
