// ============================================================
// Единый источник всех строк интерфейса (туркменский).
//
// Сюда входит ТОЛЬКО UI-чром: кнопки, лейблы, статусы, заголовки.
// Учебный контент (объяснения, упражнения, переводы слов) сюда НЕ входит —
// он в assets/data/* и туркменизируется командой переводчиков отдельно.
//
// 👉 Команде переводчиков: правьте значения только в этом файле.
//    Туркменские формулировки ниже — рабочая версия, требует вычитки носителем.
// ============================================================

export const T = {
  common: {
    continue: "Dowam ediň",
    next: "Indiki",
    check: "Barlaň",
    skip: "Geçiň",
  },

  // Экран обратной связи после ответа (FeedbackView)
  feedback: {
    correct: "Berekella!",
    notQuite: "Az galdy",
    keepPractising: "Maşk ediň",
    tryAgainSub: "Ýene synanyşyň — başararsyňyz!",
    nextTimeSub: "Indiki gezek şeýle aýdyň",
    expected: "Garaşylýan",
    youSaid: "Siz aýtdyňyz",
    correctResponse: "Dogry jogap",
    nextQuestion: "Indiki sorag",
    tryAgainLeft: (n: number) => `Ýene synanyşyň (${n} galdy)`,
  },

  // Экран завершения урока (LessonCompleteScreen)
  complete: {
    title: "Sapak tamamlandy!",
    perfExcellent: "Ajaýyp!", // ≥90%
    perfGreat: "Örän gowy!", // ≥75%
    perfGood: "Gowy!", // ≥60%
    perfKeep: "Maşk etmegi dowam ediň!", // <60%
    correctCount: (correct: number, total: number) => `${correct}/${total} dogry`,
    inThisLesson: "BU SAPAKDA",
    correctAnswers: (n: number) => `${n} dogry jogap`,
    lessonComplete: "Sapak tamamlandy",
    bonus100: "⭐ 100% bonus",
    reviewTitle: "Gaýtalaň",
    reviewSubtitle: "Şu soraglara üns beriň",
    reviewMistakes: "Ýalňyşlary gaýtalaň",
  },

  // Шаги главы (Stepik-лента)
  chapters: {
    lessonCount: (n: number) => `${n} sapak`,
  },

  steps: {
    // Лейблы по subtype шага (lookup: T.steps.labels[step.subtype])
    labels: {
      intro: "Giriş",
      vocab: "Sözler",
      grammar: "Grammatika",
      dialogue: "Dialog",
      practice: "Gönükmeler",
      exam: "Bap synagy",
    } as Record<string, string>,
    progress: (done: number, total: number) => `${done} / ${total} ädim`,
    locked: "Ýapyk",
  },

  // Экзамен главы (Bap synagy) — экран результата с порогом 70%
  exam: {
    passedTitle: "Synag tabşyryldy!",
    failedTitle: "Synag geçilmedi",
    passedMessage: "Indiki baba geçip bilersiňiz.",
    failedMessage: "Geçmek üçin azyndan 70% gerek. Gaýtadan synanyşyň.",
    scoreLabel: (correct: number, total: number) => `${correct}/${total} dogry`,
    thresholdNote: "Geçmek üçin 70% gerek",
    breakdownTitle: "Görnüşler boýunça",
    bestScore: (pct: number) => `Iň gowy netije: ${pct}%`,
    retake: "Gaýtadan synanyşyň",
    passBadge: "Geçdiňiz",
    // Названия типов упражнений для разбивки в результатах
    types: {
      single_response: "Gepleýiş",
      multiple_choice: "Saýlama",
      listening_mc: "Diňleme",
      flashcard: "Kartoçka",
      // Названия совпадающих типов — из донорского exerciseTypes.
      fill_blank: "Boşlugy doldur",
      match_pairs: "Gabat getirmek",
      grammar: "Grammatika",
      text_choice: "Wariant saýlamak",
      odd_one_out: "Artykmajy tapmak",
      transformation: "Sözlemi öwürmek", 
      reading: "Okamak",
    } as Record<string, string>,
  },

  // Упражнения со свободным вводом и шаги без оценки.
  // Формулировки взяты из донорского src/i18n/tk.ts — там они уже
  // отшлифованы на живых пользователях английского курса.
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
      "Döredijilik ýumuşlary awtomatik barlanmaýar — bu türgenleşik üçin ýer.",
    practiceLater:
      "Bu ýumşa soň dolanyp, ýazuw türgenleşigini edip bilersiňiz.",
  },
  practice: {
    chooseAnswer: "Jogaby saýlaň:",
    hintLabel: "Kömek",
    examples: "Mysallar",
    startPractice: (n: number) => `Maşk (${n} sorag)`,
    questionProgress: (current: number, total: number) => `${current} / ${total} sorag`,
    matched: (matched: number, total: number) => `${matched} / ${total} jübütlendi`,
  },

  // Заголовки и состояния экранов
  screen: {
    theoryTitle: "Teoriýa",
    theoryPlaceholder: "Teoriýa ýakyn wagtda goşular.",
    chapterNotFound: "Bap tapylmady",
    matchPairsLabel: "Jübütleri birikdiriň",
    vocabularyTitle: "Sözlük",
  },

  // Диалог подтверждения (дефолтные подписи, обычно переопределяются)
  dialog: {
    confirm: "Tassyklaň",
    cancel: "Ýatyryň",
  },

  // Запись произношения (LessonContent) — фича в плане на доработку
  speaking: {
    micPermissionTitle: "Mikrofon rugsady",
    micPermissionBody: "Gepleýşi maşk etmek üçin mikrofon gerek.",
    recordingErrorTitle: "Ýazgy ýalňyşlygy",
    couldNotStart: "Ýazgyny başladyp bolmady.",
    noAudio: "Ses ýazga alynmady.",
    couldNotProcess: "Ýazgyny işläp bolmady.",
    analyzing: "Aýdylyş barlanýar...",
  },

  // Упражнение на произношение — режим «повтори вслух» (shadowing)
  shadowing: {
    prompt: "Diňläp, bu jümläni gaýtalaň",
    reveal: "Aýdylyşyny görmek üçin basyň",
  },

  // Аудио-подсказка перед аудио-вопросами (AudioPrompt)
  audioPrompt: {
    tapToListen: "Diňlemek üçin oýnat düwmesine basyň",
    playsOnce: "Ses her jogapdan öň bir gezek çalynýar",
    listening: "Diňlenýär...",
    revealWhatSaid: "Näme aýdylanyny görmek üçin şu ýere basyň",
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
    swipeForHelp: "Doly kömek üçin ýokary süýşüriň",
  },

  // Диалог подтверждения выхода из упражнения (ConfirmDialog в LessonContent)
  exitLesson: {
    title: "Gönükmeden çykmak",
    message: "Hakykatdan hem çykmak isleýärsiňizmi? Öňegidişligiňiz ýatdan çykar.",
    stay: "Ýok",
    leave: "Çykyň",
  },

  // Локальный бэкап прогресса (экспорт/импорт в файл)
  backup: {
    exportTitle: "Maglumatlary ýatda sakla",
    exportSubtitle: "XP, strik we öňegidişligi faýla göçüriň",
    importTitle: "Maglumatlary dikelt",
    importSubtitle: "Ýatda saklanan faýldan yzyna ýükläň",
    importDone: "Dikeldildi. Programmany täzeden açyň.",
    failed: "Bir zat ýalňyş gitdi. Gaýtadan synanyşyň.",
  },

  // Локальные пуш-напоминания о streak
  notifications: {
    reminderTitle: "Strikiňizi ýitirmäň! 🔥",
    reminderBody: "Şu gün iňlis dilini birazajyk maşk ediň.",
  },

  // Подписи для скринридеров (accessibilityLabel) на icon-only кнопках
  a11y: {
    back: "Yza gaýdyň",
    exit: "Çykyň",
    playAudio: "Diňläň",
    addBookmark: "Bellige goş",
    removeBookmark: "Belligi aýyr",
  },
};
