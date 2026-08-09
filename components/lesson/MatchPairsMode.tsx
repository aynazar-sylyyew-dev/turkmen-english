import { MatchPair } from "@/constants/CourseData";
import { Colors, FontFamily } from "@/constants/theme";
import { haptics } from "@/lib/haptics";
import { T } from "@/lib/strings";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { ThemedText } from "../themed-text";

export default function MatchPairsMode({
  instruction,
  pairs,
  onAnswer,
}: {
  instruction: string;
  pairs: MatchPair[];
  onAnswer: (correct: boolean) => void;
}) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  // Two sets, not one: a left card may legitimately pair with a right card
  // belonging to a different entry when their texts are identical.
  const [matchedLeft, setMatchedLeft] = useState<Set<number>>(new Set());
  const [matchedRight, setMatchedRight] = useState<Set<number>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: number; right: number } | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const wrongAnim = useRef(new Animated.Value(0)).current;

  const shuffledRight = useMemo(() => {
    return [...pairs].sort(() => Math.random() - 0.5);
  }, [pairs]);

  useEffect(() => {
    if (matchedLeft.size === pairs.length && pairs.length > 0) {
      const timer = setTimeout(() => {
        onAnswer(mistakes === 0);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [matchedLeft, pairs.length, mistakes, onAnswer]);

  const handleLeftPress = (id: number) => {
    if (matchedLeft.has(id)) return;
    setSelectedLeft(id);
    setWrongPair(null);

    if (selectedRight !== null) {
      checkMatch(id, selectedRight);
    }
  };

  const handleRightPress = (id: number) => {
    if (matchedRight.has(id)) return;
    setSelectedRight(id);
    setWrongPair(null);

    if (selectedLeft !== null) {
      checkMatch(selectedLeft, id);
    }
  };

  const checkMatch = (leftId: number, rightId: number) => {
    // Compare the VALUES, not the ids. Content deliberately repeats a right
    // side to contrast forms ("I → work", "he → works"), and two cards showing
    // the same word must be interchangeable — otherwise a visually correct
    // choice is scored as a mistake.
    const left = pairs.find((p) => p.id === leftId);
    const right = pairs.find((p) => p.id === rightId);

    if (left && right && left.right === right.right) {
      haptics.success();
      setMatchedLeft((prev) => new Set(prev).add(leftId));
      setMatchedRight((prev) => new Set(prev).add(rightId));
      setSelectedLeft(null);
      setSelectedRight(null);
    } else {
      haptics.error();
      setMistakes((prev) => prev + 1);
      setWrongPair({ left: leftId, right: rightId });
      Animated.sequence([
        Animated.timing(wrongAnim, { toValue: 1, duration: 150, useNativeDriver: true }),
        Animated.timing(wrongAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      ]).start(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
      });
    }
  };

  const getCardStyle = (id: number, side: "left" | "right") => {
    const isMatched =
      side === "left" ? matchedLeft.has(id) : matchedRight.has(id);
    const isWrong = side === "left" ? wrongPair?.left === id : wrongPair?.right === id;
    const isSelected = side === "left" ? selectedLeft === id : selectedRight === id;

    if (isMatched)
      return {
        borderColor: Colors.successColor,
        backgroundColor: Colors.successBg,
        opacity: 0.7,
      };
    if (isWrong)
      return {
        borderColor: Colors.errorColor,
        backgroundColor: Colors.errorBg,
      };
    if (isSelected)
      return {
        borderColor: Colors.primaryAccentColor,
        backgroundColor: Colors.primaryAccentBg,
      };
    return {
      borderColor: Colors.borderColor,
      backgroundColor: Colors.surfacePrimary,
    };
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.instruction}>{instruction}</ThemedText>

      <View style={styles.columnsContainer}>
        <View style={styles.column}>
          {pairs.map((pair) => (
            <Pressable
              key={`left-${pair.id}`}
              style={[styles.card, getCardStyle(pair.id, "left")]}
              onPress={() => handleLeftPress(pair.id)}
              disabled={matchedLeft.has(pair.id)}
            >
              <ThemedText style={styles.cardTarget}>{pair.left}</ThemedText>
              {pair.leftTransliteration && (
                <ThemedText style={styles.cardTransliteration}>{pair.leftTransliteration}</ThemedText>
              )}
            </Pressable>
          ))}
        </View>

        <View style={styles.column}>
          {shuffledRight.map((pair) => (
            <Pressable
              key={`right-${pair.id}`}
              style={[styles.card, getCardStyle(pair.id, "right")]}
              onPress={() => handleRightPress(pair.id)}
              disabled={matchedRight.has(pair.id)}
            >
              <ThemedText style={styles.cardTranslation}>{pair.right}</ThemedText>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.progressContainer}>
        <ThemedText style={styles.progressText}>
          {T.practice.matched(matchedLeft.size, pairs.length)}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  instruction: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    textAlign: "center",
    marginBottom: 18,
    marginTop: 12,
  },
  columnsContainer: { flexDirection: "row", gap: 12, flex: 1 },
  column: { flex: 1, gap: 10 },
  card: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 56,
  },
  cardTarget: {
    fontFamily: FontFamily.bold,
    fontSize: 22,
    color: Colors.primaryAccentColor,
  },
  cardTransliteration: {
    fontFamily: FontFamily.regular,
    fontSize: 12,
    color: Colors.subduedTextColor,
    marginTop: 2,
  },
  cardTranslation: {
    fontFamily: FontFamily.semibold,
    fontSize: 14,
    color: Colors.textPrimary,
    textAlign: "center",
  },
  progressContainer: { alignItems: "center", paddingVertical: 16 },
  progressText: {
    fontFamily: FontFamily.semibold,
    fontSize: 13,
    color: Colors.subduedTextColor,
  },
});
