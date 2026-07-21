import { Colors, FontFamily, Radius } from "@/constants/theme";
import { countWords } from "@/lib/grading";
import { haptics } from "@/lib/haptics";
import { T } from "@/lib/strings";
import { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../themed-text";

/**
 * Free writing — a NON-GRADED step.
 *
 * There is no right answer to check, so nothing here reports correctness: the
 * step completes once the learner has written enough words. It calls
 * `onContinue`, not `onAnswer`, precisely so it cannot be wired into the
 * scoring path by accident.
 */
export default function WritingMode({
  prompt,
  minWords,
  placeholder,
  hint,
  onContinue,
}: {
  prompt: string;
  /** Words required before the step can be completed. Defaults to 1. */
  minWords?: number;
  placeholder?: string;
  hint?: string;
  onContinue: () => void;
}) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const required = minWords ?? 1;
  const words = countWords(value);
  const longEnough = words >= required;

  const handlePress = () => {
    if (!longEnough) return;
    if (!submitted) {
      Keyboard.dismiss();
      haptics.success();
      setSubmitted(true);
      return;
    }
    onContinue();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.prompt}>{prompt}</ThemedText>

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          editable={!submitted}
          placeholder={placeholder ?? T.freeText.placeholder}
          placeholderTextColor={Colors.subduedTextColor}
          multiline
          autoCapitalize="sentences"
          accessibilityLabel={prompt}
        />

        <View style={styles.counterRow}>
          <ThemedText style={styles.counterText}>
            {T.writing.words(words)}
          </ThemedText>
          <ThemedText
            style={[
              styles.counterText,
              longEnough ? styles.counterMet : styles.counterUnmet,
            ]}
          >
            {T.writing.minWords(required)}
          </ThemedText>
        </View>

        {hint && !submitted ? (
          <View style={styles.hintContainer}>
            <ThemedText style={styles.hintText}>
              {T.practice.hintLabel}: {hint}
            </ThemedText>
          </View>
        ) : null}

        {submitted ? (
          <View style={styles.recordedBox}>
            <ThemedText style={styles.recordedTitle}>
              {T.writing.recorded}
            </ThemedText>
            <ThemedText style={styles.recordedText}>
              {T.writing.notAutoChecked}
            </ThemedText>
            <ThemedText style={styles.recordedText}>
              {T.writing.practiceLater}
            </ThemedText>
          </View>
        ) : null}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.actionButton,
          {
            backgroundColor: longEnough
              ? Colors.primaryAccentColor
              : Colors.surfaceTertiary,
          },
        ]}
        onPress={handlePress}
        disabled={!longEnough}
        activeOpacity={0.85}
      >
        <ThemedText
          style={[
            styles.actionButtonText,
            {
              color: longEnough ? Colors.textInverse : Colors.subduedTextColor,
            },
          ]}
        >
          {submitted ? T.common.continue : T.common.check}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  scrollContent: { paddingBottom: 16 },
  prompt: {
    fontFamily: FontFamily.semibold,
    fontSize: 17,
    color: Colors.textPrimary,
    marginTop: 12,
    marginBottom: 16,
    lineHeight: 24,
  },
  input: {
    minHeight: 140,
    borderWidth: 1.5,
    borderColor: Colors.borderColor,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surfacePrimary,
    padding: 14,
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: Colors.textPrimary,
    textAlignVertical: "top",
  },
  counterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  counterText: {
    fontFamily: FontFamily.medium,
    fontSize: 13,
    color: Colors.subduedTextColor,
  },
  counterMet: { color: Colors.successColor },
  counterUnmet: { color: Colors.subduedTextColor },
  hintContainer: {
    backgroundColor: Colors.warningBg,
    padding: 12,
    borderRadius: Radius.md,
    marginTop: 12,
  },
  hintText: {
    fontFamily: FontFamily.medium,
    fontSize: 13,
    color: Colors.warningColor,
    textAlign: "center",
  },
  recordedBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: Radius.lg,
    backgroundColor: Colors.successBg,
  },
  recordedTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.successColor,
    marginBottom: 4,
  },
  recordedText: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    lineHeight: 19,
    color: Colors.textSecondary,
  },
  actionButton: {
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
    marginBottom: 20,
  },
  actionButtonText: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
  },
});
