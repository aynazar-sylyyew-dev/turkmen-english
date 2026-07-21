// Theory pager content, keyed by chapter id.
//
// The English course teaches through short explanations inside each lesson
// feed (question type "theory"), so the separate pager carries nothing yet.
// buildChapterSteps simply emits no theory steps while this is empty.

export interface TheoryWord {
  target: string;
  transliteration?: string;
  translation: string;
}

export interface GrammarExample {
  target: string;
  transliteration?: string;
  translation: string;
}

export interface DialogueLine {
  speaker: string;
  target: string;
  transliteration?: string;
  translation: string;
}

export interface TheoryGrammar {
  title: string;
  explanation: string;
  examples: GrammarExample[];
}

export interface TheoryChapter {
  introduction: string;
  vocabulary: TheoryWord[];
  grammar: TheoryGrammar[];
  dialogues: { title: string; lines: DialogueLine[] }[];
  tips: string[];
}

export const THEORY_DATA: Record<number, TheoryChapter> = {};
