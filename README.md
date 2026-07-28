# Iňlis dili 1

A mobile app for learning English (A1 level) with a fully Turkmen interface. Part of a family of language-learning apps that share one design. Built with React Native + Expo.

Package: `com.turkmenlearn.english`.

## Features

- A course of **20 chapters**, **80 lessons** (4 per chapter), **1163 learning steps**.
- Eight task types: theory, fill in the blank, multiple choice, odd one out, reading, match pairs, sentence transformation, and free writing.
- End-of-chapter exam: 15 questions, **70%** pass threshold, "sticky" pass (a failed retake never revokes an exam you already passed).
- Chapter locks: the next chapter unlocks only after you pass the previous chapter's exam.
- Progress: XP, day streak, completion counters.
- Text-to-speech for listening tasks via `expo-speech`.
- Backup export/import of your progress from Settings.
- Onboarding with name entry, "About the app" and "About English" screens, settings.
- The entire UI and content are in Turkmen.

## Tech stack

- Expo SDK 54, React Native 0.81, React 19
- expo-router (file-based routing, typed routes)
- TypeScript
- AsyncStorage for local progress
- Jest for tests

## Getting started (development)

Requires Node.js and a running Android/iOS emulator (or a physical device with Expo Go).

```bash
npm install
npx expo start
```

Then, in the Metro terminal: `a` — Android, `i` — iOS, `w` — web.

> On start, Expo Go shows a red `expo-notifications` warning about push notifications. This is an Expo Go limitation (SDK 53+), not an app error — notifications work in a built APK. Press Dismiss and continue.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Start Metro (Expo) |
| `npm run android` / `npm run ios` | Run a native build |
| `npm run typecheck` | Type checking (tsc) |
| `npm run lint` | ESLint |
| `npm test` | Tests (Jest) |
| `npm run ci` | typecheck + lint + test |

## Project structure

```
app/                  screens (expo-router)
  (tabs)/             tabs: home, profile
  onboarding.tsx      name entry
  chapters.tsx        chapter list
  chapter-detail.tsx  chapter step feed
  chapter-test.tsx    chapter exam
  practise.tsx        single-step runner
  settings.tsx        settings, backup
  about-*.tsx         reference screens
lib/                  AsyncStorage engine: progress, XP,
                      streak, exams, grading, TTS, backup
constants/            content schema (CourseData.ts) and more
assets/data/          course_content.json — the course (20 chapters)
scripts/              helper scripts
components/, hooks/   reusable UI and hooks
```

## Contributing

Contributions are welcome.

1. Fork the repository and create a branch.
2. `npm install`
3. Make your change.
4. Run `npm run ci` (type checking + lint + tests) — it must pass.
5. Open a pull request.

## Privacy

The app stores your progress only on your device. No analytics key is configured, so nothing is sent anywhere.
