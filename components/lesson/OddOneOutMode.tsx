import { Colors, FontFamily, Radius } from "@/constants/theme";
import { haptics } from "@/lib/haptics";
import { T } from "@/lib/strings";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "../themed-text";

/**
 * "Which one doesn't belong" — plain text options, correct answer addressed by
 * index. Structurally the simplest choice exercise in the course: unlike
 * multiple_choice it has no audio, no phrase and no per-option translation.
 */
export default function OddOneOutMode({
  prompt,
  options,
  correctIndex,
  explanation,
  onAnswer,
}: {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  onAnswer: (correct: boolean) => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const wiggle = useSharedValue(0);

  const isCorrect = selectedIndex === correctIndex;

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

  const handleSelect = (index: number) => {
    if (answered) return;
    haptics.tap();
    setSelectedIndex(index);
  };

  const handleCheck = () => {
    if (selectedIndex === null || answered) return;
    if (selectedIndex === correctIndex) haptics.success();
    else haptics.error();
    setAnswered(true);
  };

  const optionStyle = (index: number) => {
    if (!answered) {
      return index === selectedIndex
        ? {
            borderColor: Colors.primaryAccentColor,
            backgroundColor: Colors.primaryAccentBg,
          }
        : { borderColor: Colors.borderColor, backgroundColor: Colors.surfacePrimary };
    }
    if (index === correctIndex) {
      return { borderColor: Colors.successColor, backgroundColor: Colors.successBg };
    }
    if (index === selectedIndex) {
      return {
        borderColor: Colors.primaryAccentColor,
        backgroundColor: Colors.primaryAccentBg,
      };
    }
    return {
      borderColor: Colors.borderColor,
      backgroundColor: Colors.surfacePrimary,
      opacity: 0.5,
    };
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.prompt}>{prompt}</ThemedText>

      <Animated.View style={[styles.optionsGrid, wiggleStyle]}>
        {options.map((option, index) => (
          <Pressable
            key={index}
            style={[styles.optionCard, optionStyle(index)]}
            onPress={() => handleSelect(index)}
            disabled={answered}
            accessibilityRole="button"
          >
            <ThemedText style={styles.optionText}>{option}</ThemedText>
          </Pressable>
        ))}
      </Animated.View>

      {answered && explanation ? (
        <View style={styles.explanationBox}>
          <ThemedText style={styles.explanationText}>{explanation}</ThemedText>
        </View>
      ) : null}

      <View style={styles.spacer} />

      <TouchableOpacity
        style={[
          styles.actionButton,
          {
            backgroundColor:
              selectedIndex === null
                ? Colors.surfaceTertiary
                : Colors.primaryAccentColor,
          },
        ]}
        onPress={answered ? () => onAnswer(isCorrect) : handleCheck}
        disabled={selectedIndex === null}
        activeOpacity={0.85}
      >
        <ThemedText
          style={[
            styles.actionButtonText,
            {
              color:
                selectedIndex === null
                  ? Colors.subduedTextColor
                  : Colors.textInverse,
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
  prompt: {
    fontFamily: FontFamily.semibold,
    fontSize: 17,
    color: Colors.textPrimary,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 20,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  optionCard: {
    width: "47%",
    padding: 18,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 72,
  },
  optionText: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
    color: Colors.textPrimary,
    textAlign: "center",
  },
  explanationBox: {
    marginTop: 16,
    padding: 14,
    borderRadius: Radius.lg,
    backgroundColor: Colors.surfaceSecondary,
  },
  explanationText: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    lineHeight: 19,
    color: Colors.textSecondary,
  },
  spacer: { flex: 1 },
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
