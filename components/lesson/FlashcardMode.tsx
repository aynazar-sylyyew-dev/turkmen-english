import { FlashcardOption } from "@/constants/CourseData";
import { Colors, FontFamily } from "@/constants/theme";
import { haptics } from "@/lib/haptics";
import { T } from "@/lib/strings";
import Ionicons from "@expo/vector-icons/Ionicons";
import { speak } from "@/lib/tts";
import { useEffect, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
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

export default function FlashcardMode({
  target,
  transliteration,
  instruction,
  options,
  correctOptionId,
  onAnswer,
}: {
  target: string;
  /** Absent for languages that need no pronunciation aid (e.g. English). */
  transliteration?: string;
  instruction: string;
  options: FlashcardOption[];
  correctOptionId: number;
  onAnswer: (correct: boolean) => void;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const wiggle = useSharedValue(0);

  const wiggleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: wiggle.value }],
  }));

  useEffect(() => {
    if (answered && selectedId !== correctOptionId) {
      wiggle.value = withSequence(
        withTiming(-10, { duration: 60 }),
        withTiming(10, { duration: 60 }),
        withTiming(-8, { duration: 60 }),
        withTiming(8, { duration: 60 }),
        withTiming(0, { duration: 60 }),
      );
    }
  }, [answered]);

  const handleSelect = (id: number) => {
    if (answered) return;
    haptics.tap();
    setSelectedId(id);
  };

  const handleCheck = () => {
    if (selectedId === null || answered) return;
    setAnswered(true);
  };

  const handleContinue = () => {
    onAnswer(selectedId === correctOptionId);
  };

  const playAudio = () => {
    speak(target);
  };

  const getOptionStyle = (id: number) => {
    if (!answered) {
      return id === selectedId
        ? { borderColor: Colors.primaryAccentColor, backgroundColor: Colors.primaryAccentBg }
        : { borderColor: Colors.borderColor, backgroundColor: Colors.surfacePrimary };
    }
    if (id === correctOptionId) {
      return {
        borderColor: Colors.successColor,
        backgroundColor: Colors.successBg,
      };
    }
    if (id === selectedId && id !== correctOptionId) {
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
      <Animated.View style={[styles.wordSection, wiggleStyle]}>
        <TouchableOpacity onPress={playAudio} style={styles.speakerButton} accessibilityRole="button" accessibilityLabel={T.a11y.playAudio}>
          <Ionicons name="volume-high" size={22} color={Colors.primaryAccentColor} />
        </TouchableOpacity>
        <ThemedText style={styles.targetText}>{target}</ThemedText>
        {transliteration ? (
          <ThemedText style={styles.transliterationText}>{transliteration}</ThemedText>
        ) : null}
      </Animated.View>

      <ThemedText style={styles.instruction}>{instruction}</ThemedText>

      <ScrollView
        style={styles.optionsScroll}
        contentContainerStyle={styles.optionsGrid}
        showsVerticalScrollIndicator={false}
      >
        {options.map((option) => (
          <Pressable
            key={option.id}
            style={[styles.optionCard, getOptionStyle(option.id)]}
            onPress={() => handleSelect(option.id)}
            disabled={answered}
          >
            <ThemedText style={styles.optionTranslation}>{option.translation}</ThemedText>
            {answered && option.transliteration ? (
              <ThemedText style={styles.optionTransliteration}>{option.transliteration}</ThemedText>
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.actionButton,
          {
            backgroundColor:
              selectedId === null
                ? Colors.surfaceTertiary
                : Colors.primaryAccentColor,
          },
        ]}
        onPress={answered ? handleContinue : handleCheck}
        disabled={selectedId === null}
        activeOpacity={0.85}
      >
        <ThemedText
          style={[
            styles.actionButtonText,
            { color: selectedId === null ? Colors.subduedTextColor : Colors.textInverse },
          ]}
        >
          {answered ? T.common.continue : T.common.check}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  wordSection: {
    alignItems: "center",
    paddingVertical: 28,
    backgroundColor: Colors.primaryAccentBg,
    borderRadius: 18,
    marginBottom: 18,
  },
  speakerButton: { marginBottom: 8 },
  targetText: {
    fontFamily: FontFamily.bold,
    fontSize: 52,
    lineHeight: 60,
    color: Colors.primaryAccentColor,
    marginBottom: 4,
  },
  transliterationText: {
    fontFamily: FontFamily.medium,
    fontSize: 18,
    color: Colors.textSecondary,
  },
  instruction: {
    fontFamily: FontFamily.medium,
    fontSize: 14,
    color: Colors.subduedTextColor,
    textAlign: "center",
    marginBottom: 16,
  },
  optionsScroll: { flex: 1 },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  optionCard: {
    width: "47%",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 76,
  },
  optionTranslation: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    textAlign: "center",
  },
  optionTransliteration: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.subduedTextColor,
    marginTop: 4,
    textAlign: "center",
  },
  actionButton: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  actionButtonText: {
    fontFamily: FontFamily.semibold,
    fontSize: 16,
  },
});
