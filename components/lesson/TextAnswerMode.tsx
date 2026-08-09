import { Colors, FontFamily, Radius } from "@/constants/theme";
import { haptics } from "@/lib/haptics";
import { matchesAnswer } from "@/lib/grading";
import { T } from "@/lib/strings";
import { speak } from "@/lib/tts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "../themed-text";

/**
 * The typed-answer exercise. Everything the learner writes rather than taps
 * goes through here — transformation and reading today, and fill-in-the-blank
 * once its content carries free answers instead of options.
 *
 * Grading is delegated to lib/grading.ts so the matching rules (case,
 * apostrophes, trailing punctuation, accepted variants) live in one tested
 * place rather than in each component.
 */
export default function TextAnswerMode({
  instruction,
  passage,
  prompt,
  answer,
  acceptableAnswers,
  audioText,
  hint,
  explanation,
  onAnswer,
}: {
  /** What to do, e.g. "Make the sentence negative". */
  instruction: string;
  /** Optional block to read before answering — a reading text or the sentence to transform. */
  passage?: string;
  /** Optional question shown just above the input. */
  prompt?: string;
  answer: string;
  acceptableAnswers?: string[];
  /**
   * Dictation mode: this is spoken aloud and never shown. The learner listens
   * and writes what they heard, so rendering it anywhere would give the answer
   * away.
   */
  audioText?: string;
  hint?: string;
  explanation?: string;
  onAnswer: (correct: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const wiggle = useSharedValue(0);

  const wiggleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: wiggle.value }],
  }));

  useEffect(() => {
    if (answered && !isCorrect) {
      wiggle.value = withSequence(
        withTiming(-10, { duration: 60 }),
        withTiming(10, { duration: 60 }),
        withTiming(-8, { duration: 60 }),
        withTiming(8, { duration: 60 }),
        withTiming(0, { duration: 60 }),
      );
    }
  }, [answered, isCorrect, wiggle]);

  const handleCheck = () => {
    if (answered || value.trim().length === 0) return;
    Keyboard.dismiss();
    const correct = matchesAnswer(value, answer, acceptableAnswers);
    if (correct) haptics.success();
    else haptics.error();
    setIsCorrect(correct);
    setAnswered(true);
  };

  const canCheck = value.trim().length > 0;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={styles.instruction}>{instruction}</ThemedText>

        {audioText ? (
          <TouchableOpacity
            style={styles.listenButton}
            onPress={() => speak(audioText)}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel={T.a11y.playAudio}
          >
            <Ionicons name="volume-high" size={28} color={Colors.primaryAccentColor} />
            <ThemedText style={styles.listenLabel}>{T.freeText.listen}</ThemedText>
          </TouchableOpacity>
        ) : null}

        {passage ? (
          <View style={styles.passageCard}>
            <ThemedText style={styles.passageText}>{passage}</ThemedText>
          </View>
        ) : null}

        {prompt ? (
          <ThemedText style={styles.prompt}>{prompt}</ThemedText>
        ) : null}

        <Animated.View style={wiggleStyle}>
          <TextInput
            style={[
              styles.input,
              answered && (isCorrect ? styles.inputCorrect : styles.inputWrong),
            ]}
            value={value}
            onChangeText={setValue}
            editable={!answered}
            placeholder={T.freeText.placeholder}
            placeholderTextColor={Colors.subduedTextColor}
            multiline
            autoCapitalize="sentences"
            autoCorrect={false}
            onSubmitEditing={handleCheck}
            accessibilityLabel={instruction}
          />
        </Animated.View>

        {hint && !answered ? (
          <View style={styles.hintContainer}>
            <ThemedText style={styles.hintText}>
              {T.practice.hintLabel}: {hint}
            </ThemedText>
          </View>
        ) : null}

        {answered ? (
          <View
            style={[
              styles.feedback,
              isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
            ]}
          >
            <ThemedText
              style={[
                styles.feedbackTitle,
                isCorrect ? styles.textCorrect : styles.textWrong,
              ]}
            >
              {isCorrect ? T.freeText.correct : `${T.freeText.incorrect}:`}
            </ThemedText>
            {!isCorrect ? (
              <ThemedText style={styles.feedbackAnswer}>{answer}</ThemedText>
            ) : null}
            {explanation ? (
              <ThemedText style={styles.feedbackExplanation}>
                {explanation}
              </ThemedText>
            ) : null}
          </View>
        ) : null}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.actionButton,
          {
            backgroundColor:
              answered || canCheck
                ? Colors.primaryAccentColor
                : Colors.surfaceTertiary,
          },
        ]}
        onPress={answered ? () => onAnswer(isCorrect) : handleCheck}
        disabled={!answered && !canCheck}
        activeOpacity={0.85}
      >
        <ThemedText
          style={[
            styles.actionButtonText,
            {
              color:
                answered || canCheck
                  ? Colors.textInverse
                  : Colors.subduedTextColor,
            },
          ]}
        >
          {answered ? T.common.continue : T.common.check}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  scrollContent: { paddingBottom: 16 },
  instruction: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    textAlign: "center",
    marginBottom: 18,
    marginTop: 12,
  },
  listenButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 20,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    borderColor: Colors.primaryAccentColor,
    backgroundColor: Colors.primaryAccentBg,
    marginBottom: 16,
  },
  listenLabel: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
    color: Colors.primaryAccentColor,
  },
  passageCard: {
    backgroundColor: Colors.surfaceSecondary,
    padding: 16,
    borderRadius: Radius.lg,
    marginBottom: 16,
  },
  passageText: {
    fontFamily: FontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textPrimary,
  },
  prompt: {
    fontFamily: FontFamily.semibold,
    fontSize: 17,
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  input: {
    minHeight: 72,
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
  inputCorrect: {
    borderColor: Colors.successColor,
    backgroundColor: Colors.successBg,
  },
  inputWrong: {
    borderColor: Colors.errorColor,
    backgroundColor: Colors.errorBg,
  },
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
  feedback: {
    marginTop: 16,
    padding: 14,
    borderRadius: Radius.lg,
  },
  feedbackCorrect: { backgroundColor: Colors.successBg },
  feedbackWrong: { backgroundColor: Colors.errorBg },
  feedbackTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    marginBottom: 4,
  },
  textCorrect: { color: Colors.successColor },
  textWrong: { color: Colors.errorColor },
  feedbackAnswer: {
    fontFamily: FontFamily.bold,
    fontSize: 17,
    color: Colors.textPrimary,
  },
  feedbackExplanation: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 6,
    lineHeight: 19,
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
