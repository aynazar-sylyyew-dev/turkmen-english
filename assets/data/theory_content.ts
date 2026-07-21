// Theory content for each chapter
// Chapter 1: 你好 — Hello (Pinyin, tones, greetings)

export interface TheoryWord {
  target: string;
  /** Absent for languages that need no pronunciation aid (e.g. English). */
  transliteration?: string;
  translation: string;
}

export interface GrammarExample {
  target: string;
  /** Absent for languages that need no pronunciation aid (e.g. English). */
  transliteration?: string;
  translation: string;
}

export interface TheoryGrammar {
  title: string;
  explanation: string;
  examples: GrammarExample[];
}

export interface DialogueLine {
  speaker: string;
  target: string;
  /** Absent for languages that need no pronunciation aid (e.g. English). */
  transliteration?: string;
  translation: string;
}

export interface TheoryChapter {
  introduction: string;
  vocabulary: TheoryWord[];
  grammar: TheoryGrammar[];
  dialogues: { title: string; lines: DialogueLine[] }[];
  tips: string[];
}

export const THEORY_DATA: Record<number, TheoryChapter> = {
  1: {
    introduction:
      "Bu bapda siz hytaý dilinde salamlaşmagy, öz-özüňi tanyşdyrmagy we iň ýönekeý söhbetdeşlik geçirmegi öwrenersiňiz. Esasy grammatika düzgüni — 是 (shì — bolmak) işlikli sözlemler we 吗 (ma) bölejigi bilen soraglar.\n\n" +
      "Gahrymanlar: 阿曼 (Āmàn) — Pekine okamaga täze gelen türkmen talyby, 张伟 (Zhāng Wěi) — hytaýly kursdaşy, 李老师 (Lǐ lǎoshī) — hytaý dili mugallymy.",

    vocabulary: [
      { target: "你好", transliteration: "nǐ hǎo", translation: "salam" },
      { target: "好", transliteration: "hǎo", translation: "gowy, ýagşy" },
      { target: "你", transliteration: "nǐ", translation: "sen" },
      { target: "是", transliteration: "shì", translation: "bolmak; hawa" },
      { target: "老师", transliteration: "lǎoshī", translation: "mugallym" },
      { target: "吗", transliteration: "ma", translation: "sorag bölejigi" },
      { target: "不", transliteration: "bù", translation: "däl, ýok" },
      { target: "我", transliteration: "wǒ", translation: "men" },
      { target: "学生", transliteration: "xuésheng", translation: "talyp, okuwçy" },
      { target: "她", transliteration: "tā", translation: "ol (aýal)" },
      { target: "谢谢", transliteration: "xièxie", translation: "sag bol, minnetdar" },
      { target: "不客气", transliteration: "bú kèqi", translation: "hiç zat däl, arzuw etme" },
      { target: "您", transliteration: "nín", translation: "Siz (hormatly görnüş)" },
      { target: "留学生", transliteration: "liúxuéshēng", translation: "daşary ýurtly talyp" },
      { target: "叫", transliteration: "jiào", translation: "çagyrmak, atlandyrmak" },
      { target: "什么", transliteration: "shénme", translation: "näme, haýsy" },
      { target: "名字", transliteration: "míngzi", translation: "at" },
    ],

    grammar: [
      {
        title: "«是» 字句 — 是 bilen sözlemler",
        explanation:
          "是 (shì) — «bolmak» işligi. Bu «men talyp», «ol mugallym» ýaly sözlemler üçin esasy işlikdir.\n\n" +
          "Tassyklama:  Eýe + 是 + At\n" +
          "Inkär:  Eýe + 不 + 是 + At\n" +
          "Sorag:  Eýe + 是 + At + 吗？\n\n" +
          "Üns beriň: inkärde 不是 «bú shì» diýlip aýdylýar (不 4-nji tonuň öňünde tonuny üýtgedýär).",
        examples: [
          { target: "我是老师。", transliteration: "Wǒ shì lǎoshī.", translation: "Men mugallym." },
          { target: "她是学生。", transliteration: "Tā shì xuésheng.", translation: "Ol talyp." },
          { target: "我不是老师。", transliteration: "Wǒ bú shì lǎoshī.", translation: "Men mugallym däl." },
          { target: "我不是留学生。", transliteration: "Wǒ bú shì liúxuéshēng.", translation: "Men daşary ýurtly talyp däl." },
          { target: "你是老师吗？", transliteration: "Nǐ shì lǎoshī ma?", translation: "Sen mugallymmy?" },
          { target: "阿曼是留学生吗？", transliteration: "Āmàn shì liúxuéshēng ma?", translation: "Aman daşary ýurtly talypmy?" },
        ],
      },
      {
        title: "用「吗」的疑问句 — 吗 bölejigi bilen soraglar",
        explanation:
          "Tassyklamany «hawa/ýok» soragyna öwürmek üçin, diňe sözlemiň soňuna 吗 goşuň. Söz tertibi üýtgemeýär!\n\n" +
          "Tassyklama → Sorag:\n" +
          "你好。→ 你好吗？\n" +
          "他是老师。→ 他是老师吗？\n\n" +
          "Bu hytaý dilinde sorag bermegiň iň ýönekeý usulydyr.",
        examples: [
          { target: "你好吗？", transliteration: "Nǐ hǎo ma?", translation: "Ýagdaýlaryň nähili? (söz. «Sen gowumy?»)" },
          { target: "阿曼是留学生吗？", transliteration: "Āmàn shì liúxuéshēng ma?", translation: "Aman daşary ýurtly talypmy?" },
          { target: "她不是老师吗？", transliteration: "Tā bú shì lǎoshī ma?", translation: "Ol mugallym dälmi?" },
          { target: "他叫张伟吗？", transliteration: "Tā jiào Zhāng Wěi ma?", translation: "Onuň ady Zhang Weými?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "Umumy ýaşaýyş jaýynda tanyşlyk (阿曼 we 张伟)",
        lines: [
          { speaker: "A", target: "你好！我叫阿曼。", transliteration: "Nǐ hǎo! Wǒ jiào Āmàn.", translation: "Salam! Meniň adym Aman." },
          { speaker: "B", target: "你好，阿曼！", transliteration: "Nǐ hǎo, Āmàn!", translation: "Salam, Aman!" },
          { speaker: "A", target: "你叫什么名字？", transliteration: "Nǐ jiào shénme míngzi?", translation: "Adyň näme?" },
          { speaker: "B", target: "我叫张伟。", transliteration: "Wǒ jiào Zhāng Wěi.", translation: "Meniň adym Zhang Wei." },
          { speaker: "A", target: "你是学生吗？", transliteration: "Nǐ shì xuésheng ma?", translation: "Sen talypmy?" },
          { speaker: "B", target: "是，我是学生。", transliteration: "Shì, wǒ shì xuésheng.", translation: "Hawa, men talyp." },
          { speaker: "A", target: "我是留学生。谢谢！", transliteration: "Wǒ shì liúxuéshēng. Xièxie!", translation: "Men bolsa daşary ýurtly talyp. Sag bol!" },
          { speaker: "B", target: "不客气。", transliteration: "Bú kèqi.", translation: "Hiç zat däl." },
        ],
      },
      {
        title: "Ilkinji sapakda (阿曼 we 李老师)",
        lines: [
          { speaker: "A", target: "老师，您好！", transliteration: "Lǎoshī, nín hǎo!", translation: "Salam, mugallym!" },
          { speaker: "B", target: "你好！你叫什么名字？", transliteration: "Nǐ hǎo! Nǐ jiào shénme míngzi?", translation: "Salam! Adyň näme?" },
          { speaker: "A", target: "我叫阿曼。我是留学生。", transliteration: "Wǒ jiào Āmàn. Wǒ shì liúxuéshēng.", translation: "Meniň adym Aman. Men daşary ýurtly talyp." },
          { speaker: "B", target: "阿曼，你好。", transliteration: "Āmàn, nǐ hǎo.", translation: "Aman, salam." },
          { speaker: "A", target: "老师，谢谢您！", transliteration: "Lǎoshī, xièxie nín!", translation: "Mugallym, size minnetdar!" },
          { speaker: "B", target: "不客气。", transliteration: "Bú kèqi.", translation: "Hiç zat däl." },
        ],
      },
    ],

    tips: [
      "您 (nín) — «siz» hormatly görnüşi. Mugallymlara, ýaşulylara, tanamaýan adamlara ýüzlenende ulanyň. Adaty söhbetdeşlikde 你 (nǐ) ýeterlik.",
      "«Meniň adym...» diýmek üçin 我叫... (wǒ jiào...) ulanyň. Ady soramak üçin — 你叫什么名字？(nǐ jiào shénme míngzi?).",
      "不 adatça 4-nji ton bilen aýdylýar (bù), emma başga 4-nji tonuň öňünde 2-nji tona öwrülýär: 不是 → bú shì.",
      "Aýdylyşyny eşitmek üçin iýeroglifleriň we mysallaryň üstüne basyň.",
    ],
  },

  2: {
    introduction:
      "Bu bapda siz nireden bolýandygyňyzy gürrüň bermegi we söhbetdeşiňiziň milletini soramagy öwrenersiňiz. Köplük san goşulmasy 们, «hem» manysyndaky 也 hal-sözi we gysga garşylykly soraglar üçin 呢 sorag bölejigi bilen tanşarsyňyz.\n\n" +
      "Gahrymanlar: 王老师 (Wáng lǎoshī) — 王明 (Wáng Míng) atly mugallym, 阿曼 (Āmàn) — türkmen talyby, 古丽 (Gǔlì) — kanadaly talyp gyz, 张伟 (Zhāng Wěi) — hytaýly kursdaş.",

    vocabulary: [
      { target: "同学", transliteration: "tóngxué", translation: "synpdaş, kursdaş" },
      { target: "们", transliteration: "men", translation: "köplük san goşulmasy (adamlar üçin)" },
      { target: "来", transliteration: "lái", translation: "gelmek; (bu ýerde) häzir, häzir men..." },
      { target: "介绍", transliteration: "jièshào", translation: "tanyşdyrmak" },
      { target: "一下儿", transliteration: "yíxiàr", translation: "azajyk, birneme (hereketi ýumşadýar)" },
      { target: "姓", transliteration: "xìng", translation: "familiýa; familiýasy bolmak" },
      { target: "的", transliteration: "de", translation: "degişlilik bölejigi (≈ «-yň», «kimiň»)" },
      { target: "哪", transliteration: "nǎ", translation: "haýsy" },
      { target: "国", transliteration: "guó", translation: "ýurt" },
      { target: "人", transliteration: "rén", translation: "adam" },
      { target: "他", transliteration: "tā", translation: "ol (erkek)" },
      { target: "认识", transliteration: "rènshi", translation: "tanyşmak, tanamak (kimdir birini)" },
      { target: "很", transliteration: "hěn", translation: "örän" },
      { target: "高兴", transliteration: "gāoxìng", translation: "şat, begençli" },
      { target: "也", transliteration: "yě", translation: "hem, şeýle hem" },
      { target: "呢", transliteration: "ne", translation: "garşylykly sorag bölejigi (a sen?)" },
      { target: "朋友", transliteration: "péngyou", translation: "dost" },
      { target: "王明", transliteration: "Wáng Míng", translation: "Wan Min (at)" },
      { target: "美国", transliteration: "Měiguó", translation: "Amerika, ABŞ" },
      { target: "古丽", transliteration: "Gǔlì", translation: "Gülnara (at)" },
      { target: "加拿大", transliteration: "Jiānádà", translation: "Kanada" },
      { target: "中国", transliteration: "Zhōngguó", translation: "Hytaý" },
      { target: "土库曼斯坦", transliteration: "Tǔkùmànsītǎn", translation: "Türkmenistan" },
    ],

    grammar: [
      {
        title: "们 goşulmasy — köplük san",
        explanation:
          "们 (men) adamlary aňladýan çalyşmalara we atlara olary köplük sana öwürmek üçin goşulýar.\n\n" +
          "Çalyşma + 们:\n" +
          "我 (men) → 我们 (biz)\n" +
          "你 (sen) → 你们 (siz)\n" +
          "他/她 (ol) → 他们/她们 (olar)\n\n" +
          "At (adamlar) + 们:\n" +
          "老师 → 老师们 (mugallymlar)\n" +
          "同学 → 同学们 (synpdaşlar)\n\n" +
          "Möhüm: 们 DIŇE adamlar bilen ulanylýar. 书们 (kitaplar) diýip bolmaýar — zatlar üçin köplük san görkezilmeýär.",
        examples: [
          { target: "同学们好！", transliteration: "Tóngxuémen hǎo!", translation: "Salam, synpdaşlar!" },
          { target: "我们是留学生。", transliteration: "Wǒmen shì liúxuéshēng.", translation: "Biz daşary ýurtly talyplar." },
          { target: "你们是老师吗？", transliteration: "Nǐmen shì lǎoshī ma?", translation: "Siz mugallymmy?" },
          { target: "他们不是中国人。", transliteration: "Tāmen bú shì Zhōngguó rén.", translation: "Olar hytaýly däl." },
        ],
      },
      {
        title: "也 hal-sözi — «hem»",
        explanation:
          "也 (yě — «hem, şeýle hem») işligiň ýa-da sypatyň öňünde goýulýar we meňzeşligi görkezýär.\n\n" +
          "Shema: Eýe + 也 + Işlik/Sypat.\n\n" +
          "Möhüm: 也 sözlemiň soňuna goýulmaýar, hemişe habaryň (işligiň) öňünde durýar.\n\n" +
          "❌ Nädogry: 我是学生也。\n" +
          "✅ Dogry: 我也是学生。",
        examples: [
          { target: "他是学生，我也是学生。", transliteration: "Tā shì xuésheng, wǒ yě shì xuésheng.", translation: "Ol talyp, men hem talyp." },
          { target: "我也很高兴。", transliteration: "Wǒ yě hěn gāoxìng.", translation: "Men hem örän şat." },
          { target: "张伟是中国人，王明也是中国人。", transliteration: "Zhāng Wěi shì Zhōngguó rén, Wáng Míng yě shì Zhōngguó rén.", translation: "Zhang Wei hytaýly, Wan Min hem hytaýly." },
          { target: "你不是老师，他也不是老师。", transliteration: "Nǐ bú shì lǎoshī, tā yě bú shì lǎoshī.", translation: "Sen mugallym däl, ol hem mugallym däl." },
        ],
      },
      {
        title: "呢 bölejigi — garşylykly sorag «A sen?»",
        explanation:
          "呢 (ne) gysga garşylykly soragyň soňuna goýulýar. Bu gysgaltma: tutuş soragy gaýtalamagyň ýerine — 呢 goşýarsyň.\n\n" +
          "Shema: At/Çalyşma + 呢？\n\n" +
          "呢-niň manysy öňki sözlemiň kontekstinden alynýar:\n" +
          "• Öň at hakda soralan bolsa → 你呢？ = «A seniň adyň näme?»\n" +
          "• Millet hakda bolsa → 你呢？ = «A sen nireden?»\n" +
          "• Kär hakda bolsa → 你呢？ = «A sen (kim bolup işleýärsiň)?»",
        examples: [
          { target: "我是美国人，你呢？", transliteration: "Wǒ shì Měiguó rén, nǐ ne?", translation: "Men amerikaly, a sen? (haýsy ýurtdan?)" },
          { target: "我叫阿曼，她呢？", transliteration: "Wǒ jiào Āmàn, tā ne?", translation: "Meniň adym Aman, a onuň (aýalyň) ady näme?" },
          { target: "我很高兴，你呢？", transliteration: "Wǒ hěn gāoxìng, nǐ ne?", translation: "Men örän şat, a sen?" },
          { target: "他是老师，你呢？", transliteration: "Tā shì lǎoshī, nǐ ne?", translation: "Ol mugallym, a sen?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "Mugallym bilen tanyşlyk (王老师 we talyplar)",
        lines: [
          { speaker: "A", target: "同学们好！", transliteration: "Tóngxuémen hǎo!", translation: "Salam, synpdaşlar!" },
          { speaker: "B", target: "老师好！", transliteration: "Lǎoshī hǎo!", translation: "Salam, mugallym!" },
          { speaker: "A", target: "我来介绍一下儿。我姓王，叫王明，是你们的老师。你叫什么名字？", transliteration: "Wǒ lái jièshào yíxiàr. Wǒ xìng Wáng, jiào Wáng Míng, shì nǐmen de lǎoshī. Nǐ jiào shénme míngzi?", translation: "Häzir özümi tanyşdyraýyn. Meniň familiýam Wan, adym Wan Min, men siziň mugallymyňyz. Adyň näme?" },
          { speaker: "B", target: "我叫阿曼。", transliteration: "Wǒ jiào Āmàn.", translation: "Meniň adym Aman." },
          { speaker: "A", target: "你是哪国人？", transliteration: "Nǐ shì nǎ guó rén?", translation: "Sen haýsy ýurtdan?" },
          { speaker: "B", target: "我是土库曼斯坦人。", transliteration: "Wǒ shì Tǔkùmànsītǎn rén.", translation: "Men Türkmenistandan." },
        ],
      },
      {
        title: "Naharhanada tanyşlyk (阿曼 we 古丽)",
        lines: [
          { speaker: "A", target: "你好！我叫阿曼。", transliteration: "Nǐ hǎo! Wǒ jiào Āmàn.", translation: "Salam! Meniň adym Aman." },
          { speaker: "B", target: "你好！我叫古丽。认识你很高兴。", transliteration: "Nǐ hǎo! Wǒ jiào Gǔlì. Rènshi nǐ hěn gāoxìng.", translation: "Salam! Meniň adym Gülnara. Tanyşanyma örän şat." },
          { speaker: "A", target: "我也很高兴。你是哪国人？", transliteration: "Wǒ yě hěn gāoxìng. Nǐ shì nǎ guó rén?", translation: "Maňa-da örän ýakymly. Sen haýsy ýurtdan?" },
          { speaker: "B", target: "我是加拿大人。你呢？", transliteration: "Wǒ shì Jiānádà rén. Nǐ ne?", translation: "Men kanadaly. A sen?" },
          { speaker: "A", target: "我是土库曼斯坦人。", transliteration: "Wǒ shì Tǔkùmànsītǎn rén.", translation: "Men Türkmenistandan." },
          { speaker: "B", target: "张伟也是我们的同学。他是中国人。", transliteration: "Zhāng Wěi yě shì wǒmen de tóngxué. Tā shì Zhōngguó rén.", translation: "Zhang Wei hem biziň kursdaşymyz. Ol hytaýly." },
        ],
      },
    ],

    tips: [
      "«Millet» formulasy: 哪国人？(haýsy ýurtdan?) → Ýurt + 人: 美国人 (amerikaly), 中国人 (hytaýly), 加拿大人 (kanadaly). Islendik ýurt üçin şeýle: 俄罗斯人 (rus), 土库曼人 (türkmen).",
      "我来介绍一下儿 — kimdir birini tanyşdyrmazdan öňki edepli sözbaşy. Söz. «men häzir birneme tanyşdyraýyn». 一下儿 hereketi ýumşadýar, ony ýeňilleşdirýär.",
      "姓 we 叫 tapawudy: 姓 — diňe familiýa (我姓刘), 叫 — doly at ýa-da at (我叫王明). 我姓王明 diýip bolmaýar.",
      "认识 vs 知道: ikisi hem «bilmek» diýlip terjime edilýär, emma 认识 — adam bilen şahsy tanyşlyk hakda, 知道 — bir fakty bilmek. «Men ony şahsy tanaýaryn» = 我认识他.",
    ],
  },

  3: {
    introduction:
      "Bu bapda siz zatlary görkezmegi («bu», «ol»), 谁 (kim) we 什么 (näme) sözleri bilen sorag bermegi, şeýle-de degişliligi görkezmek üçin 的 bölejigini ulanmagy öwrenersiňiz («kimiň?», «meniň kitabym»).\n\n" +
      "Gahrymanlar: 阿曼, 古丽 (kitap we sözlük hakda gürleşýärler), 中村 (Zhōngcūn) — ýaponly talyp, olar ýapon saz žurnaly hakda gürleşýärler.",

    vocabulary: [
      { target: "那", transliteration: "nà", translation: "ol, şol" },
      { target: "谁", transliteration: "shéi / shuí", translation: "kim" },
      { target: "书", transliteration: "shū", translation: "kitap" },
      { target: "同屋", transliteration: "tóngwū", translation: "otagdaş" },
      { target: "汉语", transliteration: "Hànyǔ", translation: "hytaý dili" },
      { target: "课本", transliteration: "kèběn", translation: "okuw kitaby" },
      { target: "词典", transliteration: "cídiǎn", translation: "sözlük" },
      { target: "就是", transliteration: "jiùshì", translation: "ýagny, diýmek (düşündiriş üçin)" },
      { target: "日语", transliteration: "Rìyǔ", translation: "ýapon dili" },
      { target: "这", transliteration: "zhè", translation: "bu, şu" },
      { target: "杂志", transliteration: "zázhì", translation: "žurnal" },
      { target: "音乐", transliteration: "yīnyuè", translation: "saz, musyka" },
      { target: "汉日词典", transliteration: "Hàn-Rì Cídiǎn", translation: "Hytaý-ýapon sözlügi" },
      { target: "中村", transliteration: "Zhōngcūn", translation: "Nakamura (ýapon familiýasy)" },
      { target: "日本", transliteration: "Rìběn", translation: "Ýaponiýa" },
    ],

    grammar: [
      {
        title: "Görkezme çalyşmalary 这 / 那",
        explanation:
          "这 (zhè) — «bu» (gepleýäne ýakyn zat).\n" +
          "那 (nà) — «ol» (has uzakdaky zat).\n\n" +
          "Shema: 这/那 + 是 + At\n\n" +
          "Köplenç degişliligi görkezmek üçin 的 bilen bile ulanylýar:\n" +
          "这是我的书。— Bu meniň kitabym.\n" +
          "那是老师的词典。— Ol sözlük mugallymyňky.\n\n" +
          "Inkärde: 这/那 + 不是 + ...",
        examples: [
          { target: "这是汉语课本。", transliteration: "Zhè shì Hànyǔ kèběn.", translation: "Bu hytaý dili okuw kitaby." },
          { target: "那是音乐杂志。", transliteration: "Nà shì yīnyuè zázhì.", translation: "Ol saz žurnaly." },
          { target: "这是老师的书。", transliteration: "Zhè shì lǎoshī de shū.", translation: "Bu mugallymyň kitaby." },
          { target: "那不是我的词典。", transliteration: "Nà bú shì wǒ de cídiǎn.", translation: "Ol sözlük meniňki däl." },
        ],
      },
      {
        title: "的 bölejigi — degişlilik we kesgitleme",
        explanation:
          "的 (de) kesgitleme bilen kesgitlenýän sözüň arasynda goýulýar. Tertip HEMIŞE: kesgitleme + 的 + esasy söz.\n\n" +
          "Shema: A + 的 + B  =  «A-a degişli/degişli bolan B»\n\n" +
          "我的书 — meniň kitabym\n" +
          "老师的词典 — mugallymyň sözlügi\n" +
          "古丽的朋友 — Gülnaranyň dosty\n\n" +
          "我/你/他 çalyşmalary hem-de ýakyn garyndaşlar/dostlar bilen 的 taşlanyp bilner: 我朋友 (meniň dostum), 我同屋 (meniň otagdaşym). Emma adaty zatlar bilen 的 hökman: 我的书, 我的词典.",
        examples: [
          { target: "这是我的课本。", transliteration: "Zhè shì wǒ de kèběn.", translation: "Bu meniň okuw kitabym." },
          { target: "那是谁的书？", transliteration: "Nà shì shéi de shū?", translation: "Bu kimiň kitaby?" },
          { target: "那是我同屋的书。", transliteration: "Nà shì wǒ tóngwū de shū.", translation: "Ol kitap meniň otagdaşymyňky." },
          { target: "她是我朋友的同屋。", transliteration: "Tā shì wǒ péngyou de tóngwū.", translation: "Ol (aýal) meniň dostumyň otagdaşy." },
        ],
      },
      {
        title: "谁 / 什么 bilen ýörite soraglar",
        explanation:
          "Hytaýçada sorag sözleri jogabyň durmaly ÝERINE goýulýar. Soragda we tassyklamada söz tertibi birmeňzeş — rusça/iňlisçe ýaly hiç hili ýer çalyşma ýok.\n\n" +
          "谁 (shéi) — «kim / kimiň»\n" +
          "什么 (shénme) — «näme / haýsy»\n\n" +
          "Tassyklama: 那是我的书。\n" +
          "Sorag:  那是谁的书？ («我» ýerine 谁 goýulýar)\n\n" +
          "Tassyklama: 这是课本。\n" +
          "Sorag: 这是什么？ («课本» ýerine 什么 goýulýar)\n\n" +
          "吗 bilen beýle soraglar ULANYLMAÝAR — 那是谁的书吗？ diýip bolmaýar.",
        examples: [
          { target: "那是谁？", transliteration: "Nà shì shéi?", translation: "Ol kim (ol ýerde)?" },
          { target: "这是什么？", transliteration: "Zhè shì shénme?", translation: "Bu näme?" },
          { target: "这是什么书？", transliteration: "Zhè shì shénme shū?", translation: "Bu haýsy kitap?" },
          { target: "那是谁的词典？", transliteration: "Nà shì shéi de cídiǎn?", translation: "Bu kimiň sözlügi?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "Bu kimiň kitaby? (阿曼 we 古丽)",
        lines: [
          { speaker: "A", target: "古丽，那是谁的书？是你的书吗？", transliteration: "Gǔlì, nà shì shéi de shū? Shì nǐ de shū ma?", translation: "Gülnara, bu kimiň kitaby? Seniňkimi?" },
          { speaker: "B", target: "不是，那是我同屋的书。", transliteration: "Bú shì, nà shì wǒ tóngwū de shū.", translation: "Ýok, bu meniň otagdaşymyň kitaby." },
          { speaker: "A", target: "是汉语课本吗？", transliteration: "Shì Hànyǔ kèběn ma?", translation: "Bu hytaý dili okuw kitabymy?" },
          { speaker: "B", target: "不是，是《汉日词典》。", transliteration: "Bú shì, shì «Hàn-Rì Cídiǎn».", translation: "Ýok, bu «Hytaý-ýapon sözlügi»." },
          { speaker: "A", target: "什么词典？", transliteration: "Shénme cídiǎn?", translation: "Haýsy sözlük?" },
          { speaker: "B", target: "《汉日词典》，就是汉语、日语词典。", transliteration: "«Hàn-Rì Cídiǎn», jiù shì Hànyǔ, Rìyǔ cídiǎn.", translation: "«Hytaý-ýapon», ýagny hytaý we ýapon dili sözlügi." },
        ],
      },
      {
        title: "Bu haýsy žurnal? (古丽 we 中村)",
        lines: [
          { speaker: "A", target: "这是什么杂志？", transliteration: "Zhè shì shénme zázhì?", translation: "Bu haýsy žurnal?" },
          { speaker: "B", target: "音乐杂志。", transliteration: "Yīnyuè zázhì.", translation: "Saz žurnaly." },
          { speaker: "A", target: "是日本的杂志吗？", transliteration: "Shì Rìběn de zázhì ma?", translation: "Ýaponmy?" },
          { speaker: "B", target: "是，是日本的杂志。", transliteration: "Shì, shì Rìběn de zázhì.", translation: "Hawa, ýapon žurnaly." },
          { speaker: "A", target: "是你的吗？", transliteration: "Shì nǐ de ma?", translation: "Seniňkimi?" },
          { speaker: "B", target: "不是，是我朋友的。", transliteration: "Bú shì, shì wǒ péngyou de.", translation: "Ýok, dostumyňky." },
        ],
      },
    ],

    tips: [
      "的-dan soň at kontekstden düşnükli bolsa taşlanyp bilner: 是我的 («bu meniňki»), 是朋友的 («bu dostuňky»). Aýratyn hem jogaplarda köp ulanylýar: A: 是你的书吗？ B: 不，是我朋友的。",
      "谁 «shéi» hem, «shuí» hem okalýar — ikisi hem dogry, emma gepleşikde köplenç «shéi».",
      "就是 düşündiriş ýa-da anyklama üçin ulanylýar: «bu diýmek», «ýagny». Düşnüksiz sözi düşündirmek islänňde peýdaly: X，就是 Y — «X, ýagny Y».",
      "Ýakyn gatnaşyklar — 的-syz: 我朋友, 我同屋, 我老师, 我爸爸 (meniň kakam). Zatlar/düşünjeler bilen — 的 bilen: 我的书, 我的杂志, 我的名字.",
    ],
  },

  4: {
    introduction:
      "Bu bapda siz bir zadyň nirede ýerleşýändigini soramagy we ýerleşişini beýan etmegi öwrenersiňiz. 在 (zài — ýerleşmek) işligi, 哪儿 (nirede) sorag sözi we ugur sözleri bilen tanşarsyňyz: 东/西/南/北/左/右 + 边.\n\n" +
      "Ýagdaý: 古丽 uniwersitet çäginde kitaphanany gözleýär we duşýan talyplardan soraýar.",

    vocabulary: [
      { target: "请问", transliteration: "qǐngwèn", translation: "bagyşlaň, sorasam bolarmy" },
      { target: "图书馆", transliteration: "túshūguǎn", translation: "kitaphana" },
      { target: "在", transliteration: "zài", translation: "ýerleşmek (bir ýerde)" },
      { target: "哪儿", transliteration: "nǎr", translation: "nirede" },
      { target: "对不起", transliteration: "duìbuqǐ", translation: "bagyşlaň" },
      { target: "个", transliteration: "gè", translation: "sanaýyş sözi (ählumumy)" },
      { target: "学校", transliteration: "xuéxiào", translation: "mekdep, okuw jaýy" },
      { target: "知道", transliteration: "zhīdào", translation: "bilmek (fakty)" },
      { target: "没关系", transliteration: "méi guānxi", translation: "hiç zat däl, möhüm däl" },
      { target: "这儿", transliteration: "zhèr", translation: "şu ýerde" },
      { target: "教学", transliteration: "jiàoxué", translation: "okuw, sapak bermek" },
      { target: "楼", transliteration: "lóu", translation: "bina, jaý" },
      { target: "那儿", transliteration: "nàr", translation: "ol ýerde" },
      { target: "宿舍", transliteration: "sùshè", translation: "umumy ýaşaýyş jaýy" },
      { target: "北边", transliteration: "běibian", translation: "demirgazyk tarap, demirgazyga" },
      { target: "左边", transliteration: "zuǒbian", translation: "çep tarap, çepde" },
      { target: "右边", transliteration: "yòubian", translation: "sag tarap, sagda" },
      { target: "不用谢", transliteration: "búyòng xiè", translation: "minnetdarlyga zerurlyk ýok" },
      { target: "不用", transliteration: "búyòng", translation: "gerek däl, hökman däl" },
      { target: "东边", transliteration: "dōngbian", translation: "gündogar tarap" },
      { target: "西边", transliteration: "xībian", translation: "günbatar tarap" },
      { target: "南边", transliteration: "nánbian", translation: "günorta tarap" },
    ],

    grammar: [
      {
        title: "在 işligi — bir ýerde ýerleşmek",
        explanation:
          "在 (zài) — «ýerleşmek, bir ýerde bolmak» işligi. Zadyň ýa-da adamyň ýerleşişini görkezmek üçin ulanylýar.\n\n" +
          "Shema 1:  Eýe + 在 + Ýer\n" +
          "图书馆在那儿。— Kitaphana ol ýerde ýerleşýär.\n" +
          "我在学校。— Men mekdepde.\n\n" +
          "Shema 2 (ters tertip):  Ýer + 是 + Eýe\n" +
          "那儿是图书馆。— Ol ýer — kitaphana.\n" +
          "教学楼的北边是图书馆。— Okuw binasynyň demirgazyk tarapynda — kitaphana.\n\n" +
          "Inkär: 不在 (bú zài) — 图书馆不在这儿。",
        examples: [
          { target: "图书馆在哪儿？", transliteration: "Túshūguǎn zài nǎr?", translation: "Kitaphana nirede ýerleşýär?" },
          { target: "图书馆在宿舍楼的北边。", transliteration: "Túshūguǎn zài sùshèlóu de běibian.", translation: "Kitaphana umumy ýaşaýyş jaýynyň demirgazygynda." },
          { target: "加拿大在美国的北边。", transliteration: "Jiānádà zài Měiguó de běibian.", translation: "Kanada ABŞ-nyň demirgazygynda." },
          { target: "日本在中国的东边。", transliteration: "Rìběn zài Zhōngguó de dōngbian.", translation: "Ýaponiýa Hytaýyň gündogarynda." },
        ],
      },
      {
        title: "哪儿 sorag sözi — nirede",
        explanation:
          "哪儿 (nǎr) — «nirede». Jogabyň durmaly ýerine goýulýar (ýagny 在-dan soň).\n\n" +
          "Shema: Eýe + 在 + 哪儿？\n\n" +
          "Jogap: Eýe + 在 + anyk ýer\n\n" +
          "Möhüm: sorag sözleri bilen (哪儿, 谁, 什么) 吗 ULANYLMAÝAR.\n" +
          "❌ 图书馆在哪儿吗？\n" +
          "✅ 图书馆在哪儿？\n\n" +
          "Toplum: 这儿 (şu ýerde) / 那儿 (ol ýerde) / 哪儿 (nirede) — birinji iýeroglife görä ugur al: 这=bu, 那=ol, 哪=haýsy.",
        examples: [
          { target: "你的书在哪儿？", transliteration: "Nǐ de shū zài nǎr?", translation: "Seniň kitabyň nirede?" },
          { target: "老师在哪儿？", transliteration: "Lǎoshī zài nǎr?", translation: "Mugallym nirede?" },
          { target: "你们的学校在哪儿？", transliteration: "Nǐmen de xuéxiào zài nǎr?", translation: "Siziň mekdebiňiz nirede?" },
          { target: "阿曼在这儿，古丽在那儿。", transliteration: "Āmàn zài zhèr, Gǔlì zài nàr.", translation: "Aman şu ýerde, Gülnara bolsa ol ýerde." },
        ],
      },
      {
        title: "Ugur sözleri (方位词): 东/西/南/北/左/右 + 边",
        explanation:
          "«X-iň demirgazygynda», «X-iň sagynda» we ş.m. diýmek üçin şu shema ulanylýar:\n\n" +
          "X + 的 + ugur + 边\n\n" +
          "Ugurlar:\n" +
          "东 (dōng) — gündogar → 东边\n" +
          "西 (xī) — günbatar → 西边\n" +
          "南 (nán) — günorta → 南边\n" +
          "北 (běi) — demirgazyk → 北边\n" +
          "左 (zuǒ) — çep → 左边\n" +
          "右 (yòu) — sag → 右边\n\n" +
          "Mysal: 图书馆在宿舍楼的北边 = «Kitaphana umumy ýaşaýyş jaýynyň demirgazygynda» (söz. «kitaphana umumy ýaşaýyş jaýynyň demirgazyk tarapynda ýerleşýär»).\n\n" +
          "Bu ters tertip: ilki «ugrukdyryjy» (nämeden), soň ugur gelýär.",
        examples: [
          { target: "教学楼在图书馆的北边。", transliteration: "Jiàoxuélóu zài túshūguǎn de běibian.", translation: "Okuw binasy kitaphananyň demirgazygynda." },
          { target: "张伟在阿曼的右边。", transliteration: "Zhāng Wěi zài Āmàn de yòubian.", translation: "Zhang Wei Amanyň sagynda." },
          { target: "古丽的左边是阿曼。", transliteration: "Gǔlì de zuǒbian shì Āmàn.", translation: "Gülnaranyň çepinde — Aman." },
          { target: "宿舍楼在西边。", transliteration: "Sùshèlóu zài xībian.", translation: "Umumy ýaşaýyş jaýy günbatar tarapda." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Kitaphanany gözlemek — şowsuz (古丽 we talyp A)",
        lines: [
          { speaker: "A", target: "同学，请问，图书馆在哪儿？", transliteration: "Tóngxué, qǐngwèn, túshūguǎn zài nǎr?", translation: "Talyp, bagyşlaň, kitaphana nirede?" },
          { speaker: "B", target: "对不起，我不是这个学校的学生，不知道。", transliteration: "Duìbuqǐ, wǒ bú shì zhège xuéxiào de xuésheng, bù zhīdào.", translation: "Bagyşlaň, men bu uniwersitetiň talyby däl, bilemok." },
          { speaker: "A", target: "没关系。", transliteration: "Méi guānxi.", translation: "Hiç zat däl." },
        ],
      },
      {
        title: "Kitaphanany gözlemek — tapdy (古丽 we talyp B)",
        lines: [
          { speaker: "A", target: "同学，这儿是图书馆吗？", transliteration: "Tóngxué, zhèr shì túshūguǎn ma?", translation: "Talyp, şu ýer kitaphanamy?" },
          { speaker: "B", target: "不是，这是教学楼，图书馆在那儿，宿舍楼的北边。", transliteration: "Bú shì, zhè shì jiàoxuélóu, túshūguǎn zài nàr, sùshèlóu de běibian.", translation: "Ýok, bu okuw binasy. Kitaphana ol ýerde, umumy ýaşaýyş jaýynyň demirgazygynda." },
          { speaker: "A", target: "是左边的楼吗？", transliteration: "Shì zuǒbian de lóu ma?", translation: "Çepdäki binamy?" },
          { speaker: "B", target: "不，右边的楼。", transliteration: "Bù, yòubian de lóu.", translation: "Ýok, sagdaky." },
          { speaker: "A", target: "谢谢。", transliteration: "Xièxie.", translation: "Sag bol." },
          { speaker: "B", target: "不用谢。", transliteration: "Búyòng xiè.", translation: "Hiç zat däl." },
        ],
      },
    ],

    tips: [
      "请问 (qǐngwèn) — tanamaýan adamlardan sorag bermegiň edepli başlangyjy. Söz. «sorap göreýin». Köçede örän peýdaly jümle.",
      "对不起 / 没关系 — «bagyşla / hiç zat däl» standart jübüti. Ikisini bile ýat tut, olar jübüt bolup gelýär.",
      "不用谢 we 不客气 — ikisi hem «hiç zat däl» diýmek. 不客气 has ýumşak we ählumumy, 不用谢 has gepleşik görnüşi.",
      "Hytaýçada ugur sözleri jübütlerde üýtgeýär: 这儿 şu ýerde / 那儿 ol ýerde / 哪儿 nirede. 儿 goşulmasyna üns ber — ol demirgazyk (Pekin) şiwesine mahsus.",
      "个 (gè) sanaýyş sözi — iň ählumumy. San/görkezme bilen atyň arasynda goýulýar: 这个学校 (bu mekdep), 一个朋友 (bir dost). 这学校 diýip bolmaýar — 个 gerek.",
    ],
  },

  5: {
    introduction:
      "Bu Unit 1-iň jemleýji baby — geçilenleriň gaýtalanmagy we giňeldilmegi. Siz öz okuwyňyz hakda gürrüň bermegi (uniwersitet, hünär), 有 (eýe bolmak, bar bolmak) işligini we 的时候 (haçan, pursatynda) aňlatmasyny ulanmagy öwrenersiňiz.\n\n" +
      "Gahrymanlar: 古丽 Sinhua uniwersitetinden 王红 (Wáng Hóng) atly talyp gyz bilen tanyşýar. Şol bir wagtda 阿曼 hajathanany gözleýär.",

    vocabulary: [
      { target: "专业", transliteration: "zhuānyè", translation: "hünär (ýokary okuw jaýynda)" },
      { target: "国际", transliteration: "guójì", translation: "halkara" },
      { target: "关系", transliteration: "guānxi", translation: "gatnaşyklar, aragatnaşyklar" },
      { target: "中文", transliteration: "Zhōngwén", translation: "hytaý dili (ýazuw, edebi)" },
      { target: "系", transliteration: "xì", translation: "fakultet, kafedra" },
      { target: "研究生", transliteration: "yánjiūshēng", translation: "aspirant, magistrant" },
      { target: "现代", transliteration: "xiàndài", translation: "häzirki zaman" },
      { target: "文学", transliteration: "wénxué", translation: "edebiýat" },
      { target: "有", transliteration: "yǒu", translation: "eýe bolmak; bar bolmak" },
      { target: "空儿", transliteration: "kòngr", translation: "boş wagt" },
      { target: "时候", transliteration: "shíhou", translation: "wagt, pursat" },
      { target: "欢迎", transliteration: "huānyíng", translation: "garşylamak, hoş geldiňiz" },
      { target: "去", transliteration: "qù", translation: "gitmek (bir ýere)" },
      { target: "玩儿", transliteration: "wánr", translation: "oýnamak, wagt geçirmek" },
      { target: "卫生间", transliteration: "wèishēngjiān", translation: "hajathana" },
      { target: "教室", transliteration: "jiàoshì", translation: "auditoriýa, synp otagy" },
      { target: "旁边", transliteration: "pángbiān", translation: "gapdalynda, ýanynda" },
      { target: "对", transliteration: "duì", translation: "dogry" },
      { target: "王红", transliteration: "Wáng Hóng", translation: "Wan Hun (aýal ady)" },
      { target: "北京大学", transliteration: "Běijīng Dàxué", translation: "Pekin uniwersiteti (Beýda)" },
      { target: "清华大学", transliteration: "Qīnghuá Dàxué", translation: "Sinhua uniwersiteti" },
    ],

    grammar: [
      {
        title: "有 işligi — eýe bolmak; bar bolmak",
        explanation:
          "有 (yǒu) — «eýe bolmak, saklamak» ýa-da «bar bolmak, ýaşamak». Hytaýçadaky iň ýygy işlikleriň biri.\n\n" +
          "1-nji many — degişlilik («mende bar»):\n" +
          "Eýe + 有 + Obýekt\n" +
          "我有朋友。— Meniň dostlarym bar.\n" +
          "她有一个同屋。— Onuň bir otagdaşy bar.\n\n" +
          "2-nji many — bar bolmak («bir ýerde bar»):\n" +
          "Ýer + 有 + Obýekt\n" +
          "学校有图书馆。— Uniwersitetde kitaphana bar.\n" +
          "教室里有老师。— Auditoriýada mugallym bar.\n\n" +
          "Inkär DIŇE 没 arkaly (不 DÄL):\n" +
          "❌ 不有\n" +
          "✅ 没有 (méi yǒu) — «bolmazlyk»\n\n" +
          "我没有空儿。— Meniň boş wagtym ýok.",
        examples: [
          { target: "我有一个中国朋友。", transliteration: "Wǒ yǒu yí ge Zhōngguó péngyou.", translation: "Meniň bir hytaýly dostum bar." },
          { target: "你有空儿吗？", transliteration: "Nǐ yǒu kòngr ma?", translation: "Seniň boş wagtyň barmy?" },
          { target: "北京大学有图书馆。", transliteration: "Běijīng Dàxué yǒu túshūguǎn.", translation: "Pekin uniwersitetinde kitaphana bar." },
          { target: "我没有汉语词典。", transliteration: "Wǒ méiyǒu Hànyǔ cídiǎn.", translation: "Mende hytaý dili sözlügi ýok." },
        ],
      },
      {
        title: "的时候 aňlatmasy — «haçan, bir zadyň pursatynda»",
        explanation:
          "…的时候 (de shíhou) «haçan…, wagtynda…» diýmegi aňladýar. Eýerjeň bölegiň SOŇUNDA, esasy bölekden öň goýulýar.\n\n" +
          "Shema:  [Hereket/ýagdaý] + 的时候，[esasy bölek]\n\n" +
          "有空儿的时候，欢迎你去玩儿。\n" +
          "«Boş wagtyň bolanda, myhmançylyga gel».\n\n" +
          "Möhüm: tertip rusçanyň TERSINE. Ilki şert/wagt aýdylýar, soň esasy hereket.\n\n" +
          "Rusça: esasy hereket öňde durup bilýär\n" +
          "Hytaýça: «HAÇAN wagt — gel»",
        examples: [
          { target: "有空儿的时候，欢迎你去玩儿。", transliteration: "Yǒu kòngr de shíhou, huānyíng nǐ qù wánr.", translation: "Wagtyň bolanda — myhmançylyga gel." },
          { target: "我有空儿的时候去图书馆。", transliteration: "Wǒ yǒu kòngr de shíhou qù túshūguǎn.", translation: "Boş wagtym bolanda, kitaphana gidýärin." },
          { target: "你不忙的时候，我们一起玩儿。", transliteration: "Nǐ bù máng de shíhou, wǒmen yìqǐ wánr.", translation: "Sen boş bolanda, bilelikde oýnarys." },
        ],
      },
      {
        title: "Ýene ugur sözleri: 旁边, 前边, 后边, 里边",
        explanation:
          "4-nji bapda 东边/西边/南边/北边 we 左边/右边 öwrendik. Indi ýene birnäçe ugur goşalyň:\n\n" +
          "旁边 (pángbiān) — gapdalynda, ýanynda\n" +
          "前边 (qiánbian) — öňünde\n" +
          "后边 (hòubian) — yzynda\n" +
          "里边 (lǐbian) — içinde\n" +
          "外边 (wàibian) — daşynda\n" +
          "上边 (shàngbian) — ýokarsynda\n" +
          "下边 (xiàbian) — aşagynda\n\n" +
          "Shema şol bir: X + 的 + ugur\n" +
          "卫生间在教室的旁边。— Hajathana auditoriýanyň gapdalynda.\n" +
          "图书馆在宿舍的前边。— Kitaphana umumy ýaşaýyş jaýynyň öňünde.",
        examples: [
          { target: "卫生间在教室的旁边。", transliteration: "Wèishēngjiān zài jiàoshì de pángbiān.", translation: "Hajathana auditoriýanyň gapdalynda." },
          { target: "老师在阿曼的前边。", transliteration: "Lǎoshī zài Āmàn de qiánbian.", translation: "Mugallym Amanyň öňünde." },
          { target: "图书馆里边有很多书。", transliteration: "Túshūguǎn lǐbian yǒu hěn duō shū.", translation: "Kitaphananyň içinde köp kitap bar." },
          { target: "我的朋友在我旁边。", transliteration: "Wǒ de péngyou zài wǒ pángbiān.", translation: "Meniň dostum meniň ýanymda." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Uniwersitetde tanyşlyk (古丽 we 王红)",
        lines: [
          { speaker: "A", target: "你好！你叫什么名字？", transliteration: "Nǐ hǎo! Nǐ jiào shénme míngzi?", translation: "Salam! Adyň näme?" },
          { speaker: "B", target: "我叫王红。你呢？", transliteration: "Wǒ jiào Wáng Hóng. Nǐ ne?", translation: "Meniň adym Wan Hun. A seniň?" },
          { speaker: "A", target: "我叫古丽。我是北京大学的留学生。我的专业是国际关系。你呢？", transliteration: "Wǒ jiào Gǔlì. Wǒ shì Běijīng Dàxué de liúxuéshēng. Wǒ de zhuānyè shì guójì guānxi. Nǐ ne?", translation: "Meniň adym Gülnara. Men Pekin uniwersitetiniň daşary ýurtly talyby. Meniň hünärim — halkara gatnaşyklar. A sen?" },
          { speaker: "B", target: "我是清华大学中文系的研究生。我的专业是现代文学。", transliteration: "Wǒ shì Qīnghuá Dàxué Zhōngwén xì de yánjiūshēng. Wǒ de zhuānyè shì xiàndài wénxué.", translation: "Men Sinhua uniwersitetiniň hytaý dili fakultetiniň aspiranty. Meniň hünärim — häzirki zaman edebiýaty." },
          { speaker: "A", target: "清华大学在哪儿？", transliteration: "Qīnghuá Dàxué zài nǎr?", translation: "Sinhua nirede ýerleşýär?" },
          { speaker: "B", target: "在北京大学的东边。有空儿的时候，欢迎你去玩儿。", transliteration: "Zài Běijīng Dàxué de dōngbian. Yǒu kòngr de shíhou, huānyíng nǐ qù wánr.", translation: "Pekin uniwersitetiniň gündogarynda. Wagtyň bolanda — myhmançylyga gel." },
        ],
      },
      {
        title: "Hajathana nirede? (阿曼 we talyp)",
        lines: [
          { speaker: "A", target: "请问，卫生间在哪儿？", transliteration: "Qǐngwèn, wèishēngjiān zài nǎr?", translation: "Bagyşlaň, hajathana nirede?" },
          { speaker: "B", target: "在那儿，教室的旁边。", transliteration: "Zài nàr, jiàoshì de pángbiān.", translation: "Ol ýerde, auditoriýanyň gapdalynda." },
          { speaker: "A", target: "是西边的教室吗？", transliteration: "Shì xībian de jiàoshì ma?", translation: "Günbatar tarapdaky auditoriýamy?" },
          { speaker: "B", target: "对。", transliteration: "Duì.", translation: "Hawa, dogry." },
        ],
      },
    ],

    tips: [
      "欢迎你去玩儿 — edepli çakylyk. Söz. «seni oýnamaga gelmäge garşylaýaryn». Anyk sebäpsiz myhmançylyga çagyranyňda ulanylýar. Bu idioma, göni terjime etme.",
      "北京大学 (Běijīng Dàxué) we 清华大学 (Qīnghuá Dàxué) — Hytaýyň iň abraýly iki ýokary okuw jaýy. Köplenç 北大 (Běidà) we 清华 (Qīnghuá) diýlip gysgaldylýar.",
      "有 — HEMIŞE 没 arkaly inkär edilýär (没有). Bu 不 kabul etmeýän ýeke-täk işlik. Şobada ýat tut: 不有 ýok.",
      "中文 vs 汉语: ikisi hem «hytaý dili» diýmek. 汉语 — umumy termin (han dili), köplenç dilden söz hakda. 中文 — adatça ýazuw, edebi dil. Fakultetde ol 中文系.",
      "对 (duì) — ählumumy «hawa/dogry». Soraglara jogapda 是-den has tebigy. «Sen talypmy?» → 对 (hawa).",
    ],
  },

  6: {
    introduction:
      "Bu bapda siz wagty aýtmagy (sagat we minut), 100-e çenli sanamagy we 几 (näçe) bilen wagt hakda sorag bermegi öwrenersiňiz. Şeýle hem 太……了 («aşa») gurluşy we 一会儿见 («görüşýänçäk») aňlatmasy bilen tanşarsyňyz.\n\n" +
      "Ýagdaýlar: 古丽 中村-dan Ýaponiýada sapaklaryň haçan başlaýandygyny soraýar, soň 阿曼-dan leksiýanyň näçede başlajakdygyny bilýär.",

    vocabulary: [
      { target: "大学", transliteration: "dàxué", translation: "uniwersitet" },
      { target: "早上", transliteration: "zǎoshang", translation: "säher" },
      { target: "几", transliteration: "jǐ", translation: "näçe (10-a çenli sanlar üçin)" },
      { target: "点", transliteration: "diǎn", translation: "sagat (sagatda), nokat" },
      { target: "上课", transliteration: "shàngkè", translation: "sapaga başlamak, sapaga gitmek" },
      { target: "大部分", transliteration: "dàbùfen", translation: "köpçüligi, esasy bölegi" },
      { target: "九", transliteration: "jiǔ", translation: "dokuz" },
      { target: "我们", transliteration: "wǒmen", translation: "biz" },
      { target: "八", transliteration: "bā", translation: "sekiz" },
      { target: "五十", transliteration: "wǔshí", translation: "elli" },
      { target: "分", transliteration: "fēn", translation: "minut" },
      { target: "下课", transliteration: "xià kè", translation: "sapagy tamamlamak" },
      { target: "十", transliteration: "shí", translation: "on" },
      { target: "半", transliteration: "bàn", translation: "ýarym" },
      { target: "太……了", transliteration: "tài...le", translation: "aşa (örän)" },
      { target: "早", transliteration: "zǎo", translation: "ir, irki" },
      { target: "讲座", transliteration: "jiǎngzuò", translation: "leksiýa, çykyş" },
      { target: "开始", transliteration: "kāishǐ", translation: "başlamak" },
      { target: "六", transliteration: "liù", translation: "alty" },
      { target: "现在", transliteration: "xiànzài", translation: "häzir" },
      { target: "差", transliteration: "chà", translation: "ýetmezlik, (bir zada) galanda" },
      { target: "一", transliteration: "yī", translation: "bir" },
      { target: "刻", transliteration: "kè", translation: "çärýek sagat (15 minut)" },
      { target: "一会儿", transliteration: "yíhuìr", translation: "basym, birazdan" },
      { target: "见", transliteration: "jiàn", translation: "görüşmek, duşuşmak" },
    ],

    grammar: [
      {
        title: "0-dan 100-e çenli sanlar",
        explanation:
          "0-10 sanlary — esasy, olary ýat tutmaly:\n" +
          "零 líng — 0\n" +
          "一 yī — 1\n" +
          "二 èr — 2\n" +
          "三 sān — 3\n" +
          "四 sì — 4\n" +
          "五 wǔ — 5\n" +
          "六 liù — 6\n" +
          "七 qī — 7\n" +
          "八 bā — 8\n" +
          "九 jiǔ — 9\n" +
          "十 shí — 10\n\n" +
          "11-19: 十 + birlik\n" +
          "11 = 十一 (shí yī), 15 = 十五, 19 = 十九\n\n" +
          "20-99: onluk + 十 + birlik\n" +
          "20 = 二十 (èrshí), 25 = 二十五, 99 = 九十九\n\n" +
          "100 = 一百 (yìbǎi)\n\n" +
          "Logika ýönekeý: 35 sözme-söz «üç-on-bäş» (三十五).",
        examples: [
          { target: "十五", transliteration: "shíwǔ", translation: "15" },
          { target: "二十一", transliteration: "èrshíyī", translation: "21" },
          { target: "五十", transliteration: "wǔshí", translation: "50" },
          { target: "九十九", transliteration: "jiǔshíjiǔ", translation: "99" },
        ],
      },
      {
        title: "Wagty nädip aýtmaly (钟点表达法)",
        explanation:
          "Shema: [sagat] 点 [minut] 分\n\n" +
          "8:00 — 八点 (bā diǎn)\n" +
          "8:05 — 八点零五分 (零 líng = nol 10 minutdan az bolanda hökman)\n" +
          "8:10 — 八点十分\n" +
          "8:15 — 八点十五分 ÝA-DA 八点一刻 (bir 刻 = 15 minut)\n" +
          "8:30 — 八点三十分 ÝA-DA 八点半 (ýarym sagat)\n" +
          "8:45 — 八点四十五分 ÝA-DA 八点三刻 ÝA-DA 差一刻九点 («9-a çärýek galanda»)\n" +
          "8:50 — 八点五十分 ÝA-DA 差十分九点 («9-a 10 minut galanda»)\n\n" +
          "«Sagat näçe?» soragy: 现在几点？ (xiànzài jǐ diǎn?)\n" +
          "«Näçede?» soragy: 几点 + işlik → 几点上课？(sapaklar näçede başlaýar?)",
        examples: [
          { target: "现在几点？", transliteration: "Xiànzài jǐ diǎn?", translation: "Häzir sagat näçe?" },
          { target: "现在八点半。", transliteration: "Xiànzài bā diǎn bàn.", translation: "Häzir sekiz ýarym (8:30)." },
          { target: "差一刻六点。", transliteration: "Chà yí kè liù diǎn.", translation: "Alta çärýek galdy (5:45)." },
          { target: "你们几点上课？", transliteration: "Nǐmen jǐ diǎn shàng kè?", translation: "Sizde sapaklar näçede başlaýar?" },
          { target: "我们八点五十分上课。", transliteration: "Wǒmen bā diǎn wǔshí fēn shàng kè.", translation: "Bizde sapaklar 8:50-de." },
        ],
      },
      {
        title: "Sorag 几 — «näçe»",
        explanation:
          "几 (jǐ) — «näçe», emma diňe GARAŞYLÝAN KIÇI sanlar üçin (adatça 10-a çenli). Has uly san garaşylýan bolsa — 多少 ulanylýar (indiki baplarda bolar).\n\n" +
          "几 + sanaýyş sözi + at\n" +
          "几点? — sagat näçe? (hökman 24-den az)\n" +
          "几个朋友? — näçe dost? (az sanly)\n\n" +
          "Jogapda 几-niň ýerine anyk san goýulýar:\n" +
          "几点？→ 八点\n" +
          "几个朋友？→ 三个朋友\n\n" +
          "几 eýýäm soragy öz içine alýar — 吗 GOŞULMAÝAR.",
        examples: [
          { target: "现在几点？", transliteration: "Xiànzài jǐ diǎn?", translation: "Häzir sagat näçe?" },
          { target: "几点下课？", transliteration: "Jǐ diǎn xià kè?", translation: "Sapaklar näçede tamamlanýar?" },
          { target: "你有几个朋友？", transliteration: "Nǐ yǒu jǐ ge péngyou?", translation: "Seniň näçe dostuň bar?" },
          { target: "讲座几点开始？", transliteration: "Jiǎngzuò jǐ diǎn kāishǐ?", translation: "Leksiýa näçede başlaýar?" },
        ],
      },
      {
        title: "太……了 gurluşy — «aşa»",
        explanation:
          "太…了 (tài…le) ýokary derejäni aňladýar, köplenç nägilelik ýa-da haýranlyk öwüşgini bilen.\n\n" +
          "Shema:  太 + Sypat/Işlik + 了\n\n" +
          "太早了！— Aşa ir!\n" +
          "太好了！— Ajaýyp! (bu ýerde — oňyn)\n" +
          "太累了。— Örän ýadadym.\n\n" +
          "Inkärde 了 adatça taşlanýar: 不太早 («aşa ir däl»).\n" +
          "太 了-syz tamamlanmadyk ýaly eşidilýär — 了 diýen ýaly hemişe gerek.",
        examples: [
          { target: "八点上课，太早了！", transliteration: "Bā diǎn shàngkè, tài zǎo le!", translation: "Sapaklar 8-de — bu aşa ir!" },
          { target: "太好了！", transliteration: "Tài hǎo le!", translation: "Ajaýyp!" },
          { target: "这个学校太大了。", transliteration: "Zhège xuéxiào tài dà le.", translation: "Bu mekdep aşa uly." },
          { target: "不太早。", transliteration: "Bú tài zǎo.", translation: "Beýle hem ir däl." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Ýaponiýada sapaklar (古丽 we 中村)",
        lines: [
          { speaker: "A", target: "中村，日本的大学早上几点上课？", transliteration: "Zhōngcūn, Rìběn de dàxué zǎoshang jǐ diǎn shàngkè?", translation: "Nakamura, Ýaponiýanyň uniwersitetlerinde ertirine sapaklar näçede başlaýar?" },
          { speaker: "B", target: "大部分是九点，我们学校是八点五十分。", transliteration: "Dàbùfen shì jiǔ diǎn, wǒmen xuéxiào shì bā diǎn wǔshí fēn.", translation: "Köpüsinde 9-da, biziň mekdebimizde — 8:50-de." },
          { speaker: "A", target: "几点下课？", transliteration: "Jǐ diǎn xià kè?", translation: "Näçede tamamlanýar?" },
          { speaker: "B", target: "十点半。", transliteration: "Shí diǎn bàn.", translation: "On ýarymda." },
          { speaker: "A", target: "北京大学早上八点上课，太早了。", transliteration: "Běijīng Dàxué zǎoshang bā diǎn shàngkè, tài zǎo le.", translation: "Pekin uniwersitetinde sapaklar ertirine 8-de — aşa ir!" },
        ],
      },
      {
        title: "Leksiýa näçede? (古丽 we 阿曼)",
        lines: [
          { speaker: "A", target: "阿曼，讲座几点开始？", transliteration: "Āmàn, jiǎngzuò jǐ diǎn kāishǐ?", translation: "Aman, leksiýa näçede başlaýar?" },
          { speaker: "B", target: "六点。", transliteration: "Liù diǎn.", translation: "6-da." },
          { speaker: "A", target: "现在几点？", transliteration: "Xiànzài jǐ diǎn?", translation: "A häzir sagat näçe?" },
          { speaker: "B", target: "差一刻六点。", transliteration: "Chà yí kè liù diǎn.", translation: "Alta çärýek galdy." },
          { speaker: "A", target: "谢谢！一会儿见。", transliteration: "Xièxie! Yíhuìr jiàn.", translation: "Sag bol! Görüşýänçäk." },
        ],
      },
    ],

    tips: [
      "一 (yī) indiki bogna görä tonuny üýtgedýär: 4-nji tonuň öňünde → 2-nji (yí kè, yí ge), 1/2/3-nji tonuň öňünde → 4-nji (yì bēi, yì nián, yì wǎn). Ýeke özi — 1-nji ton (yī).",
      "零 (líng = nol) 〇 (tegelek) iýeroglifi bilen hem ýazylýar. Meselem 2026-njy ýyl = 二〇二六年. Wagt sanlarynda (8:05) 零 hökman, ýogsam düşnüksiz.",
      "Hoşlaşmak formulalary: 一会儿见 (görüşýänçäk, birazdan), 明天见 (ertire çenli), 再见 (sag boluň). Ählisi «[wagt]见» görnüşinde gurulýar.",
      "上课 / 下课 — sözme-söz «sapaga çykmak» / «sapakdan düşmek». Meňzeş jübütler: 上班/下班 (iş), 上车/下车 (ulag).",
      "Gepleşikde hytaýlylar takyk «三十分» we «十五分» diýenden, 半 (ýarym sagat) we 一刻/三刻 (çärýekler) diýmegi köp ulanýarlar. Şu gysgaltmalary ulanmagy öwren.",
    ],
  },

  7: {
    introduction:
      "Bu bapda siz günüň meýilnamalary hakda gürlemegi (säher / günortadan soň / agşam), 有 bilen bir zadyň barlygyny soramagy, çaklama üçin 吧 bölejigini we 上/下/里/外 sözlerini sypat hökmünde ulanmagy öwrenersiňiz.\n\n" +
      "Ýagdaýlar: 古丽 中村-dan welosiped karz alýar, 阿曼 古丽-ni kino çagyrýar.",

    vocabulary: [
      { target: "明天", transliteration: "míngtiān", translation: "ertir" },
      { target: "课", transliteration: "kè", translation: "sapak, ders" },
      { target: "上午", transliteration: "shàngwǔ", translation: "günortadan öň, ertirki wagt (10-12)" },
      { target: "下午", transliteration: "xiàwǔ", translation: "günortadan soň, gündiz" },
      { target: "没(有)", transliteration: "méi(yǒu)", translation: "bolmazlyk, ýok" },
      { target: "自行车", transliteration: "zìxíngchē", translation: "welosiped" },
      { target: "吧", transliteration: "ba", translation: "bölejik (çaklama / teklip)" },
      { target: "事", transliteration: "shì", translation: "iş, mesele" },
      { target: "可是", transliteration: "kěshì", translation: "emma, ýöne" },
      { target: "没问题", transliteration: "méi wèntí", translation: "mesele ýok" },
      { target: "钥匙", transliteration: "yàoshi", translation: "açar" },
      { target: "车", transliteration: "chē", translation: "ulag, welosiped, maşyn" },
      { target: "下", transliteration: "xià", translation: "aşak, aşagynda" },
      { target: "车棚", transliteration: "chēpéng", translation: "welosiped duralgasy, ulag üçin ýapyk" },
      { target: "里", transliteration: "lǐ", translation: "içinde, -da" },
      { target: "后边", transliteration: "hòubian", translation: "yzynda, arkasynda" },
      { target: "今天", transliteration: "jīntiān", translation: "şu gün" },
      { target: "晚上", transliteration: "wǎnshang", translation: "agşam" },
      { target: "时间", transliteration: "shíjiān", translation: "wagt" },
      { target: "电影院", transliteration: "diànyǐngyuàn", translation: "kinoteatr" },
      { target: "电影", transliteration: "diànyǐng", translation: "kinofilm, kino" },
      { target: "听说", transliteration: "tīngshuō", translation: "eşitdim, diýýärler" },
      { target: "有名", transliteration: "yǒumíng", translation: "meşhur, belli" },
      { target: "当然", transliteration: "dāngrán", translation: "elbetde, hökman" },
    ],

    grammar: [
      {
        title: "有 bilen sözlemler (gaýtalama + inkär)",
        explanation:
          "5-nji bapda 有 işligi bilen tanyşdyk. Indi berkideliň we inkär soraglary goşalyň.\n\n" +
          "Shemalar:\n" +
          "Tassyklama:  Eýe + 有 + Obýekt\n" +
          "Inkär:  Eýe + 没有 + Obýekt (不有 DÄL!)\n" +
          "Sorag:  Eýe + 有 + Obýekt + 吗？\n\n" +
          "Doly sorag «bar ýa ýok»:  Eýe + 有没有 + Obýekt？\n" +
          "— 你有没有自行车？= Seniň welosipediň barmy ýa ýok?\n\n" +
          "Jogapda obýekti gaýtalaman diňe 有 / 没有 diýip bolýar.",
        examples: [
          { target: "明天你有课吗？", transliteration: "Míngtiān nǐ yǒu kè ma?", translation: "Ertir seniň sapagyň barmy?" },
          { target: "我上午有课，下午没有。", transliteration: "Wǒ shàngwǔ yǒu kè, xiàwǔ méiyǒu.", translation: "Günortadan öň bar, günortadan soň — ýok." },
          { target: "我没有自行车。", transliteration: "Wǒ méiyǒu zìxíngchē.", translation: "Meniň welosipedim ýok." },
          { target: "你有没有钥匙？", transliteration: "Nǐ yǒu méiyǒu yàoshi?", translation: "Seniň açaryň barmy ýa ýok?" },
        ],
      },
      {
        title: "吧 bölejigi (1) — «çaklamany tassyklamak»",
        explanation:
          "吧 (ba) soragyň soňunda «men şeýle pikir edýärin — tassykla?» diýmegi aňladýar. Ýagny gepleýän diýen ýaly ynamly we tassyklama soraýar.\n\n" +
          "Shema:  Tassyklama + 吧？\n\n" +
          "你有自行车吧？— «Seniň welosipediň bar, şeýlemi?»\n\n" +
          "吗-dan tapawudy:\n" +
          "• 你有自行车吗？— Ýönekeý sorag «seniň welosipediň barmy?» (bilemok)\n" +
          "• 你有自行车吧？— «Seniň bar, şeýlemi?» (bar diýip pikir edýärin)\n\n" +
          "Bu 吧-niň manylarynyň biri. Beýlekisi (teklip «geliň») — indiki bapda.",
        examples: [
          { target: "你有自行车吧？", transliteration: "Nǐ yǒu zìxíngchē ba?", translation: "Seniň welosipediň bar, şeýlemi?" },
          { target: "你是美国留学生吧？", transliteration: "Nǐ shì Měiguó liúxuéshēng ba?", translation: "Sen amerikaly talyp, şeýlemi?" },
          { target: "那是图书馆吧？", transliteration: "Nà shì túshūguǎn ba?", translation: "Ol kitaphana, şeýlemi?" },
          { target: "你们明天有汉语课吧？", transliteration: "Nǐmen míngtiān yǒu Hànyǔ kè ba?", translation: "Ertir sizde hytaý dili sapagy bar, şeýlemi?" },
        ],
      },
      {
        title: "Ugur sözleri atyň bölegi hökmünde: X + 里/上/下/后…",
        explanation:
          "4-5-nji baplarda doly görnüşleri öwrendik: 里边, 上边, 下边 we ş.m. Emma olar atdan göni SOŇ gelende, 边 taşlanyp bilner we diňe 里, 上, 下, 后, 前, 外 galýar (旁 taşlanyp bilinmeýär).\n\n" +
          "Shema:  At + ýer (里/上/下/前/后/外)\n\n" +
          "车棚里 — welosiped duralgasynda\n" +
          "宿舍楼后 — umumy ýaşaýyş jaýynyň arkasynda\n" +
          "桌子上 — stoluň üstünde\n" +
          "教室外 — auditoriýanyň daşynda\n\n" +
          "Bu has gepleşik usuly, 的-syz we 边-syz.",
        examples: [
          { target: "车在车棚里。", transliteration: "Chē zài chēpéng li.", translation: "Welosiped duralgada." },
          { target: "她的自行车在楼后。", transliteration: "Tā de zìxíngchē zài lóu hòu.", translation: "Onuň welosipedi binanyň arkasynda." },
          { target: "古丽在车棚里。", transliteration: "Gǔlì zài chēpéng li.", translation: "Gülnara welosiped duralgasynda." },
          { target: "老师在教室里。", transliteration: "Lǎoshī zài jiàoshì li.", translation: "Mugallym auditoriýada." },
        ],
      },
      {
        title: "Wagt sözleri hal hökmünde",
        explanation:
          "Wagt sözleri (今天, 明天, 晚上, 上午, 八点…) işligiň ÖŇÜNDE ýa-da sözlemiň başynda goýulýar.\n\n" +
          "Shema 1:  Eýe + [Wagt] + Işlik + …\n" +
          "我明天八点有课。\n\n" +
          "Shema 2:  [Wagt] + Eýe + Işlik + …\n" +
          "今天晚上你有时间吗？\n\n" +
          "Birnäçe wagt sözüni birleşdirip bolýar (uludan kiçä):\n" +
          "今天晚上八点 — şu gün agşam 8-de.\n" +
          "明天下午 — ertir günortadan soň.\n\n" +
          "HYTAÝÇADA wagt soňuna goýulmaýar:\n" +
          "❌ 我有课明天\n" +
          "✅ 我明天有课",
        examples: [
          { target: "今天晚上你有时间吗？", transliteration: "Jīntiān wǎnshang nǐ yǒu shíjiān ma?", translation: "Şu gün agşam seniň wagtyň barmy?" },
          { target: "我明天八点有课。", transliteration: "Wǒ míngtiān bā diǎn yǒu kè.", translation: "Ertir 8-de meniň sapagym bar." },
          { target: "电影晚上有电影。", transliteration: "Diànyǐng wǎnshang yǒu diànyǐng.", translation: "Agşam kino görkezerler." },
          { target: "阿曼下午有事。", transliteration: "Āmàn xiàwǔ yǒu shì.", translation: "Amanyň günortadan soň işi bar." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Welosiped karz alýarys (古丽 we 中村)",
        lines: [
          { speaker: "A", target: "中村，明天你有课吗？", transliteration: "Zhōngcūn, míngtiān nǐ yǒu kè ma?", translation: "Nakamura, ertir seniň sapagyň barmy?" },
          { speaker: "B", target: "我上午有课，下午没有。", transliteration: "Wǒ shàngwǔ yǒu kè, xiàwǔ méiyǒu.", translation: "Günortadan öň bar, günortadan soň ýok." },
          { speaker: "A", target: "你有自行车吧？", transliteration: "Nǐ yǒu zìxíngchē ba?", translation: "Seniň welosipediň bar, şeýlemi?" },
          { speaker: "B", target: "有。什么事？", transliteration: "Yǒu. Shénme shì?", translation: "Bar. Näme boldy?" },
          { speaker: "A", target: "我明天下午去见朋友，可是我没有自行车……", transliteration: "Wǒ míngtiān xiàwǔ qù jiàn péngyou, kěshì wǒ méiyǒu zìxíngchē...", translation: "Ertir günortadan soň dostlarymyň ýanyna barýaryn, emma meniň welosipedim ýok…" },
          { speaker: "B", target: "没问题，我有。这是钥匙，车在楼下车棚里。", transliteration: "Méi wèntí, wǒ yǒu. Zhè shì yàoshi, chē zài lóu xià chēpéng li.", translation: "Mesele ýok, mende bar. Ine açar, welosiped aşakda duralgada." },
          { speaker: "A", target: "是宿舍楼后边的车棚吗？", transliteration: "Shì sùshèlóu hòubian de chēpéng ma?", translation: "Duralga umumy ýaşaýyş jaýynyň arkasyndamy?" },
          { speaker: "B", target: "对。", transliteration: "Duì.", translation: "Hawa." },
        ],
      },
      {
        title: "Kino gideliň (阿曼 we 古丽)",
        lines: [
          { speaker: "A", target: "古丽，今天晚上你有时间吗？", transliteration: "Gǔlì, jīntiān wǎnshang nǐ yǒu shíjiān ma?", translation: "Gülnara, şu gün agşam seniň wagtyň barmy?" },
          { speaker: "B", target: "有。有事吗？", transliteration: "Yǒu. Yǒu shì ma?", translation: "Bar. Näme boldy?" },
          { speaker: "A", target: "学校电影院有电影，你去吗？", transliteration: "Xuéxiào diànyǐngyuàn yǒu diànyǐng, nǐ qù ma?", translation: "Mekdebiň kinoteatrynda kinofilm görkezýärler, gidersiňmi?" },
          { speaker: "B", target: "什么电影？", transliteration: "Shénme diànyǐng?", translation: "Haýsy kinofilm?" },
          { speaker: "A", target: "我不知道名字，可是听说很有名。", transliteration: "Wǒ bù zhīdào míngzi, kěshì tīngshuō hěn yǒumíng.", translation: "Adyny bilemok, emma örän meşhur diýýärler." },
          { speaker: "B", target: "我当然去。", transliteration: "Wǒ dāngrán qù.", translation: "Elbetde giderin." },
        ],
      },
    ],

    tips: [
      "Günüň bölünişi: 早上 (5-9) → 上午 (9-12) → 中午 (12-13) → 下午 (13-18) → 晚上 (18-24). Anyk döwri görkezmek üçin gerekli sözi ulan.",
      "可是 we 但是 ikisi hem «emma» diýmek. 可是 birneme has gepleşik, 但是 has bitarap. Biri-biriniň ýerine diýen ýaly ulanylýar.",
      "没有 köplenç 没 (méi) diýlip gysgaldylýar: 我没课 = meniň sapagym ýok. Emma başda doly görnüşi 没有 diýmek gowy.",
      "Garşylykly jübütleri ýat tut: 今天/明天 (şu gün/ertir), 上午/下午 (günortadan öň/soň), 里/外 (içinde/daşynda), 前/后 (öňünde/arkasynda).",
      "当然 (dāngrán) — razylyk üçin örän peýdaly söz: «elbetde!», «hökman!». Taýýarlygy nygtamak isläniňde 好-nyň ýerine ulan.",
    ],
  },

  8: {
    introduction:
      "В этой главе вы научитесь называть номер телефона, комнаты, маршрут автобуса, спрашивать «как добраться?» и предлагать «давай...» через частицу 吧. Также познакомитесь с разницей 几 / 多少.\n\n" +
      "Ситуация: 王红 звонит 古丽 и приглашает в гости в Цинхуа, они обмениваются адресом и телефонами.",

    vocabulary: [
      { target: "周末", transliteration: "zhōumò", translation: "выходные" },
      { target: "啊", transliteration: "a", translation: "частица эмоционального оттенка" },
      { target: "不过", transliteration: "búguò", translation: "но, однако (мягче, чем 可是)" },
      { target: "怎么", transliteration: "zěnme", translation: "как, каким образом" },
      { target: "走", transliteration: "zǒu", translation: "идти, ходить, добираться" },
      { target: "路", transliteration: "lù", translation: "маршрут, дорога" },
      { target: "和", transliteration: "hé", translation: "и (союз между существительными)" },
      { target: "公共汽车", transliteration: "gōnggòng qìchē", translation: "автобус (общественный)" },
      { target: "都", transliteration: "dōu", translation: "все, оба" },
      { target: "到", transliteration: "dào", translation: "прибывать, доезжать" },
      { target: "骑", transliteration: "qí", translation: "ехать верхом (на велосипеде/мотоцикле)" },
      { target: "快", transliteration: "kuài", translation: "быстрый, быстро" },
      { target: "分钟", transliteration: "fēnzhōng", translation: "минута (длительность)" },
      { target: "就", transliteration: "jiù", translation: "уже, сразу же (подчёркивает быстроту)" },
      { target: "校园", transliteration: "xiàoyuán", translation: "кампус, студгородок" },
      { target: "东南", transliteration: "dōngnán", translation: "юго-восток" },
      { target: "东", transliteration: "dōng", translation: "восток" },
      { target: "号", transliteration: "hào", translation: "номер" },
      { target: "房间", transliteration: "fángjiān", translation: "комната" },
      { target: "多少", transliteration: "duōshao", translation: "сколько (для больших чисел)" },
      { target: "室", transliteration: "shì", translation: "комната (в адресе)" },
      { target: "电话", transliteration: "diànhuà", translation: "телефон" },
      { target: "号码", transliteration: "hàomǎ", translation: "номер (телефонный, серийный)" },
      { target: "手机", transliteration: "shǒujī", translation: "мобильный телефон" },
      { target: "等", transliteration: "děng", translation: "ждать" },
    ],

    grammar: [
      {
        title: "Частица 吧 (2) — предложение «давай...»",
        explanation:
          "Это второе значение 吧 (первое — «подтверждение», Глава 7). Здесь 吧 в конце утверждения превращает его в МЯГКОЕ ПРЕДЛОЖЕНИЕ, типа «давай» или «давайте».\n\n" +
          "Схема:  Предложение + 吧！\n\n" +
          "Без 吧: 我们去图书馆。— «Мы идём в библиотеку» (утверждение)\n" +
          "С 吧: 我们去图书馆吧！— «Давай пойдём в библиотеку!»\n\n" +
          "Это не приказ, а дружеское предложение.",
        examples: [
          { target: "来我们学校玩儿吧！", transliteration: "Lái wǒmen xuéxiào wánr ba!", translation: "Давай к нам в университет в гости!" },
          { target: "我们去图书馆吧！", transliteration: "Wǒmen qù túshūguǎn ba!", translation: "Давай пойдём в библиотеку!" },
          { target: "我们骑自行车去吧！", transliteration: "Wǒmen qí zìxíngchē qù ba!", translation: "Давай поедем на велосипедах!" },
          { target: "来我家玩儿吧！", transliteration: "Lái wǒ jiā wánr ba!", translation: "Приходи ко мне в гости!" },
        ],
      },
      {
        title: "Частица 呢 (2) — смягчение специальных вопросов",
        explanation:
          "В Главе 2 мы учили 呢 для встречных вопросов (你呢？). Это второе значение: 呢 в конце СПЕЦИАЛЬНОГО вопроса (с 怎么/哪儿/谁/什么) смягчает его, делает более раздумчивым.\n\n" +
          "Без 呢: 去图书馆怎么走？— «Как пройти в библиотеку?» (прямой вопрос)\n" +
          "С 呢: 去图书馆怎么走呢？— «А как пройти в библиотеку?» (мягче, задумчивее)\n\n" +
          "Различие тонкое и похоже на русский оттенок с «а?»: «а как пройти?», «а где это?».",
        examples: [
          { target: "去你们学校怎么走呢？", transliteration: "Qù nǐmen xuéxiào zěnme zǒu ne?", translation: "А как добраться до вашего университета?" },
          { target: "这是谁的书呢？", transliteration: "Zhè shì shéi de shū ne?", translation: "А чья это книга?" },
          { target: "古丽在哪儿呢？", transliteration: "Gǔlì zài nǎr ne?", translation: "А где Гульнара?" },
          { target: "去图书馆怎么走呢？", transliteration: "Qù túshūguǎn zěnme zǒu ne?", translation: "А как пройти в библиотеку?" },
        ],
      },
      {
        title: "Номера: телефоны, комнаты, автобусы",
        explanation:
          "Номера читаются ПО ОДНОЙ ЦИФРЕ (в отличие от обычных чисел, которые читаются как «сорок пять» и т.п.).\n\n" +
          "Пример: телефон 63861023 → 六三八六一〇二三 (liù sān bā liù yī líng èr sān).\n\n" +
          "Важно: цифра «1» в номерах часто произносится как 幺 (yāo) вместо 一 (yī). Это чтобы не перепутать с «семь» (qī) по телефону.\n\n" +
          "• Номер дома/комнаты: 502室 → 五〇二室 (wǔ líng èr shì)\n" +
          "• Маршрут автобуса: 21路 → 二十一路 (обычное число) или 二一路 (цифры)\n" +
          "• Большие номера автобусов: 108路 → 幺〇八路 (yāo líng bā lù)",
        examples: [
          { target: "我的房间号是201。", transliteration: "Wǒ de fángjiān hào shì èr líng yāo.", translation: "Номер моей комнаты 201." },
          { target: "我的电话是63861023。", transliteration: "Wǒ de diànhuà shì liù sān bā liù yāo líng èr sān.", translation: "Мой телефон 6386-1023." },
          { target: "108路公共汽车到北京大学。", transliteration: "Yāo líng bā lù gōnggòng qìchē dào Běijīng Dàxué.", translation: "Автобус 108 идёт до Пекинского университета." },
          { target: "我的宿舍是东5号楼502室。", transliteration: "Wǒ de sùshè shì dōng wǔ hào lóu wǔ líng èr shì.", translation: "Моё общежитие — восточный корпус 5, комната 502." },
        ],
      },
      {
        title: "几 vs 多少 — когда что использовать",
        explanation:
          "Оба значат «сколько», но разница в ожидаемой величине:\n\n" +
          "• 几 (jǐ) — ожидается МАЛОЕ число (обычно до 10). Требует счётного слова.\n" +
          "  你有几个朋友？— Сколько у тебя друзей? (ожидаю 1-10)\n" +
          "  几点？— Который час? (1-24)\n\n" +
          "• 多少 (duōshao) — ожидается БОЛЬШОЕ число ИЛИ точно не знаешь сколько. Счётное слово НЕ обязательно.\n" +
          "  你的电话是多少？— Какой у тебя номер? (много цифр)\n" +
          "  多少钱？— Сколько стоит?\n" +
          "  多少学生？— Сколько студентов? (может быть много)\n\n" +
          "Для номеров (телефона, дома, автобуса) ВСЕГДА 多少.",
        examples: [
          { target: "你的房间号是多少？", transliteration: "Nǐ de fángjiān hào shì duōshao?", translation: "Какой у тебя номер комнаты?" },
          { target: "你的宿舍是几号楼？", transliteration: "Nǐ de sùshè shì jǐ hào lóu?", translation: "В каком корпусе твоё общежитие? (ожидается 1-9)" },
          { target: "阿曼的电话号码是多少？", transliteration: "Āmàn de diànhuà hàomǎ shì duōshao?", translation: "Какой у Давэя номер телефона?" },
          { target: "你有几个中国朋友？", transliteration: "Nǐ yǒu jǐ ge Zhōngguó péngyou?", translation: "Сколько у тебя китайских друзей?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "В гости в Цинхуа (王红 и 古丽 по телефону)",
        lines: [
          { speaker: "A", target: "古丽，周末你有空儿吗？", transliteration: "Gǔlì, zhōumò nǐ yǒu kòngr ma?", translation: "Гульнара, на выходных свободна?" },
          { speaker: "B", target: "有。什么事？", transliteration: "Yǒu. Shénme shì?", translation: "Да. А что?" },
          { speaker: "A", target: "来我们学校玩儿吧！", transliteration: "Lái wǒmen xuéxiào wánr ba!", translation: "Приезжай к нам в университет в гости!" },
          { speaker: "B", target: "好啊！不过，去你们学校怎么走呢？", transliteration: "Hǎo a! Búguò, qù nǐmen xuéxiào zěnme zǒu ne?", translation: "Хорошо! А как к вам добраться?" },
          { speaker: "A", target: "21路和106路公共汽车都到。骑自行车也很快，十五分钟就到。", transliteration: "Èrshíyī lù hé yāo líng liù lù gōnggòng qìchē dōu dào. Qí zìxíngchē yě hěn kuài, shíwǔ fēnzhōng jiù dào.", translation: "Автобусы 21 и 106 оба идут. На велосипеде тоже быстро — 15 минут и ты на месте." },
          { speaker: "B", target: "你的宿舍在哪儿？", transliteration: "Nǐ de sùshè zài nǎr?", translation: "А где твоё общежитие?" },
          { speaker: "A", target: "在校园的东南边，是东5号楼。", transliteration: "Zài xiàoyuán de dōngnánbian, shì dōng wǔ hào lóu.", translation: "На юго-востоке кампуса, восточный корпус 5." },
          { speaker: "B", target: "你的房间号是多少？", transliteration: "Nǐ de fángjiān hào shì duōshao?", translation: "Какой у тебя номер комнаты?" },
          { speaker: "A", target: "502号。我的宿舍是东5号楼502室。", transliteration: "Wǔ líng èr hào. Wǒ de sùshè shì dōng wǔ hào lóu wǔ líng èr shì.", translation: "502. Моё общежитие — восточный корпус 5, комната 502." },
          { speaker: "B", target: "你的电话号码是多少？", transliteration: "Nǐ de diànhuà hàomǎ shì duōshao?", translation: "Какой у тебя номер телефона?" },
          { speaker: "A", target: "63861023。你有手机吗？", transliteration: "Liù sān bā liù yāo líng èr sān. Nǐ yǒu shǒujī ma?", translation: "6386-1023. У тебя есть мобильный?" },
          { speaker: "B", target: "没有，不过我朋友有。", transliteration: "Méiyǒu, búguò wǒ péngyou yǒu.", translation: "Нет, но у моего друга есть." },
          { speaker: "A", target: "号码是多少？", transliteration: "Hàomǎ shì duōshao?", translation: "Какой номер?" },
          { speaker: "B", target: "13695670132。", transliteration: "Yāo sān liù jiǔ wǔ liù qī líng yāo sān èr.", translation: "13695670132." },
          { speaker: "A", target: "好，我等你。", transliteration: "Hǎo, wǒ děng nǐ.", translation: "Хорошо, жду тебя." },
        ],
      },
    ],

    tips: [
      "Цифра 1 в номерах = 幺 (yāo), не 一. Это чтобы не спутать с 七 (qī). Все китайцы говорят номера через 幺, а не 一.",
      "就 (jiù) подчёркивает быстроту/лёгкость: 十五分钟就到 = «и всего за 15 минут добираешься». Переводится как «уже», «сразу же», но часто только эмоциональный оттенок «и всё».",
      "Разница 和 и 跟: оба значат «и» между существительными. 和 (hé) — стандартное письменное, 跟 (gēn) — разговорное. В Главе 8 пока только 和.",
      "不过 мягче чем 可是 и 但是. Можно перевести как «правда», «впрочем». Часто используется когда хочешь возразить мягко.",
      "Порядок адреса в Китае ОБРАТНЫЙ русскому: страна → город → район → корпус → комната. 北京大学东5号楼502室 — «Пекинский университет, восточный корпус 5, комната 502».",
    ],
  },

  9: {
    introduction:
      "В этой главе вы научитесь делать покупки в магазине: спрашивать цену, считать деньги в юанях, использовать счётные слова (瓶, 本) и различать 二 / 两 (два).\n\n" +
      "Ситуации: 阿曼 покупает пиво и воду в киоске, 古丽 покупает англо-китайский словарь в книжном.",

    vocabulary: [
      { target: "师傅", transliteration: "shīfu", translation: "уважительное обращение к работникам (мастер, шеф)" },
      { target: "买", transliteration: "mǎi", translation: "покупать" },
      { target: "啤酒", transliteration: "píjiǔ", translation: "пиво" },
      { target: "售货员", transliteration: "shòuhuòyuán", translation: "продавец, кассир" },
      { target: "瓶", transliteration: "píng", translation: "бутылка (счётное слово)" },
      { target: "钱", transliteration: "qián", translation: "деньги" },
      { target: "块", transliteration: "kuài", translation: "юань (разговорное)" },
      { target: "两", transliteration: "liǎng", translation: "два (перед счётным словом)" },
      { target: "再", transliteration: "zài", translation: "ещё, снова" },
      { target: "水", transliteration: "shuǐ", translation: "вода" },
      { target: "一共", transliteration: "yígòng", translation: "всего, в общей сумме" },
      { target: "毛", transliteration: "máo", translation: "цзяо, 1/10 юаня (разговорное)" },
      { target: "给", transliteration: "gěi", translation: "давать, вручать" },
      { target: "小姐", transliteration: "xiǎojie", translation: "девушка, мисс" },
      { target: "看", transliteration: "kàn", translation: "смотреть, глядеть" },
      { target: "这些", transliteration: "zhèxiē", translation: "эти (множественное)" },
      { target: "要", transliteration: "yào", translation: "хотеть, нуждаться" },
      { target: "本", transliteration: "běn", translation: "счётное слово для книг" },
      { target: "小", transliteration: "xiǎo", translation: "маленький" },
      { target: "零钱", transliteration: "língqián", translation: "мелочь, сдача" },
    ],

    grammar: [
      {
        title: "Счётные слова (量词) — обязательны с числами!",
        explanation:
          "В китайском между числом (или 这/那) и существительным ОБЯЗАТЕЛЬНО ставится счётное слово. Нельзя сказать «одна книга» как 一书 — нужно 一本书.\n\n" +
          "Схема:  Число / 这 / 那 / 几 + Счётное слово + Существительное\n\n" +
          "Основные счётные слова:\n" +
          "个 (ge) — универсальное (люди, предметы)\n" +
          "本 (běn) — книги, словари, журналы\n" +
          "瓶 (píng) — бутылки\n" +
          "块 (kuài) — кусочки; юани (в деньгах)\n" +
          "辆 (liàng) — транспорт (машина, велосипед)\n" +
          "位 (wèi) — вежливое для людей (учителя, гости)\n" +
          "条 (tiáo) — длинные объекты (собака, дорога, река)\n\n" +
          "Само существительное иногда можно опустить, если понятно:\n" +
          "— 多少钱一瓶？— Сколько за бутылку? (什么бутылка понятно)",
        examples: [
          { target: "我要一本小词典。", transliteration: "Wǒ yào yì běn xiǎo cídiǎn.", translation: "Мне нужен один маленький словарь." },
          { target: "我买两瓶啤酒。", transliteration: "Wǒ mǎi liǎng píng píjiǔ.", translation: "Я покупаю две бутылки пива." },
          { target: "21路公共汽车。", transliteration: "Èrshíyī lù gōnggòng qìchē.", translation: "Автобус 21-го маршрута." },
          { target: "一位老师", transliteration: "yí wèi lǎoshī", translation: "один учитель (вежливо)" },
        ],
      },
      {
        title: "二 и 两 — оба «два», но разные",
        explanation:
          "二 (èr) и 两 (liǎng) — оба значат «2», но используются по-разному:\n\n" +
          "二 (èr) — используется:\n" +
          "• При счёте (一, 二, 三...)\n" +
          "• В составных числах (十二=12, 二十=20, 二十二=22)\n" +
          "• В порядковых (第二 — второй, 二号 — номер 2)\n" +
          "• В адресах и номерах (二号楼 — корпус 2)\n\n" +
          "两 (liǎng) — используется:\n" +
          "• Перед счётным словом: 两本书 (2 книги), 两个朋友 (2 друга), 两瓶水\n" +
          "• Перед «большими» числами: 两千 (2000), 两万 (20000), 两亿\n\n" +
          "Простое правило: если дальше идёт счётное слово или «тысяча/миллион» → 两. В остальных случаях → 二.",
        examples: [
          { target: "两本书", transliteration: "liǎng běn shū", translation: "две книги" },
          { target: "十二块", transliteration: "shí'èr kuài", translation: "12 юаней" },
          { target: "第二号楼", transliteration: "dì èr hào lóu", translation: "корпус номер 2" },
          { target: "两千块", transliteration: "liǎng qiān kuài", translation: "2000 юаней" },
        ],
      },
      {
        title: "Деньги в юанях — 块 / 毛 / 分",
        explanation:
          "Китайские деньги (人民币, РМБ):\n\n" +
          "• 元 (yuán) — юань (письменно). Разговорно: 块 (kuài).\n" +
          "• 角 (jiǎo) — 1/10 юаня. Разговорно: 毛 (máo).\n" +
          "• 分 (fēn) — 1/100 юаня (мелочь, редко используется).\n\n" +
          "Схема цен:\n" +
          "5.50 юаней → 五块五（毛）— 5 юаней 5 мао\n" +
          "12.50 юаней → 十二块五（毛）\n" +
          "6.20 юаней → 六块二（毛）\n" +
          "74.82 юаней → 七十四块八毛二（分）\n\n" +
          "Последнее «毛/分» в разговоре обычно опускается.\n\n" +
          "«Сколько стоит?»:  多少钱？ / 多少钱一瓶？",
        examples: [
          { target: "多少钱一瓶？", transliteration: "Duōshao qián yì píng?", translation: "Сколько за бутылку?" },
          { target: "三块五。", transliteration: "Sān kuài wǔ.", translation: "3 юаня 5 мао." },
          { target: "一共九块四毛钱。", transliteration: "Yígòng jiǔ kuài sì máo qián.", translation: "Итого 9 юаней 4 мао." },
          { target: "二十二块。", transliteration: "Èrshí'èr kuài.", translation: "22 юаня." },
        ],
      },
    ],

    dialogues: [
      {
        title: "В продуктовом магазине (阿曼 и продавец)",
        lines: [
          { speaker: "A", target: "师傅，我买啤酒。", transliteration: "Shīfu, wǒ mǎi píjiǔ.", translation: "Мастер, я хочу купить пиво." },
          { speaker: "B", target: "你买几瓶？", transliteration: "Nǐ mǎi jǐ píng?", translation: "Сколько бутылок?" },
          { speaker: "A", target: "多少钱一瓶？", transliteration: "Duōshao qián yì píng?", translation: "Сколько за бутылку?" },
          { speaker: "B", target: "三块五。", transliteration: "Sān kuài wǔ.", translation: "3 юаня 5 мао." },
          { speaker: "A", target: "我买两瓶，再买两瓶水。", transliteration: "Wǒ mǎi liǎng píng, zài mǎi liǎng píng shuǐ.", translation: "Беру две, и ещё две бутылки воды." },
          { speaker: "B", target: "两瓶啤酒七块，两瓶水两块四，一共是九块四毛钱。", transliteration: "Liǎng píng píjiǔ qī kuài, liǎng píng shuǐ liǎng kuài sì, yígòng shì jiǔ kuài sì máo qián.", translation: "Две бутылки пива — 7 юаней, две воды — 2.40, итого 9.40." },
          { speaker: "A", target: "给你钱。", transliteration: "Gěi nǐ qián.", translation: "Вот деньги." },
        ],
      },
      {
        title: "В книжном (古丽 и продавец)",
        lines: [
          { speaker: "A", target: "小姐，有英汉词典吗？", transliteration: "Xiǎojie, yǒu Yīng-Hàn cídiǎn ma?", translation: "Девушка, есть англо-китайский словарь?" },
          { speaker: "B", target: "有。你看，这些都是，你要哪本呢？", transliteration: "Yǒu. Nǐ kàn, zhèxiē dōu shì, nǐ yào nǎ běn ne?", translation: "Да, есть. Вот смотрите, все эти. Какой хотите?" },
          { speaker: "A", target: "我要这本小词典。多少钱一本？", transliteration: "Wǒ yào zhè běn xiǎo cídiǎn. Duōshao qián yì běn?", translation: "Хочу вот этот маленький словарь. Сколько стоит?" },
          { speaker: "B", target: "二十二块。", transliteration: "Èrshí'èr kuài.", translation: "22 юаня." },
          { speaker: "A", target: "对不起，我没有零钱。", transliteration: "Duìbuqǐ, wǒ méiyǒu língqián.", translation: "Извините, у меня нет мелочи." },
          { speaker: "B", target: "没关系。", transliteration: "Méi guānxi.", translation: "Ничего страшного." },
        ],
      },
    ],

    tips: [
      "师傅 (shīfu) — обращение к таксистам, мастерам, продавцам, рабочим. Дословно «учитель-мастер». Очень вежливо и уместно в любом бытовом контексте.",
      "Главное счётное слово 个 (ge) подходит почти всегда, если не знаешь правильное. Но если знаешь — используй подходящее (本 для книг, 瓶 для бутылок и т.д.), звучит грамотнее.",
      "В цене последнее «毛/分» часто опускают: 三块五 = 3 юаня 5 мао (подразумевается 3.50). Если бы было 3 юаня 5 фэнь — сказали бы полностью 三块零五分.",
      "要 (yào) — «хотеть/брать» в магазине. «Я беру вот этот» = 我要这本. Более разговорно и уверенно, чем 我买.",
      "英汉 / 汉英 / 汉日 — структура «язык1-язык2 словарь» = с первого на второй. 英汉词典 = англо-китайский (с англ. на кит.).",
    ],
  },

  10: {
    introduction:
      "Это итоговая глава Unit 2 — повторение и расширение. Вы научитесь рассказывать о своей семье, использовать счётное слово 口 (для членов семьи) и 条 (для собак, рек, дорог), а также слово 还 («ещё, вдобавок»).\n\n" +
      "Ситуация: 古丽 и 王红 смотрят семейное фото и рассказывают друг другу о своих семьях.",

    vocabulary: [
      { target: "照片", transliteration: "zhàopiàn", translation: "фото, фотография" },
      { target: "家", transliteration: "jiā", translation: "семья, дом" },
      { target: "口", transliteration: "kǒu", translation: "счётное слово для членов семьи" },
      { target: "爷爷", transliteration: "yéye", translation: "дедушка (по отцу)" },
      { target: "奶奶", transliteration: "nǎinai", translation: "бабушка (по отцу)" },
      { target: "爸爸", transliteration: "bàba", translation: "папа" },
      { target: "妈妈", transliteration: "māma", translation: "мама" },
      { target: "哥哥", transliteration: "gēge", translation: "старший брат" },
      { target: "姐姐", transliteration: "jiějie", translation: "старшая сестра" },
      { target: "家庭", transliteration: "jiātíng", translation: "семья (как ячейка общества)" },
      { target: "一般", transliteration: "yìbān", translation: "обычно, в общем" },
      { target: "只", transliteration: "zhǐ", translation: "только, лишь" },
      { target: "孩子", transliteration: "háizi", translation: "ребёнок" },
      { target: "弟弟", transliteration: "dìdi", translation: "младший брат" },
      { target: "妹妹", transliteration: "mèimei", translation: "младшая сестра" },
      { target: "还", transliteration: "hái", translation: "ещё, вдобавок, также" },
      { target: "条", transliteration: "tiáo", translation: "счётное слово (длинные/тонкие объекты)" },
      { target: "狗", transliteration: "gǒu", translation: "собака" },
      { target: "这样", transliteration: "zhèyàng", translation: "так, таким образом" },
    ],

    grammar: [
      {
        title: "Счётное слово 口 — для членов семьи",
        explanation:
          "口 (kǒu) — особое счётное слово для подсчёта человек в СЕМЬЕ. В других контекстах 口 для людей НЕ используется — там 个.\n\n" +
          "Вопрос:  你家有几口人？— «Сколько человек в твоей семье?»\n" +
          "Ответ:  我家有五口人。— «В моей семье пять человек.»\n\n" +
          "Нельзя сказать:\n" +
          "❌ 五口学生 (пять студентов — там 个)\n" +
          "❌ 五口朋友 (пять друзей — там 个)\n\n" +
          "Только:  ⃝口 + 人 (про семью).",
        examples: [
          { target: "你家有几口人？", transliteration: "Nǐ jiā yǒu jǐ kǒu rén?", translation: "Сколько человек в твоей семье?" },
          { target: "我家有五口人。", transliteration: "Wǒ jiā yǒu wǔ kǒu rén.", translation: "В моей семье пять человек." },
          { target: "一共六口人。", transliteration: "Yígòng liù kǒu rén.", translation: "Итого шесть человек." },
          { target: "我家有四口人：爸爸、妈妈、哥哥和我。", transliteration: "Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.", translation: "В нашей семье четверо: папа, мама, старший брат и я." },
        ],
      },
      {
        title: "Счётное слово 条 — для длинных/тонких объектов",
        explanation:
          "条 (tiáo) используется для предметов, имеющих длинную, тонкую или гибкую форму.\n\n" +
          "Что считается через 条:\n" +
          "• Собаки — 一条狗 (одна собака)\n" +
          "• Рыбы — 一条鱼\n" +
          "• Реки — 一条河\n" +
          "• Дороги — 一条路\n" +
          "• Улицы — 一条街\n" +
          "• Штаны/юбки — 一条裤子\n" +
          "• Шарфы/полотенца — 一条围巾\n\n" +
          "Логика — «длинное и тонкое/гибкое».",
        examples: [
          { target: "我家有一条狗。", transliteration: "Wǒ jiā yǒu yì tiáo gǒu.", translation: "У нас дома есть собака." },
          { target: "还有一条狗。", transliteration: "Hái yǒu yì tiáo gǒu.", translation: "И ещё собака." },
          { target: "北京有很多条路。", transliteration: "Běijīng yǒu hěn duō tiáo lù.", translation: "В Пекине много дорог." },
          { target: "两条鱼", transliteration: "liǎng tiáo yú", translation: "две рыбы" },
        ],
      },
      {
        title: "Наречие 还 — «ещё, вдобавок, также»",
        explanation:
          "还 (hái) добавляет что-то к уже сказанному. Ставится перед глаголом.\n\n" +
          "Схема:  Подл. + 还 + Глагол + Объект\n\n" +
          "我有爸爸、妈妈，还有一个哥哥。\n" +
          "«У меня есть папа, мама и ещё старший брат.»\n\n" +
          "Часто 还有… = «и ещё есть…» — идеальное выражение для списков.\n\n" +
          "还 в других значениях:\n" +
          "• «Всё ещё»: 我还在家 — Я всё ещё дома.\n" +
          "• «Довольно» (с прилагательным): 还好 — неплохо.\n" +
          "В Главе 10 акцент только на «ещё, вдобавок».",
        examples: [
          { target: "我家有爸爸、妈妈，还有一条狗。", transliteration: "Wǒ jiā yǒu bàba, māma, hái yǒu yì tiáo gǒu.", translation: "У нас дома папа, мама и ещё собака." },
          { target: "我有美国朋友，还有日本朋友。", transliteration: "Wǒ yǒu Měiguó péngyou, hái yǒu Rìběn péngyou.", translation: "У меня есть американские и ещё японские друзья." },
          { target: "我有一个姐姐，还有一个妹妹。", transliteration: "Wǒ yǒu yí ge jiějie, hái yǒu yí ge mèimei.", translation: "У меня есть старшая сестра и ещё младшая." },
        ],
      },
    ],

    dialogues: [
      {
        title: "О семьях (古丽 и 王红)",
        lines: [
          { speaker: "A", target: "这是你的照片吗？", transliteration: "Zhè shì nǐ de zhàopiàn ma?", translation: "Это твоё фото?" },
          { speaker: "B", target: "对，是我家的照片。", transliteration: "Duì, shì wǒ jiā de zhàopiàn.", translation: "Да, это фото моей семьи." },
          { speaker: "A", target: "你家有几口人？", transliteration: "Nǐ jiā yǒu jǐ kǒu rén?", translation: "Сколько человек в твоей семье?" },
          { speaker: "B", target: "我家有五口人：爷爷、奶奶、爸爸、妈妈和我。", transliteration: "Wǒ jiā yǒu wǔ kǒu rén: yéye, nǎinai, bàba, māma hé wǒ.", translation: "В нашей семье пятеро: дедушка, бабушка, папа, мама и я." },
          { speaker: "A", target: "你没有哥哥姐姐吗？", transliteration: "Nǐ méiyǒu gēge jiějie ma?", translation: "А братьев и сестёр нет?" },
          { speaker: "B", target: "没有，现在中国家庭一般只有一个孩子。古丽，你家都有什么人？", transliteration: "Méiyǒu, xiànzài Zhōngguó jiātíng yìbān zhǐ yǒu yí ge háizi. Gǔlì, nǐ jiā dōu yǒu shénme rén?", translation: "Нет, сейчас в китайских семьях обычно только один ребёнок. А у тебя кто в семье, Гульнара?" },
          { speaker: "A", target: "我家有爸爸、妈妈、哥哥、弟弟、妹妹，还有一条狗。", transliteration: "Wǒ jiā yǒu bàba, māma, gēge, dìdi, mèimei, hái yǒu yì tiáo gǒu.", translation: "У нас папа, мама, старший брат, младший брат, младшая сестра и ещё собака." },
          { speaker: "B", target: "一共六口人？", transliteration: "Yígòng liù kǒu rén?", translation: "Итого шесть человек?" },
          { speaker: "A", target: "不，七口。", transliteration: "Bù, qī kǒu.", translation: "Нет, семь." },
          { speaker: "B", target: "爸爸、妈妈、一个哥哥、一个弟弟、一个妹妹和你，六口，对吧？", transliteration: "Bàba, māma, yí ge gēge, yí ge dìdi, yí ge mèimei hé nǐ, liù kǒu, duì ba?", translation: "Папа, мама, один брат, один младший, сестра и ты — шесть, верно?" },
          { speaker: "A", target: "不对，还有一条狗。", transliteration: "Bú duì, hái yǒu yì tiáo gǒu.", translation: "Нет, ещё собака!" },
          { speaker: "B", target: "是这样……", transliteration: "Shì zhèyàng...", translation: "Вот оно как..." },
        ],
      },
    ],

    tips: [
      "В Китае до 2015 года действовала «политика одного ребёнка» (一胎政策) — большинство семей 王红 в 2003 году имели только одного ребёнка. Это важный культурный контекст.",
      "Семья по линиям: 爷爷/奶奶 — по отцу, 外公/外婆 (wàigōng/wàipó) — по матери. В современном Китае 爷爷/奶奶 часто используется общо для любого дедушки.",
      "Братья/сёстры в китайском ВСЕГДА разделяются по возрасту: 哥哥 (старший) ≠ 弟弟 (младший). Не существует общего слова «брат».",
      "Удвоение слов в названиях родственников (爸爸, 妈妈, 哥哥) — это детская/нежная форма. В формальной речи могут быть другие слова (父亲 fùqin — отец, 母亲 mǔqin — мать).",
      "对吧？ в конце — «верно? так?» (как «吧» из Главы 7 — подтверждение догадки). Очень частая разговорная фраза.",
    ],
  },

  11: {
    introduction:
      "В этой главе вы научитесь говорить о погоде, сравнивать времена года и использовать прилагательные как сказуемое (без 是). Познакомитесь с вопросом 怎么样 («как?»), конструкцией 不А不B («ни A ни B — как раз») и наречием 比较.\n\n" +
      "Ситуации: 古丽 спрашивает у 中村 какая сегодня погода, 阿曼 обсуждает с 王老师 сезоны в Пекине.",

    vocabulary: [
      { target: "天气", transliteration: "tiānqì", translation: "погода" },
      { target: "怎么样", transliteration: "zěnmeyàng", translation: "как? каково?" },
      { target: "不太", transliteration: "bú tài", translation: "не очень, не слишком" },
      { target: "风", transliteration: "fēng", translation: "ветер" },
      { target: "雨", transliteration: "yǔ", translation: "дождь" },
      { target: "冷", transliteration: "lěng", translation: "холодный" },
      { target: "度", transliteration: "dù", translation: "градус" },
      { target: "晴天", transliteration: "qíngtiān", translation: "ясная погода" },
      { target: "秋天", transliteration: "qiūtiān", translation: "осень" },
      { target: "热", transliteration: "rè", translation: "жаркий" },
      { target: "舒服", transliteration: "shūfu", translation: "комфортно, удобно" },
      { target: "最", transliteration: "zuì", translation: "самый, наиболее" },
      { target: "季节", transliteration: "jìjié", translation: "сезон, время года" },
      { target: "冬天", transliteration: "dōngtiān", translation: "зима" },
      { target: "比较", transliteration: "bǐjiào", translation: "сравнительно, довольно" },
      { target: "差不多", transliteration: "chàbuduō", translation: "почти, примерно" },
      { target: "零下", transliteration: "língxià", translation: "ниже нуля" },
      { target: "常常", transliteration: "chángcháng", translation: "часто, обычно" },
      { target: "下", transliteration: "xià", translation: "падать, идти (о дожде/снеге)" },
      { target: "雪", transliteration: "xuě", translation: "снег" },
      { target: "常", transliteration: "cháng", translation: "часто" },
      { target: "喜欢", transliteration: "xǐhuan", translation: "любить, нравиться" },
      { target: "夏天", transliteration: "xiàtiān", translation: "лето" },
      { target: "游泳", transliteration: "yóuyǒng", translation: "плавать" },
      { target: "春天", transliteration: "chūntiān", translation: "весна" },
      { target: "北京", transliteration: "Běijīng", translation: "Пекин" },
    ],

    grammar: [
      {
        title: "Вопрос 怎么样 — «как?, каково?»",
        explanation:
          "怎么样 (zěnmeyàng) — спрашивает о состоянии, качестве, мнении. Ставится в КОНЕЦ предложения.\n\n" +
          "Схема:  Существительное + 怎么样？\n\n" +
          "今天的天气怎么样？— Какая сегодня погода?\n" +
          "这个电影怎么样？— Как этот фильм?\n\n" +
          "Также часто используется как предложение:\n" +
          "我们去图书馆，怎么样？— Пойдём в библиотеку, как?",
        examples: [
          { target: "今天的天气怎么样？", transliteration: "Jīntiān de tiānqì zěnmeyàng?", translation: "Какая сегодня погода?" },
          { target: "北京秋天的天气怎么样？", transliteration: "Běijīng qiūtiān de tiānqì zěnmeyàng?", translation: "Какая погода осенью в Пекине?" },
          { target: "爷爷的身体怎么样？", transliteration: "Yéye de shēntǐ zěnmeyàng?", translation: "Как здоровье у дедушки?" },
          { target: "这件毛衣怎么样？", transliteration: "Zhè jiàn máoyī zěnmeyàng?", translation: "Как тебе этот свитер?" },
        ],
      },
      {
        title: "Прилагательное-сказуемое без 是",
        explanation:
          "В китайском прилагательное САМО является сказуемым — 是 НЕ нужно.\n\n" +
          "❌ 这个学校是小 (неправильно!)\n" +
          "✅ 这个学校很小。— Эта школа очень маленькая.\n\n" +
          "Важно: без наречия (很, 比较, 挺, 太…) прилагательное звучит как сравнение:\n" +
          "• 我的房间大。— Моя комната большая (подразумевает сравнение: больше другой).\n" +
          "• 我的房间很大。— Моя комната просто большая (нейтрально).\n\n" +
          "Поэтому 很 часто добавляют даже когда не хотят сказать «очень» — это «грамматическая прокладка».",
        examples: [
          { target: "听说北京的冬天很冷。", transliteration: "Tīngshuō Běijīng de dōngtiān hěn lěng.", translation: "Говорят, зима в Пекине холодная." },
          { target: "那个学校很小。", transliteration: "Nàge xuéxiào hěn xiǎo.", translation: "Та школа маленькая." },
          { target: "今天的天气不太好。", transliteration: "Jīntiān de tiānqì bú tài hǎo.", translation: "Сегодня погода не очень." },
          { target: "这个电影很有名。", transliteration: "Zhège diànyǐng hěn yǒumíng.", translation: "Этот фильм очень известный." },
        ],
      },
      {
        title: "不A不B — «ни А ни B» = «в самый раз»",
        explanation:
          "Конструкция 不+прил.1 + 不+прил.2 (где прил.1 и прил.2 — антонимы) означает «не слишком X, не слишком Y — в самый раз».\n\n" +
          "Это положительная характеристика, означает идеальный баланс.\n\n" +
          "不冷不热 — не холодно и не жарко (в самый раз)\n" +
          "不大不小 — ни большой, ни маленький\n" +
          "不早不晚 — ни рано, ни поздно\n" +
          "不快不慢 — ни быстро, ни медленно",
        examples: [
          { target: "北京的秋天不冷不热，很舒服。", transliteration: "Běijīng de qiūtiān bù lěng bú rè, hěn shūfu.", translation: "Осень в Пекине — не холодно и не жарко, комфортно." },
          { target: "这件毛衣不大不小。", transliteration: "Zhè jiàn máoyī bú dà bù xiǎo.", translation: "Этот свитер в самый раз по размеру." },
          { target: "我们不早不晚到了。", transliteration: "Wǒmen bù zǎo bù wǎn dào le.", translation: "Мы пришли вовремя." },
        ],
      },
      {
        title: "Наречия степени: 很, 比较, 挺, 最, 太, 不太",
        explanation:
          "В китайском много способов выразить степень качества:\n\n" +
          "• 很 (hěn) — «очень» / нейтральная прокладка\n" +
          "• 比较 (bǐjiào) — «сравнительно, довольно»\n" +
          "• 挺 (tǐng) — «вполне, довольно» (разговорное, часто с 的)\n" +
          "• 最 (zuì) — «самый»\n" +
          "• 太 (tài) — «слишком» (с 了)\n" +
          "• 不太 (bú tài) — «не очень, не слишком»\n\n" +
          "Схема:  Подл. + наречие + прилагательное\n\n" +
          "По силе: 不太 < 比较 ≈ 挺 < 很 < 最 < 太.",
        examples: [
          { target: "北京的冬天比较冷。", transliteration: "Běijīng de dōngtiān bǐjiào lěng.", translation: "Зима в Пекине довольно холодная." },
          { target: "最冷差不多零下十五度。", transliteration: "Zuì lěng chàbuduō língxià shíwǔ dù.", translation: "В самые холодные дни — примерно минус 15." },
          { target: "今天不太冷。", transliteration: "Jīntiān bú tài lěng.", translation: "Сегодня не очень холодно." },
          { target: "太热了！", transliteration: "Tài rè le!", translation: "Слишком жарко!" },
        ],
      },
    ],

    dialogues: [
      {
        title: "Погода сегодня (古丽 и 中村)",
        lines: [
          { speaker: "A", target: "今天的天气怎么样？", transliteration: "Jīntiān de tiānqì zěnmeyàng?", translation: "Какая сегодня погода?" },
          { speaker: "B", target: "不太好，有风，下午还有雨。", transliteration: "Bú tài hǎo, yǒu fēng, xiàwǔ hái yǒu yǔ.", translation: "Не очень, ветрено, днём ещё дождь." },
          { speaker: "A", target: "冷吗？", transliteration: "Lěng ma?", translation: "Холодно?" },
          { speaker: "B", target: "不冷，二十度。", transliteration: "Bù lěng, èrshí dù.", translation: "Нет, 20 градусов." },
          { speaker: "A", target: "明天呢？", transliteration: "Míngtiān ne?", translation: "А завтра?" },
          { speaker: "B", target: "明天是晴天。", transliteration: "Míngtiān shì qíngtiān.", translation: "Завтра солнечно." },
        ],
      },
      {
        title: "Сезоны в Пекине (阿曼 и 王老师)",
        lines: [
          { speaker: "A", target: "老师，北京秋天的天气怎么样？", transliteration: "Lǎoshī, Běijīng qiūtiān de tiānqì zěnmeyàng?", translation: "Учитель, какая погода осенью в Пекине?" },
          { speaker: "B", target: "北京的秋天不冷不热，很舒服，是最好的季节。", transliteration: "Běijīng de qiūtiān bù lěng bú rè, hěn shūfu, shì zuì hǎo de jìjié.", translation: "Осень в Пекине — не холодно и не жарко, очень комфортно, лучший сезон." },
          { speaker: "A", target: "冬天呢？听说北京的冬天很冷，是吗？", transliteration: "Dōngtiān ne? Tīngshuō Běijīng de dōngtiān hěn lěng, shì ma?", translation: "А зима? Говорят, зимой очень холодно?" },
          { speaker: "B", target: "对，北京的冬天比较冷，最冷差不多零下十五度。", transliteration: "Duì, Běijīng de dōngtiān bǐjiào lěng, zuì lěng chàbuduō língxià shíwǔ dù.", translation: "Да, зима довольно холодная, в самые холодные дни около -15." },
          { speaker: "A", target: "常常下雪吗？", transliteration: "Chángcháng xià xuě ma?", translation: "Часто идёт снег?" },
          { speaker: "B", target: "不常下雪。阿曼，你最喜欢哪个季节？", transliteration: "Bù cháng xià xuě. Āmàn, nǐ zuì xǐhuan nǎge jìjié?", translation: "Нечасто. Аман, а какой твой любимый сезон?" },
          { speaker: "A", target: "我喜欢夏天，我喜欢游泳。老师，您呢？", transliteration: "Wǒ xǐhuan xiàtiān, wǒ xǐhuan yóuyǒng. Lǎoshī, nín ne?", translation: "Я люблю лето, люблю плавать. А вы, учитель?" },
          { speaker: "B", target: "我喜欢春天。", transliteration: "Wǒ xǐhuan chūntiān.", translation: "Я люблю весну." },
        ],
      },
    ],

    tips: [
      "В Китае температура в Цельсиях, не в Фаренгейтах. 二十度 = 20°C. «Минус» = 零下 (língxià — «ниже нуля»): 零下十度 = -10°C.",
      "Четыре сезона: 春天 (весна), 夏天 (лето), 秋天 (осень), 冬天 (зима). Все заканчиваются на 天.",
      "下雨 (идёт дождь) и 下雪 (идёт снег) — буквально «падает дождь/снег». Глагол 下 здесь = «падать, идти».",
      "不太 перед прилагательным = «не очень». 不太好 (неочень), 不太冷 (не очень холодно) — вежливая форма выразить слабое несогласие.",
      "差不多 (chàbuduō) — очень частое слово «почти, примерно, около того». Буквально «не хватает немного». Ключевая фраза разговорного китайского.",
    ],
  },

  12: {
    introduction:
      "В этой главе вы научитесь говорить о том, что делаете прямо сейчас (настоящее продолженное время), называть дни недели и использовать выражения «от... до...» (从……到……). Также познакомитесь со словом 每 («каждый»).\n\n" +
      "Ситуация: 阿曼 и 古丽 разговаривают по телефону о том, кто что делает — 阿曼 делает уроки, 古丽 в баре с подругой.",

    vocabulary: [
      { target: "喂", transliteration: "wèi", translation: "алло (по телефону)" },
      { target: "啊", transliteration: "a", translation: "а, о (восклицание)" },
      { target: "在", transliteration: "zài", translation: "сейчас (указывает на продолженное действие)" },
      { target: "干", transliteration: "gàn", translation: "делать, заниматься (разговорное)" },
      { target: "做", transliteration: "zuò", translation: "делать" },
      { target: "作业", transliteration: "zuòyè", translation: "домашнее задание" },
      { target: "每", transliteration: "měi", translation: "каждый" },
      { target: "天", transliteration: "tiān", translation: "день" },
      { target: "多", transliteration: "duō", translation: "много" },
      { target: "星期三", transliteration: "xīngqīsān", translation: "среда" },
      { target: "从……到", transliteration: "cóng...dào", translation: "от... до..." },
      { target: "中午", transliteration: "zhōngwǔ", translation: "полдень" },
      { target: "节", transliteration: "jié", translation: "счётное слово для уроков (пар)" },
      { target: "听写", transliteration: "tīngxiě", translation: "диктант" },
      { target: "所以", transliteration: "suǒyǐ", translation: "поэтому, итак" },
      { target: "酒吧", transliteration: "jiǔbā", translation: "бар" },
      { target: "喝", transliteration: "hē", translation: "пить" },
      { target: "咖啡", transliteration: "kāfēi", translation: "кофе" },
      { target: "书店", transliteration: "shūdiàn", translation: "книжный магазин" },
      { target: "对面", transliteration: "duìmiàn", translation: "напротив" },
      { target: "自己", transliteration: "zìjǐ", translation: "сам, самостоятельно" },
      { target: "正在", transliteration: "zhèngzài", translation: "как раз (сейчас), в процессе" },
      { target: "唱", transliteration: "chàng", translation: "петь" },
      { target: "歌", transliteration: "gē", translation: "песня" },
      { target: "回", transliteration: "huí", translation: "возвращаться" },
    ],

    grammar: [
      {
        title: "Настоящее продолженное время: 正在/在...呢",
        explanation:
          "Чтобы сказать «я делаю X прямо сейчас», в китайском используют одну из конструкций:\n\n" +
          "• 正在 + Глагол + (Объект) + 呢\n" +
          "• 在 + Глагол + (Объект) + 呢\n" +
          "• Глагол + (Объект) + 呢\n\n" +
          "Все три варианта означают примерно одно и то же. Самая полная форма — 正在……呢.\n\n" +
          "Отрицание: 没 + Глагол (без 在 и 呢).\n" +
          "— 他没看电影。— Он не смотрит фильм (сейчас).",
        examples: [
          { target: "你在干什么呢？", transliteration: "Nǐ zài gàn shénme ne?", translation: "Что ты сейчас делаешь?" },
          { target: "我正在做作业呢。", transliteration: "Wǒ zhèngzài zuò zuòyè ne.", translation: "Я как раз делаю уроки." },
          { target: "他们正在唱歌呢。", transliteration: "Tāmen zhèngzài chàng gē ne.", translation: "Они сейчас поют." },
          { target: "外面下雨呢。", transliteration: "Wàimiàn xià yǔ ne.", translation: "На улице идёт дождь." },
        ],
      },
      {
        title: "Дни недели",
        explanation:
          "Дни недели строятся по схеме: 星期 + число (1-6) или 天/日.\n\n" +
          "星期一 xīngqīyī — понедельник\n" +
          "星期二 xīngqī'èr — вторник\n" +
          "星期三 xīngqīsān — среда\n" +
          "星期四 xīngqīsì — четверг\n" +
          "星期五 xīngqīwǔ — пятница\n" +
          "星期六 xīngqīliù — суббота\n" +
          "星期日 / 星期天 xīngqīrì / xīngqītiān — воскресенье\n\n" +
          "Вопрос: 今天(是)星期几？— Сегодня какой день?\n" +
          "Ответ: 今天(是)星期三。— Среда.",
        examples: [
          { target: "今天是星期三。", transliteration: "Jīntiān shì xīngqīsān.", translation: "Сегодня среда." },
          { target: "明天是星期几？", transliteration: "Míngtiān shì xīngqī jǐ?", translation: "Какой завтра день?" },
          { target: "星期天我不上课。", transliteration: "Xīngqītiān wǒ bú shàng kè.", translation: "В воскресенье у меня нет занятий." },
          { target: "星期一到星期五", transliteration: "xīngqīyī dào xīngqīwǔ", translation: "с понедельника по пятницу" },
        ],
      },
      {
        title: "每……都 — «каждый X всегда...»",
        explanation:
          "每 (měi) — «каждый». Часто сопровождается 都 (dōu — «все, всегда») перед глаголом, чтобы подчеркнуть отсутствие исключений.\n\n" +
          "Схема:  每 + [сч.слово] + Сущ. + 都 + Глагол\n\n" +
          "每天都 — каждый день (все дни)\n" +
          "每个人都 — каждый человек (все)\n" +
          "每个星期都 — каждую неделю\n\n" +
          "Без 都 звучит неполно. Запомни: 每 почти всегда идёт в паре с 都.",
        examples: [
          { target: "你每天都有很多作业吗？", transliteration: "Nǐ měi tiān dōu yǒu hěn duō zuòyè ma?", translation: "У тебя каждый день много заданий?" },
          { target: "我每天早上都喝咖啡。", transliteration: "Wǒ měi tiān zǎoshang dōu hē kāfēi.", translation: "Я каждое утро пью кофе." },
          { target: "他们每个人都知道。", transliteration: "Tāmen měi ge rén dōu zhīdào.", translation: "Каждый из них знает." },
          { target: "阿曼每天晚上都去酒吧。", transliteration: "Āmàn měi tiān wǎnshang dōu qù jiǔbā.", translation: "Аман каждый вечер ходит в бар." },
        ],
      },
      {
        title: "从……到…… — «от... до...»",
        explanation:
          "从 A 到 B означает «от A до B» — и для времени, и для места.\n\n" +
          "Схема:  从 + [точка 1] + 到 + [точка 2]\n\n" +
          "Время:\n" +
          "从早上八点到中午十二点 — с 8 утра до полудня\n" +
          "从星期一到星期五 — с понедельника по пятницу\n\n" +
          "Место:\n" +
          "从北京到上海 — из Пекина в Шанхай\n" +
          "从家到学校 — от дома до школы\n\n" +
          "Всегда идёт пара: если есть 从, то должно быть 到.",
        examples: [
          { target: "从早上八点到中午十二点，我有四节课。", transliteration: "Cóng zǎoshang bā diǎn dào zhōngwǔ shí'èr diǎn, wǒ yǒu sì jié kè.", translation: "С 8 утра до полудня у меня 4 пары." },
          { target: "我从八点到十一点有课。", transliteration: "Wǒ cóng bā diǎn dào shíyī diǎn yǒu kè.", translation: "У меня занятия с 8 до 11." },
          { target: "他们从星期一到星期五都有课。", transliteration: "Tāmen cóng xīngqīyī dào xīngqīwǔ dōu yǒu kè.", translation: "У них занятия с понедельника по пятницу." },
          { target: "从北京到上海很远。", transliteration: "Cóng Běijīng dào Shànghǎi hěn yuǎn.", translation: "От Пекина до Шанхая далеко." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Телефонный разговор (阿曼 и 古丽)",
        lines: [
          { speaker: "A", target: "喂，你好！", transliteration: "Wèi, nǐ hǎo!", translation: "Алло, привет!" },
          { speaker: "B", target: "喂，阿曼，是我，古丽。", transliteration: "Wèi, Āmàn, shì wǒ, Gǔlì.", translation: "Алло, Аман, это я, Гульнара." },
          { speaker: "A", target: "啊，古丽，你好！", transliteration: "A, Gǔlì, nǐ hǎo!", translation: "А, Гульнара, привет!" },
          { speaker: "B", target: "阿曼，你在干什么呢？", transliteration: "Āmàn, nǐ zài gàn shénme ne?", translation: "Аман, ты что сейчас делаешь?" },
          { speaker: "A", target: "做作业呢。", transliteration: "Zuò zuòyè ne.", translation: "Делаю уроки." },
          { speaker: "B", target: "是吗？你每天都有很多作业吗？", transliteration: "Shì ma? Nǐ měi tiān dōu yǒu hěn duō zuòyè ma?", translation: "Правда? У тебя каждый день много заданий?" },
          { speaker: "A", target: "不是。今天是星期三，从早上八点到中午十二点，我有四节课，明天还有听写，所以作业很多。你呢？在干什么呢？", transliteration: "Bú shì. Jīntiān shì xīngqīsān, cóng zǎoshang bā diǎn dào zhōngwǔ shí'èr diǎn, wǒ yǒu sì jié kè, míngtiān hái yǒu tīngxiě, suǒyǐ zuòyè hěn duō. Nǐ ne? Zài gàn shénme ne?", translation: "Нет. Сегодня среда, с 8 утра до 12 у меня было 4 пары, завтра ещё диктант, поэтому много заданий. А ты что делаешь?" },
          { speaker: "B", target: "我在酒吧喝咖啡呢。", transliteration: "Wǒ zài jiǔbā hē kāfēi ne.", translation: "Я в баре пью кофе." },
          { speaker: "A", target: "哪个酒吧？", transliteration: "Nǎge jiǔbā?", translation: "В каком баре?" },
          { speaker: "B", target: "学校书店对面的那个。", transliteration: "Xuéxiào shūdiàn duìmiàn de nàge.", translation: "В том, напротив книжного." },
          { speaker: "A", target: "你自己吗？", transliteration: "Nǐ zìjǐ ma?", translation: "Ты одна?" },
          { speaker: "B", target: "不，还有我的同屋和她的朋友，他们正在唱歌呢。", transliteration: "Bù, hái yǒu wǒ de tóngwū hé tā de péngyou, tāmen zhèngzài chàng gē ne.", translation: "Нет, ещё моя соседка и её подруга, они как раз поют." },
          { speaker: "A", target: "明天你们没有课吗？", transliteration: "Míngtiān nǐmen méiyǒu kè ma?", translation: "У вас завтра нет занятий?" },
          { speaker: "B", target: "有，我们十点就回宿舍。", transliteration: "Yǒu, wǒmen shí diǎn jiù huí sùshè.", translation: "Есть, мы в 10 уже вернёмся в общежитие." },
        ],
      },
    ],

    tips: [
      "喂 (wèi) — только для телефона! Не используется для «здравствуй» лично. На звонке первое слово ВСЕГДА 喂.",
      "干 (gàn) и 做 (zuò) — оба значат «делать». 干 — более разговорное и общее («чем занимаешься?»), 做 — более конкретное («делать что-то»).",
      "节 (jié) — счётное слово для уроков/пар. «Три пары» = 三节课, не 三个课.",
      "В китайском понятия «неделя»: 星期 (xīngqī) — стандартное, 周 (zhōu) — более формальное (周末 — выходные, 周一 — пн), 礼拜 (lǐbài) — разговорное.",
      "所以 (suǒyǐ) — «поэтому». Часто идёт в паре с 因为 (yīnwèi — «потому что»): 因为...所以... — «потому что... поэтому...».",
    ],
  },

  13: {
    introduction:
      "В этой главе вы научитесь составлять предложения с несколькими глаголами подряд (идти + делать), использовать связку 先……然后 («сначала… потом»), альтернативный вопрос через 不 (贵不贵?) и отличать 咱们 от 我们.\n\n" +
      "Ситуации: 阿曼 и 张伟 идут вместе в банк и магазин, 古丽 и 中村 планируют поход в ТЦ.",

    vocabulary: [
      { target: "借", transliteration: "jiè", translation: "брать/давать взаймы" },
      { target: "先", transliteration: "xiān", translation: "сначала, сперва" },
      { target: "银行", transliteration: "yínháng", translation: "банк" },
      { target: "换", transliteration: "huàn", translation: "менять, обменивать" },
      { target: "然后", transliteration: "ránhòu", translation: "затем, потом" },
      { target: "商店", transliteration: "shāngdiàn", translation: "магазин" },
      { target: "东西", transliteration: "dōngxi", translation: "вещь, вещи" },
      { target: "咱们", transliteration: "zánmen", translation: "мы (включая собеседника)" },
      { target: "一起", transliteration: "yìqǐ", translation: "вместе" },
      { target: "关门", transliteration: "guān mén", translation: "закрывать дверь, закрываться" },
      { target: "关", transliteration: "guān", translation: "закрывать" },
      { target: "星期天", transliteration: "xīngqītiān", translation: "воскресенье" },
      { target: "打算", transliteration: "dǎsuàn", translation: "планировать, собираться" },
      { target: "购物中心", transliteration: "gòuwù zhōngxīn", translation: "торговый центр" },
      { target: "购物", transliteration: "gòu wù", translation: "делать покупки" },
      { target: "中心", transliteration: "zhōngxīn", translation: "центр" },
      { target: "贵", transliteration: "guì", translation: "дорогой" },
      { target: "还可以", transliteration: "hái kěyǐ", translation: "нормально, пойдёт, сносно" },
      { target: "质量", transliteration: "zhìliàng", translation: "качество" },
      { target: "不错", transliteration: "búcuò", translation: "неплохо, хорошо" },
      { target: "正", transliteration: "zhèng", translation: "как раз, именно" },
      { target: "衣服", transliteration: "yīfu", translation: "одежда" },
      { target: "开门", transliteration: "kāi mén", translation: "открывать, открываться" },
      { target: "开", transliteration: "kāi", translation: "открывать" },
    ],

    grammar: [
      {
        title: "连动句 — Последовательные глаголы (идти + делать)",
        explanation:
          "В китайском два глагола могут идти подряд в одном предложении, и 2-й объясняет ЦЕЛЬ 1-го.\n\n" +
          "Схема:  Подл. + Глагол1 + [Место1] + Глагол2 + [Объект2]\n\n" +
          "Логика:  «идти куда-то → чтобы делать что-то»\n\n" +
          "我去图书馆借书。\n" +
          "дословно: «я иду (в) библиотеку взять книгу» = «иду в библиотеку за книгой»\n\n" +
          "Первый глагол обычно 去 (идти туда), 来 (идти сюда). Второй — что там делать.\n\n" +
          "Отличие от русского: в русском «иду в библиотеку» — нужен предлог «в», а в китайском — ничего, просто 去 + место.",
        examples: [
          { target: "我去图书馆借书。", transliteration: "Wǒ qù túshūguǎn jiè shū.", translation: "Иду в библиотеку за книгой." },
          { target: "我去商店买东西。", transliteration: "Wǒ qù shāngdiàn mǎi dōngxi.", translation: "Иду в магазин за покупками." },
          { target: "阿曼去银行换钱。", transliteration: "Āmàn qù yínháng huàn qián.", translation: "Аман идёт в банк менять деньги." },
          { target: "学生们去教学楼上课。", transliteration: "Xuéshēngmen qù jiàoxuélóu shàng kè.", translation: "Студенты идут в учебный корпус на пары." },
        ],
      },
      {
        title: "先……，然后…… — «сначала…, потом…»",
        explanation:
          "Для описания последовательности действий используется пара 先 (сначала) — 然后 (потом).\n\n" +
          "Схема:  先 + Действие1，然后 + Действие2\n\n" +
          "我先去银行换钱，然后去商店买东西。\n" +
          "«Сначала иду в банк обменять деньги, потом в магазин за покупками.»\n\n" +
          "Оба слова ставятся ПЕРЕД глаголом. 然后 можно заменить на 再 (zài — снова, ещё).",
        examples: [
          { target: "我先去银行换钱，然后去商店买东西。", transliteration: "Wǒ xiān qù yínháng huàn qián, ránhòu qù shāngdiàn mǎi dōngxi.", translation: "Сначала в банк, потом в магазин." },
          { target: "明天我先去银行，然后去商店。", transliteration: "Míngtiān wǒ xiān qù yínháng, ránhòu qù shāngdiàn.", translation: "Завтра сначала в банк, потом в магазин." },
          { target: "张伟先去电影院，然后回宿舍。", transliteration: "Zhāng Wěi xiān qù diànyǐngyuàn, ránhòu huí sùshè.", translation: "Чжан Вэй сначала в кино, потом в общежитие." },
          { target: "他先去商店买东西，然后去书店买词典。", transliteration: "Tā xiān qù shāngdiàn mǎi dōngxi, ránhòu qù shūdiàn mǎi cídiǎn.", translation: "Он сначала в магазин, потом в книжный за словарём." },
        ],
      },
      {
        title: "咱们 vs 我们 — тонкая разница «мы»",
        explanation:
          "Оба слова значат «мы», но с разницей в инклюзивности:\n\n" +
          "• 咱们 (zánmen) — ВСЕГДА включает собеседника: «ты и я / мы с тобой»\n" +
          "• 我们 (wǒmen) — может включать или НЕ включать собеседника (неоднозначно)\n\n" +
          "Пример:\n" +
          "咱们一起去吧！— Давай вместе пойдём! (ты обязательно идёшь со мной)\n" +
          "我们一起去吧！— То же самое, но чуть двусмысленно\n\n" +
          "Когда говоришь О СВОЕЙ группе (где слушателя НЕТ) — только 我们:\n" +
          "我们学校 — наша школа (ты-то не в нашей)\n\n" +
          "咱们 — северный/пекинский стиль, южнее его используют меньше.",
        examples: [
          { target: "咱们一起去吧！", transliteration: "Zánmen yìqǐ qù ba!", translation: "Давай пойдём вместе (ты и я)!" },
          { target: "咱们几点去？", transliteration: "Zánmen jǐ diǎn qù?", translation: "Во сколько пойдём (мы с тобой)?" },
          { target: "明天是星期天，咱们去酒吧吧。", transliteration: "Míngtiān shì xīngqītiān, zánmen qù jiǔbā ba.", translation: "Завтра воскресенье, пойдём в бар." },
          { target: "我们学校很大。", transliteration: "Wǒmen xuéxiào hěn dà.", translation: "Наш университет большой." },
        ],
      },
      {
        title: "Альтернативный вопрос: A不A / V不V",
        explanation:
          "Вместо 吗 можно задать вопрос так: повторить прилагательное/глагол с 不 между ними.\n\n" +
          "Схемы:\n" +
          "• Прил. + 不 + Прил. = Прил. + 吗\n" +
          "  冷不冷？ = 冷吗？ — Холодно?\n\n" +
          "• Глагол + 不 + Глагол = Глагол + 吗\n" +
          "  去不去？ = 去吗？ — Идёшь (или нет)?\n" +
          "  是不是？ = 是吗？ — Это так?\n" +
          "  有没有？ = 有吗？ — Есть или нет?\n\n" +
          "Важно: с этой формой 吗 НЕ используется!\n" +
          "❌ 冷不冷吗？\n" +
          "✅ 冷不冷？\n\n" +
          "Такая форма звучит чуть более прямо и «проверяюще», чем с 吗.",
        examples: [
          { target: "那儿的东西贵不贵？", transliteration: "Nàr de dōngxi guì bu guì?", translation: "Там дорого?" },
          { target: "你买不买东西？", transliteration: "Nǐ mǎi bu mǎi dōngxi?", translation: "Ты покупаешь что-то или нет?" },
          { target: "你是不是美国人？", transliteration: "Nǐ shì bu shì Měiguó rén?", translation: "Ты американец или нет?" },
          { target: "今天有没有作业？", transliteration: "Jīntiān yǒu méi yǒu zuòyè?", translation: "Сегодня есть задание или нет?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "В банк и магазин (阿曼 и 张伟)",
        lines: [
          { speaker: "A", target: "你好，张伟。你去哪儿？", transliteration: "Nǐ hǎo, Zhāng Wěi. Nǐ qù nǎr?", translation: "Привет, Чжан Вэй. Куда идёшь?" },
          { speaker: "B", target: "我去图书馆借书，你呢？", transliteration: "Wǒ qù túshūguǎn jiè shū, nǐ ne?", translation: "В библиотеку за книгой. А ты?" },
          { speaker: "A", target: "我先去银行换钱，然后去商店买东西。", transliteration: "Wǒ xiān qù yínháng huàn qián, ránhòu qù shāngdiàn mǎi dōngxi.", translation: "Сначала в банк менять деньги, потом в магазин за покупками." },
          { speaker: "B", target: "我也要去银行，咱们一起去吧！", transliteration: "Wǒ yě yào qù yínháng, zánmen yìqǐ qù ba!", translation: "Мне тоже в банк — пойдём вместе!" },
          { speaker: "A", target: "你不去图书馆吗？", transliteration: "Nǐ bú qù túshūguǎn ma?", translation: "А в библиотеку не идёшь?" },
          { speaker: "B", target: "没关系，图书馆不关门。", transliteration: "Méi guānxi, túshūguǎn bù guān mén.", translation: "Ничего, библиотека не закрывается." },
        ],
      },
      {
        title: "Поход в ТЦ (古丽 и 中村)",
        lines: [
          { speaker: "A", target: "中村，明天是星期天，你打算干什么？", transliteration: "Zhōngcūn, míngtiān shì xīngqītiān, nǐ dǎsuàn gàn shénme?", translation: "Накамура, завтра воскресенье, что планируешь?" },
          { speaker: "B", target: "我打算去商店买东西。", transliteration: "Wǒ dǎsuàn qù shāngdiàn mǎi dōngxi.", translation: "Планирую пойти за покупками." },
          { speaker: "A", target: "是学校的商店吗？", transliteration: "Shì xuéxiào de shāngdiàn ma?", translation: "В университетский магазин?" },
          { speaker: "B", target: "不，是购物中心。", transliteration: "Bù, shì gòuwù zhōngxīn.", translation: "Нет, в ТЦ." },
          { speaker: "A", target: "那儿的东西贵不贵？", transliteration: "Nàr de dōngxi guì bu guì?", translation: "Там дорого?" },
          { speaker: "B", target: "还可以。那儿的东西很多，质量也不错。", transliteration: "Hái kěyǐ. Nàr de dōngxi hěn duō, zhìliàng yě búcuò.", translation: "Нормально. Там много всего, и качество неплохое." },
          { speaker: "A", target: "我正打算买衣服呢，明天和你一起去，好不好？", transliteration: "Wǒ zhèng dǎsuàn mǎi yīfu ne, míngtiān hé nǐ yìqǐ qù, hǎo bu hǎo?", translation: "Я как раз собиралась купить одежду — пойдём вместе?" },
          { speaker: "B", target: "好啊！", transliteration: "Hǎo a!", translation: "Хорошо!" },
          { speaker: "A", target: "咱们几点去？", transliteration: "Zánmen jǐ diǎn qù?", translation: "Во сколько пойдём?" },
          { speaker: "B", target: "购物中心九点开门，咱们十点去吧。", transliteration: "Gòuwù zhōngxīn jiǔ diǎn kāi mén, zánmen shí diǎn qù ba.", translation: "ТЦ открывается в 9, давай в 10 пойдём." },
        ],
      },
    ],

    tips: [
      "还可以 (hái kěyǐ) — «нормально, пойдёт, ничего так». Нейтральная оценка — не плохо, но и не отлично. Очень полезная фраза в китайском общении, где прямое «плохо» считается невежливым.",
      "不错 (búcuò) дословно «не ошибка» = «неплохо, хорошо». Сильнее чем 还可以. «Качество неплохое» = 质量不错.",
      "打算 (dǎsuàn) — «планировать, собираться». В отличие от 计划 (формальный план), 打算 используется для бытовых планов: 我打算去... «я собираюсь пойти...».",
      "Формы 开门/关门 — про магазины: 几点开门？ (во сколько открывается?), 几点关门？ (во сколько закрывается?).",
      "A不A вопрос НЕЛЬЗЯ использовать с 很: ❌ 很冷不冷 — нет такого. Можно только 冷不冷? Если хочешь «очень» — переформулируй.",
    ],
  },

  14: {
    introduction:
      "В этой главе вы научитесь описывать вещи (одежду, транспорт) по цвету, размеру, качеству. Познакомитесь с наречием 挺 («довольно»), выражением 有(一)点儿 («немного, чуть-чуть») и конструкцией «X的» (заменитель существительного).\n\n" +
      "Ситуации: 古丽 выбирает свитер с 中村, потом 阿曼 обсуждает с ней её новый велосипед.",

    vocabulary: [
      { target: "件", transliteration: "jiàn", translation: "счётное слово для одежды" },
      { target: "白", transliteration: "bái", translation: "белый" },
      { target: "毛衣", transliteration: "máoyī", translation: "свитер" },
      { target: "挺", transliteration: "tǐng", translation: "довольно, вполне" },
      { target: "好看", transliteration: "hǎokàn", translation: "красивый, симпатичный" },
      { target: "容易", transliteration: "róngyì", translation: "лёгкий, легко" },
      { target: "脏", transliteration: "zāng", translation: "грязный" },
      { target: "蓝", transliteration: "lán", translation: "синий" },
      { target: "颜色", transliteration: "yánsè", translation: "цвет" },
      { target: "有点儿", transliteration: "yǒudiǎnr", translation: "немного, чуть-чуть" },
      { target: "深", transliteration: "shēn", translation: "тёмный (цвет), глубокий" },
      { target: "浅", transliteration: "qiǎn", translation: "светлый (цвет), мелкий" },
      { target: "黄", transliteration: "huáng", translation: "жёлтый" },
      { target: "漂亮", transliteration: "piàoliang", translation: "красивый" },
      { target: "它", transliteration: "tā", translation: "оно, это (для предметов)" },
      { target: "昨天", transliteration: "zuótiān", translation: "вчера" },
      { target: "新", transliteration: "xīn", translation: "новый" },
      { target: "辆", transliteration: "liàng", translation: "счётное слово для транспорта" },
      { target: "旧", transliteration: "jiù", translation: "старый, б/у" },
      { target: "便宜", transliteration: "piányi", translation: "дешёвый" },
      { target: "丢", transliteration: "diū", translation: "потерять, украсть" },
      { target: "别的", transliteration: "bié de", translation: "другой" },
      { target: "黑", transliteration: "hēi", translation: "чёрный" },
      { target: "灰", transliteration: "huī", translation: "серый" },
      { target: "绿", transliteration: "lǜ", translation: "зелёный" },
    ],

    grammar: [
      {
        title: "挺 + прил. + 的 — «довольно, вполне»",
        explanation:
          "挺 (tǐng) — «довольно, вполне». Разговорная альтернатива 很. Часто сопровождается 的 в конце.\n\n" +
          "Схема:  挺 + Прилагательное + 的\n\n" +
          "挺好看的 — довольно симпатичный\n" +
          "挺漂亮的 — довольно красивый\n" +
          "挺冷的 — довольно холодно\n\n" +
          "挺 по силе примерно = 很, но звучит более разговорно и дружелюбно. Идеально для бытового общения.",
        examples: [
          { target: "那件白毛衣挺好看的。", transliteration: "Nà jiàn bái máoyī tǐng hǎokàn de.", translation: "Тот белый свитер довольно симпатичный." },
          { target: "你的毛衣挺漂亮的。", transliteration: "Nǐ de máoyī tǐng piàoliang de.", translation: "Твой свитер довольно красивый." },
          { target: "学校商店的东西挺便宜的。", transliteration: "Xuéxiào shāngdiàn de dōngxi tǐng piányi de.", translation: "В университетском магазине вещи довольно дешёвые." },
          { target: "北京的冬天挺冷的。", transliteration: "Běijīng de dōngtiān tǐng lěng de.", translation: "Зима в Пекине довольно холодная." },
        ],
      },
      {
        title: "的-фраза — «X-ный, тот, который X»",
        explanation:
          "X + 的 (без существительного после) превращается в отдельную фразу-заменитель существительного, если контекст ясен.\n\n" +
          "X может быть:\n" +
          "• Прилагательное:  白的 (белый, белая вещь), 贵的 (дорогой)\n" +
          "• Существительное/Местоимение:  我的 (мой, моё), 老师的 (учительский)\n" +
          "• Глагол:  我买的 (то что я купил), 昨天吃的 (то что вчера ел)\n\n" +
          "Пример:\n" +
          "这件毛衣白。— Этот свитер белый.\n" +
          "我喜欢白的。— Мне нравится белый (белая вещь — свитер подразумевается).\n\n" +
          "Это очень частая структура в разговоре.",
        examples: [
          { target: "白的容易脏。", transliteration: "Bái de róngyì zāng.", translation: "Белое легко пачкается." },
          { target: "我喜欢浅颜色的。", transliteration: "Wǒ xǐhuan qiǎn yánsè de.", translation: "Мне нравятся светлые цвета (вещи светлых цветов)." },
          { target: "这辆自行车是我昨天买的。", transliteration: "Zhè liàng zìxíngchē shì wǒ zuótiān mǎi de.", translation: "Этот велосипед — тот, что я вчера купила." },
          { target: "这本词典是英文的。", transliteration: "Zhè běn cídiǎn shì Yīngwén de.", translation: "Этот словарь — английский." },
        ],
      },
      {
        title: "有(一)点儿 + прил. — «немного, чуть-чуть»",
        explanation:
          "有(一)点儿 (yǒu(yì)diǎnr) ставится ПЕРЕД прилагательным и означает «немного, чуть-чуть». Часто имеет негативный оттенок.\n\n" +
          "Схема:  有(一)点儿 + Прилагательное\n\n" +
          "有点儿冷 — немного холодно (и это плохо)\n" +
          "有点儿贵 — немного дороговато\n" +
          "有点儿深 — чуть тёмноват\n\n" +
          "Важно: НЕ путать с (一)点儿 (без 有) после глагола — это «немного» без негативного оттенка.\n\n" +
          "Сравни:\n" +
          "• 有点儿贵 — «дороговато» (жалоба)\n" +
          "• 便宜一点儿 — «немного дешевле, подешевле» (просьба)",
        examples: [
          { target: "这件的颜色有点儿深。", transliteration: "Zhè jiàn de yánsè yǒudiǎnr shēn.", translation: "У этого цвет чуть тёмный." },
          { target: "今天有点儿冷。", transliteration: "Jīntiān yǒudiǎnr lěng.", translation: "Сегодня немного холодновато." },
          { target: "黑颜色的有点儿贵。", transliteration: "Hēi yánsè de yǒudiǎnr guì.", translation: "Чёрный чуть дороговат." },
          { target: "他有点儿不高兴。", transliteration: "Tā yǒudiǎnr bù gāoxìng.", translation: "Он немного расстроен." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Выбираем свитер (古丽 и 中村)",
        lines: [
          { speaker: "A", target: "中村，你看，那件白毛衣怎么样？", transliteration: "Zhōngcūn, nǐ kàn, nà jiàn bái máoyī zěnmeyàng?", translation: "Накамура, смотри, как тот белый свитер?" },
          { speaker: "B", target: "挺好看的。不过，白的容易脏。这件蓝的怎么样？", transliteration: "Tǐng hǎokàn de. Búguò, bái de róngyì zāng. Zhè jiàn lán de zěnmeyàng?", translation: "Симпатичный. Но белое легко пачкается. А этот синий?" },
          { speaker: "A", target: "这件的颜色有点儿深，我喜欢浅颜色的。", transliteration: "Zhè jiàn de yánsè yǒudiǎnr shēn, wǒ xǐhuan qiǎn yánsè de.", translation: "У этого цвет чуть тёмный, я люблю светлые." },
          { speaker: "B", target: "那件黄的呢？", transliteration: "Nà jiàn huáng de ne?", translation: "А тот жёлтый?" },
          { speaker: "A", target: "不错，挺漂亮的，就买它吧。", transliteration: "Búcuò, tǐng piàoliang de, jiù mǎi tā ba.", translation: "Неплохо, довольно красивый — куплю его." },
        ],
      },
      {
        title: "Новый велосипед (阿曼 и 古丽)",
        lines: [
          { speaker: "A", target: "古丽，这是你的自行车吗？", transliteration: "Gǔlì, zhè shì nǐ de zìxíngchē ma?", translation: "Гульнара, это твой велосипед?" },
          { speaker: "B", target: "对，这是我昨天买的，怎么样？", transliteration: "Duì, zhè shì wǒ zuótiān mǎi de, zěnmeyàng?", translation: "Да, вчера купила. Как тебе?" },
          { speaker: "A", target: "挺漂亮的，是新的吗？", transliteration: "Tǐng piàoliang de, shì xīn de ma?", translation: "Красивый. Новый?" },
          { speaker: "B", target: "对，我买的是一辆旧的，旧的比较便宜，也不容易丢。", transliteration: "Duì, wǒ mǎi de shì yí liàng jiù de, jiù de bǐjiào piányi, yě bù róngyì diū.", translation: "Нет, я купила б/у. Старые дешевле и их не так часто воруют." },
          { speaker: "A", target: "有别的颜色吗？", transliteration: "Yǒu bié de yánsè ma?", translation: "А другие цвета есть?" },
          { speaker: "B", target: "有，有黑的、蓝的、还有灰的、黄的。你喜欢什么颜色的？", transliteration: "Yǒu, yǒu hēi de, lán de, hái yǒu huī de, huáng de. Nǐ xǐhuan shénme yánsè de?", translation: "Есть — чёрные, синие, серые, жёлтые. Какой цвет тебе нравится?" },
          { speaker: "A", target: "我喜欢绿的。", transliteration: "Wǒ xǐhuan lǜ de.", translation: "Я люблю зелёный." },
        ],
      },
    ],

    tips: [
      "Счётные слова для одежды: 件 (jiàn) — для верха (рубашка, свитер, пальто), 条 (tiáo) — для низа (штаны, юбка). «Одна рубашка» = 一件衬衫, «одни штаны» = 一条裤子.",
      "深 и 浅 про цвета: 深蓝 — тёмно-синий, 浅蓝 — голубой (светло-синий). Про воду 深/浅 = глубокий/мелкий.",
      "它 (tā) — «оно» для предметов и животных. В разговоре китайцы часто опускают местоимения, 它 используется реже 他/她.",
      "Слова-противоположности в описаниях: 新/旧 (новый/старый), 贵/便宜 (дорогой/дешёвый), 深/浅 (тёмный/светлый), 大/小 (большой/маленький).",
      "别的 (bié de) = «другой, иной». «Другие цвета» = 别的颜色. Похоже на 其他的 (qítā de), но 别的 более разговорное.",
    ],
  },

  15: {
    introduction:
      "Это итоговая глава Unit 3. Вы научитесь обсуждать подарки, выбор «А или Б» (还是), давать примеры через 比如 и использовать 一直 («всё время»).\n\n" +
      "Ситуации: 中村 готовит торт на день рождения подруги, 张伟 советуется с 阿曼 что подарить девушке.",

    vocabulary: [
      { target: "晚饭", transliteration: "wǎnfàn", translation: "ужин" },
      { target: "以后", transliteration: "yǐhòu", translation: "после, потом" },
      { target: "一直", transliteration: "yìzhí", translation: "всё время, постоянно" },
      { target: "忙", transliteration: "máng", translation: "занят, быть занятым" },
      { target: "准备", transliteration: "zhǔnbèi", translation: "готовиться, готовить" },
      { target: "礼物", transliteration: "lǐwù", translation: "подарок" },
      { target: "生日", transliteration: "shēngrì", translation: "день рождения" },
      { target: "蛋糕", transliteration: "dàngāo", translation: "торт" },
      { target: "送", transliteration: "sòng", translation: "дарить, отправлять" },
      { target: "说", transliteration: "shuō", translation: "говорить, сказать" },
      { target: "特别", transliteration: "tèbié", translation: "особый, особенный" },
      { target: "男", transliteration: "nán", translation: "мужской" },
      { target: "还是", transliteration: "háishi", translation: "или (в вопросах)" },
      { target: "女", transliteration: "nǚ", translation: "женский" },
      { target: "可", transliteration: "kě", translation: "можно, стоит (перед глаголом)" },
      { target: "比如", transliteration: "bǐrú", translation: "например" },
      { target: "巧克力", transliteration: "qiǎokèlì", translation: "шоколад" },
      { target: "甜", transliteration: "tián", translation: "сладкий" },
      { target: "号", transliteration: "hào", translation: "размер (одежды)" },
      { target: "那么", transliteration: "nàme", translation: "тогда, в таком случае" },
      { target: "束", transliteration: "shù", translation: "счётное слово для букетов" },
      { target: "花", transliteration: "huā", translation: "цветок" },
      { target: "主意", transliteration: "zhǔyi", translation: "идея" },
    ],

    grammar: [
      {
        title: "还是 — альтернативный вопрос «А или Б?»",
        explanation:
          "还是 (háishi) между двумя вариантами образует вопрос «А или Б?».\n\n" +
          "Схема:  Вариант A + 还是 + Вариант B?\n\n" +
          "男的还是女的？— Мужчина или женщина?\n" +
          "你喝水还是喝咖啡？— Будешь пить воду или кофе?\n" +
          "你去还是我去？— Ты пойдёшь или я?\n\n" +
          "Важно не путать с 或者 (huòzhě — «или»), которое используется в УТВЕРЖДЕНИЯХ:\n" +
          "• 还是 — в вопросах\n" +
          "• 或者 — в утверждениях (я могу пойти сегодня или завтра)",
        examples: [
          { target: "男的还是女的？", transliteration: "Nán de háishi nǚ de?", translation: "Мужчина или женщина?" },
          { target: "你喜欢红的还是蓝的？", transliteration: "Nǐ xǐhuan hóng de háishi lán de?", translation: "Тебе нравится красное или синее?" },
          { target: "你去还是我去？", transliteration: "Nǐ qù háishi wǒ qù?", translation: "Ты пойдёшь или я?" },
          { target: "你喝水还是喝咖啡？", transliteration: "Nǐ hē shuǐ háishi hē kāfēi?", translation: "Пить воду или кофе?" },
        ],
      },
      {
        title: "比如 — «например»",
        explanation:
          "比如 (bǐrú) — «например, скажем». Вводит пример.\n\n" +
          "Схема:  Общее утверждение，比如 + Пример\n\n" +
          "可送的东西很多，比如巧克力。\n" +
          "«Можно подарить много всего, например шоколад.»\n\n" +
          "В китайском 比如 часто ставится в середину предложения как вводное слово. Также можно использовать 比如说 (bǐrúshuō) — более разговорно.",
        examples: [
          { target: "可送的很多啊，比如巧克力。", transliteration: "Kě sòng de hěn duō a, bǐrú qiǎokèlì.", translation: "Можно подарить много всего, например, шоколад." },
          { target: "我喜欢很多颜色，比如蓝的、绿的。", transliteration: "Wǒ xǐhuan hěn duō yánsè, bǐrú lán de, lǜ de.", translation: "Мне нравится много цветов, например синий, зелёный." },
          { target: "北京有很多大学，比如北京大学、清华大学。", transliteration: "Běijīng yǒu hěn duō dàxué, bǐrú Běijīng Dàxué, Qīnghuá Dàxué.", translation: "В Пекине много университетов — например, Бэйда и Цинхуа." },
        ],
      },
      {
        title: "一直 — «всё время, постоянно»",
        explanation:
          "一直 (yìzhí) — «всё время, непрерывно, без перерыва». Ставится ПЕРЕД глаголом.\n\n" +
          "Схема:  Подл. + 一直 + Глагол\n\n" +
          "Часто сопровождается продолженным временем (正在...呢):\n" +
          "你一直在忙 — «ты всё это время был занят»\n" +
          "他一直在学汉语 — «он всё это время учит китайский»\n\n" +
          "Также «прямо вперёд»:\n" +
          "一直走 — «идти прямо»",
        examples: [
          { target: "从晚饭以后到现在，你一直在忙。", transliteration: "Cóng wǎnfàn yǐhòu dào xiànzài, nǐ yìzhí zài máng.", translation: "С самого ужина и до сих пор ты всё время занят." },
          { target: "他一直在学汉语。", transliteration: "Tā yìzhí zài xué Hànyǔ.", translation: "Он всё время учит китайский." },
          { target: "一直走就到了。", transliteration: "Yìzhí zǒu jiù dào le.", translation: "Иди прямо — и придёшь." },
        ],
      },
      {
        title: "可 + Глагол — «можно/стоит делать»",
        explanation:
          "可 (kě) перед глаголом означает «можно, стоит это делать» — т.е. это действие имеет смысл / возможно.\n\n" +
          "Схема:  可 + Глагол + 的 + (Сущ.)\n\n" +
          "可送的很多 — есть много такого, что можно подарить (дословно: «достойного-дарения много»)\n" +
          "可看的电影很多 — есть много фильмов, которые стоит посмотреть\n" +
          "可去的地方很多 — есть много мест, куда можно пойти\n\n" +
          "Это книжная/вежливая форма. В разговоре чаще скажут 可以 (kěyǐ) — «можно».",
        examples: [
          { target: "可送的很多啊，比如巧克力。", transliteration: "Kě sòng de hěn duō a, bǐrú qiǎokèlì.", translation: "Подарить можно много всего, например шоколад." },
          { target: "电影可看的很多。", transliteration: "Diànyǐng kě kàn de hěn duō.", translation: "Фильмов, достойных просмотра, много." },
          { target: "星期天可去的地方很多。", transliteration: "Xīngqītiān kě qù de dìfang hěn duō.", translation: "В воскресенье есть много мест, куда можно пойти." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Торт на день рождения (古丽 и 中村)",
        lines: [
          { speaker: "A", target: "中村，从晚饭以后到现在，你一直在忙，忙什么呢？", transliteration: "Zhōngcūn, cóng wǎnfàn yǐhòu dào xiànzài, nǐ yìzhí zài máng, máng shénme ne?", translation: "Накамура, с ужина и до сих пор ты всё возишься — чем занят?" },
          { speaker: "B", target: "我在准备礼物呢。", transliteration: "Wǒ zài zhǔnbèi lǐwù ne.", translation: "Готовлю подарок." },
          { speaker: "A", target: "准备礼物？", transliteration: "Zhǔnbèi lǐwù?", translation: "Подарок?" },
          { speaker: "B", target: "对，明天是我朋友的生日，我做一个蛋糕送给她，你说好不好？", transliteration: "Duì, míngtiān shì wǒ péngyou de shēngrì, wǒ zuò yí ge dàngāo sòng gěi tā, nǐ shuō hǎo bu hǎo?", translation: "Да, завтра день рождения подруги. Хочу сделать торт и подарить ей, как думаешь?" },
          { speaker: "A", target: "你自己做？", transliteration: "Nǐ zìjǐ zuò?", translation: "Сам сделаешь?" },
          { speaker: "B", target: "对啊，自己做的比较特别。", transliteration: "Duì a, zìjǐ zuò de bǐjiào tèbié.", translation: "Да, сделанное своими руками — более особенное." },
        ],
      },
      {
        title: "Что подарить девушке? (张伟 и 阿曼)",
        lines: [
          { speaker: "A", target: "阿曼，你说，送生日礼物，什么东西比较好？", transliteration: "Āmàn, nǐ shuō, sòng shēngrì lǐwù, shénme dōngxi bǐjiào hǎo?", translation: "Аман, как думаешь, что лучше подарить на день рождения?" },
          { speaker: "B", target: "你打算送给谁？男的还是女的？", transliteration: "Nǐ dǎsuàn sòng gěi shéi? Nán de háishi nǚ de?", translation: "Кому собираешься? Мужчине или женщине?" },
          { speaker: "A", target: "女的。", transliteration: "Nǚ de.", translation: "Женщине." },
          { speaker: "B", target: "可送的很多啊，比如巧克力。", transliteration: "Kě sòng de hěn duō a, bǐrú qiǎokèlì.", translation: "Да много чего можно, например шоколад." },
          { speaker: "A", target: "巧克力有点儿甜，她不喜欢甜的。", transliteration: "Qiǎokèlì yǒudiǎnr tián, tā bù xǐhuan tián de.", translation: "Шоколад сладковат, а она не любит сладкое." },
          { speaker: "B", target: "衣服呢？", transliteration: "Yīfu ne?", translation: "А одежда?" },
          { speaker: "A", target: "她的衣服号我不知道，也不知道她喜欢什么颜色。", transliteration: "Tā de yīfu hào wǒ bù zhīdào, yě bù zhīdào tā xǐhuan shénme yánsè.", translation: "Размер не знаю, и какие цвета любит — тоже." },
          { speaker: "B", target: "那么送一束花吧，每个女孩子都喜欢花。", transliteration: "Nàme sòng yí shù huā ba, měi ge nǚ háizi dōu xǐhuan huā.", translation: "Тогда подари букет цветов — все девушки любят цветы." },
          { speaker: "A", target: "这个主意挺不错的。", transliteration: "Zhège zhǔyi tǐng búcuò de.", translation: "Отличная идея." },
        ],
      },
    ],

    tips: [
      "送 имеет два значения: «дарить» (送礼物) и «провожать/отправлять» (送朋友回家). Контекст всегда понятен.",
      "В китайской культуре НЕ дарят: часы (送钟 = 送终 «провожать в последний путь»), обувь (символика разлуки), зонты (伞 звучит как 散 — «расставание»). Безопасные подарки: цветы, чай, фрукты, шоколад.",
      "一束花 = «букет цветов». 束 — счётное слово для букетов. Для отдельных цветов используется 朵 (duǒ): 一朵花.",
      "比如 ≈ 比如说 — оба «например». Первое чуть формальнее, второе разговорное. Оба в начале примера.",
      "主意 (zhǔyi) — «идея, задумка». 这个主意不错 = «неплохая идея». Также 好主意！— «Отличная идея!».",
    ],
  },

  16: {
    introduction:
      "В этой главе вы научитесь рассказывать о своих выходных и досуге, использовать удвоение глаголов (для мягкости речи), конструкцию 太……了 и обстоятельство места 在+место перед глаголом.\n\n" +
      "Ситуация: 阿曼 (любитель активных выходных) разговаривает с одноклассником (скучающим домоседом) — у каждого свой взгляд на выходные.",

    vocabulary: [
      { target: "又", transliteration: "yòu", translation: "снова, опять" },
      { target: "了", transliteration: "le", translation: "частица (завершённость/изменение)" },
      { target: "看起来", transliteration: "kànqǐlai", translation: "похоже, выглядит (что...)" },
      { target: "啦", transliteration: "la", translation: "частица (эмоционально подчёркивает)" },
      { target: "可以", transliteration: "kěyǐ", translation: "можно, иметь возможность" },
      { target: "好好儿", transliteration: "hǎohāor", translation: "как следует, вдоволь" },
      { target: "觉得", transliteration: "juéde", translation: "чувствовать, считать" },
      { target: "没意思", transliteration: "méi yìsi", translation: "скучно, неинтересно" },
      { target: "电视", transliteration: "diànshì", translation: "телевизор, телевидение" },
      { target: "洗", transliteration: "xǐ", translation: "мыть, стирать" },
      { target: "睡懒觉", transliteration: "shuì lǎnjiào", translation: "поспать подольше, выспаться" },
      { target: "睡觉", transliteration: "shuì jiào", translation: "спать" },
      { target: "出去", transliteration: "chūqu", translation: "выходить (куда-то)" },
      { target: "逛", transliteration: "guàng", translation: "гулять (по магазинам)" },
      { target: "学习", transliteration: "xuéxí", translation: "учиться, изучать" },
      { target: "不同", transliteration: "bùtóng", translation: "разный, различный" },
      { target: "安排", transliteration: "ānpái", translation: "планировать, планы" },
      { target: "上", transliteration: "shàng", translation: "прошлый, предыдущий" },
      { target: "包", transliteration: "bāo", translation: "заворачивать, лепить (пельмени)" },
      { target: "饺子", transliteration: "jiǎozi", translation: "пельмени, дзяоцзы" },
      { target: "迪厅", transliteration: "dítīng", translation: "дискотека" },
      { target: "跳舞", transliteration: "tiào wǔ", translation: "танцевать" },
      { target: "听", transliteration: "tīng", translation: "слушать" },
      { target: "音乐会", transliteration: "yīnyuèhuì", translation: "концерт" },
    ],

    grammar: [
      {
        title: "Удвоение глаголов: V-V (мягкая, лёгкая форма)",
        explanation:
          "В китайском глаголы часто удваиваются, чтобы сделать действие более неформальным, лёгким, коротким по времени.\n\n" +
          "Схемы:\n" +
          "• Односложный глагол:  V + V  или  V + 一 + V\n" +
          "  看看 = посмотри\n" +
          "  试试 = попробуй\n" +
          "  看一看 = немного посмотреть\n\n" +
          "• Двусложный глагол:  AB + AB\n" +
          "  学习学习 = немного позаниматься\n" +
          "  休息休息 = немного отдохнуть\n\n" +
          "Оттенок: «немножко, ненапряжно, попробуй». Очень частое в повседневной речи.",
        examples: [
          { target: "周末可以好好儿玩儿玩儿。", transliteration: "Zhōumò kěyǐ hǎohāor wánr wánr.", translation: "На выходных можно хорошо отдохнуть." },
          { target: "在宿舍里看看电视，洗洗衣服。", transliteration: "Zài sùshè li kànkan diànshì, xǐxi yīfu.", translation: "В общежитии смотрю телик, стираю вещи." },
          { target: "和朋友逛逛商店。", transliteration: "Hé péngyou guàngguang shāngdiàn.", translation: "С другом пройдёмся по магазинам." },
          { target: "去图书馆学习学习。", transliteration: "Qù túshūguǎn xuéxí xuéxí.", translation: "Схожу в библиотеку позаниматься." },
        ],
      },
      {
        title: "Конструкция 太……了 (расширение) — «слишком»",
        explanation:
          "Мы уже видели эту конструкцию в Главе 6 (太早了). В Главе 16 закрепим все оттенки:\n\n" +
          "Схема:  太 + Прилагательное/Глагол + 了\n\n" +
          "Может выражать:\n" +
          "• Негативное («слишком»):  太累了！— Слишком устал!\n" +
          "• Позитивное («как здóрово»):  太高兴了！— Очень рад!\n" +
          "• Нейтральное (просто высокая степень):  太好了！— Отлично!\n\n" +
          "Контекст определяет, хорошо это или плохо. Частица 了 почти всегда обязательна — без неё предложение звучит оборванно.",
        examples: [
          { target: "明天又是周末，太高兴了！", transliteration: "Míngtiān yòu shì zhōumò, tài gāoxìng le!", translation: "Завтра снова выходные — как я рад!" },
          { target: "今天太冷了。", transliteration: "Jīntiān tài lěng le.", translation: "Сегодня слишком холодно." },
          { target: "这个房间太舒服了！", transliteration: "Zhège fángjiān tài shūfu le!", translation: "Эта комната супер удобная!" },
          { target: "这件毛衣的颜色太浅了，我不喜欢。", transliteration: "Zhè jiàn máoyī de yánsè tài qiǎn le, wǒ bù xǐhuan.", translation: "Цвет этого свитера слишком светлый, не нравится." },
        ],
      },
      {
        title: "Обстоятельство места: 在 + место + глагол",
        explanation:
          "«Делаю X в месте Y»: в китайском «в месте» ВСЕГДА ставится ПЕРЕД глаголом.\n\n" +
          "Схема:  Подл. + 在 + Место + Глагол + (Объект)\n\n" +
          "阿曼在北京大学学习汉语。\n" +
          "«Аман в Пекинском университете изучает китайский.»\n\n" +
          "ВНИМАНИЕ — обратный порядок в русском:\n" +
          "• Русский: «Аман учит китайский В ПЕКИНЕ»\n" +
          "• Китайский: «Аман В ПЕКИНЕ учит китайский»\n\n" +
          "Место нельзя ставить в конец предложения — это другой смысл (глагол 在 без места).",
        examples: [
          { target: "在宿舍里看电视。", transliteration: "Zài sùshè li kàn diànshì.", translation: "В общежитии смотрю телевизор." },
          { target: "阿曼在北京大学学习汉语。", transliteration: "Āmàn zài Běijīng Dàxué xuéxí Hànyǔ.", translation: "Аман в Пекинском университете учит китайский." },
          { target: "他在图书馆看书。", transliteration: "Tā zài túshūguǎn kàn shū.", translation: "Он в библиотеке читает." },
          { target: "他们在购物中心买东西。", transliteration: "Tāmen zài gòuwù zhōngxīn mǎi dōngxi.", translation: "Они в ТЦ покупают." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Про выходные (阿曼 и одноклассник)",
        lines: [
          { speaker: "A", target: "明天又是周末，太高兴了！", transliteration: "Míngtiān yòu shì zhōumò, tài gāoxìng le!", translation: "Завтра опять выходные — как я рад!" },
          { speaker: "B", target: "看起来，你很喜欢周末。", transliteration: "Kànqǐlai, nǐ hěn xǐhuan zhōumò.", translation: "Похоже, ты очень любишь выходные." },
          { speaker: "A", target: "当然喜欢啦！周末可以好好儿玩儿玩儿，你不喜欢吗？", transliteration: "Dāngrán xǐhuan la! Zhōumò kěyǐ hǎohāor wánr wánr, nǐ bù xǐhuan ma?", translation: "Конечно люблю! На выходных можно хорошо отдохнуть — ты разве не любишь?" },
          { speaker: "B", target: "我不喜欢。每个周末，我都觉得没意思。", transliteration: "Wǒ bù xǐhuan. Měi ge zhōumò, wǒ dōu juéde méi yìsi.", translation: "Не люблю. Каждые выходные мне скучно." },
          { speaker: "A", target: "你周末都干什么呢？", transliteration: "Nǐ zhōumò dōu gàn shénme ne?", translation: "А что ты делаешь на выходных?" },
          { speaker: "B", target: "在宿舍里看看电视，洗洗衣服，做做作业，睡睡懒觉……", transliteration: "Zài sùshè li kànkan diànshì, xǐxi yīfu, zuòzuo zuòyè, shuìshui lǎnjiào...", translation: "В общежитии смотрю телик, стираю, делаю уроки, высыпаюсь…" },
          { speaker: "A", target: "你不和朋友一起出去玩儿吗？", transliteration: "Nǐ bù hé péngyou yìqǐ chūqu wánr ma?", translation: "А с друзьями не выходишь гулять?" },
          { speaker: "B", target: "有时候和朋友一起逛逛商店，有时候去图书馆学习学习。你周末都干什么呢？", transliteration: "Yǒu shíhou hé péngyou yìqǐ guàngguang shāngdiàn, yǒu shíhou qù túshūguǎn xuéxí xuéxí. Nǐ zhōumò dōu gàn shénme ne?", translation: "Иногда с друзьями хожу по магазинам, иногда в библиотеку. А ты?" },
          { speaker: "A", target: "我每个周末都有不同的安排。上个周末到朋友家包饺子，上上个周末去迪厅跳舞……", transliteration: "Wǒ měi ge zhōumò dōu yǒu bù tóng de ānpái. Shàng ge zhōumò dào péngyou jiā bāo jiǎozi, shàng shàng ge zhōumò qù dítīng tiào wǔ...", translation: "У меня каждые выходные разные планы. В прошлые лепил пельмени у друга, в позапрошлые ходил на дискотеку…" },
          { speaker: "B", target: "这个周末你干什么？", transliteration: "Zhège zhōumò nǐ gàn shénme?", translation: "А в эти что планируешь?" },
          { speaker: "A", target: "我去听音乐会。一起去，怎么样？", transliteration: "Wǒ qù tīng yīnyuèhuì. Yìqǐ qù, zěnmeyàng?", translation: "Иду на концерт. Пойдём вместе?" },
          { speaker: "B", target: "好啊，太好了！", transliteration: "Hǎo a, tài hǎo le!", translation: "Давай, отлично!" },
        ],
      },
    ],

    tips: [
      "Удвоение делает глагол «мягче». Сравни: 看书 («читай/прочти») vs 看看书 («почитай чуть-чуть»). Для просьб всегда лучше удвоенная форма — вежливее.",
      "上 в контексте времени = «прошлый»: 上星期 (прошлая неделя), 上个月 (прошлый месяц), 上个周末 (прошлые выходные). 上上 = «позапрошлый».",
      "又 vs 再: оба «снова». 又 — о прошлом/повторяющемся («опять же»), 再 — о будущем («снова сделаю»). 又是周末 = «опять выходные» (регулярно происходит).",
      "啦 (la) = 了+啊, эмоциональная частица. Показывает энтузиазм: 当然喜欢啦! («конечно люблю!»). Придаёт лёгкую дружескую интонацию.",
      "好好儿 (hǎohāor) — «как следует, хорошенько». Ставится перед глаголом: 好好儿玩儿 (хорошо отдохнуть), 好好儿学习 (хорошо учиться).",
    ],
  },

  17: {
    introduction:
      "В этой главе вы научитесь идти в гости: приветствовать хозяев, дарить подарок, говорить вежливые клише. Познакомитесь с глаголом 会 («уметь»), эмфатическим 就是 и другими правилами этикета.\n\n" +
      "Ситуация: 阿曼 и 古丽 приходят в гости к 王老师 — обмениваются подарками и лепят пельмени.",

    vocabulary: [
      { target: "做客", transliteration: "zuò kè", translation: "быть в гостях" },
      { target: "请进", transliteration: "qǐng jìn", translation: "проходите, пожалуйста" },
      { target: "真", transliteration: "zhēn", translation: "действительно, по-настоящему" },
      { target: "干净", transliteration: "gānjìng", translation: "чистый" },
      { target: "坐", transliteration: "zuò", translation: "сидеть, садиться" },
      { target: "哎呀", transliteration: "āiyā", translation: "ой, ах (восклицание)" },
      { target: "客气", transliteration: "kèqi", translation: "вежливый, церемониться" },
      { target: "一点儿", transliteration: "yìdiǎnr", translation: "немного, чуть-чуть" },
      { target: "心意", transliteration: "xīnyì", translation: "знак внимания" },
      { target: "收下", transliteration: "shōuxià", translation: "принять (подарок)" },
      { target: "茶", transliteration: "chá", translation: "чай" },
      { target: "果汁", transliteration: "guǒzhī", translation: "сок" },
      { target: "随便", transliteration: "suíbiàn", translation: "как угодно, без разницы" },
      { target: "行", transliteration: "xíng", translation: "годится, подходит" },
      { target: "路上", transliteration: "lùshàng", translation: "в пути, по дороге" },
      { target: "顺利", transliteration: "shùnlì", translation: "гладко, без проблем" },
      { target: "挤", transliteration: "jǐ", translation: "тесно, набит" },
      { target: "打车", transliteration: "dǎ chē", translation: "взять такси" },
      { target: "空调", transliteration: "kōngtiáo", translation: "кондиционер" },
      { target: "大巴", transliteration: "dàbā", translation: "автобус (большой)" },
      { target: "地铁", transliteration: "dìtiě", translation: "метро" },
      { target: "饿", transliteration: "è", translation: "голодный" },
      { target: "吃", transliteration: "chī", translation: "есть, кушать" },
      { target: "会", transliteration: "huì", translation: "уметь" },
      { target: "试", transliteration: "shì", translation: "пробовать" },
    ],

    grammar: [
      {
        title: "Глагол 会 — «уметь (по обучению)»",
        explanation:
          "会 (huì) — «уметь», но только про НАВЫКИ, которым научились: говорить на языке, готовить, водить машину.\n\n" +
          "Схема:  Подл. + 会 + Глагол + (Объект)\n\n" +
          "我会包饺子。— Я умею лепить пельмени.\n" +
          "我会说英语。— Я умею говорить по-английски.\n\n" +
          "Отрицание: 不会.\n" +
          "他不会说英语。— Он не умеет говорить по-английски.\n\n" +
          "Есть и другие значения 会 (возможность, вероятность) — их изучим позже. Пока — только «уметь».",
        examples: [
          { target: "你们会包吗？", transliteration: "Nǐmen huì bāo ma?", translation: "Вы умеете лепить?" },
          { target: "我会包饺子。", transliteration: "Wǒ huì bāo jiǎozi.", translation: "Я умею лепить пельмени." },
          { target: "我会说英语，他不会说英语。", transliteration: "Wǒ huì shuō Yīngyǔ, tā bú huì shuō Yīngyǔ.", translation: "Я говорю по-английски, он — нет." },
          { target: "你会骑自行车吗？", transliteration: "Nǐ huì qí zìxíngchē ma?", translation: "Ты умеешь ездить на велосипеде?" },
        ],
      },
      {
        title: "就是 — эмфатическое «именно, как раз»",
        explanation:
          "就是 (jiùshì) между подлежащим и сказуемым — для усиления: «именно это, именно так».\n\n" +
          "Схема:  Подл. + 就是 + Объект/Описание\n\n" +
          "我最喜欢吃的就是饺子。\n" +
          "«Что я больше всего люблю есть — так это пельмени.»\n\n" +
          "他就是王老师。— Это и есть учитель Ван.\n" +
          "这儿就是图书馆。— Это как раз библиотека.\n\n" +
          "Переводится как «именно», «как раз», «это и есть».",
        examples: [
          { target: "我最喜欢吃的就是饺子。", transliteration: "Wǒ zuì xǐhuan chī de jiùshì jiǎozi.", translation: "Что я больше всего люблю — это пельмени." },
          { target: "他就是王老师。", transliteration: "Tā jiùshì Wáng lǎoshī.", translation: "Это и есть учитель Ван." },
          { target: "这儿就是图书馆。", transliteration: "Zhèr jiùshì túshūguǎn.", translation: "Здесь как раз библиотека." },
          { target: "北京大学的东边就是清华大学。", transliteration: "Běijīng Dàxué de dōngbian jiùshì Qīnghuá Dàxué.", translation: "К востоку от Бэйда — как раз Цинхуа." },
        ],
      },
      {
        title: "A 还是 B — повторение «А или Б?» (с 是)",
        explanation:
          "В Главе 15 мы изучили 还是 для выбора. В Главе 17 повторяем с вариантом «是 A 还是 B».\n\n" +
          "Схемы:\n" +
          "• 是 A 还是 B？— вежливо, если подразумевается «есть/является»\n" +
          "• A 还是 B？— проще, без 是\n\n" +
          "茶还是果汁？— Чай или сок?\n" +
          "你们一般坐公共汽车还是打车？— Обычно на автобусе или на такси?\n\n" +
          "В ответе 是 можно опустить.",
        examples: [
          { target: "茶还是果汁？", transliteration: "Chá háishi guǒzhī?", translation: "Чай или сок?" },
          { target: "你是美国人还是加拿大人？", transliteration: "Nǐ shì Měiguó rén háishi Jiānádà rén?", translation: "Ты американец или канадец?" },
          { target: "你喝茶还是喝咖啡？", transliteration: "Nǐ hē chá háishi hē kāfēi?", translation: "Ты будешь чай или кофе?" },
          { target: "是你去还是我去？", transliteration: "Shì nǐ qù háishi wǒ qù?", translation: "Ты пойдёшь или я?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "В гостях у 王老师 (阿曼, 古丽, 王老师)",
        lines: [
          { speaker: "A", target: "请进，请进！", transliteration: "Qǐng jìn, qǐng jìn!", translation: "Заходите, заходите!" },
          { speaker: "B", target: "老师，您的家真干净啊！", transliteration: "Lǎoshī, nín de jiā zhēn gānjìng a!", translation: "Учитель, у вас дома так чисто!" },
          { speaker: "A", target: "是吗？来，坐这儿吧！", transliteration: "Shì ma? Lái, zuò zhèr ba!", translation: "Правда? Проходите, садитесь сюда!" },
          { speaker: "B", target: "这是给您的礼物。", transliteration: "Zhè shì gěi nín de lǐwù.", translation: "Это подарок для вас." },
          { speaker: "A", target: "哎呀！你们太客气了。", transliteration: "Āiyā! Nǐmen tài kèqi le.", translation: "Ой! Вы зря так беспокоитесь." },
          { speaker: "B", target: "一点儿心意，请收下。", transliteration: "Yìdiǎnr xīnyì, qǐng shōuxià.", translation: "Небольшой знак внимания — примите, пожалуйста." },
          { speaker: "A", target: "谢谢！你们喝什么？茶还是果汁？", transliteration: "Xièxie! Nǐmen hē shénme? Chá háishi guǒzhī?", translation: "Спасибо! Что будете пить? Чай или сок?" },
          { speaker: "B", target: "随便，什么都行。", transliteration: "Suíbiàn, shénme dōu xíng.", translation: "Без разницы, любое подойдёт." },
          { speaker: "A", target: "路上顺利吗？", transliteration: "Lùshàng shùnlì ma?", translation: "Добрались без проблем?" },
          { speaker: "B", target: "不太顺利，车上有点儿挤。", transliteration: "Bú tài shùnlì, chē shàng yǒudiǎnr jǐ.", translation: "Не совсем, в автобусе было тесновато." },
          { speaker: "A", target: "你们饿不饿？中午在我家吃饺子，怎么样？", transliteration: "Nǐmen è bu è? Zhōngwǔ zài wǒ jiā chī jiǎozi, zěnmeyàng?", translation: "Вы не голодные? Пообедаем у меня пельменями, как?" },
          { speaker: "B", target: "太好了，我最喜欢吃的就是饺子。", transliteration: "Tài hǎo le, wǒ zuì xǐhuan chī de jiùshì jiǎozi.", translation: "Отлично, я как раз обожаю пельмени!" },
          { speaker: "A", target: "你们会包吗？", transliteration: "Nǐmen huì bāo ma?", translation: "Вы умеете лепить?" },
          { speaker: "B", target: "不太会，我们试试吧！", transliteration: "Bú tài huì, wǒmen shìshi ba!", translation: "Не очень, попробуем!" },
        ],
      },
    ],

    tips: [
      "Этикет подарков: 一点儿心意 («небольшой знак внимания») — стандартная скромная формула при вручении. Хозяин в ответ говорит 太客气了 («зря вы так»).",
      "随便 / 什么都行 — очень вежливый ответ когда предлагают выбор. Буквально «как угодно / всё подойдёт». НЕ невежливо, наоборот — воспитанно не навязывать свои предпочтения.",
      "饺子 — символическая еда в Китае, особенно на Новый год (春节). Форма похожа на старинные деньги, означает богатство. Лепить всей семьёй — традиция.",
      "真 (zhēn) перед прилагательным = «правда, действительно»: 真干净 (правда чисто), 真好吃 (реально вкусно). Сильнее чем 很.",
      "哎呀 (āiyā) — универсальное восклицание удивления/ужаса/разочарования. Контекст определяет тон. При получении подарка: удивление + вежливое возражение.",
    ],
  },

  18: {
    introduction:
      "Продолжение визита (Part 2). Вы научитесь перечислять примеры (A啦 B啦 C啦), использовать 得 («должен»), риторический вопрос 不是……吗? и условный оборот 如果……就…… («если… то…»).\n\n" +
      "Ситуация: за столом обсуждают разницу между северными и южными китайцами в еде, и как проще — лепить пельмени самим или покупать замороженные.",

    vocabulary: [
      { target: "好吃", transliteration: "hǎochī", translation: "вкусный" },
      { target: "味道", transliteration: "wèidào", translation: "вкус, запах" },
      { target: "北方", transliteration: "běifāng", translation: "север (Китая)" },
      { target: "过", transliteration: "guò", translation: "проводить (время), праздновать" },
      { target: "节", transliteration: "jié", translation: "праздник" },
      { target: "客人", transliteration: "kèren", translation: "гость" },
      { target: "南方", transliteration: "nánfāng", translation: "юг (Китая)" },
      { target: "米饭", transliteration: "mǐfàn", translation: "варёный рис" },
      { target: "面食", transliteration: "miànshí", translation: "мучные изделия" },
      { target: "对……来说", transliteration: "duì...lái shuō", translation: "что касается (кого-то)" },
      { target: "重要", transliteration: "zhòngyào", translation: "важный" },
      { target: "种", transliteration: "zhǒng", translation: "сорт, вид" },
      { target: "食品", transliteration: "shípǐn", translation: "еда, продукты" },
      { target: "麻烦", transliteration: "máfan", translation: "хлопотный, доставить хлопоты" },
      { target: "少", transliteration: "shǎo", translation: "мало, немного" },
      { target: "馅儿", transliteration: "xiànr", translation: "начинка" },
      { target: "得", transliteration: "děi", translation: "должен, приходится" },
      { target: "花", transliteration: "huā", translation: "тратить (время, деньги)" },
      { target: "超市", transliteration: "chāoshì", translation: "супермаркет" },
      { target: "速冻", transliteration: "sùdòng", translation: "замороженный" },
      { target: "如果", transliteration: "rúguǒ", translation: "если" },
      { target: "的话", transliteration: "dehuà", translation: "если (частица условия)" },
      { target: "想", transliteration: "xiǎng", translation: "хотеть" },
      { target: "袋", transliteration: "dài", translation: "пакет, мешок" },
      { target: "偷懒", transliteration: "tōu lǎn", translation: "лениться" },
      { target: "大家", transliteration: "dàjiā", translation: "все, каждый" },
      { target: "热闹", transliteration: "rènao", translation: "оживлённо, весело" },
      { target: "有意思", transliteration: "yǒu yìsi", translation: "интересно" },
    ],

    grammar: [
      {
        title: "Перечисление через 啦: A啦 B啦 C啦",
        explanation:
          "Частица 啦 (la) после каждого элемента списка = русское «…, …, … (разные)». Создаёт неформальное перечисление с оттенком «и то, и это».\n\n" +
          "Схема:  A 啦，B 啦，C 啦……\n\n" +
          "过生日啦，过节啦，来客人啦 — 一般都包饺子吃。\n" +
          "«Дни рождения, праздники, приход гостей — обычно лепят пельмени.»\n\n" +
          "啦 объединяет разные случаи в один общий контекст. Часто после списка идёт 都 («все эти»).",
        examples: [
          { target: "过生日啦，过节啦，来客人啦，一般都包饺子吃。", transliteration: "Guò shēngrì la, guò jié la, lái kèren la, yìbān dōu bāo jiǎozi chī.", translation: "Дни рождения, праздники, гости — обычно лепят пельмени." },
          { target: "我们大学有很多国家的留学生，美国啦，日本啦，英国啦……", transliteration: "Wǒmen dàxué yǒu hěn duō guójiā de liúxuéshēng, Měiguó la, Rìběn la, Yīngguó la...", translation: "В нашем вузе студенты из разных стран — из США, Японии, Англии…" },
          { target: "阿曼去商店买很多东西，衣服啦，食品啦，啤酒啦。", transliteration: "Āmàn qù shāngdiàn mǎi hěn duō dōngxi, yīfu la, shípǐn la, píjiǔ la.", translation: "Аман в магазине покупает много — одежду, еду, пиво." },
        ],
      },
      {
        title: "得 (děi) — «должен, надо»",
        explanation:
          "得 (в этом значении читается DĚI, не DÉ!) означает «должен, надо, приходится». Ставится перед глаголом.\n\n" +
          "Схема:  Подл. + 得 + Глагол + (Объект)\n\n" +
          "做馅儿就得花很多时间。\n" +
          "«Делать начинку — надо потратить много времени.»\n\n" +
          "Отрицание: 不用 (не нужно), НЕ 不得!\n" +
          "• 我得去学校。— Мне надо в школу.\n" +
          "• 我不用去学校。— Мне не надо в школу.\n\n" +
          "Внимание: иероглиф 得 имеет 3 чтения — dé (получать), děi (должен), de (показатель степени). Здесь только DĚI.",
        examples: [
          { target: "做馅儿就得花很多时间。", transliteration: "Zuò xiànr jiù děi huā hěn duō shíjiān.", translation: "Делать начинку — нужно много времени." },
          { target: "明天早上八点有课，我得七点起床。", transliteration: "Míngtiān zǎoshang bā diǎn yǒu kè, wǒ děi qī diǎn qǐ chuáng.", translation: "Завтра в 8 занятия, нужно встать в 7." },
          { target: "包饺子比较麻烦，我得花很多时间。", transliteration: "Bāo jiǎozi bǐjiào máfan, wǒ děi huā hěn duō shíjiān.", translation: "Лепить пельмени хлопотно, уйдёт много времени." },
        ],
      },
      {
        title: "Риторический вопрос: 不是……吗？",
        explanation:
          "不是……吗？ — риторический вопрос, который на самом деле УТВЕРЖДЕНИЕ. Смысл: «разве не X? (ведь X же!)».\n\n" +
          "Схема:  不是 + Утверждение + 吗？\n\n" +
          "超市不是有速冻饺子吗？\n" +
          "= «Разве в супермаркете нет замороженных пельменей? (Ведь есть же!)»\n\n" +
          "Используется:\n" +
          "• Когда напоминаешь очевидный факт\n" +
          "• Когда мягко возражаешь\n" +
          "• Когда удивляешься забытому\n\n" +
          "Это НЕ вопрос в обычном смысле — ответ предполагается очевидным и положительным.",
        examples: [
          { target: "超市不是有速冻饺子吗？", transliteration: "Chāoshì bú shì yǒu sùdòng jiǎozi ma?", translation: "Разве в супермаркете нет замороженных пельменей?" },
          { target: "你不是美国人吗？", transliteration: "Nǐ bú shì Měiguó rén ma?", translation: "Разве ты не американец? (ведь американец же)" },
          { target: "你们不是朋友吗？", transliteration: "Nǐmen bú shì péngyou ma?", translation: "Разве вы не друзья?" },
          { target: "你不是喜欢喝咖啡吗？", transliteration: "Nǐ bú shì xǐhuan hē kāfēi ma?", translation: "Ты же вроде любишь кофе, разве нет?" },
        ],
      },
      {
        title: "Условный оборот: 如果……(的话)，就……",
        explanation:
          "如果 A (的话)，就 B — «если А, то Б». Классический условный оборот.\n\n" +
          "Схема:  如果 + Условие + (的话)，就 + Результат\n\n" +
          "• 如果 (rúguǒ) — «если» в начале условия\n" +
          "• 的话 (dehuà) — опциональная частица в конце условия\n" +
          "• 就 (jiù) — «то, тогда» в начале результата\n\n" +
          "Можно использовать все 3 элемента или только часть. Минимально: «Условие, 就 Результат». Но полная форма яснее.",
        examples: [
          { target: "如果想吃的话，就去买一袋。", transliteration: "Rúguǒ xiǎng chī dehuà, jiù qù mǎi yí dài.", translation: "Если хочешь есть — купи пакетик." },
          { target: "如果坐地铁的话，比较快，也比较便宜。", transliteration: "Rúguǒ zuò dìtiě dehuà, bǐjiào kuài, yě bǐjiào piányi.", translation: "Если ехать на метро — быстрее и дешевле." },
          { target: "如果下课早，我们就去商店。", transliteration: "Rúguǒ xià kè zǎo, wǒmen jiù qù shāngdiàn.", translation: "Если уроки закончатся рано — пойдём в магазин." },
          { target: "如果没有安排的话，我就去。", transliteration: "Rúguǒ méiyǒu ānpái dehuà, wǒ jiù qù.", translation: "Если нет планов — схожу." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Север vs Юг (王老师, 阿曼, 古丽)",
        lines: [
          { speaker: "A", target: "老师，今天的饺子真好吃！", transliteration: "Lǎoshī, jīntiān de jiǎozi zhēn hǎochī!", translation: "Учитель, пельмени сегодня очень вкусные!" },
          { speaker: "B", target: "是啊，味道挺不错的。老师，中国人都喜欢吃饺子吗？", transliteration: "Shì a, wèidào tǐng búcuò de. Lǎoshī, Zhōngguó rén dōu xǐhuan chī jiǎozi ma?", translation: "Да, на вкус отличные. Учитель, все китайцы любят пельмени?" },
          { speaker: "A", target: "大部分北方人都喜欢吃饺子。过生日啦，过节啦，来客人啦，一般都包饺子吃。", transliteration: "Dàbùfen běifāng rén dōu xǐhuan chī jiǎozi. Guò shēngrì la, guò jié la, lái kèren la, yìbān dōu bāo jiǎozi chī.", translation: "Большинство северян любят. На дни рождения, праздники, при гостях — обычно лепят пельмени." },
          { speaker: "B", target: "南方人不吃饺子吗？", transliteration: "Nánfāng rén bù chī jiǎozi ma?", translation: "А южане не едят?" },
          { speaker: "A", target: "不常吃。南方人喜欢吃米饭，不太喜欢吃面食。", transliteration: "Bù cháng chī. Nánfāng rén xǐhuan chī mǐfàn, bú tài xǐhuan chī miànshí.", translation: "Нечасто. Южане любят рис, мучное — не очень." },
          { speaker: "B", target: "是这样啊！对北方人来说，饺子是很重要的一种食品吧？", transliteration: "Shì zhèyàng a! Duì běifāng rén lái shuō, jiǎozi shì hěn zhòngyào de yì zhǒng shípǐn ba?", translation: "Вот оно как! Для северян пельмени — важная еда, верно?" },
          { speaker: "A", target: "是啊！不过，包饺子比较麻烦，特别是人少的时候。", transliteration: "Shì a! Búguò, bāo jiǎozi bǐjiào máfan, tèbié shì rén shǎo de shíhou.", translation: "Да! Но лепить хлопотно, особенно когда людей мало." },
          { speaker: "B", target: "对，做馅儿就得花很多时间呢。", transliteration: "Duì, zuò xiànr jiù děi huā hěn duō shíjiān ne.", translation: "Да, одна начинка сколько времени требует." },
          { speaker: "C", target: "超市不是有速冻饺子吗？如果想吃的话，就去买一袋。", transliteration: "Chāoshì bú shì yǒu sùdòng jiǎozi ma? Rúguǒ xiǎng chī dehuà, jiù qù mǎi yí dài.", translation: "А в супермаркете разве нет замороженных? Если хочется — купи пакетик." },
          { speaker: "A", target: "你真会偷懒。不过，大家一起包饺子，热闹，也挺有意思的。", transliteration: "Nǐ zhēn huì tōu lǎn. Búguò, dàjiā yìqǐ bāo jiǎozi, rènao, yě tǐng yǒu yìsi de.", translation: "Ну ты и ленивый! Но лепить вместе — весело, и правда интересно." },
          { speaker: "B", target: "速冻饺子的味道怎么样？好吃吗？", transliteration: "Sùdòng jiǎozi de wèidào zěnmeyàng? Hǎochī ma?", translation: "А замороженные пельмени на вкус как? Вкусные?" },
          { speaker: "C", target: "也很好吃。", transliteration: "Yě hěn hǎochī.", translation: "Тоже вкусные." },
        ],
      },
    ],

    tips: [
      "Север vs Юг Китая: Север (北方) любит мучное (面食: пельмени, лапша, лепёшки), Юг (南方) — рис (米饭). Граница проходит условно по реке Хуайхэ. Важный культурный факт.",
      "对……来说 — «с точки зрения кого-то, для кого-то». Очень употребительная формула: 对学生来说 (для студентов), 对我来说 (для меня), 对中国人来说 (с точки зрения китайцев).",
      "得 DĚI vs DÉ: 得 DĚI — должен (смысловой). 得 DÉ — получать. Также 得 DE — суффикс степени (走得快 — быстро идёт). Три разных слова-омонима.",
      "如果…的话 — обычно 的话 ставится В КОНЦЕ условия. 如果хоть одно из трёх (如果, 的话, 就) достаточно, но чем больше элементов — тем яснее.",
      "偷懒 дословно «красть лень» = «лениться, халтурить». Популярное выражение. 你真会偷懒 — «ну ты и ленивый!» (дружеская шутка).",
    ],
  },

  19: {
    introduction:
      "В этой главе вы научитесь говорить о привычках и времени привыкания, использовать частицу 了 для изменения состояния, различать 就 (раньше) и 才 (позже) и спрашивать возраст разными способами.\n\n" +
      "Ситуация: 王老师 расспрашивает 阿曼 про его жизнь в Пекине — привык ли он, когда ложится спать.",

    vocabulary: [
      { target: "多", transliteration: "duō", translation: "как, насколько (в вопросе)" },
      { target: "长", transliteration: "cháng", translation: "длинный, долгий" },
      { target: "年", transliteration: "nián", translation: "год" },
      { target: "习惯", transliteration: "xíguàn", translation: "привыкать; привычка" },
      { target: "生活", transliteration: "shēnghuó", translation: "жизнь, быт" },
      { target: "刚", transliteration: "gāng", translation: "только что, недавно" },
      { target: "已经", transliteration: "yǐjīng", translation: "уже" },
      { target: "不好意思", transliteration: "bù hǎoyìsi", translation: "извините, неловко" },
      { target: "才", transliteration: "cái", translation: "только (позже, чем ожидалось)" },
      { target: "起床", transliteration: "qǐ chuáng", translation: "вставать (с постели)" },
      { target: "床", transliteration: "chuáng", translation: "кровать, постель" },
      { target: "睡", transliteration: "shuì", translation: "спать, засыпать" },
      { target: "夜里", transliteration: "yèli", translation: "ночью" },
      { target: "点钟", transliteration: "diǎnzhōng", translation: "час (на часах)" },
      { target: "早睡早起", transliteration: "zǎo shuì zǎo qǐ", translation: "рано ложиться и рано вставать" },
      { target: "工作", transliteration: "gōngzuò", translation: "работать; работа" },
      { target: "毛病", transliteration: "máobìng", translation: "недостаток, дурная привычка" },
      { target: "改", transliteration: "gǎi", translation: "изменить, исправить" },
      { target: "大", transliteration: "dà", translation: "большой; старший (о возрасте)" },
      { target: "年纪", transliteration: "niánjì", translation: "возраст" },
      { target: "大概", transliteration: "dàgài", translation: "примерно, около" },
      { target: "岁", transliteration: "suì", translation: "лет (о возрасте)" },
    ],

    grammar: [
      {
        title: "Частица 了 (1) — изменение состояния / завершённость",
        explanation:
          "了 (le) в конце предложения указывает на ИЗМЕНЕНИЕ или завершённость действия/состояния.\n\n" +
          "Схема:  Предложение + 了\n\n" +
          "• 我习惯了。— Я привык (теперь). (раньше не был привыкшим — стал)\n" +
          "• 他去图书馆了。— Он ушёл в библиотеку. (уже ушёл)\n" +
          "• 昨天下雪了。— Вчера шёл снег. (завершённое действие)\n\n" +
          "Отрицание: 没 + Глагол (БЕЗ 了).\n" +
          "❌ 没去了 → ✅ 没去\n" +
          "• 他没去图书馆。— Он НЕ ходил в библиотеку.\n\n" +
          "Это одна из самых сложных частиц в китайском — у 了 много значений. Пока запомните: «изменение или завершённость».",
        examples: [
          { target: "现在已经习惯了。", transliteration: "Xiànzài yǐjīng xíguàn le.", translation: "Сейчас уже привык." },
          { target: "他去图书馆了。", transliteration: "Tā qù túshūguǎn le.", translation: "Он ушёл в библиотеку." },
          { target: "他没去图书馆。", transliteration: "Tā méi qù túshūguǎn.", translation: "Он НЕ ходил в библиотеку." },
          { target: "昨天下雪了。", transliteration: "Zuótiān xià xuě le.", translation: "Вчера шёл снег." },
        ],
      },
      {
        title: "Наречие 还 (2) — «всё ещё, пока»",
        explanation:
          "Мы уже видели 还 в значении «ещё, вдобавок» (Глава 10). Здесь второе значение — «всё ещё, пока (продолжается)».\n\n" +
          "Схема:  还 + Глагол/Прилагательное (+ 没…)\n\n" +
          "• 这还没习惯。— С этим пока не привык. (всё ещё не)\n" +
          "• 已经十二点了，他还在学习。— Уже 12, а он всё ещё учится.\n\n" +
          "Часто с 没 — «ещё не»:\n" +
          "• 还没习惯 — ещё не привык\n" +
          "• 还没来 — ещё не пришёл\n" +
          "• 还没吃饭 — ещё не ел",
        examples: [
          { target: "这还没习惯。", transliteration: "Zhè hái méi xíguàn.", translation: "С этим пока не привык." },
          { target: "已经夜里十二点了，他还在学习。", transliteration: "Yǐjīng yèli shí'èr diǎn le, tā hái zài xuéxí.", translation: "Уже полночь, а он всё ещё учится." },
          { target: "来北京半年了，他还没习惯早上八点上课。", transliteration: "Lái Běijīng bàn nián le, tā hái méi xíguàn zǎoshang bā diǎn shàng kè.", translation: "Уже полгода в Пекине, а к занятиям в 8 утра всё не привыкнет." },
          { target: "已经三十岁了，他还没有女朋友。", transliteration: "Yǐjīng sānshí suì le, tā hái méiyǒu nǚ péngyou.", translation: "Уже 30 лет, а подруги всё нет." },
        ],
      },
      {
        title: "就 vs 才 — «раньше» vs «позже, чем ожидалось»",
        explanation:
          "Два очень важных слова, которые меняют смысл времени:\n\n" +
          "• 就 (jiù) — подчёркивает что действие РАНО/БЫСТРО:\n" +
          "  他早上六点就起床了。— Он ВСТАЛ уже в 6 (рано).\n" +
          "  妹妹三岁就开始学跳舞。— Сестра в 3 УЖЕ начала танцевать.\n\n" +
          "• 才 (cái) — подчёркивает что действие ПОЗДНО/МЕДЛЕННО:\n" +
          "  他早上八点才起床。— Он встал только в 8 (поздно).\n" +
          "  古丽七点半才去教室。— Гульнара только в 7:30 пошла в аудиторию.\n\n" +
          "Одно и то же время (например, 8 часов) можно подать и как «рано» (就), и как «поздно» (才) — зависит от ожиданий.",
        examples: [
          { target: "我一般早上八点才起床。", transliteration: "Wǒ yìbān zǎoshang bā diǎn cái qǐ chuáng.", translation: "Я обычно только в 8 утра встаю (поздно)." },
          { target: "有时候夜里两点钟才睡。", transliteration: "Yǒu shíhou yèli liǎng diǎnzhōng cái shuì.", translation: "Иногда только в 2 ночи ложусь." },
          { target: "他上个星期就回国了。", transliteration: "Tā shàng ge xīngqī jiù huí guó le.", translation: "Он ещё на прошлой неделе уехал на родину (рано)." },
          { target: "妹妹三岁就开始学跳舞。", transliteration: "Mèimei sān suì jiù kāishǐ xué tiào wǔ.", translation: "Сестра уже в 3 начала танцевать." },
        ],
      },
      {
        title: "Как спрашивать возраст",
        explanation:
          "В китайском ТРИ формы вопроса о возрасте, в зависимости от возраста собеседника:\n\n" +
          "1) ДЕТИ (<10 лет): 几岁？\n" +
          "   • 你今年几岁了？— Сколько тебе лет?\n" +
          "   • 我六岁。— Мне 6.\n\n" +
          "2) ВЗРОСЛЫЕ (10+): 多大？\n" +
          "   • 你多大？— Сколько тебе?\n" +
          "   • 我二十二。— 22.\n\n" +
          "3) ПОЖИЛЫЕ (вежливо): 多大年纪？ / 多大岁数？\n" +
          "   • 您多大年纪？— Сколько Вам лет? (почтительно)\n\n" +
          "Важно не перепутать — для ребёнка 多大 звучит странно, а для старика 几岁 — грубо.",
        examples: [
          { target: "你今年几岁了？", transliteration: "Nǐ jīnnián jǐ suì le?", translation: "Сколько тебе лет (ребёнку)?" },
          { target: "你多大？", transliteration: "Nǐ duō dà?", translation: "Сколько тебе (взрослому)?" },
          { target: "您多大年纪？", transliteration: "Nín duō dà niánjì?", translation: "Сколько Вам лет (пожилому)?" },
          { target: "大概二十五岁吧。", transliteration: "Dàgài èrshíwǔ suì ba.", translation: "Примерно 25 лет." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Привычки и возраст (王老师 и 阿曼)",
        lines: [
          { speaker: "A", target: "阿曼，你来北京多长时间了？", transliteration: "Āmàn, nǐ lái Běijīng duō cháng shíjiān le?", translation: "Аман, ты давно в Пекине?" },
          { speaker: "B", target: "差不多半年多。", transliteration: "Chàbuduō bàn nián duō.", translation: "Примерно полгода с небольшим." },
          { speaker: "A", target: "习惯北京的生活了吧？", transliteration: "Xíguàn Běijīng de shēnghuó le ba?", translation: "Уже привык к пекинской жизни?" },
          { speaker: "B", target: "刚来的时候不习惯，现在已经习惯了。", transliteration: "Gāng lái de shíhou bù xíguàn, xiànzài yǐjīng xíguàn le.", translation: "Сначала не привык, а теперь уже привык." },
          { speaker: "A", target: "早上八点上课也习惯了吗？", transliteration: "Zǎoshang bā diǎn shàng kè yě xíguàn le ma?", translation: "А к занятиям в 8 утра привык?" },
          { speaker: "B", target: "不好意思，这还没习惯。在美国，我一般早上八点才起床。", transliteration: "Bù hǎoyìsi, zhè hái méi xíguàn. Zài Měiguó, wǒ yìbān zǎoshang bā diǎn cái qǐ chuáng.", translation: "Неловко сказать, пока нет. В Америке я обычно только в 8 вставал." },
          { speaker: "A", target: "是吗？现在晚上几点睡觉？", transliteration: "Shì ma? Xiànzài wǎnshang jǐ diǎn shuì jiào?", translation: "Правда? Сейчас во сколько ложишься?" },
          { speaker: "B", target: "一般十二点睡，有时候夜里两点钟才睡。不过，早上八点有课的话，就早一点儿睡。", transliteration: "Yìbān shí'èr diǎn shuì, yǒu shíhou yèli liǎng diǎnzhōng cái shuì. Búguò, zǎoshang bā diǎn yǒu kè dehuà, jiù zǎo yìdiǎnr shuì.", translation: "Обычно в 12, иногда только в 2 ночи. Но если в 8 утра пары — ложусь пораньше." },
          { speaker: "A", target: "早睡早起比较好吧？我是学生的时候，也喜欢睡懒觉。工作以后，这个毛病就改了。", transliteration: "Zǎo shuì zǎo qǐ bǐjiào hǎo ba? Wǒ shì xuéshēng de shíhou, yě xǐhuan shuì lǎnjiào. Gōngzuò yǐhòu, zhège máobìng jiù gǎi le.", translation: "«Рано ложись — рано вставай» — так ведь лучше? Я в студенческие годы тоже любила поспать. А после работы эту привычку изменила." },
          { speaker: "B", target: "是吗？那时候您多大年纪？", transliteration: "Shì ma? Nà shíhou nín duō dà niánjì?", translation: "Правда? А сколько Вам тогда было?" },
          { speaker: "A", target: "大概二十五岁吧。", transliteration: "Dàgài èrshíwǔ suì ba.", translation: "Лет 25 примерно." },
        ],
      },
    ],

    tips: [
      "刚 (gāng) и 刚才 (gāngcái) — оба «только что», но 刚 = перед глаголом (刚来 — только пришёл), 刚才 = самостоятельное слово времени (刚才他来了 — он только что пришёл).",
      "多长时间了？ — стандартная формула «как давно?». Отвечают периодом: 半年了 (полгода), 三年了 (три года). 了 тут = «уже прошло».",
      "早睡早起 — китайская поговорка-пожелание, как русское «кто рано встаёт, тому Бог подаёт». Культурная ценность трудолюбия и дисциплины.",
      "不好意思 — буквально «неловко/стыдно», но используется как мягкое «извините» в бытовых ситуациях (когда беспокоишь, просишь прощения за мелочь). Мягче чем 对不起.",
      "毛病 (máobìng) — «недостаток, болячка, дурная привычка». О человеке: 他有很多毛病 (у него много недостатков). О технике: 电脑有毛病了 (компьютер сломался).",
    ],
  },

  20: {
    introduction:
      "Это итоговая глава Unit 4. Вы научитесь использовать конструкцию «прил.+死了» («ужасно…»), отрицательную команду 别 («не делай») и повторите грамматику глав 16-19.\n\n" +
      "Ситуация: 阿曼 навещает заболевшую 古丽 в больнице. Они шутят что лучше: болеть или учиться.",

    vocabulary: [
      { target: "看", transliteration: "kàn", translation: "навещать, смотреть" },
      { target: "别客气", transliteration: "bié kèqi", translation: "не стесняйся, не церемонься" },
      { target: "别", transliteration: "bié", translation: "не надо, не (запрет)" },
      { target: "无聊", transliteration: "wúliáo", translation: "скучный, скучно" },
      { target: "医院", transliteration: "yīyuàn", translation: "больница" },
      { target: "做梦", transliteration: "zuò mèng", translation: "видеть сны, мечтать" },
      { target: "幸福", transliteration: "xìngfú", translation: "счастливый" },
      { target: "背", transliteration: "bèi", translation: "заучивать, запоминать" },
      { target: "生词", transliteration: "shēngcí", translation: "новые слова" },
      { target: "考试", transliteration: "kǎoshì", translation: "экзамен, сдавать экзамен" },
      { target: "累", transliteration: "lèi", translation: "уставший" },
      { target: "死", transliteration: "sǐ", translation: "умирать; до смерти (суффикс крайней степени)" },
      { target: "住", transliteration: "zhù", translation: "жить, проживать" },
      { target: "问", transliteration: "wèn", translation: "спрашивать" },
      { target: "医生", transliteration: "yīshēng", translation: "врач, доктор" },
      { target: "同意", transliteration: "tóngyì", translation: "соглашаться" },
      { target: "对了", transliteration: "duì le", translation: "кстати, ах да" },
      { target: "炒", transliteration: "chǎo", translation: "жарить (помешивая)" },
      { target: "菜", transliteration: "cài", translation: "блюдо, овощи" },
      { target: "面条儿", transliteration: "miàntiáor", translation: "лапша" },
      { target: "病人", transliteration: "bìngrén", translation: "больной, пациент" },
      { target: "身体", transliteration: "shēntǐ", translation: "тело, здоровье" },
      { target: "药", transliteration: "yào", translation: "лекарство" },
      { target: "麦当劳", transliteration: "Màidāngláo", translation: "Макдоналдс" },
    ],

    grammar: [
      {
        title: "Прил. + 死了 — «ужасно, до смерти»",
        explanation:
          "Конструкция «Прилагательное + 死了» выражает КРАЙНЮЮ степень. Буквально «до смерти X», смысл: «ужасно X, супер-X».\n\n" +
          "Схема:  Прил. + 死了\n\n" +
          "累死了！— Я ужасно устал!\n" +
          "冷死了！— Зверский холод!\n" +
          "饿死了！— Умираю от голода!\n" +
          "热死了！— Жара невыносимая!\n\n" +
          "Это очень разговорная и эмоциональная форма. В формальных ситуациях лучше 非常 (очень) или 很.\n\n" +
          "Работает в основном с негативными прилагательными (усталость, голод, скука, холод, жара).",
        examples: [
          { target: "考试啦……累死了。", transliteration: "Kǎoshì la... lèi sǐ le.", translation: "Ещё экзамены… ужасно устал." },
          { target: "人太多，挤死了。", transliteration: "Rén tài duō, jǐ sǐ le.", translation: "Людей слишком много, давка страшная." },
          { target: "今天零下十度，冷死了。", transliteration: "Jīntiān língxià shí dù, lěng sǐ le.", translation: "Сегодня -10, холодрыга." },
          { target: "饿死了！", transliteration: "È sǐ le!", translation: "Умираю от голода!" },
        ],
      },
      {
        title: "Запрет: 别 + Глагол — «не делай»",
        explanation:
          "别 (bié) + Глагол означает запрет «не делай X». Более мягкая форма чем 不要.\n\n" +
          "Схема:  别 + Глагол + (Объект)\n\n" +
          "别客气！— Не стесняйся! / Не церемонься!\n" +
          "别去！— Не ходи!\n" +
          "别说了！— Хватит говорить!\n\n" +
          "别 чаще всего в повелительных фразах (команда, просьба). Для описания «не буду» используют 不 (不去 — не пойду).\n\n" +
          "别 — только для приказа/просьбы «не делай сейчас».",
        examples: [
          { target: "别客气。", transliteration: "Bié kèqi.", translation: "Не стесняйся." },
          { target: "别客气，请喝茶。", transliteration: "Bié kèqi, qǐng hē chá.", translation: "Не церемоньтесь, пейте чай." },
          { target: "别吃太多。", transliteration: "Bié chī tài duō.", translation: "Не ешь слишком много." },
          { target: "别说了。", transliteration: "Bié shuō le.", translation: "Хватит говорить." },
        ],
      },
      {
        title: "一个人 — «один, в одиночестве»",
        explanation:
          "一个人 (yí ge rén) буквально «один человек», но в предложениях означает «сам, в одиночестве».\n\n" +
          "Схема:  一个人 + Глагол\n\n" +
          "一个人吃 — есть одному\n" +
          "一个人睡 — спать одному\n" +
          "一个人玩儿 — играть в одиночку\n\n" +
          "Часто повторяется для эмоционального эффекта:\n" +
          "一个人吃，一个人睡，一个人玩儿 — всё в одиночку.\n\n" +
          "Переводится как «сам/сама, одна/один». В разговоре о тоске или самостоятельности.",
        examples: [
          { target: "一个人吃，一个人睡，一个人玩儿，挺无聊的。", transliteration: "Yí ge rén chī, yí ge rén shuì, yí ge rén wánr, tǐng wúliáo de.", translation: "Ешь один, спишь один, играешь один — скукотища." },
          { target: "我一个人住。", transliteration: "Wǒ yí ge rén zhù.", translation: "Я живу один." },
          { target: "她一个人去北京了。", transliteration: "Tā yí ge rén qù Běijīng le.", translation: "Она одна поехала в Пекин." },
        ],
      },
    ],

    dialogues: [
      {
        title: "В больнице (阿曼 и 古丽)",
        lines: [
          { speaker: "A", target: "古丽，怎么样？现在好一点儿了吗？", transliteration: "Gǔlì, zěnmeyàng? Xiànzài hǎo yìdiǎnr le ma?", translation: "Гульнара, как ты? Уже получше?" },
          { speaker: "B", target: "好一点儿了。谢谢你来看我。", transliteration: "Hǎo yìdiǎnr le. Xièxie nǐ lái kàn wǒ.", translation: "Получше. Спасибо, что зашёл." },
          { speaker: "A", target: "别客气。不上课，也没有作业，挺舒服的吧？", transliteration: "Bié kèqi. Bú shàng kè, yě méiyǒu zuòyè, tǐng shūfu de ba?", translation: "Не стесняйся. Ни занятий, ни заданий — наверное кайф?" },
          { speaker: "B", target: "不舒服。一个人吃，一个人睡，一个人玩儿，挺无聊的。", transliteration: "Bù shūfu. Yí ge rén chī, yí ge rén shuì, yí ge rén wánr, tǐng wúliáo de.", translation: "Вообще не кайф. Одна ешь, одна спишь, одна развлекаешься — скука смертная." },
          { speaker: "A", target: "你在医院都干什么呢？", transliteration: "Nǐ zài yīyuàn dōu gàn shénme ne?", translation: "А что ты в больнице делаешь?" },
          { speaker: "B", target: "看看书，听听音乐，睡睡觉，做做梦……", transliteration: "Kànkan shū, tīngting yīnyuè, shuìshui jiào, zuòzuo mèng...", translation: "Читаю, слушаю музыку, сплю, снятся сны…" },
          { speaker: "A", target: "你太幸福了！我每天在学校背生词啦，听写啦，做作业啦，考试啦……累死了。", transliteration: "Nǐ tài xìngfú le! Wǒ měi tiān zài xuéxiào bèi shēngcí la, tīngxiě la, zuò zuòyè la, kǎoshì la... lèi sǐ le.", translation: "Как тебе повезло! У меня каждый день — новые слова, диктанты, уроки, экзамены… умираю от усталости." },
          { speaker: "B", target: "那咱们换换，怎么样？你来医院住，我去上课。", transliteration: "Nà zánmen huànhuan, zěnmeyàng? Nǐ lái yīyuàn zhù, wǒ qù shàng kè.", translation: "Давай поменяемся? Ты ложись в больницу, я пойду на пары." },
          { speaker: "A", target: "好啊，不过你得问问医生行不行。如果医生同意的话，咱们就换。对了，你中午想吃什么？米饭，炒菜，面条儿，还是饺子？", transliteration: "Hǎo a, búguò nǐ děi wènwen yīshēng xíng bu xíng. Rúguǒ yīshēng tóngyì dehuà, zánmen jiù huàn. Duì le, nǐ zhōngwǔ xiǎng chī shénme? Mǐfàn, chǎo cài, miàntiáor, háishi jiǎozi?", translation: "Хорошо, но сначала спроси у врача. Если согласится — поменяемся. Кстати, что хочешь на обед? Рис, овощи с мясом, лапшу или пельмени?" },
          { speaker: "B", target: "麦当劳！我想吃麦当劳。", transliteration: "Màidāngláo! Wǒ xiǎng chī Màidāngláo.", translation: "Макдоналдс! Хочу Макдоналдс." },
          { speaker: "A", target: "你不是病人吗？身体不好，还得吃药……吃面条儿吧！", transliteration: "Nǐ bú shì bìngrén ma? Shēntǐ bù hǎo, hái děi chī yào... chī miàntiáor ba!", translation: "Ты же больная? Здоровье плохое, ещё лекарства пить — ешь лапшу!" },
        ],
      },
    ],

    tips: [
      "好一点儿了 — «стало немного лучше». Частица 了 показывает изменение. Стандартная фраза вежливости к выздоравливающему.",
      "别客气 — универсальный ответ вежливости: в гостях, когда благодарят, когда просят. Означает «расслабься, без формальностей».",
      "看病人 и 看医生: 看病人 — «навестить больного», 看医生 / 看病 — «пойти к врачу». Глагол 看 тут = «посещать, смотреть».",
      "Частица 啦 в перечислении 背生词啦，听写啦，做作业啦 — как в Главе 18. Придаёт эмоциональный оттенок «и то, и это, и ещё…».",
      "对了 (duì le) — «кстати, ах да!» Переключение темы, вспомнил что-то. Очень частая разговорная фраза.",
    ],
  },

  21: {
    introduction:
      "В этой главе вы научитесь использовать 又 (снова, повторение), частицу 了 (2) с числами (V+了+кол-во+O) и 好像 («кажется»). Тема — китайская культура гостеприимства и алкоголь.\n\n" +
      "Ситуация: 古丽 застаёт 阿曼 больного с похмелья. Вчера китайские друзья накачали его байцзю — он выпил полцзиня (250г!) крепкого алкоголя.",

    vocabulary: [
      { target: "生气", transliteration: "shēng qì", translation: "сердиться, злиться" },
      { target: "好像", transliteration: "hǎoxiàng", translation: "кажется, похоже" },
      { target: "脸色", transliteration: "liǎnsè", translation: "цвет лица, вид" },
      { target: "熬夜", transliteration: "áo yè", translation: "не спать всю ночь" },
      { target: "斤", transliteration: "jīn", translation: "цзинь (500г)" },
      { target: "白酒", transliteration: "báijiǔ", translation: "байцзю (крепкий алкоголь)" },
      { target: "头", transliteration: "tóu", translation: "голова" },
      { target: "疼", transliteration: "téng", translation: "болеть" },
      { target: "疯", transliteration: "fēng", translation: "сойти с ума" },
      { target: "醉", transliteration: "zuì", translation: "напиться" },
      { target: "吐", transliteration: "tù", translation: "тошнить, рвать" },
      { target: "饭", transliteration: "fàn", translation: "еда, рис" },
      { target: "热情", transliteration: "rèqíng", translation: "радушный, гостеприимный" },
      { target: "不停", transliteration: "bù tíng", translation: "без остановки" },
      { target: "地", transliteration: "de", translation: "частица обстоятельства (образа действия)" },
      { target: "倒", transliteration: "dào", translation: "наливать" },
      { target: "酒", transliteration: "jiǔ", translation: "алкоголь, вино" },
      { target: "有的", transliteration: "yǒude", translation: "некоторые" },
      { target: "请客", transliteration: "qǐng kè", translation: "угощать, быть хозяином" },
      { target: "劝酒", transliteration: "quàn jiǔ", translation: "уговаривать выпить" },
      { target: "渴", transliteration: "kě", translation: "хотеть пить" },
      { target: "帮", transliteration: "bāng", translation: "помочь" },
      { target: "杯", transliteration: "bēi", translation: "стакан, чашка" },
      { target: "困", transliteration: "kùn", translation: "сонный" },
      { target: "继续", transliteration: "jìxù", translation: "продолжать" },
    ],

    grammar: [
      {
        title: "又 — «снова, опять» (для прошлого/повторения)",
        explanation:
          "又 (yòu) показывает повторение, обычно для действий которые УЖЕ произошли или происходят регулярно.\n\n" +
          "Схема:  Подл. + 又 + Глагол (+ 了)\n\n" +
          "昨天晚上又熬夜了吗？— Вчера опять не спал всю ночь?\n" +
          "他昨天又去图书馆了。— Он вчера снова пошёл в библиотеку.\n\n" +
          "Разница с 再 (тоже «снова»):\n" +
          "• 又 — о прошлом/привычном («опять же»)\n" +
          "• 再 — о будущем («сделаю снова»)",
        examples: [
          { target: "昨天晚上又熬夜了吗？", transliteration: "Zuótiān wǎnshang yòu áo yè le ma?", translation: "Вчера опять не спал?" },
          { target: "他今天早上又睡懒觉了。", transliteration: "Tā jīntiān zǎoshang yòu shuì lǎnjiào le.", translation: "Он сегодня снова заспался." },
          { target: "他昨天又去图书馆了。", transliteration: "Tā zuótiān yòu qù túshūguǎn le.", translation: "Он вчера снова ходил в библиотеку." },
        ],
      },
      {
        title: "了 (2) — V + 了 + количество + Объект (завершённость в середине)",
        explanation:
          "Вторая форма 了 — ставится СРАЗУ после глагола (не в конец!), когда речь о ЗАВЕРШЁННОМ действии с КОНКРЕТНЫМ количеством.\n\n" +
          "Схема:  V + 了 + [число+сч.слово] + Объект\n\n" +
          "我喝了半斤白酒。— Я выпил полцзиня байцзю.\n" +
          "妹妹买了一件衣服。— Сестра купила одну вещь.\n" +
          "他们吃了十个饺子。— Они съели 10 пельменей.\n\n" +
          "Отличается от 了 в конце (Глава 19):\n" +
          "• 我喝白酒了。— Я выпил байцзю. (факт состоялся)\n" +
          "• 我喝了半斤白酒。— Я выпил полцзиня байцзю. (с указанием объёма)\n\n" +
          "Это «完成了» — законченное действие с конкретным объёмом/числом.",
        examples: [
          { target: "我喝了半斤白酒。", transliteration: "Wǒ hē le bàn jīn báijiǔ.", translation: "Я выпил полцзиня байцзю." },
          { target: "妹妹买了一件衣服。", transliteration: "Mèimei mǎi le yí jiàn yīfu.", translation: "Сестра купила одну вещь." },
          { target: "他们吃了十个饺子。", transliteration: "Tāmen chī le shí ge jiǎozi.", translation: "Они съели 10 пельменей." },
        ],
      },
      {
        title: "好像 — «кажется, похоже»",
        explanation:
          "好像 (hǎoxiàng) — «кажется», неуверенное суждение. Ставится перед глаголом или прилагательным.\n\n" +
          "Схема:  Подл. + 好像 + Сказуемое\n\n" +
          "你好像还很困。— Ты, кажется, ещё очень сонный.\n" +
          "老师好像没生气。— Учитель вроде не сердится.\n" +
          "好像没问题。— Кажется, проблем нет.\n\n" +
          "Используется когда:\n" +
          "• Не уверен, но есть предположение\n" +
          "• Сравниваешь («как будто»)\n" +
          "• Смягчаешь утверждение",
        examples: [
          { target: "你好像还很困。", transliteration: "Nǐ hǎoxiàng hái hěn kùn.", translation: "Ты как будто ещё сонный." },
          { target: "老师好像没生气。", transliteration: "Lǎoshī hǎoxiàng méi shēng qì.", translation: "Учитель вроде не сердится." },
          { target: "你的脸色不太好，昨天又熬夜了吗？", transliteration: "Nǐ de liǎnsè bú tài hǎo, zuótiān yòu áo yè le ma?", translation: "Ты неважно выглядишь, опять не спал ночью?" },
        ],
      },
    ],

    dialogues: [
      {
        title: "Почему не на парах? (古丽 и 阿曼)",
        lines: [
          { speaker: "A", target: "阿曼，你怎么还在睡觉？老师问，你怎么没去上课？", transliteration: "Āmàn, nǐ zěnme hái zài shuì jiào? Lǎoshī wèn, nǐ zěnme méi qù shàng kè?", translation: "Аман, ты ещё спишь? Учитель спрашивал, почему тебя не было на паре." },
          { speaker: "B", target: "真不好意思。老师生气了吗？", transliteration: "Zhēn bù hǎoyìsi. Lǎoshī shēng qì le ma?", translation: "Стыдно. Учитель рассердился?" },
          { speaker: "A", target: "好像没生气。你的脸色不太好，昨天又熬夜了吗？", transliteration: "Hǎoxiàng méi shēng qì. Nǐ de liǎnsè bú tài hǎo, zuótiān yòu áo yè le ma?", translation: "Вроде нет. Ты неважно выглядишь, опять всю ночь не спал?" },
          { speaker: "B", target: "没有。不过，我喝了半斤白酒，头很疼。", transliteration: "Méiyǒu. Búguò, wǒ hē le bàn jīn báijiǔ, tóu hěn téng.", translation: "Нет. Но я выпил полцзиня байцзю, голова болит." },
          { speaker: "A", target: "半斤？你疯了？", transliteration: "Bàn jīn? Nǐ fēng le?", translation: "Полцзиня? Ты с ума сошёл?" },
          { speaker: "B", target: "没醉，不过，醉了，也吐了。", transliteration: "Méi zuì, búguò, zuì le, yě tù le.", translation: "Не опьянел. Нет, опьянел, и тошнило." },
          { speaker: "A", target: "你怎么喝那么多酒呢？", transliteration: "Nǐ zěnme hē nàme duō jiǔ ne?", translation: "Зачем ты столько выпил?" },
          { speaker: "B", target: "昨天我去一个中国朋友家吃饭，他们太热情了，一直不停地给我倒酒。", transliteration: "Zuótiān wǒ qù yí ge Zhōngguó péngyou jiā chī fàn, tāmen tài rèqíng le, yìzhí bù tíng de gěi wǒ dào jiǔ.", translation: "Вчера ходил в гости к китайскому другу, они были так радушны — постоянно подливали." },
          { speaker: "A", target: "有的中国人请客的时候喜欢劝酒，你不知道吗？", transliteration: "Yǒude Zhōngguó rén qǐng kè de shíhou xǐhuan quàn jiǔ, nǐ bù zhīdào ma?", translation: "Некоторые китайцы, когда угощают, любят уговаривать пить. Ты не знал?" },
          { speaker: "B", target: "现在我知道了。哎呀，我很渴，你帮我倒杯水，好吗？", transliteration: "Xiànzài wǒ zhīdào le. Āiyā, wǒ hěn kě, nǐ bāng wǒ dào bēi shuǐ, hǎo ma?", translation: "Теперь знаю. Ой, очень хочется пить — налей мне воды?" },
          { speaker: "A", target: "好的。你好像还很困，继续睡吧！", transliteration: "Hǎo de. Nǐ hǎoxiàng hái hěn kùn, jìxù shuì ba!", translation: "Ладно. Ты вроде ещё сонный — поспи дальше." },
        ],
      },
    ],

    tips: [
      "斤 (jīn) — китайская мера веса = 500 г. 半斤 = 250 г. Полцзиня крепкого байцзю (40-60°) — это очень много.",
      "白酒 (báijiǔ) — крепкий китайский зерновой алкоголь 40-60°. Культурный феномен. На деловых банкетах и в гостях отказываться считается невежливым.",
      "劝酒 (quàn jiǔ) — «уговаривать выпить». Важная часть застольной культуры. Хозяин показывает гостеприимство через тосты и настойчивые предложения ещё выпить.",
      "怎么 (zěnme) в вопросе «как?» или «почему?». Контекст определяет: 你怎么还在睡觉？= «Почему ты ещё спишь?». 这个字怎么写？ = «Как пишется этот иероглиф?»",
      "Частица 地 (de) — после наречия/прилагательного перед глаголом: 不停地 (безостановочно), 高兴地 (радостно). Не путать с 的 (притяжательная) и 得 (степени).",
    ],
  },

  22: {
    introduction:
      "В этой главе вы научитесь говорить о болезнях, использовать глагол 能 («мочь, быть способным»), 最好 (лучше всего бы) и записывать даты по-китайски.\n\n" +
      "Ситуация: 阿曼 простудился после футбольного матча под дождём. 古丽 передаёт учителю записку с просьбой освободить от занятий.",

    vocabulary: [
      { target: "能", transliteration: "néng", translation: "мочь, быть в состоянии" },
      { target: "病", transliteration: "bìng", translation: "болеть; болезнь" },
      { target: "感冒", transliteration: "gǎnmào", translation: "простуда, простудиться" },
      { target: "头疼", transliteration: "tóuténg", translation: "головная боль" },
      { target: "发烧", transliteration: "fāshāo", translation: "температурить" },
      { target: "咳嗽", transliteration: "késou", translation: "кашлять" },
      { target: "前天", transliteration: "qiántiān", translation: "позавчера" },
      { target: "场", transliteration: "chǎng", translation: "счётное слово для матчей/спектаклей" },
      { target: "足球", transliteration: "zúqiú", translation: "футбол" },
      { target: "比赛", transliteration: "bǐsài", translation: "матч, соревнование" },
      { target: "回来", transliteration: "huílai", translation: "возвращаться" },
      { target: "带", transliteration: "dài", translation: "брать с собой" },
      { target: "伞", transliteration: "sǎn", translation: "зонт" },
      { target: "看病", transliteration: "kàn bìng", translation: "идти к врачу" },
      { target: "开", transliteration: "kāi", translation: "выписать (рецепт)" },
      { target: "打针", transliteration: "dǎ zhēn", translation: "поставить укол" },
      { target: "最好", transliteration: "zuìhǎo", translation: "лучше всего" },
      { target: "休息", transliteration: "xiūxi", translation: "отдыхать" },
      { target: "请假条", transliteration: "qǐngjiàtiáo", translation: "записка об отпуске" },
      { target: "请假", transliteration: "qǐng jià", translation: "просить отпуск" },
      { target: "希望", transliteration: "xīwàng", translation: "надеяться, желать" },
      { target: "批准", transliteration: "pīzhǔn", translation: "одобрить (просьбу)" },
      { target: "月", transliteration: "yuè", translation: "месяц" },
      { target: "日", transliteration: "rì", translation: "число, день" },
    ],

    grammar: [
      {
        title: "Глагол 能 — «мочь, быть в состоянии»",
        explanation:
          "能 (néng) указывает на ВОЗМОЖНОСТЬ/СПОСОБНОСТЬ в данный момент (физически или по обстоятельствам).\n\n" +
          "Схема:  Подл. + 能 + Глагол + (Объект)\n\n" +
          "阿曼今天又不能来上课了。\n" +
          "«Аман сегодня опять не может прийти на занятия.»\n\n" +
          "Разница 能 vs 会:\n" +
          "• 会 (huì) — уметь по обучению (навык): 我会开车 — умею водить\n" +
          "• 能 (néng) — могу физически/по обстоятельствам: 我今天能来 — сегодня могу прийти\n\n" +
          "Отрицание: 不能 — не могу (нельзя, запрещено, не позволяют обстоятельства).",
        examples: [
          { target: "阿曼今天又不能来上课了。", transliteration: "Āmàn jīntiān yòu bù néng lái shàng kè le.", translation: "Аман сегодня опять не может на занятия." },
          { target: "我学汉语了，所以我能唱中文歌。", transliteration: "Wǒ xué Hànyǔ le, suǒyǐ wǒ néng chàng Zhōngwén gē.", translation: "Я учил китайский, поэтому могу петь китайские песни." },
          { target: "你有时间吗？能和我一起去吗？", transliteration: "Nǐ yǒu shíjiān ma? Néng hé wǒ yìqǐ qù ma?", translation: "У тебя есть время? Можешь со мной пойти?" },
          { target: "他感冒了，不能来上课了。", transliteration: "Tā gǎnmào le, bù néng lái shàng kè le.", translation: "Он простыл, не может прийти." },
        ],
      },
      {
        title: "最好 + V — «лучше бы сделать, было бы лучше»",
        explanation:
          "最好 (zuìhǎo) перед глаголом выражает совет или рекомендацию «лучше всего бы…».\n\n" +
          "Схема:  (Подл. +) 最好 + Глагол\n\n" +
          "医生说最好休息一天。\n" +
          "«Врач сказал — лучше бы отдохнуть денёк.»\n\n" +
          "Отличие от 应该 (yīnggāi — должен):\n" +
          "• 应该 — более категорично, «должен»\n" +
          "• 最好 — мягче, «было бы лучше»",
        examples: [
          { target: "医生还说最好休息一天。", transliteration: "Yīshēng hái shuō zuìhǎo xiūxi yì tiān.", translation: "Врач ещё сказал, что лучше отдохнуть денёк." },
          { target: "你感冒了，最好休息三天。", transliteration: "Nǐ gǎnmào le, zuìhǎo xiūxi sān tiān.", translation: "Ты простыл, лучше отдохни 3 дня." },
          { target: "明天有考试，你最好准备准备。", transliteration: "Míngtiān yǒu kǎoshì, nǐ zuìhǎo zhǔnbèi zhǔnbèi.", translation: "Завтра экзамен, лучше подготовься." },
          { target: "八点上课，你最好七点就起床。", transliteration: "Bā diǎn shàng kè, nǐ zuìhǎo qī diǎn jiù qǐ chuáng.", translation: "В 8 занятия — лучше в 7 вставать." },
        ],
      },
      {
        title: "Даты: год + месяц + число",
        explanation:
          "Порядок даты в китайском ОТ БОЛЬШЕГО К МЕНЬШЕМУ: год → месяц → число.\n\n" +
          "Схема:  XXXX 年 X 月 X 日\n\n" +
          "2012年11月15日 — 15 ноября 2012 года\n" +
          "1999年4月3日 — 3 апреля 1999 года\n\n" +
          "В разговорной речи 日 (rì) часто заменяется на 号 (hào):\n" +
          "4月3号 — 3 апреля (разговорно)\n" +
          "12月31号 — 31 декабря\n\n" +
          "Год читается по цифрам: 2012 = 二〇一二 (èr líng yī èr).",
        examples: [
          { target: "2012年11月15日", transliteration: "Èr líng yī èr nián shíyī yuè shíwǔ rì", translation: "15 ноября 2012" },
          { target: "1999年4月3日", transliteration: "Yī jiǔ jiǔ jiǔ nián sì yuè sān rì", translation: "3 апреля 1999" },
          { target: "今天是12月31号。", transliteration: "Jīntiān shì shí'èr yuè sānshíyī hào.", translation: "Сегодня 31 декабря." },
          { target: "我的生日是6月28号。", transliteration: "Wǒ de shēngrì shì liù yuè èrshíbā hào.", translation: "Мой день рождения 28 июня." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Записка от Давэя (古丽 и 王老师)",
        lines: [
          { speaker: "A", target: "老师，阿曼今天又不能来上课了。", transliteration: "Lǎoshī, Āmàn jīntiān yòu bù néng lái shàng kè le.", translation: "Учитель, Аман сегодня опять не сможет прийти." },
          { speaker: "B", target: "是吗？他病了吗？", transliteration: "Shì ma? Tā bìng le ma?", translation: "Правда? Он заболел?" },
          { speaker: "A", target: "对，他感冒了。头疼，发烧，还有点儿咳嗽。", transliteration: "Duì, tā gǎnmào le. Tóuténg, fāshāo, hái yǒudiǎnr késou.", translation: "Да, простудился. Голова болит, температура, немного кашляет." },
          { speaker: "B", target: "怎么感冒了？", transliteration: "Zěnme gǎnmào le?", translation: "Как это?" },
          { speaker: "A", target: "前天他去看了一场足球比赛，回来的时候下雨了，他没带伞，所以感冒了。", transliteration: "Qiántiān tā qù kàn le yì chǎng zúqiú bǐsài, huílai de shíhou xià yǔ le, tā méi dài sǎn, suǒyǐ gǎnmào le.", translation: "Позавчера был на футбольном матче, на обратном пути пошёл дождь, зонтика не было — простудился." },
          { speaker: "B", target: "去医院看病了吗？", transliteration: "Qù yīyuàn kàn bìng le ma?", translation: "К врачу ходил?" },
          { speaker: "A", target: "去了。医生说是感冒，给他开了一点儿药，又打了一针。医生还说最好休息一天。这是他的请假条。", transliteration: "Qù le. Yīshēng shuō shì gǎnmào, gěi tā kāi le yìdiǎnr yào, yòu dǎ le yì zhēn. Yīshēng hái shuō zuìhǎo xiūxi yì tiān. Zhè shì tā de qǐngjiàtiáo.", translation: "Да. Доктор сказал — простуда, выписал лекарства и поставил укол. Ещё советовал отдохнуть день. Вот его записка." },
          { speaker: "B", target: "好的，我知道了。谢谢！", transliteration: "Hǎo de, wǒ zhīdào le. Xièxie!", translation: "Хорошо, поняла. Спасибо!" },
        ],
      },
    ],

    tips: [
      "Записка 请假条 — стандартный формат в китайской школе/университете. Структура: обращение (老师) → объяснение → просьба → подпись → дата.",
      "发烧 / 咳嗽 / 头疼 — стандартный набор симптомов простуды. Запомни как один блок — врач первым делом спросит именно об этом.",
      "看 в разных контекстах: 看书 (читать), 看电影 (смотреть), 看病 (идти к врачу), 看朋友 (навестить друга). Глагол очень разнообразный.",
      "打针 (дать укол) — в Китае врачи часто сразу ставят укол при простуде. Культурная разница с западной медициной.",
      "月 (yuè) — месяц (порядковый): 一月 (январь), 二月 (февраль)... 十二月 (декабрь). Без 个: 三月 (не 三个月 = это уже «3 месяца»).",
    ],
  },

  23: {
    introduction:
      "В этой главе вы научитесь спрашивать про длительность (V + 了 + время), использовать 大概 (примерно), отличать действия внезапные (了) от длящихся.\n\n" +
      "Ситуация: 古丽 опоздала на встречу с 王红 из-за пробки и лопнувшей шины. Позже они обсуждают сколько лет учат языки.",

    vocabulary: [
      { target: "迟到", transliteration: "chídào", translation: "опоздать" },
      { target: "堵车", transliteration: "dǔ chē", translation: "пробка" },
      { target: "堵", transliteration: "dǔ", translation: "затыкать, блокировать" },
      { target: "坏", transliteration: "huài", translation: "сломаться; плохой" },
      { target: "轮胎", transliteration: "lúntāi", translation: "шина, колесо" },
      { target: "破", transliteration: "pò", translation: "лопнуть, порвать" },
      { target: "倒霉", transliteration: "dǎoméi", translation: "не повезло" },
      { target: "小时", transliteration: "xiǎoshí", translation: "час (продолжительность)" },
      { target: "平时", transliteration: "píngshí", translation: "обычно, в обычное время" },
      { target: "钟头", transliteration: "zhōngtóu", translation: "час" },
      { target: "着急", transliteration: "zháojí", translation: "волноваться" },
      { target: "用", transliteration: "yòng", translation: "использовать" },
      { target: "写", transliteration: "xiě", translation: "писать" },
      { target: "作文", transliteration: "zuòwén", translation: "сочинение" },
      { target: "口语", transliteration: "kǒuyǔ", translation: "разговорный язык" },
      { target: "看", transliteration: "kàn", translation: "с точки зрения, считать" },
      { target: "学", transliteration: "xué", translation: "учиться" },
      { target: "初中", transliteration: "chūzhōng", translation: "средняя школа" },
      { target: "那么", transliteration: "nàme", translation: "так, настолько" },
      { target: "语法", transliteration: "yǔfǎ", translation: "грамматика" },
      { target: "简单", transliteration: "jiǎndān", translation: "простой" },
      { target: "翻译", transliteration: "fānyì", translation: "перевод, переводить" },
      { target: "下", transliteration: "xià", translation: "следующий" },
      { target: "学期", transliteration: "xuéqī", translation: "семестр" },
    ],

    grammar: [
      {
        title: "V + 了 + длительность + (的) + Объект — «делал X уже Y времени»",
        explanation:
          "Как спросить/сказать «как долго делал(а) что-то»? Схема сложная: глагол повторяется.\n\n" +
          "Схема:  V + 了 + Время  (если нет объекта)\n" +
          "Схема с объектом:  V + 了 + Время + 的 + Объект  ИЛИ  V + Объект + V + 了 + Время\n\n" +
          "我学了十年英语。— Я учил английский 10 лет.\n" +
          "换轮胎换了多长时间？— Менял колесо сколько времени?\n" +
          "我学汉语学了半年了。— Я учу китайский уже полгода.\n\n" +
          "Вопрос «сколько времени делал?»:  V + 了 + 多长时间？",
        examples: [
          { target: "换轮胎换了多长时间？", transliteration: "Huàn lúntāi huàn le duō cháng shíjiān?", translation: "Сколько времени менял колесо?" },
          { target: "我学了十年英语。", transliteration: "Wǒ xué le shí nián Yīngyǔ.", translation: "Я учил английский 10 лет." },
          { target: "弟弟已经看了四十分钟电视。", transliteration: "Dìdi yǐjīng kàn le sìshí fēnzhōng diànshì.", translation: "Младший брат уже 40 минут смотрит телевизор." },
          { target: "你学了多长时间汉语？", transliteration: "Nǐ xué le duō cháng shíjiān Hànyǔ?", translation: "Как долго ты учишь китайский?" },
        ],
      },
      {
        title: "Обзор 就 — разные значения",
        explanation:
          "就 (jiù) — очень многозначное слово. Систематизируем все значения:\n\n" +
          "1) «Уже» (раньше ожидаемого):\n" +
          "   古丽早上六点就起床了。\n\n" +
          "2) «Сразу же, быстро»:\n" +
          "   学校离家很近，一天就会了。\n\n" +
          "3) Для усиления:\n" +
          "   这儿就是图书馆。\n\n" +
          "4) Последовательность «и тогда»:\n" +
          "   我去找他，他就在家。\n\n" +
          "5) В условии: 如果…, 就…\n\n" +
          "Во всех случаях 就 означает «это и есть», «близость», «малое расстояние/время».",
        examples: [
          { target: "平时一个钟头就能到。", transliteration: "Píngshí yí ge zhōngtóu jiù néng dào.", translation: "Обычно за час добираюсь." },
          { target: "质量不错，也不贵，就买它了。", transliteration: "Zhìliàng búcuò, yě bú guì, jiù mǎi tā le.", translation: "Качество хорошее, недорого — беру это." },
          { target: "那座白楼就是图书馆。", transliteration: "Nà zuò bái lóu jiùshì túshūguǎn.", translation: "Вон то белое здание — это библиотека." },
          { target: "工作以后这个毛病就改了。", transliteration: "Gōngzuò yǐhòu zhège máobìng jiù gǎi le.", translation: "После работы я эту привычку и изменила." },
        ],
      },
      {
        title: "大概 — «примерно, около, возможно»",
        explanation:
          "大概 (dàgài) ставится перед числом или целым предложением и означает «примерно, около того».\n\n" +
          "Схема:  大概 + число/время/предложение\n\n" +
          "大概二十分钟吧。— Минут 20 примерно.\n" +
          "大概二十五岁吧。— Лет 25 наверное.\n" +
          "他大概去图书馆了。— Он, наверное, ушёл в библиотеку.\n\n" +
          "Часто в конце стоит 吧 — «примерно… наверное».",
        examples: [
          { target: "大概二十分钟吧。", transliteration: "Dàgài èrshí fēnzhōng ba.", translation: "Минут 20 примерно." },
          { target: "大概要两百块。", transliteration: "Dàgài yào liǎng bǎi kuài.", translation: "Стоит примерно 200 юаней." },
          { target: "大概八点到。", transliteration: "Dàgài bā diǎn dào.", translation: "Прибуду около 8." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Опоздание (古丽 и 王红)",
        lines: [
          { speaker: "A", target: "对不起，我迟到了。", transliteration: "Duìbuqǐ, wǒ chídào le.", translation: "Извини, я опоздала." },
          { speaker: "B", target: "没关系。路上堵车了吗？", transliteration: "Méi guānxi. Lùshàng dǔ chē le ma?", translation: "Ничего. Пробка?" },
          { speaker: "A", target: "没有。我的自行车坏了，轮胎破了。", transliteration: "Méiyǒu. Wǒ de zìxíngchē huài le, lúntāi pò le.", translation: "Нет. Велосипед сломался, шина лопнула." },
          { speaker: "B", target: "是吗？真倒霉。换轮胎换了多长时间？", transliteration: "Shì ma? Zhēn dǎoméi. Huàn lúntāi huàn le duō cháng shíjiān?", translation: "Правда? Вот невезуха. Долго меняла?" },
          { speaker: "A", target: "大概换了半个小时。平时一个钟头就能到，可是今天我花了一个半小时。你等了多长时间？", transliteration: "Dàgài huàn le bàn ge xiǎoshí. Píngshí yí ge zhōngtóu jiù néng dào, kěshì jīntiān wǒ huā le yí ge bàn xiǎoshí. Nǐ děng le duō cháng shíjiān?", translation: "Полчаса примерно. Обычно за час добираюсь, а сегодня полтора часа потратила. А ты долго ждала?" },
          { speaker: "B", target: "大概二十分钟吧。", transliteration: "Dàgài èrshí fēnzhōng ba.", translation: "Минут 20." },
          { speaker: "A", target: "着急了吧？真对不起。", transliteration: "Zháojí le ba? Zhēn duìbuqǐ.", translation: "Волновалась, наверное? Прости." },
          { speaker: "B", target: "没事儿。", transliteration: "Méi shìr.", translation: "Ничего." },
        ],
      },
      {
        title: "Сколько учишь языки? (古丽 и 王红)",
        lines: [
          { speaker: "A", target: "你用英语写的作文真不错。", transliteration: "Nǐ yòng Yīngyǔ xiě de zuòwén zhēn búcuò.", translation: "Твоё английское сочинение очень неплохое." },
          { speaker: "B", target: "谢谢！不过，我的口语还不行。", transliteration: "Xièxie! Búguò, wǒ de kǒuyǔ hái bù xíng.", translation: "Спасибо! Но разговорная ещё не очень." },
          { speaker: "A", target: "我看挺好的。你学了多长时间英语？", transliteration: "Wǒ kàn tǐng hǎo de. Nǐ xué le duō cháng shíjiān Yīngyǔ?", translation: "На мой взгляд очень хорошо. Как долго учишь?" },
          { speaker: "B", target: "我从初中开始学习，已经学了十年了。", transliteration: "Wǒ cóng chūzhōng kāishǐ xuéxí, yǐjīng xué le shí nián le.", translation: "Со средней школы — уже 10 лет." },
          { speaker: "A", target: "十年？那么长时间？", transliteration: "Shí nián? Nàme cháng shíjiān?", translation: "10 лет? Так долго?" },
          { speaker: "B", target: "是啊！我的语法还可以，简单的翻译也没问题，可是不太会说。你学了多长时间汉语？", transliteration: "Shì a! Wǒ de yǔfǎ hái kěyǐ, jiǎndān de fānyì yě méi wèntí, kěshì bú tài huì shuō. Nǐ xué le duō cháng shíjiān Hànyǔ?", translation: "Да! Грамматика ничего, простые переводы тоже, но говорю плохо. А ты китайский сколько?" },
          { speaker: "A", target: "我学了半年了。", transliteration: "Wǒ xué le bàn nián le.", translation: "Полгода." },
          { speaker: "B", target: "下学期你还在北京学习吗？", transliteration: "Xià xuéqī nǐ hái zài Běijīng xuéxí ma?", translation: "В следующем семестре тоже в Пекине учишься?" },
          { speaker: "A", target: "当然啦，我打算在中国学习两年呢。", transliteration: "Dāngrán la, wǒ dǎsuàn zài Zhōngguó xuéxí liǎng nián ne.", translation: "Конечно, планирую 2 года проучиться в Китае." },
        ],
      },
    ],

    tips: [
      "Разница «小时» и «钟头»: оба «час». 小时 более формально, 钟头 разговорно. Оба требуют 个: 一个小时 / 一个钟头.",
      "真倒霉 — «вот невезуха», популярная разговорная жалоба. Буквально «правда перевернуло».",
      "没事儿 (méi shìr) — «ничего, нестрашно». Отвечают когда извиняются перед тобой. Синонимы: 没关系, 没问题.",
      "初中 (средняя школа) vs 高中 (старшая школа) vs 小学 (начальная школа). Китайская образовательная лестница: 小学 (6 лет) → 初中 (3) → 高中 (3) → 大学 (4).",
      "V了多长时间 с ответом: «учу 10 лет» = 学了十年 (завершилось? или ещё учит?). Если ДО СИХ ПОР учит — добавь второе 了: 学了十年了. Это «уже 10 лет и продолжаю».",
    ],
  },

  24: {
    introduction:
      "В этой главе вы научитесь использовать повелительные предложения («давай!»), риторический вопрос 我+V+什么 («зачем мне X?»), частицу 了 (4) для последовательности действий и порядок Время + Место перед глаголом.\n\n" +
      "Ситуации: 张伟 и 王红 созваниваются — обсуждают обед и вечеринку в честь дня рождения 小美.",

    vocabulary: [
      { target: "打", transliteration: "dǎ", translation: "играть (в игру с руками)" },
      { target: "球", transliteration: "qiú", translation: "мяч" },
      { target: "食堂", transliteration: "shítáng", translation: "столовая" },
      { target: "两", transliteration: "liǎng", translation: "лян (единица веса ~50 г)" },
      { target: "聚会", transliteration: "jùhuì", translation: "вечеринка, собрание" },
      { target: "祝", transliteration: "zhù", translation: "желать, поздравлять" },
      { target: "快乐", transliteration: "kuàilè", translation: "радостный, счастливый" },
      { target: "碗", transliteration: "wǎn", translation: "пиала, миска" },
      { target: "葡萄酒", transliteration: "pútáojiǔ", translation: "вино (виноградное)" },
      { target: "冰激凌", transliteration: "bīngjīlíng", translation: "мороженое" },
      { target: "女生", transliteration: "nǚshēng", translation: "студентка, девушка" },
      { target: "卡拉OK", transliteration: "kǎlā OK", translation: "караоке" },
      { target: "晚", transliteration: "wǎn", translation: "поздно" },
      { target: "放心", transliteration: "fàng xīn", translation: "не волноваться" },
      { target: "美术馆", transliteration: "měishùguǎn", translation: "художественный музей" },
      { target: "展览", transliteration: "zhǎnlǎn", translation: "выставка" },
      { target: "没意见", transliteration: "méi yìjiàn", translation: "не возражаю" },
      { target: "意见", transliteration: "yìjiàn", translation: "мнение" },
      { target: "早饭", transliteration: "zǎofàn", translation: "завтрак" },
      { target: "找", transliteration: "zhǎo", translation: "искать" },
      { target: "门口", transliteration: "ménkǒu", translation: "у двери, у входа" },
      { target: "见面", transliteration: "jiàn miàn", translation: "встречаться" },
      { target: "上网", transliteration: "shàng wǎng", translation: "выходить в интернет" },
      { target: "聊天儿", transliteration: "liáo tiānr", translation: "болтать" },
    ],

    grammar: [
      {
        title: "Повелительные предложения (приказ / просьба / совет)",
        explanation:
          "Повелительное предложение даёт команду, просьбу или предложение. Подлежащее обычно 你/你们/咱们/我们.\n\n" +
          "Формы:\n" +
          "(1) Утверждение + (吧):\n" +
          "   你放心吧！— Не волнуйся!\n" +
          "   我们一起去吧！— Давай пойдём вместе!\n" +
          "   你们好好儿玩儿吧！— Весело проведите время!\n\n" +
          "(2) Отрицание через 不要 или 别:\n" +
          "   早睡早起身体好，不要睡懒觉。\n" +
          "   明天早上起床，别迟到了。\n" +
          "   你们已经喝了两杯了，别喝了！\n\n" +
          "Подлежащее часто опускается («ты» подразумевается).",
        examples: [
          { target: "你放心吧！", transliteration: "Nǐ fàng xīn ba!", translation: "Не волнуйся!" },
          { target: "我们一起去吧！", transliteration: "Wǒmen yìqǐ qù ba!", translation: "Пойдём вместе!" },
          { target: "别太晚了。", transliteration: "Bié tài wǎn le.", translation: "Не опаздывай." },
          { target: "你们已经喝了两杯了，别喝了！", transliteration: "Nǐmen yǐjīng hē le liǎng bēi le, bié hē le!", translation: "Вы уже выпили по два стакана — хватит!" },
        ],
      },
      {
        title: "Риторический вопрос: 我+V+什么 = «зачем мне X?»",
        explanation:
          "Конструкция «我+глагол+什么» означает «зачем мне делать X?» (намёк что делать НЕ нужно).\n\n" +
          "Схема:  Подл. + V + 什么?\n\n" +
          "你们女生一起玩儿，我去干什么？\n" +
          "«Вы, девчонки, вместе тусите — мне-то что там делать?» (= мне там не место)\n\n" +
          "Это форма РИТОРИЧЕСКОГО вопроса — ответ предполагается «ничего».\n\n" +
          "Часто начинается с 这不是… или V不V:\n" +
          "这不是你的事，你去干什么？ — Это не твоё дело, чего ты туда лезешь?",
        examples: [
          { target: "你们女生一起玩儿，我去干什么？", transliteration: "Nǐmen nǚshēng yìqǐ wánr, wǒ qù gàn shénme?", translation: "Вы, девчонки, тусите, а мне-то там что?" },
          { target: "这不是你的事，你去干什么？", transliteration: "Zhè bú shì nǐ de shì, nǐ qù gàn shénme?", translation: "Это не твоё дело, что ты туда лезешь?" },
          { target: "你不会说汉语，你去干什么？", transliteration: "Nǐ bú huì shuō Hànyǔ, nǐ qù gàn shénme?", translation: "Ты по-китайски не говоришь, зачем туда?" },
        ],
      },
      {
        title: "了 (4) — последовательность действий (действие1 + 了, потом действие2)",
        explanation:
          "Четвёртое значение 了 — между двумя глаголами. Первое действие ЗАКОНЧИЛОСЬ, ПОТОМ начинается второе.\n\n" +
          "Схема:  V1 + 了 + O1 + V2 + O2\n\n" +
          "你吃了早饭来找我。\n" +
          "«Поешь завтрак (потом) приходи ко мне.»\n\n" +
          "我去了咖啡店上课。— Сначала в кофейню, потом на пары.\n" +
          "我换了钱去买东西。— Сначала обменяю деньги, потом покупать.\n\n" +
          "Второе действие произойдёт ТОЛЬКО после первого. Отличается от 先…然后… (та же идея, но более формально).",
        examples: [
          { target: "你吃了早饭来找我。", transliteration: "Nǐ chī le zǎofàn lái zhǎo wǒ.", translation: "Поешь и приходи." },
          { target: "我去了咖啡店上课。", transliteration: "Wǒ qù le kāfēidiàn shàng kè.", translation: "Зайду в кофейню — потом на пары." },
          { target: "我换了钱去买东西。", transliteration: "Wǒ huàn le qián qù mǎi dōngxi.", translation: "Обменяю деньги — потом за покупками." },
        ],
      },
      {
        title: "Порядок: Подл. + Время + Место + Глагол",
        explanation:
          "Когда в предложении есть и ВРЕМЯ, и МЕСТО — они оба ставятся ПЕРЕД глаголом в порядке: сначала время, потом место.\n\n" +
          "Схема:  Подл. + Время + 在+Место + Глагол + Объект\n\n" +
          "我们明天八点半在你们宿舍门口见面。\n" +
          "«Мы завтра в 8:30 у ваших дверей общежития встретимся.»\n\n" +
          "Логика: от большего контекста (когда) к меньшему (где) — к действию.",
        examples: [
          { target: "我们明天八点半在你们宿舍门口见面。", transliteration: "Wǒmen míngtiān bā diǎn bàn zài nǐmen sùshè ménkǒu jiàn miàn.", translation: "Встретимся завтра в 8:30 у входа в общежитие." },
          { target: "今天下课以后我在图书馆学习。", transliteration: "Jīntiān xià kè yǐhòu wǒ zài túshūguǎn xuéxí.", translation: "Сегодня после пар я в библиотеке позанимаюсь." },
          { target: "他每天早上在家喝咖啡。", transliteration: "Tā měi tiān zǎoshang zài jiā hē kāfēi.", translation: "Он каждое утро дома пьёт кофе." },
        ],
      },
    ],

    dialogues: [
      {
        title: "День рождения подруги (张伟 и 王红 по телефону)",
        lines: [
          { speaker: "A", target: "喂，王红，是我。", transliteration: "Wèi, Wáng Hóng, shì wǒ.", translation: "Алло, Ван Хун, это я." },
          { speaker: "B", target: "张伟，你吃饭了吗？", transliteration: "Zhāng Wěi, nǐ chī fàn le ma?", translation: "Чжан Вэй, ты ел?" },
          { speaker: "A", target: "还没呢。刚打球回来，我想去食堂吃几两饺子，你去吗？", transliteration: "Hái méi ne. Gāng dǎ qiú huílai, wǒ xiǎng qù shítáng chī jǐ liǎng jiǎozi, nǐ qù ma?", translation: "Ещё нет. Только что с мяча вернулся, хочу в столовую за пельменями — пойдёшь?" },
          { speaker: "B", target: "不去了。今天是小美二十三岁生日，我们宿舍聚会。", transliteration: "Bú qù le. Jīntiān shì Xiǎoměi èrshísān suì shēngrì, wǒmen sùshè jùhuì.", translation: "Не пойду. У Сяомэй 23-летие — у нас в общаге вечеринка." },
          { speaker: "A", target: "是吗？那祝她生日快乐。", transliteration: "Shì ma? Nà zhù tā shēngrì kuàilè.", translation: "Правда? Передай поздравления." },
          { speaker: "B", target: "今天我们做了很多好吃的。我已经吃了一碗面条儿，还喝了一杯葡萄酒，现在在吃冰激凌呢。你也来吧！", transliteration: "Jīntiān wǒmen zuò le hěn duō hǎochī de. Wǒ yǐjīng chī le yì wǎn miàntiáor, hái hē le yì bēi pútáojiǔ, xiànzài zài chī bīngjīlíng ne. Nǐ yě lái ba!", translation: "Мы приготовили много вкусного. Я уже съела лапши, выпила вина, сейчас ем мороженое. Приходи и ты!" },
          { speaker: "A", target: "你们女生一起玩儿，我去干什么？晚上你们还有别的安排吗？", transliteration: "Nǐmen nǚshēng yìqǐ wánr, wǒ qù gàn shénme? Wǎnshang nǐmen hái yǒu bié de ānpái ma?", translation: "Вы девочки тусите — мне там делать что? Вечером куда-то идёте?" },
          { speaker: "B", target: "我们打算一起去唱卡拉OK。", transliteration: "Wǒmen dǎsuàn yìqǐ qù chàng kǎlā OK.", translation: "Хотим в караоке." },
          { speaker: "A", target: "好好儿玩儿，早一点儿回来，别太晚了。", transliteration: "Hǎohāor wánr, zǎo yìdiǎnr huílai, bié tài wǎn le.", translation: "Повеселитесь, но возвращайтесь пораньше, не засиживайтесь." },
          { speaker: "B", target: "放心吧！对了，明天又是周末了，我们去哪儿玩儿？", transliteration: "Fàng xīn ba! Duì le, míngtiān yòu shì zhōumò le, wǒmen qù nǎr wánr?", translation: "Не волнуйся! Кстати, завтра снова выходной — куда пойдём?" },
          { speaker: "A", target: "听说美术馆的展览很不错，去看展览怎么样？", transliteration: "Tīngshuō měishùguǎn de zhǎnlǎn hěn búcuò, qù kàn zhǎnlǎn zěnmeyàng?", translation: "Слышал, в музее хорошая выставка — сходим?" },
          { speaker: "B", target: "好啊，没意见。你吃了早饭来找我，好吗？", transliteration: "Hǎo a, méi yìjiàn. Nǐ chī le zǎofàn lái zhǎo wǒ, hǎo ma?", translation: "Давай! Поешь позавтракай и заходи за мной." },
          { speaker: "A", target: "好，明天八点半在你们宿舍门口见面，行吗？", transliteration: "Hǎo, míngtiān bā diǎn bàn zài nǐmen sùshè ménkǒu jiàn miàn, xíng ma?", translation: "Ок, встречаемся в 8:30 у вашего общежития?" },
          { speaker: "B", target: "行。那今天你干什么？", transliteration: "Xíng. Nà jīntiān nǐ gàn shénme?", translation: "Идёт. А сегодня ты что делаешь?" },
          { speaker: "A", target: "和同学上网聊天儿吧。明天见！", transliteration: "Hé tóngxué shàng wǎng liáo tiānr ba. Míngtiān jiàn!", translation: "В инете с одногруппником поболтаю. До завтра!" },
          { speaker: "B", target: "明天见！", transliteration: "Míngtiān jiàn!", translation: "До завтра!" },
        ],
      },
    ],

    tips: [
      "几两饺子 — «пельменей на несколько лянов». 两 (liǎng) здесь единица веса ≈ 50 г (10 两 = 1 斤 = 500 г). В столовых пельмени часто продают по весу, не по штукам.",
      "祝…生日快乐 — стандартная форма «с днём рождения!». 祝你生日快乐! = Happy Birthday! Также 祝 + 新年快乐 (с Новым годом).",
      "放心 — «успокой сердце», не волнуйся. 放心吧！— очень тёплое заверение. В ответе на заботу.",
      "上网 и 聊天儿 — «зайти в интернет» и «болтать». 上网聊天儿 — чатиться в сети. Современная разговорная лексика.",
      "没意见 — «не возражаю, согласен» (дословно «нет мнения»). Мягкое согласие с предложением.",
    ],
  },

  25: {
    introduction:
      "Итоговая глава Unit 5. Вы повторите все модальные глаголы (会/能/要/得/应该) и познакомитесь с 别 + V (отрицание для «не надо»).\n\n" +
      "Ситуация: 中村 записался в секцию тайцзи и рано встаёт. 古丽 решает присоединиться — побегать и подвигаться, а то совсем обленилась.",

    vocabulary: [
      { target: "晚安", transliteration: "wǎn'ān", translation: "спокойной ночи" },
      { target: "这么", transliteration: "zhème", translation: "так, настолько" },
      { target: "电视剧", transliteration: "diànshìjù", translation: "сериал, ТВ-шоу" },
      { target: "太极拳", transliteration: "tàijíquán", translation: "тайцзицюань" },
      { target: "参加", transliteration: "cānjiā", translation: "участвовать" },
      { target: "班", transliteration: "bān", translation: "класс, группа, секция" },
      { target: "报名", transliteration: "bào míng", translation: "записаться" },
      { target: "忘", transliteration: "wàng", translation: "забыть" },
      { target: "重新", transliteration: "chóngxīn", translation: "заново, снова" },
      { target: "闹钟", transliteration: "nàozhōng", translation: "будильник" },
      { target: "空气", transliteration: "kōngqì", translation: "воздух" },
      { target: "新鲜", transliteration: "xīnxiān", translation: "свежий" },
      { target: "湖", transliteration: "hú", translation: "озеро" },
      { target: "跑步", transliteration: "pǎo bù", translation: "бегать, бег" },
      { target: "劲儿", transliteration: "jìnr", translation: "сила, мощь" },
      { target: "出", transliteration: "chū", translation: "выходить наружу" },
      { target: "汗", transliteration: "hàn", translation: "пот" },
      { target: "锻炼", transliteration: "duànliàn", translation: "заниматься спортом, тренироваться" },
      { target: "棒", transliteration: "bàng", translation: "превосходный, крутой" },
      { target: "跑", transliteration: "pǎo", translation: "бежать" },
      { target: "散步", transliteration: "sàn bù", translation: "прогуливаться" },
    ],

    grammar: [
      {
        title: "Модальные глаголы — обзор",
        explanation:
          "Систематизируем все модальные глаголы (能愿动词), изученные в Unit 4-5:\n\n" +
          "1) 会 (huì) — УМЕТЬ (по обучению):\n" +
          "   我会打太极拳。— Умею тайцзи.\n\n" +
          "2) 可以 (kěyǐ) — МОЖНО (разрешение):\n" +
          "   如果不会说汉语的话，你可以说英语。\n\n" +
          "3) 能 (néng) — МОЧЬ (физически, по обстоятельствам):\n" +
          "   古丽能用汉语聊天儿。\n\n" +
          "4) 要 (yào) — ХОЧУ/СОБИРАЮСЬ (субъективное желание):\n" +
          "   我要去跑步。— Хочу побегать.\n\n" +
          "5) 得 (děi) — ДОЛЖЕН (обязанность):\n" +
          "   明天早上有课，我得早一点儿起床。\n\n" +
          "Все ставятся ПЕРЕД основным глаголом. Отрицание: 不会, 不可以, 不能, 不要, 不用 (вместо 不得).",
        examples: [
          { target: "我会打太极拳。", transliteration: "Wǒ huì dǎ tàijíquán.", translation: "Умею тайцзи." },
          { target: "阿曼可以说汉语。", transliteration: "Āmàn kěyǐ shuō Hànyǔ.", translation: "Аман может говорить по-китайски (ему разрешено/у него получается)." },
          { target: "我要去跑步，你去吗？", transliteration: "Wǒ yào qù pǎo bù, nǐ qù ma?", translation: "Хочу побегать, пойдёшь?" },
          { target: "明天早上有课，我得早一点儿起床。", transliteration: "Míngtiān zǎoshang yǒu kè, wǒ děi zǎo yìdiǎnr qǐ chuáng.", translation: "Завтра пары, надо рано вставать." },
        ],
      },
      {
        title: "别 + V + 了 — «перестань делать, хватит»",
        explanation:
          "В Главе 20 мы учили 别 + V = «не делай». Добавим вариант с 了 в конце:\n\n" +
          "Схема:  别 + Глагол + 了\n\n" +
          "你也别看书了。— Хватит тебе тоже читать.\n" +
          "别说了！— Хватит говорить!\n" +
          "别吃了！— Перестань есть!\n\n" +
          "了 здесь означает «прекрати текущее действие». Без 了 — общий запрет.\n" +
          "• 别说 — не говори (вообще)\n" +
          "• 别说了 — хватит говорить (сейчас)",
        examples: [
          { target: "你也别看书了，早一点儿睡吧！", transliteration: "Nǐ yě bié kàn shū le, zǎo yìdiǎnr shuì ba!", translation: "И ты хватит читать, ложись пораньше!" },
          { target: "别吃了，已经太晚了。", transliteration: "Bié chī le, yǐjīng tài wǎn le.", translation: "Хватит есть, уже слишком поздно." },
          { target: "别说了！", transliteration: "Bié shuō le!", translation: "Хватит говорить!" },
        ],
      },
      {
        title: "得 (děi) в повторении + 多 + V — «надо побольше делать X»",
        explanation:
          "Формула совета «надо побольше что-то делать» — с 多 перед удвоенным глаголом.\n\n" +
          "Схема:  (Подл.) 得 + 多 + V-V (+ 了)\n\n" +
          "你得多锻炼锻炼了。— Тебе надо побольше тренироваться.\n" +
          "你得多学习学习。— Надо тебе побольше учиться.\n" +
          "你得多听听音乐。— Слушай побольше музыку.\n\n" +
          "了 в конце подчёркивает настоятельность совета (совсем пора бы!).",
        examples: [
          { target: "你得多锻炼锻炼了。", transliteration: "Nǐ děi duō duànliàn duànliàn le.", translation: "Тебе пора побольше тренироваться!" },
          { target: "你出了很多汗。看起来，你得多锻炼锻炼了。", transliteration: "Nǐ chū le hěn duō hàn. Kàn qǐlai, nǐ děi duō duànliàn duànliàn le.", translation: "Ты вспотел. Похоже, надо тебе побольше заниматься." },
          { target: "你得多学习学习汉语。", transliteration: "Nǐ děi duō xuéxí xuéxí Hànyǔ.", translation: "Надо тебе побольше учить китайский." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Запись на тайцзи (中村 и 古丽)",
        lines: [
          { speaker: "A", target: "晚安，中村。", transliteration: "Wǎn'ān, Zhōngcūn.", translation: "Спокойной ночи, Накамура." },
          { speaker: "B", target: "你怎么这么早就睡觉？不看电视剧了吗？", transliteration: "Nǐ zěnme zhème zǎo jiù shuì jiào? Bú kàn diànshìjù le ma?", translation: "Что так рано ложишься? Сериал не смотришь?" },
          { speaker: "A", target: "不看了。明天早上有太极拳课，我要早一点儿起床。", transliteration: "Bú kàn le. Míngtiān zǎoshang yǒu tàijíquán kè, wǒ yào zǎo yìdiǎnr qǐ chuáng.", translation: "Нет. Завтра утром тайцзи, надо пораньше встать." },
          { speaker: "B", target: "你也参加太极拳班了？太好了，我也报名了。", transliteration: "Nǐ yě cānjiā tàijíquán bān le? Tài hǎo le, wǒ yě bào míng le.", translation: "Ты тоже записался? Отлично, я тоже!" },
          { speaker: "A", target: "你也喜欢打太极拳吗？", transliteration: "Nǐ yě xǐhuan dǎ tàijíquán ma?", translation: "Ты любишь тайцзи?" },
          { speaker: "B", target: "喜欢。我刚来中国的时候学了半年太极拳，可是现在都忘了，所以我要重新学。", transliteration: "Xǐhuan. Wǒ gāng lái Zhōngguó de shíhou xué le bàn nián tàijíquán, kěshì xiànzài dōu wàng le, suǒyǐ wǒ yào chóngxīn xué.", translation: "Да. Когда только приехала в Китай, полгода учила, но теперь всё забыла, надо заново." },
          { speaker: "A", target: "那明天我们一起开始吧！明天早上你能叫我吗？", transliteration: "Nà míngtiān wǒmen yìqǐ kāishǐ ba! Míngtiān zǎoshang nǐ néng jiào wǒ ma?", translation: "Давай завтра вместе! Утром меня разбудишь?" },
          { speaker: "B", target: "我有闹钟，没问题。", transliteration: "Wǒ yǒu nàozhōng, méi wèntí.", translation: "У меня будильник, без проблем." },
          { speaker: "A", target: "你也别看书了，早一点儿睡吧！", transliteration: "Nǐ yě bié kàn shū le, zǎo yìdiǎnr shuì ba!", translation: "Ты тоже хватит читать, ложись пораньше!" },
        ],
      },
      {
        title: "На утренней пробежке (中村 и 古丽)",
        lines: [
          { speaker: "A", target: "早上的空气真新鲜。", transliteration: "Zǎoshang de kōngqì zhēn xīnxiān.", translation: "Утренний воздух такой свежий." },
          { speaker: "B", target: "是呀！我还要去湖边跑步，你去吗？", transliteration: "Shì ya! Wǒ hái yào qù hú biān pǎo bù, nǐ qù ma?", translation: "Да! Я ещё пробегусь у озера, пойдёшь?" },
          { speaker: "A", target: "不去了。打了一个小时太极拳，有点儿累，没劲儿了。", transliteration: "Bú qù le. Dǎ le yí ge xiǎoshí tàijíquán, yǒudiǎnr lèi, méi jìnr le.", translation: "Нет. Час тайцзи отыграл, устал, сил нет." },
          { speaker: "B", target: "你出了很多汗。看起来，你得多锻炼锻炼了。", transliteration: "Nǐ chū le hěn duō hàn. Kàn qǐlai, nǐ děi duō duànliàn duànliàn le.", translation: "Ты весь потный. Похоже, тебе надо больше тренироваться." },
          { speaker: "A", target: "是呀！你的身体真棒，不累吗？", transliteration: "Shì ya! Nǐ de shēntǐ zhēn bàng, bú lèi ma?", translation: "Точно! А у тебя форма — крутая, не устаёшь?" },
          { speaker: "B", target: "不累，我每天跑步。", transliteration: "Bú lèi, wǒ měi tiān pǎo bù.", translation: "Не устаю, я каждый день бегаю." },
          { speaker: "A", target: "是吗？我怎么不知道？", transliteration: "Shì ma? Wǒ zěnme bù zhīdào?", translation: "Да? А я что не знал?" },
          { speaker: "B", target: "我跑步的时候，你还在睡觉呢。", transliteration: "Wǒ pǎo bù de shíhou, nǐ hái zài shuì jiào ne.", translation: "Когда я бегаю, ты ещё спишь." },
          { speaker: "A", target: "真不好意思。你每天跑多长时间？", transliteration: "Zhēn bù hǎoyìsi. Nǐ měi tiān pǎo duō cháng shíjiān?", translation: "Стыдно. А сколько ты бегаешь?" },
          { speaker: "B", target: "大概跑半个小时。以后我吃了晚饭也去散散步。", transliteration: "Dàgài pǎo bàn ge xiǎoshí. Yǐhòu wǒ chī le wǎnfàn yě qù sànsan bù.", translation: "Полчаса примерно. Вечером тоже прогуливаюсь после ужина." },
        ],
      },
    ],

    tips: [
      "太极拳 (tàijíquán) — китайская боевая гимнастика. Очень популярна у пожилых, но и молодёжь часто занимается. В парках с утра — типичная картина.",
      "Разница 跑 и 跑步: 跑 — просто «бежать». 跑步 — «бегать для упражнения». «Утром бегаю» = 跑步, а «убежал от собаки» = 跑.",
      "劲儿 (jìnr) — «сила, энергия». 没劲儿 = «нет сил, утомлён». Очень разговорное, пекинское слово с -r суффиксом.",
      "身体真棒 — «форма отличная, здоровье крутое». 棒 (bàng) = «превосходный», очень сильная похвала.",
      "闹钟 — «будильник». 闹 = шумно, 钟 = часы. «Шумные часы» — точно будильник!",
    ],
  },

  26: {
    introduction:
      "В этой главе вы научитесь говорить о будущих событиях с помощью 快……了 / 要……了 («скоро X»), использовать 只好 («ничего не остаётся кроме как») и 可能 («возможно»).\n\n" +
      "Ситуация: приближаются экзамены. 古丽 зубрит в библиотеке, 阿曼 планирует поездку на каникулах на северо-восток Китая. 中村 пишет рождественские открытки.",

    vocabulary: [
      { target: "接", transliteration: "jiē", translation: "отвечать на звонок, встречать" },
      { target: "电", transliteration: "diàn", translation: "электричество" },
      { target: "用功", transliteration: "yònggōng", translation: "усердный, прилежный" },
      { target: "快", transliteration: "kuài", translation: "скоро" },
      { target: "基础", transliteration: "jīchǔ", translation: "основа" },
      { target: "只好", transliteration: "zhǐhǎo", translation: "приходится, ничего не остаётся кроме" },
      { target: "努力", transliteration: "nǔlì", translation: "стараться, упорно" },
      { target: "快要", transliteration: "kuàiyào", translation: "скоро, вот-вот" },
      { target: "放假", transliteration: "fàng jià", translation: "начаться каникулам" },
      { target: "假期", transliteration: "jiàqī", translation: "каникулы, отпуск" },
      { target: "旅行", transliteration: "lǚxíng", translation: "путешествовать" },
      { target: "决定", transliteration: "juédìng", translation: "решить; решение" },
      { target: "可能", transliteration: "kěnéng", translation: "возможно, может быть" },
      { target: "出发", transliteration: "chūfā", translation: "отправляться" },
      { target: "考虑", transliteration: "kǎolǜ", translation: "обдумать" },
      { target: "明信片", transliteration: "míngxìnpiàn", translation: "открытка" },
      { target: "圣诞节", transliteration: "Shèngdàn Jié", translation: "Рождество" },
      { target: "新年", transliteration: "xīnnián", translation: "Новый год" },
      { target: "寄", transliteration: "jì", translation: "отправлять почтой" },
      { target: "贺卡", transliteration: "hèkǎ", translation: "поздравительная открытка" },
      { target: "办法", transliteration: "bànfǎ", translation: "способ, метод" },
      { target: "亲戚", transliteration: "qīnqi", translation: "родственник" },
      { target: "整整", transliteration: "zhěngzhěng", translation: "ровно, целый" },
      { target: "邮局", transliteration: "yóujú", translation: "почта" },
      { target: "再", transliteration: "zài", translation: "затем, потом" },
      { target: "刚才", transliteration: "gāngcái", translation: "только что" },
      { target: "邮票", transliteration: "yóupiào", translation: "марка" },
      { target: "排队", transliteration: "pái duì", translation: "стоять в очереди" },
      { target: "东北", transliteration: "Dōngběi", translation: "Северо-Восток Китая" },
    ],

    grammar: [
      {
        title: "快……了 / 要……了 / 快要……了 — «скоро, вот-вот»",
        explanation:
          "Все три конструкции означают «вот-вот, скоро произойдёт».\n\n" +
          "Схемы (в порядке возрастания формальности):\n" +
          "• 快 + Глагол/Прил. + 了\n" +
          "• 要 + Глагол/Прил. + 了\n" +
          "• 快要 + Глагол/Прил. + 了\n\n" +
          "快考试了。— Скоро экзамен.\n" +
          "快要放假了。— Вот-вот начнутся каникулы.\n" +
          "新年要来了。— Новый год приближается.\n\n" +
          "Используется для событий в БЛИЗКОМ будущем. 了 в конце обязательно.",
        examples: [
          { target: "快考试了。", transliteration: "Kuài kǎoshì le.", translation: "Скоро экзамен." },
          { target: "快要放假了。", transliteration: "Kuàiyào fàng jià le.", translation: "Вот-вот каникулы." },
          { target: "新年要来了，我要给朋友寄贺卡。", transliteration: "Xīnnián yào lái le, wǒ yào gěi péngyou jì hèkǎ.", translation: "Скоро Новый год — разошлю друзьям открытки." },
        ],
      },
      {
        title: "只好 — «ничего не остаётся кроме как»",
        explanation:
          "只好 (zhǐhǎo) — «приходится, волей-неволей, только и остаётся что».\n\n" +
          "Схема:  (Подл. +) 只好 + Глагол\n\n" +
          "我基础不好，只好努力学习了。\n" +
          "«У меня слабая база, приходится упорно учиться.»\n\n" +
          "Смысл: нет лучшего варианта, вынужденно.\n\n" +
          "Часто с 了 в конце — для подчёркивания вынужденности.",
        examples: [
          { target: "快考试了，我基础不好，只好努力学习了。", transliteration: "Kuài kǎoshì le, wǒ jīchǔ bù hǎo, zhǐhǎo nǔlì xuéxí le.", translation: "Скоро экзамен, база слабая — придётся упорно учиться." },
          { target: "下雨了，不能出去玩儿，只好在家里看电视。", transliteration: "Xià yǔ le, bù néng chū qù wánr, zhǐhǎo zài jiā li kàn diànshì.", translation: "Дождь, гулять нельзя — остаётся только дома телик смотреть." },
          { target: "没有饺子了，只好吃面条儿吧。", transliteration: "Méiyǒu jiǎozi le, zhǐhǎo chī miàntiáor ba.", translation: "Пельменей нет — придётся есть лапшу." },
        ],
      },
      {
        title: "可能 — «возможно, может быть»",
        explanation:
          "可能 (kěnéng) перед глаголом/фразой означает возможность, предположение.\n\n" +
          "Схема:  (Подл. +) 可能 + Сказуемое\n\n" +
          "可能去东北。— Возможно, поедем на северо-восток.\n" +
          "我们可能下个周末去。— Может быть, поедем в следующие выходные.\n\n" +
          "Также как существительное «возможность»:\n" +
          "有可能 — есть возможность\n" +
          "没有可能 — нет возможности\n\n" +
          "Разница с 会 (вероятность): 可能 мягче, «может быть». 会 более уверенно «скорее всего».",
        examples: [
          { target: "还没决定，可能去东北。", transliteration: "Hái méi juédìng, kěnéng qù Dōngběi.", translation: "Ещё не решил, может, на северо-восток." },
          { target: "我们可能下个周末去。", transliteration: "Wǒmen kěnéng xià ge zhōumò qù.", translation: "Возможно, поедем в следующие выходные." },
          { target: "他可能生病了，所以没来上课。", transliteration: "Tā kěnéng shēng bìng le, suǒyǐ méi lái shàng kè.", translation: "Он, возможно, заболел — поэтому не пришёл." },
          { target: "我刚才可能下雨了，我们别去玩儿吧。", transliteration: "Wǒ gāngcái kěnéng xià yǔ le, wǒmen bié qù wánr ba.", translation: "Только что, возможно, был дождь — давай не пойдём." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Подготовка к экзаменам (阿曼 и 古丽)",
        lines: [
          { speaker: "A", target: "今天你去哪儿了？我打你的手机，可是你没接。", transliteration: "Jīntiān nǐ qù nǎr le? Wǒ dǎ nǐ de shǒujī, kěshì nǐ méi jiē.", translation: "Где ты сегодня была? Я звонил, но ты не ответила." },
          { speaker: "B", target: "不好意思，手机没电了。我去图书馆了，在那儿看了一个上午书。", transliteration: "Bù hǎoyìsi, shǒujī méi diàn le. Wǒ qù túshūguǎn le, zài nàr kàn le yí ge shàngwǔ shū.", translation: "Извини, батарея села. Я была в библиотеке, читала всё утро." },
          { speaker: "A", target: "你真用功！", transliteration: "Nǐ zhēn yònggōng!", translation: "Вот же трудяга!" },
          { speaker: "B", target: "快考试了，我基础不好，只好努力学习了。", transliteration: "Kuài kǎoshì le, wǒ jīchǔ bù hǎo, zhǐhǎo nǔlì xuéxí le.", translation: "Скоро экзамен, база слабая — пришлось попотеть." },
          { speaker: "A", target: "快要放假了，我们打算假期去旅行，你想和我们一起去吗？", transliteration: "Kuàiyào fàng jià le, wǒmen dǎsuàn jiàqī qù lǚxíng, nǐ xiǎng hé wǒmen yìqǐ qù ma?", translation: "Скоро каникулы, мы поедем в путешествие — хочешь с нами?" },
          { speaker: "B", target: "你们打算去哪儿？", transliteration: "Nǐmen dǎsuàn qù nǎr?", translation: "Куда собираетесь?" },
          { speaker: "A", target: "还没决定，可能去东北。", transliteration: "Hái méi juédìng, kěnéng qù Dōngběi.", translation: "Ещё не решили, может, на северо-восток." },
          { speaker: "B", target: "大概什么时候出发？", transliteration: "Dàgài shénme shíhou chūfā?", translation: "Когда примерно?" },
          { speaker: "A", target: "可能下个周末。", transliteration: "Kěnéng xià ge zhōumò.", translation: "Возможно, в следующие выходные." },
          { speaker: "B", target: "好，我考虑考虑。", transliteration: "Hǎo, wǒ kǎolǜ kǎolǜ.", translation: "Хорошо, подумаю." },
        ],
      },
      {
        title: "Открытки на Рождество (古丽 и 中村)",
        lines: [
          { speaker: "A", target: "中村，你在干什么呢？", transliteration: "Zhōngcūn, nǐ zài gàn shénme ne?", translation: "Накамура, что делаешь?" },
          { speaker: "B", target: "给朋友写明信片呢。圣诞节快到了，新年也要来了，得写给朋友们贺卡了。", transliteration: "Gěi péngyou xiě míngxìnpiàn ne. Shèngdàn Jié kuài dào le, xīnnián yě yào lái le, děi xiě gěi péngyoumen hèkǎ le.", translation: "Пишу открытки друзьям. Скоро Рождество, и Новый год на носу — надо всем разослать поздравления." },
          { speaker: "A", target: "写了那么多呀！", transliteration: "Xiě le nàme duō ya!", translation: "Так много написал!" },
          { speaker: "B", target: "没办法，亲戚朋友多，我整整写了一个小时呢。", transliteration: "Méi bànfǎ, qīnqi péngyou duō, wǒ zhěngzhěng xiě le yí ge xiǎoshí ne.", translation: "Ничего не поделаешь, родни и друзей много — целый час писал." },
          { speaker: "A", target: "现在邮局人很多，你一会儿再去寄吧。", transliteration: "Xiànzài yóujú rén hěn duō, nǐ yíhuìr zài qù jì ba.", translation: "Сейчас на почте толпа — отправь попозже." },
          { speaker: "B", target: "是吗？你怎么知道？", transliteration: "Shì ma? Nǐ zěnme zhīdào?", translation: "Да? Откуда знаешь?" },
          { speaker: "A", target: "我刚才去邮局买邮票，差不多排了半个小时队。", transliteration: "Wǒ gāngcái qù yóujú mǎi yóupiào, chàbuduō pái le bàn ge xiǎoshí duì.", translation: "Я сейчас за марками ходила — почти полчаса в очереди." },
          { speaker: "B", target: "那好，我一会儿再去。", transliteration: "Nà hǎo, wǒ yíhuìr zài qù.", translation: "Ладно, попозже схожу." },
        ],
      },
    ],

    tips: [
      "快……了 ≠ «быстро». В данной конструкции 快 = «скоро, вот-вот». «Быстрый» = 快 без 了, а «скоро» = 快……了.",
      "没电了 — «батарея села». Дословно «нет электричества». О любом электронном устройстве.",
      "圣诞节 (Shèngdàn Jié) — Рождество. 圣诞 буквально «святое рождение». В Китае — не традиционный, но популярный в городах праздник.",
      "用功 (yònggōng) — «усердный, трудолюбивый». Похвала студенту. Дословно «применять усилия». Прямая противоположность 偷懒.",
      "排队 — «стоять в очереди». Китайцы считали что не умеют это делать, но теперь в крупных городах очень культурно. 排 = выстраивать, 队 = ряд.",
    ],
  },

  27: {
    introduction:
      "В этой главе вы научитесь использовать 极了 (крайняя степень), разницу 想 и 要, счётные слова для действий (趟, 次) и говорить о планах на каникулы.\n\n" +
      "Ситуация: 张伟 остаётся готовиться к магистратуре по древней истории, 阿曼 едет в Харбин. Оба обсуждают планы на каникулы и возвращение домой на Новый год.",

    vocabulary: [
      { target: "计划", transliteration: "jìhuà", translation: "план" },
      { target: "待", transliteration: "dāi", translation: "оставаться, находиться" },
      { target: "地方", transliteration: "dìfang", translation: "место" },
      { target: "风景", transliteration: "fēngjǐng", translation: "пейзаж" },
      { target: "美", transliteration: "měi", translation: "красивый" },
      { target: "极了", transliteration: "jí le", translation: "крайне, чрезвычайно" },
      { target: "复习", transliteration: "fùxí", translation: "повторять (материал)" },
      { target: "功课", transliteration: "gōngkè", translation: "уроки, учебные дела" },
      { target: "毕业", transliteration: "bì yè", translation: "выпускаться" },
      { target: "抓紧", transliteration: "zhuājǐn", translation: "ухватиться, использовать (время)" },
      { target: "方面", transliteration: "fāngmiàn", translation: "сторона, аспект" },
      { target: "古代", transliteration: "gǔdài", translation: "древность" },
      { target: "历史", transliteration: "lìshǐ", translation: "история" },
      { target: "感兴趣", transliteration: "gǎn xìngqù", translation: "интересоваться" },
      { target: "教授", transliteration: "jiàoshòu", translation: "профессор" },
      { target: "一定", transliteration: "yídìng", translation: "обязательно, наверняка" },
      { target: "考上", transliteration: "kǎoshang", translation: "поступить (сдав экзамен)" },
      { target: "考", transliteration: "kǎo", translation: "сдавать экзамен" },
      { target: "春节", transliteration: "Chūn Jié", translation: "Праздник Весны (КНГ)" },
      { target: "让", transliteration: "ràng", translation: "заставлять, просить (кого-то сделать)" },
      { target: "问题", transliteration: "wèntí", translation: "вопрос, проблема" },
      { target: "应该", transliteration: "yīnggāi", translation: "должен, следует" },
      { target: "想念", transliteration: "xiǎngniàn", translation: "скучать" },
      { target: "趟", transliteration: "tàng", translation: "счётное слово для поездок" },
      { target: "哈尔滨", transliteration: "Hā'ěrbīn", translation: "Харбин" },
      { target: "张大朋", transliteration: "Zhāng Dàpéng", translation: "Чжан Дапэн (имя)" },
    ],

    grammar: [
      {
        title: "Прил. + 极了 — «крайне X»",
        explanation:
          "极了 (jí le) после прилагательного = «до крайности, супер-X».\n\n" +
          "Схема:  Прил. + 极了\n\n" +
          "风景美极了。— Пейзаж красивейший.\n" +
          "好极了！— Превосходно!\n" +
          "冷极了！— Жуткий холод!\n\n" +
          "Степень:\n" +
          "• 很 — просто очень\n" +
          "• 挺……的 — вполне\n" +
          "• 太……了 — слишком\n" +
          "• 极了 — крайне (литературнее, сильнее)\n\n" +
          "极了 ставится всегда ПОСЛЕ прилагательного, без 很/太 перед ним.",
        examples: [
          { target: "哈尔滨冬天的风景美极了。", transliteration: "Hā'ěrbīn dōngtiān de fēngjǐng měi jí le.", translation: "Харбин зимой — красотища неописуемая." },
          { target: "那儿的风景漂亮极了。", transliteration: "Nàr de fēngjǐng piàoliang jí le.", translation: "Там пейзажи — красота." },
          { target: "他的汉语好极了。", transliteration: "Tā de Hànyǔ hǎo jí le.", translation: "Китайский у него — просто отличный." },
        ],
      },
      {
        title: "想 vs 要 — «хочу»",
        explanation:
          "Оба глагола значат «хотеть», но с нюансом:\n\n" +
          "• 想 (xiǎng) — мечта, желание, размышление, не обязательно будет действие:\n" +
          "  我想去中国。— Мечтаю поехать в Китай.\n" +
          "  我想学汉语。— Хочу учить китайский.\n\n" +
          "• 要 (yào) — сильное намерение/решение, скоро будет действие:\n" +
          "  我要去跑步。— Иду бегать. (решено!)\n" +
          "  我要考研究生。— Буду сдавать в магистратуру. (план)\n\n" +
          "Отрицание:\n" +
          "• 不想 — не хочется (мягко)\n" +
          "• 不要 — НЕ используется для «не хочу»! Значит «не делай!» (запрет)\n\n" +
          "Для «не хочу» всегда 不想.",
        examples: [
          { target: "我想去别的地方看看。", transliteration: "Wǒ xiǎng qù bié de dìfang kànkan.", translation: "Хочу посмотреть другие места." },
          { target: "我朋友想去哈尔滨。", transliteration: "Wǒ péngyou xiǎng qù Hā'ěrbīn.", translation: "Мой друг хочет в Харбин." },
          { target: "我要考研究生。", transliteration: "Wǒ yào kǎo yánjiūshēng.", translation: "Буду сдавать в магистратуру." },
          { target: "我不想考研究生。", transliteration: "Wǒ bù xiǎng kǎo yánjiūshēng.", translation: "Не хочу сдавать в магистратуру." },
        ],
      },
      {
        title: "Счётные слова для действий: 趟 / 次 / 遍 / 下",
        explanation:
          "В китайском действия тоже считаются! Счётные слова для действий — СРАЗУ ПОСЛЕ глагола:\n\n" +
          "Схема:  V + 了 + число + 趟/次/遍/下\n\n" +
          "• 趟 (tàng) — поездка, раз (о походе куда-то):\n" +
          "  回家一趟 — съездить домой раз\n\n" +
          "• 次 (cì) — раз (общий счёт):\n" +
          "  去过三次 — был 3 раза\n\n" +
          "• 遍 (biàn) — полный раз (от начала до конца):\n" +
          "  看了一遍 — прочитал целиком\n\n" +
          "• 下 (xià) — мимолётный раз (короткое действие):\n" +
          "  看一下 — взглянуть",
        examples: [
          { target: "我得安排时间回家一趟。", transliteration: "Wǒ děi ānpái shíjiān huí jiā yí tàng.", translation: "Надо найти время съездить домой." },
          { target: "我去过三次北京。", transliteration: "Wǒ qù guo sān cì Běijīng.", translation: "Был в Пекине 3 раза." },
          { target: "这本书我看了两遍。", transliteration: "Zhè běn shū wǒ kàn le liǎng biàn.", translation: "Эту книгу я прочёл 2 раза." },
        ],
      },
      {
        title: "让 — «просить/велеть кого-то сделать X»",
        explanation:
          "让 (ràng) — каузативный глагол «просить/позволять/велеть кому-то сделать».\n\n" +
          "Схема:  Подл. + 让 + Кто + Глагол\n\n" +
          "爸爸妈妈让我回家。\n" +
          "«Мама и папа просят меня приехать.» (дословно: «родители делают так, что я возвращаюсь»)\n\n" +
          "老师让我们做作业。— Учитель велит нам делать уроки.\n" +
          "妈妈不让我看电视。— Мама не разрешает смотреть телик.\n\n" +
          "Отрицание: 不让 — не позволяет.",
        examples: [
          { target: "爸爸妈妈让我回家。", transliteration: "Bàba māma ràng wǒ huí jiā.", translation: "Родители зовут домой." },
          { target: "老师让我们做作业。", transliteration: "Lǎoshī ràng wǒmen zuò zuòyè.", translation: "Учитель задал домашку." },
          { target: "医生让我休息一天。", transliteration: "Yīshēng ràng wǒ xiūxi yì tiān.", translation: "Врач велел отдохнуть день." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Планы на каникулы (张伟 и 阿曼)",
        lines: [
          { speaker: "A", target: "快放假了，你有什么计划？", transliteration: "Kuài fàng jià le, nǐ yǒu shénme jìhuà?", translation: "Скоро каникулы, какие планы?" },
          { speaker: "B", target: "我打算去旅行。来中国快半年了，我一直待在北京，想去别的地方看看。", transliteration: "Wǒ dǎsuàn qù lǚxíng. Lái Zhōngguó kuài bàn nián le, wǒ yìzhí dāi zài Běijīng, xiǎng qù bié de dìfang kànkan.", translation: "Думаю путешествовать. Почти полгода как в Китае, всё время в Пекине — хочу и другое увидеть." },
          { speaker: "A", target: "你打算去哪儿旅行？", transliteration: "Nǐ dǎsuàn qù nǎr lǚxíng?", translation: "Куда поедешь?" },
          { speaker: "B", target: "还没决定。我的朋友想去哈尔滨。", transliteration: "Hái méi juédìng. Wǒ de péngyou xiǎng qù Hā'ěrbīn.", translation: "Ещё не решил. Друг хочет в Харбин." },
          { speaker: "A", target: "哈尔滨？那个地方冬天非常冷。", transliteration: "Hā'ěrbīn? Nàge dìfang dōngtiān fēicháng lěng.", translation: "Харбин? Там зимой жуткий холод." },
          { speaker: "B", target: "不过听说哈尔滨冬天的风景美极了，我想去看看。你假期怎么过？", transliteration: "Búguò tīngshuō Hā'ěrbīn dōngtiān de fēngjǐng měi jí le, wǒ xiǎng qù kànkan. Nǐ jiàqī zěnme guò?", translation: "Но говорят, зимние пейзажи там — красота. Как ты проведёшь каникулы?" },
          { speaker: "A", target: "我打算在学校复习功课。", transliteration: "Wǒ dǎsuàn zài xuéxiào fùxí gōngkè.", translation: "Останусь в университете повторять материал." },
          { speaker: "B", target: "复习功课？你那么用功啊？", transliteration: "Fùxí gōngkè? Nǐ nàme yònggōng a?", translation: "Повторять? Такой трудяга?" },
          { speaker: "A", target: "快要毕业了，我要考研究生，所以得抓紧时间复习复习。", transliteration: "Kuàiyào bì yè le, wǒ yào kǎo yánjiūshēng, suǒyǐ děi zhuājǐn shíjiān fùxí fùxí.", translation: "Скоро выпуск, буду сдавать в магистратуру — надо использовать время." },
          { speaker: "B", target: "是吗？你打算考哪个方面的研究生？", transliteration: "Shì ma? Nǐ dǎsuàn kǎo nǎge fāngmiàn de yánjiūshēng?", translation: "Да? В какую специальность?" },
          { speaker: "A", target: "我对中国古代历史很感兴趣，想考张大朋教授的。", transliteration: "Wǒ duì Zhōngguó gǔdài lìshǐ hěn gǎn xìngqù, xiǎng kǎo Zhāng Dàpéng jiàoshòu de.", translation: "Мне интересна древняя история Китая, хочу к профессору Чжан Дапэну." },
          { speaker: "B", target: "真棒！你一定能考上。那你春节不回家了？", transliteration: "Zhēn bàng! Nǐ yídìng néng kǎoshang. Nà nǐ Chūn Jié bù huí jiā le?", translation: "Круто! Наверняка поступишь. А на Новый год не едешь домой?" },
          { speaker: "A", target: "大概要回家几天，爸爸妈妈也让我回家。我正在考虑这个问题呢。", transliteration: "Dàgài yào huí jiā jǐ tiān, bàba māma yě ràng wǒ huí jiā. Wǒ zhèngzài kǎolǜ zhège wèntí ne.", translation: "Пару дней, наверное. Родители просят. Как раз думаю об этом." },
          { speaker: "B", target: "回家看看也是应该的，你爸妈一定很想念你。", transliteration: "Huí jiā kànkan yě shì yīnggāi de, nǐ bàmā yídìng hěn xiǎngniàn nǐ.", translation: "Съездить надо, родители очень скучают." },
          { speaker: "A", target: "是啊，我得安排时间回家一趟。", transliteration: "Shì a, wǒ děi ānpái shíjiān huí jiā yí tàng.", translation: "Да, надо найти время заглянуть." },
        ],
      },
    ],

    tips: [
      "春节 (Chūn Jié) — Китайский Новый год (Праздник Весны). Самый важный китайский праздник. По лунному календарю, обычно в феврале. Эквивалент нашего Нового года.",
      "考上 — «поступить» (успешно сдав). Сложный результативный глагол: 考 (сдавать) + 上 (результат). Без 上 — просто «сдавать экзамен».",
      "对X感兴趣 — «интересоваться X». Устойчивая формула. 对 + тема + 感兴趣. «Интересуюсь историей» = 对历史感兴趣.",
      "想念 — «скучать». 我想念你 = «Я по тебе скучаю». Часто сокращается до 想: 我想你 — «скучаю по тебе».",
      "哈尔滨 — столица провинции Хэйлунцзян, самый северный крупный город Китая. Знаменит ежегодным Ледовым фестивалем (冰雪节).",
    ],
  },

  28: {
    introduction:
      "В этой главе вы научитесь оценивать как выполнено действие (V+得+прил.), различать 都 как «все» и «уже», использовать 也许 («может быть»), 为什么 («почему») и 够 («достаточно»).\n\n" +
      "Ситуация: 古丽 и 王红 обсуждают экзамены. 古丽 расстроена — иероглифы читает и пишет медленно, времени не хватило.",

    vocabulary: [
      { target: "星期", transliteration: "xīngqī", translation: "неделя" },
      { target: "门", transliteration: "mén", translation: "счётное слово для предметов (курсов)" },
      { target: "完", transliteration: "wán", translation: "закончить" },
      { target: "有些", transliteration: "yǒuxiē", translation: "некоторые" },
      { target: "报告", transliteration: "bàogào", translation: "доклад" },
      { target: "得", transliteration: "de", translation: "структурная частица (перед оценкой)" },
      { target: "放松", transliteration: "fàngsōng", translation: "расслабиться" },
      { target: "紧张", transliteration: "jǐnzhāng", translation: "напряжённый, нервный" },
      { target: "效果", transliteration: "xiàoguǒ", translation: "эффект, результат" },
      { target: "呀", transliteration: "ya", translation: "модальная частица" },
      { target: "道", transliteration: "dào", translation: "счётное слово для заданий" },
      { target: "题", transliteration: "tí", translation: "задание, вопрос" },
      { target: "为什么", transliteration: "wèi shénme", translation: "почему" },
      { target: "够", transliteration: "gòu", translation: "хватать, достаточно" },
      { target: "阅读", transliteration: "yuèdú", translation: "читать (углублённо)" },
      { target: "汉字", transliteration: "Hànzì", translation: "иероглифы" },
      { target: "难", transliteration: "nán", translation: "трудный" },
      { target: "慢", transliteration: "màn", translation: "медленный" },
      { target: "确实", transliteration: "quèshí", translation: "действительно" },
      { target: "记", transliteration: "jì", translation: "запоминать, записывать" },
      { target: "方法", transliteration: "fāngfǎ", translation: "способ" },
      { target: "编", transliteration: "biān", translation: "составлять" },
      { target: "故事", transliteration: "gùshi", translation: "история" },
      { target: "也许", transliteration: "yěxǔ", translation: "возможно, может быть" },
      { target: "帮助", transliteration: "bāngzhù", translation: "помощь, помогать" },
      { target: "担心", transliteration: "dān xīn", translation: "волноваться, переживать" },
      { target: "解决", transliteration: "jiějué", translation: "решать (задачу)" },
      { target: "欧美", transliteration: "Ōu-Měi", translation: "Европа и Америка" },
    ],

    grammar: [
      {
        title: "V + 得 + Прилагательное — «делать X каким образом»",
        explanation:
          "Как сказать «бежит быстро», «пишет медленно», «поёт хорошо»? В китайском — через 得 (de) после глагола.\n\n" +
          "Схема:  V + 得 + [очень/не/…] + Прил.\n\n" +
          "写得很慢。— Пишу медленно.\n" +
          "考得怎么样？— Как сдал? (дословно: сдал каким?)\n" +
          "跑得很快。— Бежит быстро.\n\n" +
          "Если есть объект, схема усложняется:\n" +
          "V + O + V + 得 + Прил.  (глагол повторяется!)\n" +
          "我写汉字写得很慢。— Я пишу иероглифы медленно.\n\n" +
          "НЕ путать с 得 DĚI (должен). Здесь это структурная частица DE — всегда между глаголом и описанием.",
        examples: [
          { target: "考试考得怎么样？", transliteration: "Kǎoshì kǎo de zěnmeyàng?", translation: "Как сдал экзамен?" },
          { target: "我看汉字看得很慢，写汉字也写得很慢。", transliteration: "Wǒ kàn Hànzì kàn de hěn màn, xiě Hànzì yě xiě de hěn màn.", translation: "Читаю иероглифы медленно, пишу тоже медленно." },
          { target: "他洗衣服洗得不太干净。", transliteration: "Tā xǐ yīfu xǐ de bú tài gānjìng.", translation: "Он стирает вещи не очень чисто." },
          { target: "他跑步跑得很快。", transliteration: "Tā pǎo bù pǎo de hěn kuài.", translation: "Он быстро бегает." },
        ],
      },
      {
        title: "都 — «все» vs «уже»",
        explanation:
          "都 (dōu) имеет два значения:\n\n" +
          "1) «ВСЕ, ОБА» (перед сказуемым, после перечисления):\n" +
          "   我的朋友都来了。— Все мои друзья пришли.\n" +
          "   大家对汉语都感兴趣。— Все интересуются китайским.\n" +
          "   从星期一到星期五，我们每天都有课。\n\n" +
          "2) «УЖЕ» (перед временем, с оттенком удивления):\n" +
          "   都八点半了，你怎么还不起床？\n" +
          "   «Уже 8:30, что ж ты не встаёшь?»\n\n" +
          "По контексту легко различить: после людей = «все», перед временем/числом = «уже».",
        examples: [
          { target: "我的朋友都来了。", transliteration: "Wǒ de péngyou dōu lái le.", translation: "Все мои друзья пришли." },
          { target: "大家对汉语都感兴趣。", transliteration: "Dàjiā duì Hànyǔ dōu gǎn xìngqù.", translation: "Все интересуются китайским." },
          { target: "都八点半了，你怎么还不起床？", transliteration: "Dōu bā diǎn bàn le, nǐ zěnme hái bù qǐ chuáng?", translation: "Уже 8:30, почему не встаёшь?" },
          { target: "他来北京半年了，还没有中国朋友。", transliteration: "Tā lái Běijīng bàn nián le, hái méiyǒu Zhōngguó péngyou.", translation: "Он в Пекине полгода, а китайских друзей нет." },
        ],
      },
      {
        title: "为什么 — «почему?»",
        explanation:
          "为什么 (wèi shénme) — «почему?». Ставится обычно в начале вопроса или после подлежащего.\n\n" +
          "Схема:  Подл. + 为什么 + Глагол/Прил. + …?\n\n" +
          "你为什么没做？— Почему не сделал?\n" +
          "你为什么不去？— Почему не идёшь?\n\n" +
          "Ответ часто даётся через 因为 (yīnwèi — потому что):\n" +
          "— 因为时间不够了。— Потому что не хватило времени.",
        examples: [
          { target: "你为什么没做？", transliteration: "Nǐ wèi shénme méi zuò?", translation: "Почему не сделал?" },
          { target: "你为什么不去？", transliteration: "Nǐ wèi shénme bú qù?", translation: "Почему не идёшь?" },
          { target: "因为时间不够了。", transliteration: "Yīnwèi shíjiān bú gòu le.", translation: "Потому что времени не хватило." },
        ],
      },
      {
        title: "也许 — «возможно» (синоним 可能)",
        explanation:
          "也许 (yěxǔ) — «возможно, быть может». По смыслу синоним 可能, но чуть мягче, литературнее.\n\n" +
          "Схема:  也许 + Сказуемое\n\n" +
          "借给我看吧，也许会有帮助。\n" +
          "«Дай посмотреть — может, поможет.»\n\n" +
          "• 可能 — «возможно» (нейтральное)\n" +
          "• 也许 — «может быть» (мягче, чуть менее уверенно)\n" +
          "• 或许 (huòxǔ) — «пожалуй» (письменный стиль)",
        examples: [
          { target: "借给我看吧，也许会有帮助。", transliteration: "Jiè gěi wǒ kàn ba, yěxǔ huì yǒu bāngzhù.", translation: "Дай посмотреть — может помочь." },
          { target: "他也许不来了。", transliteration: "Tā yěxǔ bù lái le.", translation: "Он, возможно, не придёт." },
          { target: "也许明天下雨。", transliteration: "Yěxǔ míngtiān xià yǔ.", translation: "Возможно, завтра дождь." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Про экзамены (古丽 и 王红)",
        lines: [
          { speaker: "A", target: "王红，你们什么时候开始考试？", transliteration: "Wáng Hóng, nǐmen shénme shíhou kāishǐ kǎoshì?", translation: "Ван Хун, когда у вас экзамены?" },
          { speaker: "B", target: "已经开始了。上个星期考了两门，这个星期还有一门就完了。", transliteration: "Yǐjīng kāishǐ le. Shàng ge xīngqī kǎo le liǎng mén, zhège xīngqī hái yǒu yì mén jiù wán le.", translation: "Уже начались. На прошлой неделе 2 сдала, на этой ещё один — и всё." },
          { speaker: "A", target: "你们只考三门课那么少？", transliteration: "Nǐmen zhǐ kǎo sān mén kè nàme shǎo?", translation: "Всего 3 предмета сдаёте?" },
          { speaker: "B", target: "我们有些课不考试，只写报告。你们什么时候考试？", transliteration: "Wǒmen yǒuxiē kè bù kǎoshì, zhǐ xiě bàogào. Nǐmen shénme shíhou kǎoshì?", translation: "По некоторым пишем только доклады. А вы когда?" },
          { speaker: "A", target: "明天开始。现在我每天复习，看书看得头疼，都快累死了。", transliteration: "Míngtiān kāishǐ. Xiànzài wǒ měi tiān fùxí, kàn shū kàn de tóu téng, dōu kuài lèi sǐ le.", translation: "Завтра начинаются. Каждый день повторяю, от чтения голова болит, почти умираю от усталости." },
          { speaker: "B", target: "是啊，我也是。今天晚上去放松一下，怎么样？", transliteration: "Shì a, wǒ yě shì. Jīntiān wǎnshang qù fàngsōng yíxià, zěnmeyàng?", translation: "Да, и я. Вечером сходим расслабиться?" },
          { speaker: "A", target: "好吧！太紧张的话，学习效果也不好。", transliteration: "Hǎo ba! Tài jǐnzhāng dehuà, xuéxí xiàoguǒ yě bù hǎo.", translation: "Давай! Когда слишком напряжён — и толку мало." },
          { speaker: "B", target: "对呀！会学习，也要会休息，对吧？", transliteration: "Duì ya! Huì xuéxí, yě yào huì xiūxi, duì ba?", translation: "Верно! Уметь учиться = уметь отдыхать." },
        ],
      },
      {
        title: "Как сдал? (王红 и 古丽)",
        lines: [
          { speaker: "A", target: "古丽，考试考得怎么样？", transliteration: "Gǔlì, kǎoshì kǎo de zěnmeyàng?", translation: "Гульнара, как сдала?" },
          { speaker: "B", target: "不太好，有两个生词忘了怎么写，还有一道题没有做。", transliteration: "Bú tài hǎo, yǒu liǎng ge shēngcí wàng le zěnme xiě, hái yǒu yí dào tí méiyǒu zuò.", translation: "Не очень, забыла как пишутся два слова, и один вопрос не успела." },
          { speaker: "A", target: "是吗？为什么？", transliteration: "Shì ma? Wèi shénme?", translation: "Да? Почему?" },
          { speaker: "B", target: "时间不够了。", transliteration: "Shíjiān bú gòu le.", translation: "Времени не хватило." },
          { speaker: "A", target: "哪道题你没做？", transliteration: "Nǎ dào tí nǐ méi zuò?", translation: "Какой?" },
          { speaker: "B", target: "阅读。汉字太难了！我看汉字看得很慢，写汉字也写得很慢。", transliteration: "Yuèdú. Hànzì tài nán le! Wǒ kàn Hànzì kàn de hěn màn, xiě Hànzì yě xiě de hěn màn.", translation: "Чтение. Иероглифы очень сложные! Читаю медленно, пишу медленно." },
          { speaker: "A", target: "对欧美人来说，汉字确实有点儿难。", transliteration: "Duì Ōu-Měi rén lái shuō, Hànzì quèshí yǒudiǎnr nán.", translation: "Для европейцев и американцев иероглифы правда сложные." },
          { speaker: "B", target: "你有什么记汉字的好方法吗？", transliteration: "Nǐ yǒu shénme jì Hànzì de hǎo fāngfǎ ma?", translation: "Знаешь хорошие методы запоминания?" },
          { speaker: "A", target: "我有一本给留学生编的汉字故事书，你想看吗？", transliteration: "Wǒ yǒu yì běn gěi liúxuéshēng biān de Hànzì gùshi shū, nǐ xiǎng kàn ma?", translation: "У меня есть книжка с историями иероглифов для иностранцев, хочешь?" },
          { speaker: "B", target: "好啊，借给我看吧，也许会有帮助。", transliteration: "Hǎo a, jiè gěi wǒ kàn ba, yěxǔ huì yǒu bāngzhù.", translation: "Давай, дай посмотреть — может поможет." },
          { speaker: "A", target: "别担心，你一定能解决这个问题。", transliteration: "Bié dān xīn, nǐ yídìng néng jiějué zhège wèntí.", translation: "Не волнуйся, разберёшься." },
        ],
      },
    ],

    tips: [
      "得 (de) перед оценкой — одна из трёх функций иероглифа 得. Чтобы не путать: 得 DE — ВСЕГДА между глаголом и описанием (写得快). Если перед глаголом — это děi «должен» (我得写).",
      "门 — счётное слово для учебных курсов: 一门课 (один курс), 三门课 (три курса). Нельзя 三个课.",
      "道 — счётное слово для вопросов, задач, блюд: 一道题 (задача), 一道菜 (блюдо).",
      "看X看得Y — схема повторения глагола с объектом и оценкой. «Я читаю иероглифы медленно» = 我看汉字看得很慢. Глагол 看 повторяется!",
      "对X来说 из Главы 18 часто используется здесь: 对欧美人来说 = «с точки зрения европейцев и американцев». Крайне полезная формула для рассуждений.",
    ],
  },

  29: {
    introduction:
      "В этой главе вы научитесь использовать результативные глаголы (V+好了, V+完了), счётные слова для билетов (张) и говорить о путешествиях на поезде.\n\n" +
      "Ситуация: 阿曼 сдал все экзамены и купил билеты в Харбин. 张伟 приглашает его на вечер встреч перед отъездом.",

    vocabulary: [
      { target: "全部", transliteration: "quánbù", translation: "всё, целиком" },
      { target: "终于", transliteration: "zhōngyú", translation: "наконец" },
      { target: "别提", transliteration: "biétí", translation: "не стоит и упоминать (плохо)" },
      { target: "提", transliteration: "tí", translation: "поднимать (тему)" },
      { target: "糟糕", transliteration: "zāogāo", translation: "ужасно, кошмар" },
      { target: "声调", transliteration: "shēngdiào", translation: "тон" },
      { target: "错", transliteration: "cuò", translation: "ошибка, неправильно" },
      { target: "谦虚", transliteration: "qiānxū", translation: "скромный" },
      { target: "嗐", transliteration: "hài", translation: "вздох (восклицание)" },
      { target: "火车", transliteration: "huǒchē", translation: "поезд" },
      { target: "票", transliteration: "piào", translation: "билет" },
      { target: "张", transliteration: "zhāng", translation: "счётное слово (плоские объекты)" },
      { target: "卧铺", transliteration: "wòpù", translation: "спальное место (поезд)" },
      { target: "另外", transliteration: "lìngwài", translation: "другой, дополнительно" },
      { target: "硬座", transliteration: "yìngzuò", translation: "жёсткий сидячий" },
      { target: "上", transliteration: "shàng", translation: "садиться (в поезд)" },
      { target: "补", transliteration: "bǔ", translation: "доплатить, обновить" },
      { target: "联欢", transliteration: "liánhuān", translation: "собираться на встречу" },
      { target: "晚会", transliteration: "wǎnhuì", translation: "вечеринка" },
      { target: "表演", transliteration: "biǎoyǎn", translation: "выступать" },
      { target: "节目", transliteration: "jiémù", translation: "номер, программа" },
    ],

    grammar: [
      {
        title: "Результативные глаголы: V + 完/好/到/见/懂 + 了",
        explanation:
          "Результативный глагол = действие + его РЕЗУЛЬТАТ (одним словом). После основного глагола ставится второй — указывающий на результат.\n\n" +
          "Схема:  V + Результат + 了\n\n" +
          "Частые результаты:\n" +
          "• 完 (wán) — закончить: 考完了 (сдал до конца), 做完了 (доделал)\n" +
          "• 好 (hǎo) — сделать качественно/до конца: 买好了 (купил как надо), 准备好了 (подготовил)\n" +
          "• 到 (dào) — достичь результата: 看到了 (увидел), 找到了 (нашёл)\n" +
          "• 见 (jiàn) — воспринял: 听见了 (услышал)\n" +
          "• 懂 (dǒng) — понял: 看懂了 (прочитал и понял)\n\n" +
          "Отрицание: 没 + V + Результат (БЕЗ 了):\n" +
          "我还没准备好。— Я ещё не подготовился.",
        examples: [
          { target: "今天全部考完了吧？", transliteration: "Jīntiān quánbù kǎo wán le ba?", translation: "Сегодня всё сдал?" },
          { target: "我们已经买好票了。", transliteration: "Wǒmen yǐjīng mǎi hǎo piào le.", translation: "Мы уже купили билеты." },
          { target: "我找到了我的自行车。", transliteration: "Wǒ zhǎo dào le wǒ de zìxíngchē.", translation: "Я нашёл свой велосипед." },
          { target: "你听见了吗？", transliteration: "Nǐ tīng jiàn le ma?", translation: "Ты слышал?" },
          { target: "我看懂了这本书。", transliteration: "Wǒ kàn dǒng le zhè běn shū.", translation: "Я понял эту книгу." },
        ],
      },
      {
        title: "Счётное слово 张 — для плоских объектов",
        explanation:
          "张 (zhāng) — счётное слово для плоских предметов.\n\n" +
          "Схема:  Число + 张 + Сущ.\n\n" +
          "Что считается через 张:\n" +
          "• 票 — билет: 一张票, 三张卧铺票\n" +
          "• 纸 — бумага: 一张纸\n" +
          "• 照片 — фото: 一张照片\n" +
          "• 桌子 — стол: 一张桌子\n" +
          "• 床 — кровать: 一张床\n" +
          "• 地图 — карта: 一张地图\n\n" +
          "Логика: всё что можно положить плашмя и оно плоское/прямоугольное.",
        examples: [
          { target: "只买到三张卧铺票。", transliteration: "Zhǐ mǎi dào sān zhāng wòpù piào.", translation: "Смог купить только 3 билета на плацкарт." },
          { target: "另外一张是硬座票。", transliteration: "Lìngwài yì zhāng shì yìngzuò piào.", translation: "Ещё один — на жёсткий сидячий." },
          { target: "这是我家的照片。", transliteration: "Zhè shì wǒ jiā de zhàopiàn.", translation: "Это фото моей семьи." },
          { target: "买一张北京地图。", transliteration: "Mǎi yì zhāng Běijīng dìtú.", translation: "Купить карту Пекина." },
        ],
      },
      {
        title: "终于 — «наконец-то»",
        explanation:
          "终于 (zhōngyú) — «наконец, наконец-то». Выражает облегчение после долгого ожидания/труда.\n\n" +
          "Схема:  Подл. + 终于 + Глагол (+ 了)\n\n" +
          "考了三天，终于考完了。— Сдавал 3 дня, наконец всё.\n" +
          "他终于来了。— Он наконец пришёл.\n\n" +
          "Часто в конце 了 — подчёркивает завершение после ожидания.",
        examples: [
          { target: "考了三天，终于考完了。", transliteration: "Kǎo le sān tiān, zhōngyú kǎo wán le.", translation: "Сдавал 3 дня, наконец всё." },
          { target: "他终于来了。", transliteration: "Tā zhōngyú lái le.", translation: "Он наконец пришёл." },
          { target: "我终于习惯了北京的生活。", transliteration: "Wǒ zhōngyú xíguàn le Běijīng de shēnghuó.", translation: "Я наконец привык к пекинской жизни." },
        ],
      },
    ],

    dialogues: [
      {
        title: "После экзаменов (张伟 и 阿曼)",
        lines: [
          { speaker: "A", target: "阿曼，今天全部考完了吧？", transliteration: "Āmàn, jīntiān quánbù kǎo wán le ba?", translation: "Аман, сегодня всё сдал?" },
          { speaker: "B", target: "考了三天，终于考完了。", transliteration: "Kǎo le sān tiān, zhōngyú kǎo wán le.", translation: "Три дня сдавал — наконец всё." },
          { speaker: "A", target: "考得怎么样？", transliteration: "Kǎo de zěnmeyàng?", translation: "Как?" },
          { speaker: "B", target: "别提了，考得糟糕极了，特别是声调和汉字，错得比较多。", transliteration: "Biétí le, kǎo de zāogāo jí le, tèbié shì shēngdiào hé Hànzì, cuò de bǐjiào duō.", translation: "Не спрашивай, ужасно — особенно тоны и иероглифы, много ошибок." },
          { speaker: "A", target: "你是谦虚吧？平时我看你说得挺不错的。", transliteration: "Nǐ shì qiānxū ba? Píngshí wǒ kàn nǐ shuō de tǐng búcuò de.", translation: "Скромничаешь? Обычно ты неплохо говоришь." },
          { speaker: "B", target: "嗐！已经考完了，不想考试的事了。", transliteration: "Hài! Yǐjīng kǎo wán le, bù xiǎng kǎoshì de shì le.", translation: "Эх! Всё, сдал — не хочу больше думать." },
          { speaker: "A", target: "你什么时候去旅行？", transliteration: "Nǐ shénme shíhou qù lǚxíng?", translation: "Когда в путешествие?" },
          { speaker: "B", target: "星期日出发。", transliteration: "Xīngqīrì chūfā.", translation: "В воскресенье." },
          { speaker: "A", target: "决定去哪儿了吗？", transliteration: "Juédìng qù nǎr le ma?", translation: "Решил куда?" },
          { speaker: "B", target: "决定了，去哈尔滨。", transliteration: "Juédìng le, qù Hā'ěrbīn.", translation: "Да, в Харбин." },
          { speaker: "A", target: "你们怎么去？坐火车去吗？", transliteration: "Nǐmen zěnme qù? Zuò huǒchē qù ma?", translation: "Как поедете? Поездом?" },
          { speaker: "B", target: "对，我们已经买好票了，不过只买到三张卧铺票，另外一张是硬座票。", transliteration: "Duì, wǒmen yǐjīng mǎi hǎo piào le, búguò zhǐ mǎi dào sān zhāng wòpù piào, lìngwài yì zhāng shì yìngzuò piào.", translation: "Да, билеты уже купили. Но только 3 плацкарта, четвёртый — сидячий." },
          { speaker: "A", target: "你可以上车补卧铺票，可能还有卧铺。", transliteration: "Nǐ kěyǐ shàng chē bǔ wòpù piào, kěnéng hái yǒu wòpù.", translation: "Можешь в поезде доплатить за плацкарт — возможно, ещё есть." },
          { speaker: "B", target: "是吗？那太好了。", transliteration: "Shì ma? Nà tài hǎo le.", translation: "Правда? Отлично." },
          { speaker: "A", target: "这个星期六我们系里有一个联欢晚会，你能来吗？", transliteration: "Zhège xīngqīliù wǒmen xì li yǒu yí ge liánhuān wǎnhuì, nǐ néng lái ma?", translation: "В субботу у нас на факультете вечеринка — придёшь?" },
          { speaker: "B", target: "我们星期日下午出发，应该没问题。去参加中国学生的晚会，要准备什么东西？", transliteration: "Wǒmen xīngqīrì xiàwǔ chūfā, yīnggāi méi wèntí. Qù cānjiā Zhōngguó xuésheng de wǎnhuì, yào zhǔnbèi shénme dōngxi?", translation: "Мы в воскресенье днём уезжаем — должен успеть. А на китайской вечеринке что готовить?" },
          { speaker: "A", target: "不用准备。不过，也许会让你表演一个节目。", transliteration: "Búyòng zhǔnbèi. Búguò, yěxǔ huì ràng nǐ biǎoyǎn yí ge jiémù.", translation: "Ничего готовить не надо. Но могут попросить что-то спеть." },
          { speaker: "B", target: "这个……", transliteration: "Zhège...", translation: "Ну…" },
        ],
      },
    ],

    tips: [
      "火车 в Китае — главный вид транспорта между городами. Классы: 硬座 (жёсткий сидячий, дешёвый), 软座 (мягкий сидячий), 硬卧 (жёсткий плацкарт), 软卧 (мягкий купе).",
      "补票 — «доплатить за билет». Классическая китайская практика: не хватает мест — покупаешь сидячий, в поезде доплачиваешь до плацкарта (卧铺).",
      "别提了 — разговорная фраза «и не спрашивай, беда!». Используется когда случилось что-то плохое и неохота рассказывать.",
      "谦虚 — «скромный». Важная китайская добродетель. Когда хвалят, принято отвечать 哪里哪里 (что вы, что вы) или 谦虚 — преуменьшать свои достижения.",
      "联欢 + 晚会 = «вечер встреч, дружеская вечеринка». Типичное мероприятие в китайских вузах — с песнями, танцами, номерами.",
    ],
  },

  30: {
    introduction:
      "Это итоговая глава всего учебника! Вы повторите все ключевые конструкции и научитесь рассказывать о подготовке к выступлению, использовать 怕 (бояться) и эмфатическое 多……啊 («ведь это же X!»).\n\n" +
      "Ситуация: 阿曼 собирается на факультетскую вечеринку. Он решил спеть китайскую народную песню, но волнуется из-за произношения.",

    vocabulary: [
      { target: "行李", transliteration: "xíngli", translation: "багаж" },
      { target: "收拾", transliteration: "shōushi", translation: "собирать вещи, убирать" },
      { target: "半天", transliteration: "bàntiān", translation: "полдня" },
      { target: "整天", transliteration: "zhěng tiān", translation: "целый день" },
      { target: "联欢会", transliteration: "liánhuānhuì", translation: "вечер встреч" },
      { target: "需要", transliteration: "xūyào", translation: "нуждаться, нужно" },
      { target: "英文", transliteration: "Yīngwén", translation: "английский (язык)" },
      { target: "首", transliteration: "shǒu", translation: "счётное слово для песен" },
      { target: "流行", transliteration: "liúxíng", translation: "популярный" },
      { target: "歌曲", transliteration: "gēqǔ", translation: "песня" },
      { target: "民歌", transliteration: "míngē", translation: "народная песня" },
      { target: "好听", transliteration: "hǎotīng", translation: "приятный на слух" },
      { target: "发音", transliteration: "fāyīn", translation: "произношение" },
      { target: "懂", transliteration: "dǒng", translation: "понимать" },
      { target: "熟悉", transliteration: "shúxī", translation: "знакомый, хорошо знать" },
      { target: "歌词", transliteration: "gēcí", translation: "слова песни" },
      { target: "标准", transliteration: "biāozhǔn", translation: "стандартный" },
      { target: "面子", transliteration: "miànzi", translation: "лицо, репутация" },
      { target: "光盘", transliteration: "guāngpán", translation: "диск (CD)" },
      { target: "次", transliteration: "cì", translation: "раз (счётное слово)" },
      { target: "怕", transliteration: "pà", translation: "бояться" },
    ],

    grammar: [
      {
        title: "多……啊 — эмфатическое «какой же X!»",
        explanation:
          "Конструкция 多……啊 выражает высокую степень с оттенком удивления/восклицания.\n\n" +
          "Схема:  多 + Прил. + 啊\n\n" +
          "多没面子啊！— Как же стыдно!\n" +
          "多好啊！— Как же хорошо!\n" +
          "多漂亮啊！— Какая же красота!\n\n" +
          "Похоже на русское «какой же X!» / «до чего же X!».\n\n" +
          "Переводится восклицательно, выражает эмоцию. Часто с риторической интонацией.",
        examples: [
          { target: "可是，我的发音太不标准的话，那多没面子啊！", transliteration: "Kěshì, wǒ de fāyīn tài bù biāozhǔn dehuà, nà duō méi miànzi a!", translation: "Но если произношение неправильное — это же какой стыд!" },
          { target: "看，那儿的风景多漂亮啊！", transliteration: "Kàn, nàr de fēngjǐng duō piàoliang a!", translation: "Смотри, какой там пейзаж красивый!" },
          { target: "快考试了，学生们多紧张啊！", transliteration: "Kuài kǎoshì le, xuéshēngmen duō jǐnzhāng a!", translation: "Скоро экзамены, как же студенты нервничают!" },
        ],
      },
      {
        title: "怕 — «бояться»",
        explanation:
          "怕 (pà) — «бояться». Может быть:\n\n" +
          "1) Полным глаголом:  Подл. + 怕 + Объект\n" +
          "   我怕狗。— Боюсь собак.\n" +
          "   我不怕冷。— Я не боюсь холода.\n\n" +
          "2) Перед другим глаголом (боюсь сделать):\n" +
          "   我怕说错。— Боюсь ошибиться.\n" +
          "   你是怕表演节目吧？— Ты боишься выступать?\n\n" +
          "3) 怕 + придаточное:\n" +
          "   我怕他不来。— Боюсь, он не придёт.",
        examples: [
          { target: "你是怕表演节目吧？", transliteration: "Nǐ shì pà biǎoyǎn jiémù ba?", translation: "Ты боишься выступать?" },
          { target: "有点儿。", transliteration: "Yǒudiǎnr.", translation: "Немного." },
          { target: "我不怕冷。", transliteration: "Wǒ bú pà lěng.", translation: "Я не боюсь холода." },
          { target: "我怕他不来。", transliteration: "Wǒ pà tā bù lái.", translation: "Боюсь, он не придёт." },
        ],
      },
      {
        title: "Счётные слова 首 и 次 — для песен и раз",
        explanation:
          "• 首 (shǒu) — счётное слово для ПЕСЕН и СТИХОВ:\n" +
          "  一首歌 — одна песня\n" +
          "  一首民歌 — одна народная песня\n" +
          "  几首英文歌 — несколько английских песен\n\n" +
          "• 次 (cì) — счётное слово для РАЗ (всегда после числа, перед или после глагола):\n" +
          "  一次 — один раз\n" +
          "  两次 — два раза\n" +
          "  去过一次北京 — был один раз в Пекине\n\n" +
          "Разница с 遍: 次 — просто раз, 遍 — раз целиком от начала до конца.",
        examples: [
          { target: "我不想唱英文歌，我打算唱一首中文歌。", transliteration: "Wǒ bù xiǎng chàng Yīngwén gē, wǒ dǎsuàn chàng yì shǒu Zhōngwén gē.", translation: "Не хочу петь на английском, спою китайскую песню." },
          { target: "不，我想唱一首民歌。", transliteration: "Bù, wǒ xiǎng chàng yì shǒu míngē.", translation: "Нет, хочу народную песню." },
          { target: "借来用用，也许会有帮助。", transliteration: "Jiè lái yòng yòng, yěxǔ huì yǒu bāngzhù.", translation: "Одолжу попользоваться, возможно поможет." },
        ],
      },
      {
        title: "Модальные обороты повторение: 想/要/得/会/能/可以",
        explanation:
          "Перед финалом обучения — закрепим все модальные глаголы на конкретном примере:\n\n" +
          "• 想 + V — хочу (желание):\n" +
          "  我想唱一首民歌。\n\n" +
          "• 要 + V — собираюсь (решил):\n" +
          "  我要参加联欢会。\n\n" +
          "• 得 + V — должен (обязанность):\n" +
          "  得写给朋友们贺卡。\n\n" +
          "• 会 + V — умею:\n" +
          "  会说汉语。\n\n" +
          "• 能 + V — могу (обстоятельства):\n" +
          "  他们能听懂吗？\n\n" +
          "• 可以 + V — можно (разрешение):\n" +
          "  你可以上车补票。\n\n" +
          "Все эти слова + глагол. Неправильный выбор сильно меняет смысл — запомни разницы.",
        examples: [
          { target: "今天我要参加一个中国学生的联欢会。", transliteration: "Jīntiān wǒ yào cānjiā yí ge Zhōngguó xuéshēng de liánhuānhuì.", translation: "Сегодня иду на вечеринку китайских студентов." },
          { target: "我不想唱英文歌，我打算唱一首中文歌。", transliteration: "Wǒ bù xiǎng chàng Yīngwén gē, wǒ dǎsuàn chàng yì shǒu Zhōngwén gē.", translation: "Не хочу петь английскую, спою китайскую." },
          { target: "他们能听懂吗？", transliteration: "Tāmen néng tīng dǒng ma?", translation: "Они смогут понять?" },
          { target: "我的同屋有中国民歌的光盘，借来用用。", transliteration: "Wǒ de tóngwū yǒu Zhōngguó míngē de guāngpán, jiè lái yòng yòng.", translation: "У моей соседки диск с китайскими песнями — одолжу попользоваться." },
        ],
      },
    ],

    dialogues: [
      {
        title: "Перед отъездом (古丽 и 阿曼)",
        lines: [
          { speaker: "A", target: "阿曼，快要出发了，你准备好行李了吗？", transliteration: "Āmàn, kuàiyào chūfā le, nǐ zhǔnbèi hǎo xíngli le ma?", translation: "Аман, скоро выезжаем, собрал вещи?" },
          { speaker: "B", target: "我昨天收拾了半天，早就准备好了。", transliteration: "Wǒ zuótiān shōushi le bàntiān, zǎo jiù zhǔnbèi hǎo le.", translation: "Вчера полдня собирал — давно готов." },
          { speaker: "A", target: "那你整天在房间里干什么？", transliteration: "Nà nǐ zhěng tiān zài fángjiān li gàn shénme?", translation: "А целый день в комнате что делал?" },
          { speaker: "B", target: "今天我要参加一个中国学生的联欢会，正在准备节目呢。", transliteration: "Jīntiān wǒ yào cānjiā yí ge Zhōngguó xuéshēng de liánhuānhuì, zhèngzài zhǔnbèi jiémù ne.", translation: "Сегодня иду на вечеринку китайских студентов, готовлю номер." },
          { speaker: "A", target: "你唱歌唱得那么好，还需要准备吗？", transliteration: "Nǐ chàng gē chàng de nàme hǎo, hái xūyào zhǔnbèi ma?", translation: "Ты же так хорошо поёшь, зачем готовиться?" },
          { speaker: "B", target: "我不想唱英文歌，我打算唱一首中文歌。", transliteration: "Wǒ bù xiǎng chàng Yīngwén gē, wǒ dǎsuàn chàng yì shǒu Zhōngwén gē.", translation: "Не хочу на английском — спою китайскую." },
          { speaker: "A", target: "好极了。你打算唱流行歌曲吗？", transliteration: "Hǎo jí le. Nǐ dǎsuàn chàng liúxíng gēqǔ ma?", translation: "Отлично. Популярную?" },
          { speaker: "B", target: "不，我想唱一首民歌。", transliteration: "Bù, wǒ xiǎng chàng yì shǒu míngē.", translation: "Нет, народную." },
          { speaker: "A", target: "民歌？民歌很好听啊。", transliteration: "Míngē? Míngē hěn hǎotīng a.", translation: "Народную? Это хорошо." },
          { speaker: "B", target: "我的发音不太好，他们能听懂吗？", transliteration: "Wǒ de fāyīn bú tài hǎo, tāmen néng tīng dǒng ma?", translation: "У меня произношение не очень — поймут?" },
          { speaker: "A", target: "如果是有名的民歌，他们一定很熟悉歌词，没问题吧。", transliteration: "Rúguǒ shì yǒumíng de míngē, tāmen yídìng hěn shúxī gēcí, méi wèntí ba.", translation: "Если народная известная — слова все знают, всё будет ок." },
          { speaker: "B", target: "可是，我的发音太不标准的话，那多没面子啊！", transliteration: "Kěshì, wǒ de fāyīn tài bù biāozhǔn dehuà, nà duō méi miànzi a!", translation: "А если произношение совсем плохое — стыд-то какой!" },
          { speaker: "A", target: "我的同屋有中国民歌的光盘，借来用用，也许会有帮助。", transliteration: "Wǒ de tóngwū yǒu Zhōngguó míngē de guāngpán, jiè lái yòng yòng, yěxǔ huì yǒu bāngzhù.", translation: "У моей соседки диск с народными песнями — одолжу, может поможет." },
          { speaker: "B", target: "谢谢！你今天有空儿吗？和我一起去怎么样？", transliteration: "Xièxie! Nǐ jīntiān yǒu kòngr ma? Hé wǒ yìqǐ qù zěnmeyàng?", translation: "Спасибо! У тебя сегодня есть время? Пойдём вместе?" },
          { speaker: "A", target: "我还没准备好行李呢，下次吧！", transliteration: "Wǒ hái méi zhǔnbèi hǎo xíngli ne, xià cì ba!", translation: "Я ещё не собралась, в другой раз!" },
          { speaker: "B", target: "你是怕表演节目吧？", transliteration: "Nǐ shì pà biǎoyǎn jiémù ba?", translation: "Ты боишься выступать?" },
          { speaker: "A", target: "有点儿。", transliteration: "Yǒudiǎnr.", translation: "Немного." },
        ],
      },
    ],

    tips: [
      "民歌 (míngē) — народная песня. Очень популярный жанр в Китае. Знаменитые песни: 茉莉花 (Цветок жасмина), 康定情歌 (Любовная песня Кандина). Идеально для изучения китайского.",
      "面子 (miànzi) — «лицо, репутация». Центральное понятие китайской культуры. 没面子 — потерять лицо, опозориться. 给面子 — уважить (дать лицо). Важная концепция в деловых отношениях.",
      "光盘 — CD/DVD. В эпоху стриминга слово устаревает, но в учебнике 2012 года актуальное. Сейчас чаще скажут 下载 (скачать) или просто 听音乐.",
      "发音 (произношение) — одна из самых сложных частей китайского. Тоны (声调) + правильная артикуляция. Без них тебя не поймут, даже если иероглифы правильные.",
      "Поздравляю с завершением Boya Chinese Elementary 1! 30 глав, 700+ слов, все базовые грамматические структуры. Следующий уровень — Boya Chinese Elementary 2 (главы 31-60).",
    ],
  },
};
