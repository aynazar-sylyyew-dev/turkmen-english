import type { ComponentProps } from "react";
import type { Ionicons } from "@expo/vector-icons";

type IconName = ComponentProps<typeof Ionicons>["name"];

/**
 * Per-chapter icon and colour.
 *
 * Drawn illustrations were dropped in favour of an icon plus a colour: a
 * grammar topic has no obvious picture, and 20 bespoke drawings per language
 * would have to be redrawn for every course in the series. An icon keyed to
 * the topic and a rotating palette give each chapter its own identity for
 * free, and a new language only edits the map below.
 *
 * Ported from the English course's own theme/unitVisuals.ts, whose topics are
 * the same 20 units this course was built from.
 */
const PALETTE: { fg: string; bg: string }[] = [
  { fg: "#5B7CB7", bg: "#E8EEF7" }, // dusty blue
  { fg: "#6B9F5C", bg: "#EDF5E8" }, // sage
  { fg: "#C2895A", bg: "#F6EDE2" }, // terracotta
  { fg: "#8E6FB0", bg: "#F0EAF6" }, // muted purple
  { fg: "#4FA3A1", bg: "#E5F2F1" }, // teal
  { fg: "#C26B7A", bg: "#F8E9EC" }, // rose
  { fg: "#7A8CA6", bg: "#ECEFF4" }, // slate
  { fg: "#B58A3E", bg: "#F6EFDD" }, // gold
];

/** Icon per chapter topic. A course with different topics rewrites this map. */
const CHAPTER_ICONS: Record<number, IconName> = {
  1: "albums-outline", // Köplük sany
  2: "person-outline", // Şahs çalyşmalary + to be
  3: "pricetag-outline", // Artikller + this/that
  4: "hand-left-outline", // Have got + can
  5: "key-outline", // Eýelik
  6: "time-outline", // Present Continuous
  7: "arrow-redo-outline", // Doldurgyç çalyşmalary + buýruk
  8: "location-outline", // There is/are + some/any/no
  9: "repeat-outline", // Present Simple
  10: "stats-chart-outline", // Many/much/little/few
  11: "hourglass-outline", // Was/were/had
  12: "calendar-outline", // Past Simple
  13: "checkmark-circle-outline", // Present Perfect
  14: "help-circle-outline", // Soraglar
  15: "rocket-outline", // Geljek zaman
  16: "people-outline", // Refleksiw we belgisiz çalyşmalar
  17: "trending-up-outline", // Sypatlaryň deňeşdirilmegi
  18: "shield-checkmark-outline", // Modal işlikler
  19: "options-outline", // Infinitiw, -ing, too/enough
  20: "shapes-outline", // Both/either/neither/all/every/none
};

export interface ChapterVisual {
  icon: IconName;
  /** Icon and accent colour. */
  fg: string;
  /** Badge background. */
  bg: string;
}

export function getChapterVisual(chapterId: number): ChapterVisual {
  const palette = PALETTE[(chapterId - 1) % PALETTE.length];
  return {
    icon: CHAPTER_ICONS[chapterId] ?? "book-outline",
    fg: palette.fg,
    bg: palette.bg,
  };
}
