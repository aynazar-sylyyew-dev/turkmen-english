# Iňlis dili 1

Doly türkmen interfeýsli iňlis dilini öwrenmek üçin mobil goşundy (A1 derejesi). Bir dizaýny paýlaşýan dil öwreniş goşundylary maşgalasynyň bir bölegi. React Native + Expo esasynda guruldy.

Paket: `com.turkmenlearn.english`.

## Aýratynlyklar

- **20 bap**, **80 sapak** (her babda 4), **1163 öwreniş ädimi** bolan kurs.
- Sekiz tabşyryk görnüşi: teoriýa, boş ýeri doldurmak, birnäçe wariantdan saýlamak, artykmajyny tapmak, okamak, jübütleri gabat getirmek, sözlemi özgertmek we erkin ýazmak.
- Babyň ahyryndaky synag: 15 sorag, **70%** geçiş çägi, "sticky" geçiş (şowsuz gaýta tabşyryk öň geçilen synagy ýatyranok).
- Bap gulplary: indiki bap diňe öňki babyň synagyndan geçeniňizden soň açylýar.
- Ösüş: XP, yzygiderli günler, tamamlanma sanawlary.
- Diňlemek tabşyryklary üçin `expo-speech` arkaly text-to-speech.
- Sazlamalardan ösüşiň ätiýaçlyk nusgasyny eksport/import etmek.
- At girizmek bilen onboarding, "Goşundy barada" we "Iňlis dili barada" ekranlary, sazlamalar.
- UI we mazmun doly türkmen dilinde.

## Tehniki stack

- Expo SDK 54, React Native 0.81, React 19
- expo-router (faýl esasyndaky routing, tipli marşrutlar)
- TypeScript
- Ýerlikde ösüş üçin AsyncStorage
- Testler üçin Jest

## Işe başlamak (işläp düzmek)

Node.js we işläp duran Android/iOS emulýatory (ýa-da Expo Go bilen hakyky enjam) gerek.

```bash
npm install
npx expo start
```

Soňra Metro terminalynda: `a` — Android, `i` — iOS, `w` — web.

> Başlanda Expo Go push habarnamalary barada gyzyl `expo-notifications` duýduryşyny görkezýär. Bu Expo Go-nyň çäklendirmesi (SDK 53+), goşundynyň ýalňyşy däl — habarnamalar gurlan APK-da işleýär. Dismiss basyň we dowam ediň.

## Skriptler

| Buýruk | Näme edýär |
| --- | --- |
| `npm start` | Metro-ny başlaýar (Expo) |
| `npm run android` / `npm run ios` | Native build işledýär |
| `npm run typecheck` | Tip barlagy (tsc) |
| `npm run lint` | ESLint |
| `npm test` | Testler (Jest) |
| `npm run ci` | typecheck + lint + test |

## Proýekt gurluşy

```
app/                  ekranlar (expo-router)
  (tabs)/             tablar: baş sahypa, profil
  onboarding.tsx      at girizmek
  chapters.tsx        baplaryň sanawy
  chapter-detail.tsx  babyň ädim lenti
  chapter-test.tsx    babyň synagy
  practise.tsx        ýeke ädim işlediji
  settings.tsx        sazlamalar, ätiýaçlyk nusga
  about-*.tsx         maglumat ekranlary
lib/                  AsyncStorage hereketlendirijisi: ösüş, XP,
                      yzygiderlik, synaglar, bahalandyrma, TTS, ätiýaçlyk nusga
constants/            mazmun shemasy (CourseData.ts) we beýlekiler
assets/data/          course_content.json — kurs (20 bap)
scripts/              kömekçi skriptler
components/, hooks/   gaýtadan ulanylýan UI we hook-lar
```

## Goşant

Goşantlar hoş garşylanýar.

1. Repozitoriýany fork ediň we branch dörediň.
2. `npm install`
3. Üýtgeşmäňizi giriziň.
4. `npm run ci` işlediň (tip barlagy + lint + testler) — ol geçmeli.
5. Pull Request açyň.

## Gizlinlik

Goşundy ösüşiňizi diňe enjamyňyzda saklaýar. Analitika açary sazlanmadyk, şonuň üçin hiç zat hiç ýere iberilmeýär.

---

# English

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
