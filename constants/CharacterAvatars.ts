import { ImageSourcePropType } from "react-native";

/**
 * The course cast.
 *
 * `ahmet` is the protagonist a learner sees everywhere — the greeting on the
 * home screen, the empty states, the results screens. The rest only appear in
 * dialogue pages, which are dormant while the theory pager carries no content.
 *
 * The artwork is still the placeholder set carried over from the first course
 * in the series; commissioning proper art for Akylly Ahmet does not block
 * anything, because nothing here depends on what the PNGs actually depict.
 */
export type CharacterId = "ahmet" | "teacher" | "friend" | "generic";

export interface Character {
  id: CharacterId;
  source: ImageSourcePropType;
  /** The character's name in the taught language. */
  target: string;
  /** Absent for languages that need no pronunciation aid (e.g. English). */
  transliteration?: string;
  /** The learner-facing name. */
  displayName: string;
}

export const CHARACTERS: Record<CharacterId, Character> = {
  ahmet: {
    id: "ahmet",
    source: require("../assets/characters/ahmet.png"),
    target: "Ahmet",
    displayName: "Akylly Ahmet",
  },
  teacher: {
    id: "teacher",
    source: require("../assets/characters/teacher.png"),
    target: "Miss Rose",
    displayName: "Rose mugallym",
  },
  friend: {
    id: "friend",
    source: require("../assets/characters/friend.png"),
    target: "Jenny",
    displayName: "Jenny",
  },
  generic: {
    id: "generic",
    source: require("../assets/characters/generic.png"),
    target: "",
    displayName: "",
  },
};

/**
 * Who speaks in each chapter's dialogues (A → first, B → second).
 *
 * Chapters the course does not define fall back to the protagonist plus the
 * neutral figure, so adding a chapter never crashes a dialogue page.
 */
export const CHAPTER_SPEAKERS: Record<number, [CharacterId, CharacterId]> = {
  1: ["ahmet", "teacher"],
  2: ["ahmet", "friend"],
  3: ["ahmet", "teacher"],
  4: ["ahmet", "friend"],
  5: ["ahmet", "friend"],
  6: ["ahmet", "teacher"],
  7: ["ahmet", "friend"],
  8: ["ahmet", "friend"],
  9: ["ahmet", "teacher"],
  10: ["ahmet", "friend"],
  11: ["ahmet", "friend"],
  12: ["ahmet", "teacher"],
  13: ["ahmet", "friend"],
  14: ["ahmet", "friend"],
  15: ["ahmet", "teacher"],
  16: ["ahmet", "friend"],
  17: ["ahmet", "teacher"],
  18: ["ahmet", "friend"],
  19: ["ahmet", "friend"],
  20: ["ahmet", "teacher"],
};

export function getChapterSpeakers(chapterId: number): [Character, Character] {
  const ids = CHAPTER_SPEAKERS[chapterId] ?? ["ahmet", "generic"];
  return [CHARACTERS[ids[0]], CHARACTERS[ids[1]]];
}
