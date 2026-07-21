import { Colors, FontFamily, Radius } from "@/constants/theme";
import { T } from "@/lib/strings";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";

/**
 * An explanation shown inside a lesson feed — a NON-GRADED step.
 *
 * The English course teaches by alternating short explanations with the
 * exercises that drill them, so theory travels inside the lesson rather than
 * living only in the separate theory pager. Like WritingMode it reports no
 * correctness: it calls `onContinue`, never `onAnswer`.
 */
export default function TheoryBlock({
  title,
  body,
  examples,
  emoji,
  onContinue,
}: {
  title?: string;
  body: string;
  examples?: string[];
  emoji?: string;
  onContinue: () => void;
}) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {emoji ? <ThemedText style={styles.emoji}>{emoji}</ThemedText> : null}
        {title ? <ThemedText style={styles.title}>{title}</ThemedText> : null}

        <ThemedText style={styles.body}>{body}</ThemedText>

        {examples && examples.length > 0 ? (
          <View style={styles.examplesCard}>
            <ThemedText style={styles.examplesLabel}>
              {T.practice.examples}
            </ThemedText>
            {examples.map((example, i) => (
              <ThemedText key={i} style={styles.exampleText}>
                {example}
              </ThemedText>
            ))}
          </View>
        ) : null}
      </ScrollView>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={onContinue}
        activeOpacity={0.85}
      >
        <ThemedText style={styles.actionButtonText}>
          {T.common.continue}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  scrollContent: { paddingBottom: 16, paddingTop: 12 },
  emoji: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: 22,
    color: Colors.textPrimary,
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  body: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    lineHeight: 25,
    color: Colors.textPrimary,
  },
  examplesCard: {
    marginTop: 18,
    padding: 16,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surfaceSecondary,
  },
  examplesLabel: {
    fontFamily: FontFamily.semibold,
    fontSize: 12,
    color: Colors.subduedTextColor,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  exampleText: {
    fontFamily: FontFamily.medium,
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textPrimary,
  },
  actionButton: {
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: Colors.primaryAccentColor,
  },
  actionButtonText: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
    color: Colors.textInverse,
  },
});
