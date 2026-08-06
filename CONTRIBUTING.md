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

| Terjime ediň | Asla degmäň |
| --- | --- |
| bap ady, düşündirişi | `correctAnswer` |
| sapak ady | `examples` — bular iňlis jübütleri, meselem `cat → cats` |
| `theory.body` | okamak soraglarynyň iňlis teksti |
| `explanation` | `instruction` içindäki iňlis bölegi, meselem `cat →` |

Türkmen — mugallymyň sesi. Iňlis — öwredilýän material.

## Interfeýs setirleri

Interfeýsiň ähli setirleri bir faýlda ýerleşýär: `lib/strings.ts`.

## Täze gelenler üçin

Täze gelenler üçin niýetlenen meseleler `documentation` belligi bilen bellenendir.

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

| Translate | Never touch |
| --- | --- |
| chapter title, description | `correctAnswer` |
| lesson title | `examples` — these are English pairs like `cat → cats` |
| `theory.body` | the English text of reading questions |
| `explanation` | the English fragment inside `instruction`, for example `cat →` |

The Turkmen is the teacher's voice. The English is the material being taught.

## Interface strings

All interface strings live in one file: `lib/strings.ts`.

## Tasks for newcomers

Issues labeled `documentation` are meant for newcomers.
