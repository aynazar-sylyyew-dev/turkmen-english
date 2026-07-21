import { ImageSourcePropType } from "react-native";

export type CharacterId =
  | "aman"
  | "guli"
  | "zhang-wei"
  | "li-teacher"
  | "wang-teacher"
  | "generic";

export interface Character {
  id: CharacterId;
  source: ImageSourcePropType;
  /** The character's name in the taught language; `displayName` is the
   *  learner-facing one. Both may be the same for a Latin-script course. */
  target: string;
  /** Absent for languages that need no pronunciation aid (e.g. English). */
  transliteration?: string;
  displayName: string;
}

export const CHARACTERS: Record<CharacterId, Character> = {
  aman: {
    id: "aman",
    source: require("../assets/characters/aman.png"),
    target: "阿曼",
    transliteration: "Āmàn",
    displayName: "Aman",
  },
  guli: {
    id: "guli",
    source: require("../assets/characters/guli.png"),
    target: "古丽",
    transliteration: "Gǔlì",
    displayName: "Gulnara",
  },
  "zhang-wei": {
    id: "zhang-wei",
    source: require("../assets/characters/zhang-wei.png"),
    target: "张伟",
    transliteration: "Zhāng Wěi",
    displayName: "Zhang Wei",
  },
  "li-teacher": {
    id: "li-teacher",
    source: require("../assets/characters/li-teacher.png"),
    target: "李老师",
    transliteration: "Lǐ lǎoshī",
    displayName: "Li mugallym",
  },
  "wang-teacher": {
    id: "wang-teacher",
    source: require("../assets/characters/wang-teacher.png"),
    target: "王老师",
    transliteration: "Wáng lǎoshī",
    displayName: "Wang mugallym",
  },
  generic: {
    id: "generic",
    source: require("../assets/characters/generic.png"),
    target: "",
    transliteration: "",
    displayName: "",
  },
};

/**
 * Per-chapter speaker mapping (A → first character, B → second character).
 * Based on chapter intros from theory_content.ts.
 * Aman is the protagonist (turkmen student) in most chapters.
 */
export const CHAPTER_SPEAKERS: Record<number, [CharacterId, CharacterId]> = {
  1: ["aman", "li-teacher"],
  2: ["aman", "zhang-wei"],
  3: ["aman", "zhang-wei"],
  4: ["aman", "guli"],
  5: ["aman", "guli"],
  6: ["aman", "zhang-wei"],
  7: ["aman", "zhang-wei"],
  8: ["aman", "guli"],
  9: ["aman", "generic"],
  10: ["aman", "zhang-wei"],
  11: ["aman", "guli"],
  12: ["aman", "zhang-wei"],
  13: ["aman", "zhang-wei"],
  14: ["aman", "guli"],
  15: ["aman", "zhang-wei"],
  16: ["aman", "zhang-wei"],
  17: ["aman", "wang-teacher"],
  18: ["aman", "wang-teacher"],
  19: ["aman", "guli"],
  20: ["aman", "zhang-wei"],
  21: ["aman", "zhang-wei"],
  22: ["aman", "generic"],
  23: ["aman", "li-teacher"],
  24: ["aman", "zhang-wei"],
  25: ["aman", "guli"],
  26: ["aman", "guli"],
  27: ["aman", "guli"],
  28: ["aman", "zhang-wei"],
  29: ["aman", "guli"],
  30: ["aman", "zhang-wei"],
};

export function getChapterSpeakers(chapterId: number): [Character, Character] {
  const ids = CHAPTER_SPEAKERS[chapterId] ?? ["aman", "generic"];
  return [CHARACTERS[ids[0]], CHARACTERS[ids[1]]];
}
