import { THEORY_DATA } from "@/assets/data/theory_content";
import { COURSE_DATA, isGradedQuestion } from "@/constants/CourseData";

// ============================================================
// Модель ШАГОВ главы (Stepik-редизайн, зерно «вариант B»).
//
// Чистая деривация из существующего контента (THEORY_DATA + COURSE_DATA).
// Глава разбивается на линейную ленту шагов:
//   Giriş → Sözler → Grammatika×N → Dialog×N → Gönükmeler → Bap synagy
//
// Это ТОЛЬКО структура (что за чем). Прогресс/разблокировка — в stepProgress.ts.
// Здесь нет состояния и хранилища, поэтому всё детерминировано и тестируемо.
// ============================================================

/** Семейство правила «сдал»: теория = долистал, практика = прошёл, экзамен = ≥70%. */
export type StepKind = "theory" | "practice" | "exam";

export type StepSubtype =
  | "intro"
  | "vocab"
  | "grammar"
  | "dialogue"
  | "practice"
  | "exam";

export interface CourseStep {
  /** Уникальный ключ внутри главы: "intro" | "vocab" | "grammar-0" | "dialogue-1" | "lesson-1.2" | "exam". */
  key: string;
  chapterId: number;
  kind: StepKind;
  subtype: StepSubtype;
  /** Позиция в ленте шагов главы (0-based). */
  index: number;
  /** Для grammar/dialogue — индекс секции в массиве (для навигации на нужную страницу). */
  sectionIndex?: number;
  /** Для practice — id урока, чей фид открывает шаг (он же ключ прогресса). */
  lessonId?: string;
  /** Заголовок контента (для grammar/dialogue/practice); пусто для intro/vocab/exam — UI берёт локализованный лейбл по subtype. */
  title: string;
}

/** Сколько всего вопросов в главе (по всем урокам), включая неоцениваемые шаги. */
export const getChapterQuestionCount = (chapterId: number): number => {
  const chapter = COURSE_DATA.chapters.find((c) => c.id === chapterId);
  if (!chapter) return 0;
  return chapter.lessons.reduce((sum, l) => sum + l.questions.length, 0);
};

/**
 * Сколько в главе ОЦЕНИВАЕМЫХ вопросов — то есть из чего вообще можно собрать
 * экзамен. Глава из одной теории даёт 0: без этого различия она считалась бы
 * экзаменуемой, экзамен был бы несдаваемым, а следующая глава — закрытой
 * навсегда.
 */
export const getChapterGradableCount = (chapterId: number): number => {
  const chapter = COURSE_DATA.chapters.find((c) => c.id === chapterId);
  if (!chapter) return 0;
  return chapter.lessons.reduce(
    (sum, l) => sum + l.questions.filter(isGradedQuestion).length,
    0,
  );
};

/** Есть ли у главы экзамен (а значит, может ли она гейтить следующую). */
export const isChapterExaminable = (chapterId: number): boolean =>
  getChapterGradableCount(chapterId) > 0;

/** Все id глав курса по возрастанию. */
export const getOrderedChapterIds = (): number[] =>
  COURSE_DATA.chapters.map((c) => c.id).sort((a, b) => a - b);

/**
 * Построить линейную ленту шагов главы. Порядок строгий:
 * intro, vocab, grammar[0..], dialogue[0..], урок[0..], exam.
 *
 * Каждый урок главы даёт СВОЙ practice-шаг: у китайского курса на главу
 * приходится один урок, у английского — четыре, и лента должна одинаково
 * работать в обоих случаях. Теоретические шаги появляются только если есть
 * соответствующий контент, экзамен — только если есть что оценивать.
 */
export const buildChapterSteps = (chapterId: number): CourseStep[] => {
  const steps: CourseStep[] = [];
  let index = 0;
  const add = (
    s: Omit<CourseStep, "chapterId" | "index" | "title"> & { title?: string },
  ) => {
    steps.push({ title: "", chapterId, index: index++, ...s });
  };

  const theory = THEORY_DATA[chapterId];
  if (theory) {
    if (theory.introduction) add({ key: "intro", kind: "theory", subtype: "intro" });
    if (theory.vocabulary?.length) add({ key: "vocab", kind: "theory", subtype: "vocab" });
    theory.grammar?.forEach((g, i) =>
      add({
        key: `grammar-${i}`,
        kind: "theory",
        subtype: "grammar",
        sectionIndex: i,
        title: g.title,
      }),
    );
    theory.dialogues?.forEach((d, i) =>
      add({
        key: `dialogue-${i}`,
        kind: "theory",
        subtype: "dialogue",
        sectionIndex: i,
        title: d.title,
      }),
    );
  }

  const chapter = COURSE_DATA.chapters.find((c) => c.id === chapterId);
  chapter?.lessons.forEach((lesson) => {
    if (lesson.questions.length === 0) return;
    const lessonId = String(lesson.id);
    add({
      key: `lesson-${lessonId}`,
      kind: "practice",
      subtype: "practice",
      lessonId,
      title: chapter.lessons.length > 1 ? lesson.title : "",
    });
  });

  if (isChapterExaminable(chapterId)) {
    add({ key: "exam", kind: "exam", subtype: "exam" });
  }

  return steps;
};
