import { ThemedText } from "@/components/themed-text";
import { getChapterVisual } from "@/constants/ChapterVisuals";
import { COURSE_DATA, isGradedQuestion } from "@/constants/CourseData";
import { Colors, FontFamily, Radius, Shadow, Spacing } from "@/constants/theme";
import { useBookmarks } from "@/lib/bookmarks";
import { Events, track } from "@/lib/analytics";
import { CourseStep, StepSubtype } from "@/lib/courseSteps";
import { haptics } from "@/lib/haptics";
import {
  ChapterStepStates,
  getChapterStepStates,
  StepWithState,
} from "@/lib/stepProgress";
import { T } from "@/lib/strings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const STEP_ICONS: Record<StepSubtype, keyof typeof Ionicons.glyphMap> = {
  intro: "flag-outline",
  vocab: "library-outline",
  grammar: "construct-outline",
  dialogue: "chatbubbles-outline",
  practice: "pencil-outline",
  exam: "trophy-outline",
};

function StepRow({
  item,
  isLast,
  onPress,
}: {
  item: StepWithState;
  isLast: boolean;
  onPress: (step: CourseStep) => void;
}) {
  const { step, state, done } = item;
  const locked = state === "locked";
  const current = state === "current";

  const circleStyle =
    state === "done"
      ? styles.circleDone
      : current
        ? styles.circleCurrent
        : styles.circleLocked;

  const label = T.steps.labels[step.subtype] ?? step.subtype;

  return (
    <View style={styles.stepRow}>
      {/* Left rail: connector line + status circle */}
      <View style={styles.railCol}>
        <View
          style={[
            styles.railLine,
            styles.railLineTop,
            step.index === 0 && styles.railLineHidden,
            done && styles.railLineDone,
          ]}
        />
        <View style={[styles.circle, circleStyle]}>
          {state === "done" ? (
            <Ionicons name="checkmark" size={18} color={Colors.textInverse} />
          ) : locked ? (
            <Ionicons name="lock-closed" size={14} color={Colors.subduedTextColor} />
          ) : (
            <Ionicons name={STEP_ICONS[step.subtype]} size={16} color={Colors.textInverse} />
          )}
        </View>
        <View
          style={[
            styles.railLine,
            styles.railLineBottom,
            isLast && styles.railLineHidden,
            done && styles.railLineDone,
          ]}
        />
      </View>

      {/* Step card */}
      <Pressable
        style={[
          styles.stepCard,
          current && styles.stepCardCurrent,
          locked && styles.stepCardLocked,
        ]}
        disabled={locked}
        onPress={() => onPress(step)}
        accessibilityRole="button"
        accessibilityLabel={`${label}${locked ? ` — ${T.steps.locked}` : ""}`}
      >
        <View style={styles.stepCardContent}>
          <ThemedText
            style={[styles.stepLabel, locked && styles.stepLabelLocked]}
            numberOfLines={1}
          >
            {label}
          </ThemedText>
          {step.title ? (
            <ThemedText style={styles.stepSubtitle} numberOfLines={1}>
              {step.title}
            </ThemedText>
          ) : null}
        </View>
        {locked ? (
          <Ionicons name="lock-closed" size={16} color={Colors.borderColorStrong} />
        ) : (
          <Ionicons
            name="chevron-forward"
            size={18}
            color={current ? Colors.primaryAccentColor : Colors.subduedTextColor}
          />
        )}
      </Pressable>
    </View>
  );
}

export default function ChapterDetailScreen() {
  const { chapterId } = useLocalSearchParams<{ chapterId: string }>();
  const id = chapterId != null ? Number(chapterId) : 1;
  const [stepData, setStepData] = useState<ChapterStepStates | null>(null);
  const { bookmarks, toggle: toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks.has(id);

  useFocusEffect(
    useCallback(() => {
      getChapterStepStates(id).then(setStepData);
    }, [id]),
  );

  useEffect(() => {
    track(Events.ChapterOpen, { chapterId: id });
  }, [id]);

  const chapter = COURSE_DATA.chapters.find((ch) => ch.id === id);

  if (!chapter) {
    return (
      <SafeAreaView style={styles.container}>
        <ThemedText>{T.screen.chapterNotFound}</ThemedText>
      </SafeAreaView>
    );
  }

  const allQuestions = chapter.lessons.flatMap((l) => l.questions);
  const gradedCount = allQuestions.filter(isGradedQuestion).length;
  const theoryCount = allQuestions.filter((q) => q.type === "theory").length;

  const visual = getChapterVisual(id);

  const openStep = (step: CourseStep) => {
    haptics.tap();
    if (step.kind === "exam") {
      router.push({ pathname: "/chapter-test", params: { chapterId: String(id) } });
    } else if (step.kind === "practice") {
      // chapterId travels alongside so the vocabulary card can still pull the
      // chapter's word list; the feed itself comes from the lesson.
      router.push({
        pathname: "/practise",
        params: { lessonId: step.lessonId ?? "", chapterId: String(id) },
      });
    } else {
      router.push({
        pathname: "/theory",
        params: { chapterId: String(id), step: step.key },
      });
    }
  };

  const steps = stepData?.steps ?? [];
  const doneCount = stepData?.doneCount ?? 0;
  const total = stepData?.total ?? 0;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={20} style={styles.backButton} accessibilityRole="button" accessibilityLabel={T.a11y.back}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </Pressable>
        <View style={{ flex: 1 }} />
        <Pressable
          onPress={() => {
            haptics.tap();
            void toggleBookmark(id);
          }}
          hitSlop={20}
          style={styles.bookmarkButton}
          accessibilityRole="button"
          accessibilityLabel={isBookmarked ? T.a11y.removeBookmark : T.a11y.addBookmark}
        >
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={22}
            color={
              isBookmarked ? Colors.primaryAccentColor : Colors.textSecondary
            }
          />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero block */}
        <View style={styles.hero}>
          <View style={styles.heroLeft}>
            {chapter.description ? (
              <ThemedText style={styles.unitChip}>{chapter.description}</ThemedText>
            ) : null}
            <ThemedText style={styles.chapterLabel}>
              {chapter.id}-NJI BAP
            </ThemedText>
            <ThemedText style={styles.targetTitle}>{chapter.title}</ThemedText>
          </View>
          <View style={[styles.heroVisual, { backgroundColor: visual.bg }]}>
            <Ionicons name={visual.icon} size={38} color={visual.fg} />
          </View>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <ThemedText style={styles.statValue}>{chapter.lessons.length}</ThemedText>
            <ThemedText style={styles.statLabel}>sapak</ThemedText>
          </View>
          <View style={styles.statSep} />
          <View style={styles.statBox}>
            <ThemedText style={styles.statValue}>{theoryCount}</ThemedText>
            <ThemedText style={styles.statLabel}>düşündiriş</ThemedText>
          </View>
          <View style={styles.statSep} />
          <View style={styles.statBox}>
            <ThemedText style={styles.statValue}>{gradedCount}</ThemedText>
            <ThemedText style={styles.statLabel}>gönükme</ThemedText>
          </View>
        </View>

        {/* Steps lenta */}
        {total > 0 && (
          <View style={styles.lentaHeader}>
            <ThemedText style={styles.lentaTitle}>Ädimler</ThemedText>
            <ThemedText style={styles.lentaProgress}>
              {T.steps.progress(doneCount, total)}
            </ThemedText>
          </View>
        )}
        <View style={styles.lenta}>
          {steps.map((item, i) => (
            <StepRow
              key={item.step.key}
              item={item}
              isLast={i === steps.length - 1}
              onPress={openStep}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const CIRCLE = 36;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surfacePrimary },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  bookmarkButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContent: {
    paddingHorizontal: Spacing["2xl"],
    paddingBottom: 32,
  },

  // Hero
  hero: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 24,
    gap: 16,
  },
  heroLeft: { flex: 1 },
  heroVisual: {
    width: 80,
    height: 80,
    borderRadius: Radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  unitChip: {
    fontFamily: FontFamily.semibold,
    fontSize: 11,
    color: Colors.subduedTextColor,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  chapterLabel: {
    fontFamily: FontFamily.semibold,
    fontSize: 11,
    color: Colors.primaryAccentColor,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  targetTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 44,
    lineHeight: 50,
    color: Colors.primaryAccentColor,
    letterSpacing: -1,
  },
  transliterationTitle: {
    fontFamily: FontFamily.medium,
    fontSize: 18,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  translation: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    color: Colors.subduedTextColor,
    marginTop: 2,
  },

  // Stats row
  statsRow: {
    flexDirection: "row",
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: Radius.lg,
    paddingVertical: 14,
    marginBottom: 24,
    alignItems: "center",
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontFamily: FontFamily.bold,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.textPrimary,
    letterSpacing: -0.3,
  },
  statLabel: {
    fontFamily: FontFamily.medium,
    fontSize: 11,
    color: Colors.subduedTextColor,
    marginTop: 2,
  },
  statSep: {
    width: 1,
    height: 24,
    backgroundColor: Colors.borderColor,
  },

  // Lenta
  lentaHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  lentaTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 18,
    color: Colors.textPrimary,
  },
  lentaProgress: {
    fontFamily: FontFamily.semibold,
    fontSize: 13,
    color: Colors.subduedTextColor,
  },
  lenta: {},
  stepRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  railCol: {
    width: CIRCLE,
    alignItems: "center",
  },
  railLine: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.borderColor,
  },
  railLineTop: { minHeight: 8 },
  railLineBottom: { minHeight: 8 },
  railLineHidden: { backgroundColor: "transparent" },
  railLineDone: { backgroundColor: Colors.successColor },
  circle: {
    width: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  circleDone: { backgroundColor: Colors.successColor },
  circleCurrent: {
    backgroundColor: Colors.primaryAccentColor,
    shadowColor: Colors.primaryAccentColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  circleLocked: {
    backgroundColor: Colors.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  stepCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginVertical: 5,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.surfacePrimary,
    gap: 10,
    ...Shadow.sm,
  },
  stepCardCurrent: {
    borderColor: Colors.primaryAccentColor,
    backgroundColor: Colors.primaryAccentBg,
  },
  stepCardLocked: {
    backgroundColor: Colors.surfaceSecondary,
    borderColor: Colors.divider,
    ...({ shadowOpacity: 0, elevation: 0 } as object),
  },
  stepCardContent: { flex: 1 },
  stepLabel: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  stepLabelLocked: { color: Colors.subduedTextColor },
  stepSubtitle: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.subduedTextColor,
    marginTop: 2,
  },
});
