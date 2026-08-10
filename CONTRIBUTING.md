# Goşant

Salam! Bu goşunda goşant goşmak isleýändigiňiz üçin sag boluň. Bu ýerde iň möhüm düzgünler, şol sanda terjime düzgüni hem düşündirilýär.

## Gurnama

1. Repozitoriýany fork ediň we branch dörediň.
2. `npm install`
3. `npx expo start`

## Pull Request-den öň

`npm run ci` işlediň (typecheck + lint + testler) — hemmesi geçmeli.

## Iň möhüm düzgün: terjime

Bu goşundy iňlis dilini öwredýär. Terjimeçi ýalňyş meýdany üýtgetse, sapaklar sessiz bozulýar.

`assets/data/course_content.json` meýdanlary:

**Terjime ediň:**

- bap ady, düşündirişi
- sapak ady
- `theory.body`
- `explanation`

**Asla degmäň:**

- `correctAnswer` — iňlis jogaby, terjime etseň bahalandyrma bozulýar
- `acceptableAnswers` — iňlis jogap wariantlary, terjime etseň bahalandyrma bozulýar
- `audioText` — goşundynyň aýdýan iňlis sözi, terjime etseň diktant bozulýar
- `answer` — iňlis jogaby
- `options` — iňlis wariantlar, olaryň özleri türgenleşik
- `pairs` (left / right) — iňlis söz jübütleri, meselem `cat → cats`
- `text` — okamak böleginiň iňlis teksti
- `examples` — iňlis jübütleri, meselem `cat → cats`
- `instruction` içindäki iňlis bölegi, meselem `cat →`

Türkmen — mugallymyň sesi. Iňlis — öwredilýän material.

## Interfeýs setirleri

Interfeýs setirleriniň köpüsi bir faýlda ýerleşýär: `lib/strings.ts`. Ýöne about / onboarding / profile ekranlary öz tekstlerini öz içinde saklaýar (about-app.tsx, about-english.tsx, onboarding.tsx, profile.tsx we ş.m.).

## Bellikler

- `good first issue` — täze gelenler üçin amatly meseleler.
- `translation` — terjime meseleleri, bu gollanma üçin esasy bellik.
- `documentation` — diňe resminama üýtgeşmeleri, täze gelenler belligi däl.

---

# English

Hello! Thanks for wanting to contribute. This guide covers the most important rules, including the translation rule that matters most for this repository.

## Setup

1. Fork the repository and create a branch.
2. `npm install`
3. `npx expo start`

## Before a pull request

Run `npm run ci` (typecheck + lint + tests) — it must pass.

## The rule that matters most: translating

This app teaches English. A translator who edits the wrong field silently breaks the lessons.

Fields in `assets/data/course_content.json`:

**Translate:**

- chapter title, description
- lesson title
- `theory.body`
- `explanation`

**Never touch:**

- `correctAnswer` — English answer; translating it breaks grading
- `acceptableAnswers` — English answer variants; translating breaks grading
- `audioText` — the English word the app speaks; translating breaks the dictation task
- `answer` — English answer
- `options` — English variants; together with correctIndex they are the exercise
- `pairs` (left / right) — English word pairs, e.g. `cat → cats`
- `text` — the reading passage itself
- `examples` — English pairs like `cat → cats`
- the English fragment inside `instruction`, for example `cat →`

The Turkmen is the teacher's voice. The English is the material being taught.

## Interface strings

Most interface strings live in one file: `lib/strings.ts`. The about / onboarding / profile screens keep their own text (about-app.tsx, about-english.tsx, onboarding.tsx, profile.tsx, etc.).

## Labels

- `good first issue` — tasks suitable for newcomers ("Good for newcomers").
- `translation` — translation tasks; the label relevant for this guide.
- `documentation` — the change is about docs only, not a newcomer marker.
