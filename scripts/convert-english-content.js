/**
 * Convert the English course's TypeScript lessons into this app's course data.
 *
 *   node scripts/convert-english-content.js [--donor <path>] [--dry]
 *
 * The donor (turkmen-english/app) stores 80 lessons as typed TS modules with no
 * engine imports, so each file is loaded as a plain object literal rather than
 * scraped with regexes — 1163 steps is far too many to hand-check a regex over.
 *
 * Nothing about the English teaching material is rewritten here except the two
 * known content defects listed in DEFECT_FIXES, each of which is reported.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const REPO = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const argValue = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const DONOR = path.resolve(
  argValue("--donor", String.raw`C:\Users\seydi\turkmen-english\app\src\content`),
);
const DRY = args.includes("--dry");
const OUT_JSON = path.join(REPO, "assets", "data", "course_content.json");
const OUT_THEORY = path.join(REPO, "assets", "data", "theory_content.ts");

// ---------------------------------------------------------------- loading

/** Strip the type-only import and the annotated `export const` prefix. */
function evalModuleLiteral(src, bindingPattern) {
  const withoutImports = src.replace(/^\s*import[^\n]*\n/gm, "");
  const m = withoutImports.match(bindingPattern);
  if (!m) throw new Error("could not find the exported literal");
  return vm.runInNewContext("(" + m[1].trim().replace(/;\s*$/, "") + ")", Object.create(null));
}

const LESSON_BINDING =
  /export\s+const\s+[A-Za-z0-9_$]+\s*:\s*[A-Za-z0-9_$<>[\]|\s]+=\s*([\s\S]*)$/;
const UNITS_BINDING =
  /export\s+const\s+units\s*:\s*[A-Za-z0-9_$<>[\]|\s]+=\s*([\s\S]*?);\s*$/;

function loadUnits() {
  return evalModuleLiteral(
    fs.readFileSync(path.join(DONOR, "units.ts"), "utf8"),
    UNITS_BINDING,
  );
}

function loadLesson(lessonId) {
  const [section, lesson] = lessonId.split(".");
  const file = path.join(DONOR, `section-${section}`, `lesson-${section}-${lesson}.ts`);
  return evalModuleLiteral(fs.readFileSync(file, "utf8"), LESSON_BINDING);
}

// ------------------------------------------------------------ defect fixes

/**
 * The two corrupted exercises in unit 12. Both were copy-pasted from a
 * regular-verb drill and ended up instructing the learner AWAY from the verb
 * the sentence needs, with a matching wrong answer. Keyed by lesson/step id;
 * the converter fails loudly if one stops matching, so a silent no-op is
 * impossible.
 */
const DEFECT_FIXES = {
  "12.1/e2": {
    expect: { answer: "looked" },
    apply: (step) => ({
      ...step,
      prompt: "She ___ a song. (sing)",
      answer: "sang",
      acceptableAnswers: undefined,
      hint: "sing — nädogry işlik.",
      explanation: "sing → sang.",
    }),
    why: 'answer was "looked" and the prompt told the learner to avoid "sing"',
  },
  "12.3/e5": {
    expect: { answer: "came" },
    apply: (step) => ({
      ...step,
      prompt: "They ___ football yesterday. (play)",
      answer: "played",
      explanation: "play → played.",
    }),
    why: 'answer was "came" while the sentence needs the verb "play"',
  },
};

// -------------------------------------------------------------- conversion

const report = {
  donorTypes: {},
  outputTypes: {},
  converted: [],
  defectsFixed: [],
  warnings: [],
};

let nextId = 1;

function convertStep(step, lessonId) {
  const id = nextId++;
  const base = { id };
  const keep = (value) => (value === undefined ? undefined : value);

  switch (step.type) {
    case "theory":
      return {
        ...base,
        type: "theory",
        title: step.title,
        body: step.body,
        examples: keep(step.examples),
        note: keep(step.note),
        emoji: keep(step.emoji),
      };

    case "writing":
      return {
        ...base,
        type: "writing",
        prompt: step.prompt,
        minWords: keep(step.minWords),
        placeholder: keep(step.placeholder),
        hint: keep(step.hint),
      };

    case "fill-blank":
      return {
        ...base,
        type: "fill_blank",
        instruction: step.prompt,
        correctAnswer: step.answer,
        acceptableAnswers: keep(step.acceptableAnswers),
        hint: keep(step.hint),
        explanation: keep(step.explanation),
      };

    // No picture assets and no audio in this iteration, so both fold into a
    // typed answer. The emoji / spoken word MUST survive into the prompt —
    // "what is in the picture?" and "which word did you hear?" are
    // unanswerable without them.
    case "qa-by-picture":
      report.converted.push(`${lessonId}/${step.id}: qa-by-picture → fill_blank`);
      return {
        ...base,
        type: "fill_blank",
        instruction: step.emoji ? `${step.emoji}\n${step.prompt}` : step.prompt,
        correctAnswer: step.answer,
        acceptableAnswers: keep(step.acceptableAnswers),
        hint: keep(step.hint),
        explanation: keep(step.explanation),
      };

    case "listening":
      report.converted.push(`${lessonId}/${step.id}: listening → fill_blank`);
      return {
        ...base,
        type: "fill_blank",
        instruction: step.prompt ? `«${step.text}» — ${step.prompt}` : step.text,
        correctAnswer: step.answer,
        acceptableAnswers: keep(step.acceptableAnswers),
        hint: keep(step.hint),
        explanation: keep(step.explanation),
      };

    case "multiple-choice":
      return {
        ...base,
        type: "text_choice",
        prompt: step.prompt,
        options: step.options,
        correctIndex: step.correctIndex,
        explanation: keep(step.explanation),
      };

    case "odd-one-out":
      return {
        ...base,
        type: "odd_one_out",
        prompt: step.prompt,
        options: step.options,
        correctIndex: step.correctIndex,
        explanation: keep(step.explanation),
      };

    case "reading":
      return {
        ...base,
        type: "reading",
        text: step.text,
        prompt: step.prompt,
        answer: step.answer,
        acceptableAnswers: keep(step.acceptableAnswers),
        hint: keep(step.hint),
        explanation: keep(step.explanation),
      };

    case "transformation":
      return {
        ...base,
        type: "transformation",
        instruction: step.instruction,
        input: step.input,
        answer: step.answer,
        acceptableAnswers: keep(step.acceptableAnswers),
        hint: keep(step.hint),
        explanation: keep(step.explanation),
      };

    case "matching":
      return {
        ...base,
        type: "match_pairs",
        instruction: step.prompt,
        pairs: step.pairs.map((p, i) => ({ id: i + 1, left: p.left, right: p.right })),
      };

    default:
      throw new Error(`${lessonId}/${step.id}: unhandled donor type "${step.type}"`);
  }
}

function stripUndefined(value) {
  if (Array.isArray(value)) return value.map(stripUndefined);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => [k, stripUndefined(v)]),
    );
  }
  return value;
}

function build() {
  const units = loadUnits();
  const chapters = units.map((unit) => ({
    id: unit.id,
    title: unit.title,
    description: unit.description,
    lessons: unit.lessons.map((lessonMeta) => {
      const content = loadLesson(lessonMeta.id);
      if (content.lessonId !== lessonMeta.id) {
        throw new Error(
          `units.ts says ${lessonMeta.id} but the file declares ${content.lessonId}`,
        );
      }

      const questions = content.steps.map((rawStep) => {
        report.donorTypes[rawStep.type] = (report.donorTypes[rawStep.type] || 0) + 1;

        const key = `${lessonMeta.id}/${rawStep.id}`;
        let step = rawStep;
        const fix = DEFECT_FIXES[key];
        if (fix) {
          for (const [field, expected] of Object.entries(fix.expect)) {
            if (step[field] !== expected) {
              throw new Error(
                `${key}: expected ${field}="${expected}" before fixing, found "${step[field]}". ` +
                  `The donor changed — re-check the defect before converting.`,
              );
            }
          }
          step = fix.apply(step);
          report.defectsFixed.push(`${key}: ${fix.why}`);
        }

        const converted = convertStep(step, lessonMeta.id);
        report.outputTypes[converted.type] = (report.outputTypes[converted.type] || 0) + 1;
        return converted;
      });

      return {
        id: lessonMeta.id,
        title: lessonMeta.title,
        questions,
      };
    }),
  }));

  return { chapters, scenarios: [] };
}

// -------------------------------------------------------------- validation

const FOLDED_INTO_FILL_BLANK = ["fill-blank", "qa-by-picture", "listening"];
const EXPECTED_MAPPING = {
  fill_blank: FOLDED_INTO_FILL_BLANK,
  theory: ["theory"],
  writing: ["writing"],
  text_choice: ["multiple-choice"],
  odd_one_out: ["odd-one-out"],
  reading: ["reading"],
  transformation: ["transformation"],
  match_pairs: ["matching"],
};

function validate(course) {
  const problems = [];

  const donorTotal = Object.values(report.donorTypes).reduce((a, b) => a + b, 0);
  const outTotal = Object.values(report.outputTypes).reduce((a, b) => a + b, 0);
  if (donorTotal !== outTotal) {
    problems.push(`step count changed: ${donorTotal} in, ${outTotal} out`);
  }

  for (const [outType, donorTypes] of Object.entries(EXPECTED_MAPPING)) {
    const expected = donorTypes.reduce((sum, t) => sum + (report.donorTypes[t] || 0), 0);
    const actual = report.outputTypes[outType] || 0;
    if (expected !== actual) {
      problems.push(
        `${outType}: expected ${expected} (from ${donorTypes.join(" + ")}), got ${actual}`,
      );
    }
  }

  const ids = [];
  let lessonCount = 0;
  for (const ch of course.chapters) {
    for (const lesson of ch.lessons) {
      lessonCount++;
      for (const q of lesson.questions) ids.push(q.id);
      const graded = lesson.questions.filter(
        (q) => q.type !== "theory" && q.type !== "writing",
      ).length;
      if (graded === 0) {
        problems.push(`${lesson.id}: no graded questions — its chapter cannot be examined`);
      }
    }
    const chapterGraded = ch.lessons
      .flatMap((l) => l.questions)
      .filter((q) => q.type !== "theory" && q.type !== "writing").length;
    if (chapterGraded < 15) {
      report.warnings.push(
        `chapter ${ch.id}: only ${chapterGraded} graded questions, exam asks for 15`,
      );
    }
  }
  if (new Set(ids).size !== ids.length) problems.push("question ids are not unique");
  if (course.chapters.length !== 20) problems.push(`expected 20 chapters, got ${course.chapters.length}`);
  if (lessonCount !== 80) problems.push(`expected 80 lessons, got ${lessonCount}`);

  // Every typed answer must actually have something to check against.
  for (const ch of course.chapters) {
    for (const lesson of ch.lessons) {
      for (const q of lesson.questions) {
        const answer =
          q.type === "fill_blank" ? q.correctAnswer
          : q.type === "reading" || q.type === "transformation" ? q.answer
          : null;
        if (answer !== null && (typeof answer !== "string" || answer.trim() === "")) {
          problems.push(`${lesson.id} q${q.id} (${q.type}): empty answer`);
        }
        if ((q.type === "text_choice" || q.type === "odd_one_out") &&
            (q.correctIndex < 0 || q.correctIndex >= q.options.length)) {
          problems.push(`${lesson.id} q${q.id}: correctIndex out of range`);
        }
      }
    }
  }

  return problems;
}

// -------------------------------------------------------------------- main

function main() {
  const course = stripUndefined(build());
  const problems = validate(course);

  console.log("=== donor ===");
  for (const [t, n] of Object.entries(report.donorTypes).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${t.padEnd(16)} ${n}`);
  }
  console.log(
    `  ${"TOTAL".padEnd(16)} ${Object.values(report.donorTypes).reduce((a, b) => a + b, 0)}`,
  );

  console.log("\n=== output ===");
  for (const [t, n] of Object.entries(report.outputTypes).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${t.padEnd(16)} ${n}`);
  }
  console.log(
    `  ${"TOTAL".padEnd(16)} ${Object.values(report.outputTypes).reduce((a, b) => a + b, 0)}`,
  );

  console.log(`\n=== folded into fill_blank (${report.converted.length}) ===`);
  report.converted.forEach((c) => console.log("  " + c));

  console.log(`\n=== content defects fixed (${report.defectsFixed.length}) ===`);
  report.defectsFixed.forEach((d) => console.log("  " + d));

  if (report.warnings.length) {
    console.log(`\n=== warnings (${report.warnings.length}) ===`);
    report.warnings.forEach((w) => console.log("  " + w));
  }

  console.log(
    `\nchapters: ${course.chapters.length}  lessons: ${course.chapters.reduce(
      (n, c) => n + c.lessons.length,
      0,
    )}`,
  );

  if (problems.length) {
    console.log(`\nFAILED — ${problems.length} problem(s), nothing written:`);
    problems.forEach((p) => console.log("  - " + p));
    process.exit(1);
  }

  if (DRY) {
    console.log("\n--dry: validation passed, no files written.");
    return;
  }

  fs.writeFileSync(OUT_JSON, JSON.stringify(course, null, 2) + "\n", "utf8");

  // The theory pager is not populated in this iteration; the step engine
  // tolerates a chapter having no theory sections. Written explicitly so no
  // Chinese scaffolding survives the conversion.
  fs.writeFileSync(
    OUT_THEORY,
    `// Theory pager content, keyed by chapter id.\n` +
      `//\n` +
      `// The English course teaches through short explanations inside each lesson\n` +
      `// feed (question type "theory"), so the separate pager carries nothing yet.\n` +
      `// buildChapterSteps simply emits no theory steps while this is empty.\n\n` +
      `export interface TheoryWord {\n  target: string;\n  transliteration?: string;\n  translation: string;\n}\n\n` +
      `export interface GrammarExample {\n  target: string;\n  transliteration?: string;\n  translation: string;\n}\n\n` +
      `export interface DialogueLine {\n  speaker: string;\n  target: string;\n  transliteration?: string;\n  translation: string;\n}\n\n` +
      `export interface TheoryGrammar {\n  title: string;\n  explanation: string;\n  examples: GrammarExample[];\n}\n\n` +
      `export interface TheoryChapter {\n  introduction: string;\n  vocabulary: TheoryWord[];\n  grammar: TheoryGrammar[];\n  dialogues: { title: string; lines: DialogueLine[] }[];\n  tips: string[];\n}\n\n` +
      `export const THEORY_DATA: Record<number, TheoryChapter> = {};\n`,
    "utf8",
  );

  console.log(`\nwrote ${path.relative(REPO, OUT_JSON)}`);
  console.log(`wrote ${path.relative(REPO, OUT_THEORY)}`);
}

main();
