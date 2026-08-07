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
    keepPractising: "Maşk et",
    tryAgainSub: "Ýene synanyş!", // 1. Укорочено
    nextTimeSub: "Indiki gezek şeýle", // 2. Укорочено
    expected: "Garaşylýan jogap",
    youSaid: "Sen aýtdyň",
    correctResponse: "Dogry jogap",
    nextQuestion: "Indiki sorag",
    tryAgainLeft: (n: number) => `Ýene synanyş (${n})`, // 3. Укорочено
  },

  // Экран завершения урока (LessonCompleteScreen)
  complete: {
    title: "Sapak tamam!", // 4. Укорочено
    perfExcellent: "Ajaýyp!", // ≥90%
    perfGreat: "Örän gowy!", // ≥75%
    perfGood: "Gowy!", // ≥60%
    perfKeep: "Dowam et!", // 5. Укорочено
    correctCount: (correct: number, total: number) => `${correct}/${total} dogry`,
    inThisLesson: "BU SAPAKDA",
    correctAnswers: (n: number) => `${n} dogry`, // 6. Укорочено
    lessonComplete: "Sapak tamam", // 7. Укорочено
    bonus100: "⭐ 100% bonus",
    reviewTitle: "Gaýtalamak",
    reviewSubtitle: "Üns ber",
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
      exam: "Synag", // 8. Укорочено
    } as Record<string, string>,
    progress: (done: number, total: number) => `${done} / ${total} ädim`,
    locked: "Gulply", // 9. Укорочено
  },

  // Экзамен главы (Bap synagy) — экран результата с порогом 70%
  exam: {
    passedTitle: "Synag geçildi!", // 10. Укорочено
    failedTitle: "Synag geçilmedi", // 11. Укорочено
    passedMessage: "Indiki baba geçip bilersiňiz.",
    failedMessage: "Azyndan 70% gerek. Ýene synanyşyň.", // 12. Укорочено
    scoreLabel: (correct: number, total: number) => `${correct}/${total} dogry`,
    thresholdNote: "Geçiş: 70%", // 13. Укорочено
    breakdownTitle: "Netijeler", // 14. Укорочено
    bestScore: (pct: number) => `Iň gowy: ${pct}%`, // 15. Укорочено
    retake: "Täzeden synanyş",
    passBadge: "Geçdiňiz",
    // Названия типов упражнений для разбивки в результатах
    types: {
      single_response: "Gepleýiş",
      multiple_choice: "Saýlama",
      listening_mc: "Diňlemek",
      flashcard: "Kartoçka",
      // Названия совпадающих типов — из донорского exerciseTypes.
      fill_blank: "Boşlugy doldurmak",
      match_pairs: "Gabat getirmek",
      grammar: "Grammatika",
      text_choice: "Wariant saýlama", // 16. Укорочено
      odd_one_out: "Artykmaç söz", // 17. Укорочено
      transformation: "Sözlem öwürmek", // 18. Укорочено
      reading: "Okamak",
    } as Record<string, string>,
  },

  // Упражнения со свободным вводом и шаги без оценки.
  freeText: {
    placeholder: "Jogap ýaz…", // 19. Укорочено
    listen: "Diňläň we ýazyň", // 20. Укорочено
    correct: "Dogry",
    incorrect: "Dogry jogap",
    explanation: "Düşündiriş",
  },
  writing: {
    words: (n: number) => `${n} söz`,
    minWords: (n: number) => `Azyndan ${n} söz`, // 21. Укорочено
    recorded: "Ýazyldy",
    notAutoChecked:
      "Awtomatik barlag ýok — diňe türgenleşik üçin.", // 22. Укорочено
    practiceLater:
      "Soň dolanyp, maşklary dowam etdirip bilersiňiz.", // 23. Укорочено
  },
  practice: {
    chooseAnswer: "Jogaby saýla:",
    hintLabel: "Kömekçi bilgi",
    examples: "Mysallar",
    startPractice: (n: number) => `Başla (${n} sorag)`, // 24. Укорочено
    questionProgress: (current: number, total: number) => `${current} / ${total}`, // 25. Укорочено
    matched: (matched: number, total: number) => `${matched} / ${total} jübüt`, // 26. Укорочено
  },

  // Заголовки и состояния экранов
  screen: {
    theoryTitle: "Teoriýa",
    theoryPlaceholder: "Teoriýa bölümi tiz goşular.", // 27. Укорочено
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
    micPermissionTitle: "Mikrofon rugsady", // 28. Укорочено
    micPermissionBody: "Gepleýiş maşklary üçin mikrofon gerek.", // 29. Укорочено
    recordingErrorTitle: "Ýazgy ýalňyşlygy",
    couldNotStart: "Ýazgyny başladyp bolmady.",
    noAudio: "Ses ýazylmady.", // 30. Укорочено
    couldNotProcess: "Ýazgyny işläp bolmady.",
    analyzing: "Aýdylyş barlanýar...",
  },

  // Упражнение на произношение — режим «повтори вслух» (shadowing)
  shadowing: {
    prompt: "Diňläň we gaýtalaň",
    reveal: "Aýdylyşyny gör",
  },

  // Аудио-подсказка перед аудио-вопросами (AudioPrompt)
  audioPrompt: {
    tapToListen: "Diňlemek üçin basyň",
    playsOnce: "Ses bir gezek diňledilýär",
    listening: "Diňlenýär...",
    revealWhatSaid: "Näme aýdylan gaty gör",
  },

  // Аудирование — «что ты услышал?» (ListeningMultipleChoiceMode)
  listening: {
    whatDidYouHear: "Näme eşitdiňiz?",
  },

  // Разбор предложения по словам (SentenceBreakdownCard)
  breakdown: {
    title: "Sözlem derňewi",
    tapWordForMeaning: "Many üçin söze basyň",
    breakdownLabel: "Derňew:",
    targetLabel: "Sözlem:",
    transliterationLabel: "Aýdylyşy:",
    translationLabel: "Terjimesi:",
    swipeForHelp: "Kömek üçin ýokary süýşürüň",
  },

  // Диалог подтверждения выхода из упражнения (ConfirmDialog в LessonContent)
  exitLesson: {
    title: "Çykmak",
    message: "Hakykatdan çykmak isleýärsiňizmi? Öňegidişlik saklanmaz.",
    stay: "Ýok",
    leave: "Çykmak",
  },

  // Локальный бэкап прогресса (экспорт/импорт в файл)
  backup: {
    exportTitle: "Maglumaty saklaň",
    exportSubtitle: "XP, strik we öňegidişligi faýla göçürüň",
    importTitle: "Maglumaty dikeldiň",
    importSubtitle: "Saklanan faýldan yzyna ýüklemek",
    importDone: "Dikeldi. Programmany täzeden açyň.",
    failed: "Ýalňyşlyk ýüze çykdy. Ýene synanyşyň.",
  },

  // Локальные пуш-напоминания о streak
  notifications: {
    reminderTitle: "Streagyňy ýitirme! 🔥",
    reminderBody: "Şu gün birazajyk türgenleşiň.",
  },

  // Подписи для скринридеров (accessibilityLabel) на icon-only кнопках
  a11y: {
    back: "Yza",
    exit: "Çykmak",
    playAudio: "Diňlemek",
    addBookmark: "Saklamak",
    removeBookmark: "Aýyrmak",
  },
};
