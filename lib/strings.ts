// ============================================================
// Единый источник всех строк интерфейса (туркменский).
//
// Сюда входит ТОЛЬКО UI-чром: кнопки, лейблы, статусы, заголовки.
// Учебный контент (объяснения, упражнения, переводы слов) сюда НЕ входит —
// он в assets/data/* и туркменизируется командой переводчиков отдельно.
//
// 👉 Команде переводчиков: правьте значения только в этом файле.
// ============================================================

export const T = {
  common: {
    continue: "Dowam et",
    next: "Indiki",
    check: "Barla",
    skip: "Geçir",
  },

  // Экран обратной связи после ответа (FeedbackView)
  feedback: {
    correct: "Berekella!",
    notQuite: "Az-maz ýetmedi",
    keepPractising: "Türgenleşmegi dowam et",
    tryAgainSub: "Ýene synanyş — başararsyň!",
    nextTimeSub: "Indiki gezek şeýle aýt",
    expected: "Garaşylýan jogap",
    youSaid: "Siziň aýdanyňyz",
    correctResponse: "Dogry jogap",
    nextQuestion: "Indiki sorag",
    tryAgainLeft: (n: number) => `Ýene synanyş (${n} qaldy)`,
  },

  // Экран завершения урока (LessonCompleteScreen)
  complete: {
    title: "Sapak tamamlandy!",
    perfExcellent: "Ajaýyp!", // ≥90%
    perfGreat: "Örän gowy!", // ≥75%
    perfGood: "Gowy!", // ≥60%
    perfKeep: "Türgenleşmegi dowam et!", // <60%
    correctCount: (correct: number, total: number) => `${correct}/${total} dogry`,
    inThisLesson: "BU SAPAKDA",
    correctAnswers: (n: number) => `${n} dogry jogap`,
    lessonComplete: "Sapak tamamlandy",
    bonus100: "⭐ 100% bonus",
    reviewTitle: "Gaýtalamak",
    reviewSubtitle: "Şu soraglara üns beriň",
    reviewMistakes: "Ýalňyşlary gaýtala",
  },

  // Шаги главы (Stepik-лента)
  chapters: {
    lessonCount: (n: number) => `${n} sapak`,
  },

  steps: {
    // Лейблы по subtype шага (lookup: T.steps.labels[step.subtype])
    labels: {
      intro: "Giriş",
      vocab: "Sözlük",
      grammar: "Grammatika",
      dialogue: "Dialog",
      practice: "Gönükmeler",
      exam: "Bap synagy",
    } as Record<string, string>,
    progress: (done: number, total: number) => `${done} / ${total} ädim`,
    locked: "Gulp arkasynda",
  },

  // Экзамен главы (Bap synagy) — экран результата с порогом 70%
  exam: {
    passedTitle: "Synag tabşyryldy!",
    failedTitle: "Synagdan geçmediňiz",
    passedMessage: "Indiki baba geçip bilersiňiz.",
    failedMessage: "Geçmek üçin azyndan 70% toplanyňyz gerek. Gaýtadan synanyşyň.",
    scoreLabel: (correct: number, total: number) => `${correct}/${total} dogry`,
    thresholdNote: "Geçiş baly: 70%",
    breakdownTitle: "Bölümler boýunça netijeler",
    bestScore: (pct: number) => `Iň gowy netije: ${pct}%`,
    retake: "Gaýtadan synanyş",
    passBadge: "Geçdiňiz",
    // Названия типов упражнений для разбивки в результатах
    types: {
      single_response: "Gepleýiş",
      multiple_choice: "Köp opsiýaly saýlaw",
      listening_mc: "Diňlemek",
      flashcard: "Kartoçka",
      // Названия совпадающих типов — из донорского exerciseTypes.
      fill_blank: "Boşlugy doldurmak",
      match_pairs: "Jübütleri deňleşdirmek",
      grammar: "Grammatika",
      text_choice: "Wariant saýlamak",
      odd_one_out: "Artykmajy tapmak",
      transformation: "Sözlemi өwürmek",
      reading: "Okamak",
    } as Record<string, string>,
  },

  // Упражнения со свободным вводом и шаги без оценки.
  freeText: {
    placeholder: "Jogabyňyzy ýazyň…",
    listen: "Diňläň we eşideniňizi ýazyň",
    correct: "Dogry",
    incorrect: "Dogry jogap",
    explanation: "Düşündiriş",
  },
  writing: {
    words: (n: number) => `${n} söz`,
    minWords: (n: number) => `Iň az ${n} söz`,
    recorded: "Ýazyldy",
    notAutoChecked:
      "Döredijilikli ýumuşlar awtomatik barlanmaýar — bu diňe türgenleşik üçindir.",
    practiceLater:
      "Bu ýumşa soň dolanyp, ýazuw maşklaryny dowam etdirip bilersiňiz.",
  },
  practice: {
    chooseAnswer: "Dogry jogaby saýlaň:",
    hintLabel: "Kömekçi bilgi",
    examples: "Mysallar",
    startPractice: (n: number) => `Türgenleşmek (${n} sorag)`,
    questionProgress: (current: number, total: number) => `${current} / ${total} sorag`,
    matched: (matched: number, total: number) => `${matched} / ${total} jübütlendi`,
  },

  // Заголовки и состояния экранов
  screen: {
    theoryTitle: "Teoriýa",
    theoryPlaceholder: "Teoriýa bölümi ýakyn wagtda goşular.",
    chapterNotFound: "Bap tapylmady",
    matchPairsLabel: "Jübütleri birleşdiriň",
    vocabularyTitle: "Sözlük",
  },

  // Диалог подтверждения (дефолтные подписи, обычно переопределяются)
  dialog: {
    confirm: "Tassykla",
    cancel: "Ýatyr",
  },

  // Запись произношения (LessonContent) — фича в плане на доработку
  speaking: {
    micPermissionTitle: "Mikrofona ygtyýar beriň",
    micPermissionBody: "Gepleýşi türgenleşdirmek üçin mikrofon rugsady gerek.",
    recordingErrorTitle: "Ýazgy ýalňyşlygy",
    couldNotStart: "Ýazgyny başladyp bolmady.",
    noAudio: "Ses ýazgysy alynmady.",
    couldNotProcess: "Ýazgyny işläp bolmady.",
    analyzing: "Aýdylyş barlanýar...",
  },

  // Упражнение на произношение — режим «повтори вслух» (shadowing)
  shadowing: {
    prompt: "Diňläň we bu sözlemi gaýtalaň",
    reveal: "Aýdylyşyny görmek üçin basyň",
  },

  // Аудио-подсказка перед аудио-вопросами (AudioPrompt)
  audioPrompt: {
    tapToListen: "Diňlemek üçin oýnatmak düwmesine basyň",
    playsOnce: "Ses her jogapdan öň bir gezek diňledilýär",
    listening: "Diňlenýär...",
    revealWhatSaid: "Näme aýdylanyny görmek üçin bu ýere basyň",
  },

  // Аудирование — «что ты услышал?» (ListeningMultipleChoiceMode)
  listening: {
    whatDidYouHear: "Näme eşitdiňiz?",
  },

  // Разбор предложения по словам (SentenceBreakdownCard)
  breakdown: {
    title: "Sözlem derňewi",
    tapWordForMeaning: "Manysyny görmek üçin islendik söze basyň",
    breakdownLabel: "Derňew:",
    targetLabel: "Sözlem:",
    transliterationLabel: "Aýdylyşy:",
    translationLabel: "Terjimesi:",
    swipeForHelp: "Doly kömek almak üçin ýokary süýşürüň",
  },

  // Диалог подтверждения выхода из упражнения (ConfirmDialog в LessonContent)
  exitLesson: {
    title: "Gönükmeden çykmak",
    message: "Hakykatdan hem çykmak isleýärsiňizmi? Öňegidişligiňiz saklanmaz.",
    stay: "Ýok",
    leave: "Çykmak",
  },

  // Локальный бэкап прогресса (экспорт/импорт в файл)
  backup: {
    exportTitle: "Maglumatlary ýatda saklaň",
    exportSubtitle: "XP, strik we öňegidişligi faýla göçüriň",
    importTitle: "Maglumatlary dikeldiň",
    importSubtitle: "Ýatda saklanan faýldan yzyna ýüklemek",
    importDone: "Dikeldi. Programmany täzeden açyň.",
    failed: "Bir ýalňyşlyk ýüze çykdy. Gaýtadan synanyşyň.",
  },

  // Локальные пуш-напоминания о streak
  notifications: {
    reminderTitle: "Streagyňy ýitirme! 🔥",

    reminderBody: "Şu gün iňlis dilini birazajyk türgenleşdiriň.",
  },

  // Подписи для скринридеров (accessibilityLabel) на icon-only кнопках
  a11y: {
    back: "Yza",
    exit: "Çykmak",
    playAudio: "Diňlemek",
    addBookmark: "Xatyrada saklamak",
    removeBookmark: "Belligi aýyrmak",
  },
};
