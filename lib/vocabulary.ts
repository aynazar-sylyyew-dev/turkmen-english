import { Question, Word } from "@/constants/CourseData";
import { THEORY_DATA } from "@/assets/data/theory_content";

export const getChapterVocabulary = (chapterId: number): Word[] => {
  const chapter = THEORY_DATA[chapterId];
  if (!chapter) return [];
  return chapter.vocabulary.map((w) => ({
    target: w.target,
    transliteration: w.transliteration,
    translation: w.translation,
  }));
};

export const getUniqueWordsFromQuestions = (questions: Question[]): Word[] => {
  const allWords = new Map<string, Word>();
  questions.forEach((question) => {
    let wordSource: Word[] = [];

    if (question.type === "listening_mc") {
      wordSource = question.phrase.words || [];
    } else if (
      question.type === "multiple_choice" ||
      question.type === "single_response"
    ) {
      wordSource = question.options.flatMap(
        (opt: { phrase: { words: Word[] } }) => opt.phrase.words || [],
      );
    }

    wordSource.forEach((word: Word) => {
      if (word && word.target && !allWords.has(word.target)) {
        allWords.set(word.target, word);
      }
    });
  });

  return Array.from(allWords.values());
};
