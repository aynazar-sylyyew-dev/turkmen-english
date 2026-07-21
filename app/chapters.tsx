import { ThemedText } from "@/components/themed-text";
import { getChapterVisual } from "@/constants/ChapterVisuals";
import { COURSE_DATA } from "@/constants/CourseData";
import { Colors, FontFamily, Radius, Shadow, Spacing } from "@/constants/theme";
import { useBookmarks } from "@/lib/bookmarks";
import { haptics } from "@/lib/haptics";
import {
  getCourseUnlocks,
  isChapterComplete,
  type ChapterUnlock,
} from "@/lib/stepProgress";
import Ionicons from "@expo/vector-icons/Ionicons";
import { T } from "@/lib/strings";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChaptersScreen() {
  const [courseMap, setCourseMap] = useState<ChapterUnlock[]>([]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const { bookmarks } = useBookmarks();

  useFocusEffect(
    useCallback(() => {
      getCourseUnlocks().then(setCourseMap);
    }, []),
  );

  // Completion comes from the step engine, not from counting storage keys:
  // a chapter holds several lessons and each records its own progress.
  const completedChapterIds = new Set(
    courseMap.filter(isChapterComplete).map((c) => c.chapterId),
  );

  const nextChapterId =
    COURSE_DATA.chapters.find((ch) => !completedChapterIds.has(ch.id))?.id ??
    COURSE_DATA.chapters[COURSE_DATA.chapters.length - 1]?.id;

  const visibleChapters = COURSE_DATA.chapters.filter(
    (ch) => !showBookmarksOnly || bookmarks.has(ch.id),
  );

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={20} style={styles.backButton} accessibilityRole="button" accessibilityLabel={T.a11y.back}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <ThemedText style={styles.headerTitle}>Sapaklar</ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            {completedChapterIds.size}/{COURSE_DATA.chapters.length} geçildi
          </ThemedText>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Filter row */}
        {bookmarks.size > 0 && (
          <View style={styles.filterRow}>
            <Pressable
              style={[
                styles.filterChip,
                showBookmarksOnly && styles.filterChipActive,
              ]}
              onPress={() => {
                haptics.tap();
                setShowBookmarksOnly((v) => !v);
              }}
            >
              <Ionicons
                name={showBookmarksOnly ? "bookmark" : "bookmark-outline"}
                size={14}
                color={
                  showBookmarksOnly
                    ? Colors.textInverse
                    : Colors.primaryAccentColor
                }
              />
              <ThemedText
                style={[
                  styles.filterChipText,
                  showBookmarksOnly && styles.filterChipTextActive,
                ]}
              >
                Saýlanan ({bookmarks.size})
              </ThemedText>
            </Pressable>
          </View>
        )}

        {/* Each chapter is its own topic, so the list is flat — the old
            grouping into five-chapter sections came from the Chinese
            textbook's structure and has nothing to describe here. */}
        {visibleChapters.map((chapter) => {
          const lessonCount = chapter.lessons.length;
          const isCompleted = completedChapterIds.has(chapter.id);
          const isCurrent = chapter.id === nextChapterId;
          const isBookmarked = bookmarks.has(chapter.id);
          const visual = getChapterVisual(chapter.id);

          return (
            <Pressable
              key={chapter.id}
              style={({ pressed }) => [
                styles.chapterCard,
                isCurrent && styles.chapterCardCurrent,
                isCompleted && styles.chapterCardCompleted,
                pressed && styles.cardPressed,
              ]}
              onPress={() => {
                haptics.tap();
                router.push({
                  pathname: "/chapter-detail",
                  params: { chapterId: String(chapter.id) },
                });
              }}
            >
              <View style={styles.chapterContent}>
                <View style={styles.chapterTopRow}>
                  <View style={styles.chapterNumberBadge}>
                    <ThemedText style={styles.chapterNumberText}>
                      {chapter.id}
                    </ThemedText>
                  </View>
                  {isCurrent && (
                    <View style={styles.currentBadge}>
                      <ThemedText style={styles.currentBadgeText}>
                        Indiki
                      </ThemedText>
                    </View>
                  )}
                  {isCompleted && (
                    <View style={styles.completedBadge}>
                      <Ionicons
                        name="checkmark"
                        size={12}
                        color={Colors.textInverse}
                      />
                    </View>
                  )}
                  {isBookmarked && (
                    <Ionicons
                      name="bookmark"
                      size={14}
                      color={Colors.primaryAccentColor}
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                </View>
                <ThemedText style={styles.chapterTitle} numberOfLines={2}>
                  {chapter.title}
                </ThemedText>
                {chapter.description ? (
                  <ThemedText style={styles.chapterDescription} numberOfLines={2}>
                    {chapter.description}
                  </ThemedText>
                ) : null}
                <ThemedText style={styles.chapterMeta}>
                  {T.chapters.lessonCount(lessonCount)}
                </ThemedText>
              </View>

              <View style={[styles.visualBadge, { backgroundColor: visual.bg }]}>
                <Ionicons name={visual.icon} size={26} color={visual.fg} />
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surfacePrimary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: { flex: 1, alignItems: "center" },
  headerTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 18,
    color: Colors.textPrimary,
  },
  headerSubtitle: {
    fontFamily: FontFamily.medium,
    fontSize: 12,
    color: Colors.primaryAccentColor,
    marginTop: 2,
  },

  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: 16,
    paddingBottom: 32,
  },
  filterRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  filterChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: Radius.pill,
    backgroundColor: Colors.primaryAccentBg,
    borderWidth: 1,
    borderColor: Colors.primaryAccentColor + "40",
  },
  filterChipActive: {
    backgroundColor: Colors.primaryAccentColor,
    borderColor: Colors.primaryAccentColor,
  },
  filterChipText: {
    fontFamily: FontFamily.semibold,
    fontSize: 12,
    color: Colors.primaryAccentColor,
  },
  filterChipTextActive: {
    color: Colors.textInverse,
  },

  // Chapter cards
  chapterCard: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.surfacePrimary,
    marginBottom: 10,
    overflow: "hidden",
    minHeight: 80,
    ...Shadow.sm,
  },
  chapterCardCurrent: {
    borderColor: Colors.primaryAccentColor,
    borderWidth: 2,
    ...Shadow.md,
  },
  chapterCardCompleted: {
    backgroundColor: Colors.surfaceSecondary,
  },
  cardPressed: {
    opacity: 0.85,
  },

  chapterContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: "center",
    gap: 4,
  },
  chapterTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  chapterNumberBadge: {
    backgroundColor: Colors.surfaceTertiary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  chapterNumberText: {
    fontFamily: FontFamily.bold,
    fontSize: 11,
    color: Colors.textSecondary,
  },
  currentBadge: {
    backgroundColor: Colors.primaryAccentColor,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.sm,
  },
  currentBadgeText: {
    fontFamily: FontFamily.semibold,
    fontSize: 11,
    color: Colors.textInverse,
  },
  completedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.successColor,
    alignItems: "center",
    justifyContent: "center",
  },
  chapterTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
    color: Colors.textPrimary,
    marginTop: 2,
  },
  chapterDescription: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
    marginBottom: 4,
    lineHeight: 18,
  },
  visualBadge: {
    width: 52,
    height: 52,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  chapterMeta: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.subduedTextColor,
  },
});
