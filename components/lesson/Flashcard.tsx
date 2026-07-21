import { Word } from "@/constants/CourseData";
import { Colors, FontFamily } from "@/constants/theme";
import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

export default function Flashcard({
  word,
  direction,
}: {
  word: Word;
  direction: "translation-first" | "target-first";
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setIsFlipped(false);
  };

  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setIsFlipped(true);
  };

  const FrontContent = () => {
    if (direction === "translation-first") {
      return (
        <ThemedText style={styles.translationFront}>{word.translation}</ThemedText>
      );
    }

    return (
      <View style={styles.phraseContent}>
        <ThemedText style={styles.transliteration}>{word.transliteration}</ThemedText>
        <ThemedText style={styles.target}>{word.target}</ThemedText>
      </View>
    );
  };

  const BackContent = () => {
    if (direction === "translation-first") {
      return (
        <View style={styles.phraseContent}>
          <ThemedText style={[styles.transliteration, styles.phraseBackText]}>
            {word.transliteration}
          </ThemedText>
          <ThemedText style={[styles.target, styles.phraseBackText]}>
            {word.target}
          </ThemedText>
        </View>
      );
    }

    return (
      <ThemedText style={[styles.translationBack, styles.phraseBackText]}>
        {word.translation}
      </ThemedText>
    );
  };

  return (
    <Pressable onPress={isFlipped ? flipToFront : flipToBack}>
      <View>
        <Animated.View
          style={[styles.card, styles.cardFront, frontAnimatedStyle]}
        >
          {FrontContent()}
        </Animated.View>
        <Animated.View
          style={[styles.card, styles.cardBack, backAnimatedStyle]}
        >
          {BackContent()}
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    maxHeight: 440,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    borderRadius: 24,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  cardFront: {
    backgroundColor: Colors.surfacePrimary,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  cardBack: {
    backgroundColor: Colors.primaryAccentColor,
    position: "absolute",
    top: 0,
  },
  phraseContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  transliteration: {
    fontFamily: FontFamily.semibold,
    fontSize: 36,
    lineHeight: 44,
    color: Colors.textSecondary,
    textAlign: "center",
    maxWidth: "90%",
  },
  target: {
    fontFamily: FontFamily.bold,
    fontSize: 56,
    lineHeight: 64,
    color: Colors.primaryAccentColor,
    textAlign: "center",
    maxWidth: "90%",
  },
  phraseBackText: {
    color: Colors.textInverse,
  },
  translationFront: {
    fontFamily: FontFamily.semibold,
    fontSize: 32,
    lineHeight: 40,
    color: Colors.textPrimary,
    textAlign: "center",
    maxWidth: "90%",
  },
  translationBack: {
    fontFamily: FontFamily.medium,
    fontSize: 30,
    lineHeight: 38,
    color: Colors.textInverse,
    textAlign: "center",
    maxWidth: "90%",
  },
});
