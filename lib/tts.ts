import * as Speech from "expo-speech";

/**
 * BCP-47 tag of the language this course teaches, as the speech engine wants
 * it. This is the ONE line a fork of this template changes — every spoken
 * prompt in the app goes through `speak()` below, so there is no second place
 * where a stale locale can hide.
 */
export const TTS_LANGUAGE = "en-US";

interface SpeakOptions {
  /** 1.0 is the engine default; lower is slower. */
  rate?: number;
  onDone?: () => void;
  onStopped?: () => void;
  onError?: () => void;
}

/** Speak a phrase in the taught language. */
export function speak(text: string, options: SpeakOptions = {}): void {
  Speech.speak(text, { language: TTS_LANGUAGE, ...options });
}

/** Cancel whatever is currently being spoken. Safe to call when idle. */
export function stopSpeaking(): void {
  Speech.stop();
}
