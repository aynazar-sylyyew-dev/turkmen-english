import { isGradedQuestion, type Question } from "@/constants/CourseData";
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
  // Theory and writing steps are walked through, not answered — they must not
  // dilute the score. Everything below counts only the graded subset; the
  // caller keeps passing the full list because the wrong-answer review still
  // needs to look questions up by id.
  const graded = questions.filter(isGradedQuestion);

  // Guard the 0/0 case explicitly: a lesson of pure theory would otherwise
  // produce NaN, which React Native renders as the literal text "NaN%" and as
  // a zero-width progress bar without ever throwing.
  const accuracy =
    graded.length > 0
      ? Math.round((correctAnswersCount / graded.length) * 100)
      : 0;

  const wrongQuestionsList = questions
    .filter((q) => isGradedQuestion(q) && wrongQuestions.has(q.id))
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
  // basis for the per-type breakdown. Both sides of the subtraction are graded
  // -only, otherwise the count goes negative and the exam records a permanent
  // fail.
  const firstTryCorrect =
    graded.length - graded.filter((q) => wrongQuestions.has(q.id)).length;
  const typeAgg: Record<string, { correct: number; total: number }> = {};
  graded.forEach((q) => {
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
    totalQuestions: graded.length,
    accuracy,
    wrongQuestions:
      wrongQuestionsList.length > 0 ? wrongQuestionsList : undefined,
    firstTryCorrect,
    byType,
  };
}
