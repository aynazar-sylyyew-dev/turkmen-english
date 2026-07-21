import { ThemedText } from "@/components/themed-text";
import { COURSE_DATA, isGradedQuestion } from "@/constants/CourseData";
import { Colors, FontFamily } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { T } from "@/lib/strings";
import { router } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  type ViewToken,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Everything this manual claims about the course size is read from the course
// itself, so the numbers cannot drift the way the previous hardcoded ones did.
const CHAPTER_COUNT = COURSE_DATA.chapters.length;
const LESSON_COUNT = COURSE_DATA.chapters.reduce(
  (n, c) => n + c.lessons.length,
  0,
);
const ALL_QUESTIONS = COURSE_DATA.chapters.flatMap((c) =>
  c.lessons.flatMap((l) => l.questions),
);
const EXERCISE_COUNT = ALL_QUESTIONS.filter(isGradedQuestion).length;
const THEORY_COUNT = ALL_QUESTIONS.filter((q) => q.type === "theory").length;

function PageWrapper({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollView style={styles.pageScroll} contentContainerStyle={styles.pageContent}>
      <ThemedText style={styles.pageLabel}>{label}</ThemedText>
      <ThemedText style={styles.pageTitle}>{title}</ThemedText>
      {children}
    </ScrollView>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  desc: string;
}) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={22} color={Colors.primaryAccentColor} />
      </View>
      <View style={styles.featureContent}>
        <ThemedText style={styles.featureTitle}>{title}</ThemedText>
        <ThemedText style={styles.featureDesc}>{desc}</ThemedText>
      </View>
    </View>
  );
}

function StepRow({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <View style={styles.stepRow}>
      <View style={styles.stepNum}>
        <ThemedText style={styles.stepNumText}>{n}</ThemedText>
      </View>
      <View style={styles.stepContent}>
        <ThemedText style={styles.stepTitle}>{title}</ThemedText>
        <ThemedText style={styles.stepDesc}>{desc}</ThemedText>
      </View>
    </View>
  );
}

// ── Pages ───────────────────────────────────────────────────

function WelcomePage() {
  return (
    <PageWrapper label="Salam" title="Programma hakynda">
      <ThemedText style={styles.body}>
        Bu programma türkmen dilinde gepleýänler üçin iňlis dilini öwretmek üçin döredildi. Maksadymyz — sada we düşnükli ýol bilen başlangyç derejäni özleşdirmek.
      </ThemedText>
      <ThemedText style={styles.body}>
        Programma doly oflaýn işleýär — grammatika, gönükmeler we düşündirişler telefonyňyzda saklanýar. Internet gerek däl.
      </ThemedText>
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <ThemedText style={styles.statValue}>{CHAPTER_COUNT}</ThemedText>
          <ThemedText style={styles.statLabel}>bap</ThemedText>
        </View>
        <View style={styles.statBox}>
          <ThemedText style={styles.statValue}>{LESSON_COUNT}</ThemedText>
          <ThemedText style={styles.statLabel}>sapak</ThemedText>
        </View>
        <View style={styles.statBox}>
          <ThemedText style={styles.statValue}>{EXERCISE_COUNT}</ThemedText>
          <ThemedText style={styles.statLabel}>gönükme</ThemedText>
        </View>
        <View style={styles.statBox}>
          <ThemedText style={styles.statValue}>{THEORY_COUNT}</ThemedText>
          <ThemedText style={styles.statLabel}>düşündiriş</ThemedText>
        </View>
      </View>
      <ThemedText style={styles.body}>
        Esasy pelsepe: gysga düşündiriş, soň şol bada gönükme, bapyň soňunda synag. Ýalňyşlyk — öwrenmegiň bir bölegi, basyşsyz, asuda öwreniň.
      </ThemedText>
    </PageWrapper>
  );
}

function MainScreenPage() {
  return (
    <PageWrapper label="Esasy ekran" title="Üç plitka">
      <ThemedText style={styles.body}>
        Programmany açanyňyzda «Iňlis dilini öwreniň» ekrany peýda bolar. Onda üç plitka bar:
      </ThemedText>

      <FeatureCard
        icon="hand-left-outline"
        title="Hoş geldiňiz"
        desc="Programma hakynda we iňlis dili hakynda umumy maglumat. Täze öwrenip başlaýanlar üçin başlangyç nokat."
      />
      <FeatureCard
        icon="book-outline"
        title="Sapaklar"
        desc={`${CHAPTER_COUNT} bapyň doly sanawy. Her bapda dört sapak we bir synag bar.`}
      />
      <FeatureCard
        icon="settings-outline"
        title="Sazlamalar"
        desc="Gündelik ýatlatmalar we maglumatlaryň ätiýaçlyk nusgasy."
      />

      <ThemedText style={styles.body}>
        Plitka basyň — degişli bölüm açylar. Ýokarda «Yza» ok bilen yzyna gaýtmak mümkin.
      </ThemedText>
    </PageWrapper>
  );
}

function ChaptersPage() {
  return (
    <PageWrapper label="Sapaklar" title={`${CHAPTER_COUNT} bap`}>
      <ThemedText style={styles.body}>
        Her bap bir grammatik tema bagyşlanan: köplük sany, artikller, zamanlar, deňeşdirme we beýlekiler. Baplar aňsatdan kyna tarap gidýär.
      </ThemedText>

      <View style={styles.chapterCard}>
        <ThemedText style={styles.chapterBadge2}>{`1-${CHAPTER_COUNT} bap`}</ThemedText>
        <View style={styles.chapterContent}>
          <ThemedText style={styles.chapterTitle}>Esasy sapaklar</ThemedText>
          <ThemedText style={styles.chapterDesc}>
            Her bapda dört sapak we bapyň soňunda synag. Sapagyň içinde gysga düşündirişler gönükmeler bilen gezekleşýär.
          </ThemedText>
        </View>
      </View>

      <ThemedText style={styles.body}>
        Sapaklary tertibinde geçmek maslahat berilýär — her soňraky bap öňküleriň üstüne gurulýar.
      </ThemedText>
    </PageWrapper>
  );
}

function LessonFlowPage() {
  return (
    <PageWrapper label="Sapak" title="Sapak nähili gidýär">
      <ThemedText style={styles.body}>
        Sapak ädimme-ädim geçilýär. Teoriýa aýratyn ýerde durmaýar — ol gönükmeleriň arasynda gysga bloklar bolup gelýär:
      </ThemedText>

      <StepRow
        n="1"
        title="Düşündiriş"
        desc="Bir düzgün, mysallar bilen. Okap, «Dowam et» basýarsyň. Baha berilmeýär."
      />
      <StepRow
        n="2"
        title="Gönükmeler"
        desc="Şol bada şol düzgüne maşk: saýla, doldur, sözlemi üýtget, jübütle."
      />
      <StepRow
        n="3"
        title="Ýazuw"
        desc="Erkin ýazmak üçin ýumuş. Iň az söz sany talap edilýär, ýöne baha berilmeýär."
      />
      <StepRow
        n="4"
        title="Netije"
        desc="Sapagyň soňunda dogry jogaplaryň sany, XP we ýalňyşlaryň sanawy görkezilýär."
      />

      <ThemedText style={styles.body}>
        Aşaky panelde her ädimiň belgisi bar — basyp yzyna ýa-da öňe böküp bolýar.
      </ThemedText>
    </PageWrapper>
  );
}

function ExercisesPage() {
  return (
    <PageWrapper label="Gönükmeler" title="Sekiz görnüş">
      <ThemedText style={styles.body}>
        Kursda sekiz görnüşli gönükme bar. Olaryň bir bölegi saýlamak, bir bölegi ýazmak bilen çözülýär:
      </ThemedText>

      <FeatureCard
        icon="checkbox-outline"
        title="Saýlama we artykmajyny tap"
        desc="Birnäçe warianty berilýär, dogrusyny saýlaýarsyň."
      />
      <FeatureCard
        icon="create-outline"
        title="Boşluk doldurma we sözlemi üýtgetmek"
        desc="Jogaby özüň ýazýarsyň. Baş harp, artykmaç boşluk we soňky nokat hasaba alynmaýar."
      />
      <FeatureCard
        icon="volume-high-outline"
        title="Diktant"
        desc="Söz diňe sesli aýdylýar — diňläp, ýazmaly. Söz ekranda görkezilmeýär."
      />
      <FeatureCard
        icon="book-outline"
        title="Okamak we jübütlemek"
        desc="Tekst boýunça sorag, ýa-da çep we sag sütünleri baglamak."
      />

      <ThemedText style={styles.body}>
        Gönükmeden çykmak isleseňiz, ýokarky sag burçda «X» düwmesini basyň — tassyklama soralar.
      </ThemedText>
    </PageWrapper>
  );
}

function TestPage() {
  return (
    <PageWrapper label="Synag" title="Bap synagy">
      <View style={styles.bigBlock}>
        <View style={styles.bigBlockHeader}>
          <Ionicons name="checkmark-done-outline" size={24} color={Colors.primaryAccentColor} />
          <ThemedText style={styles.bigBlockTitle}>Nähili işleýär</ThemedText>
        </View>
        <ThemedText style={styles.bigBlockBody}>
          Bapyň dört sapagyny geçeniňden soň synag açylýar. Bapdaky gönükmelerden 15-si tötänleýin saýlanýar.
        </ThemedText>
        <ThemedText style={styles.bigBlockBody}>
          Geçmek üçin 70% gerek. Bir gezek geçseň, netije saklanýar — soň gaýtadan synanyşsaň hem ýitmeýär.
        </ThemedText>
      </View>

      <View style={styles.bigBlock}>
        <View style={styles.bigBlockHeader}>
          <Ionicons name="lock-open-outline" size={24} color={Colors.primaryAccentColor} />
          <ThemedText style={styles.bigBlockTitle}>Indiki bap</ThemedText>
        </View>
        <ThemedText style={styles.bigBlockBody}>
          Indiki bap diňe synagy tabşyranyňdan soň açylýar. Şeýdip grammatika yzygiderli, boşluksyz öwrenilýär.
        </ThemedText>
        <ThemedText style={styles.bigBlockBody}>
          Düşündiriş we ýazuw ädimleri synaga girmeýär — olara baha berilmeýär.
        </ThemedText>
      </View>
    </PageWrapper>
  );
}

function SettingsPage() {
  return (
    <PageWrapper label="Sazlamalar" title="Şahsy tertibi sazlaň">
      <ThemedText style={styles.body}>
        «Sazlamalar» plitkasy esasy ekrandan açylýar. Ol ýerde iki zat bar.
      </ThemedText>

      <View style={styles.settingCard}>
        <ThemedText style={styles.settingTitle}>Gündelik ýatlatma</ThemedText>
        <ThemedText style={styles.settingDesc}>
          Her gün agşam telefonyňa ýatlatma gelýär, streagyňy dowam etmegi ýatladýar. Islemeseň öçürip bolýar.
        </ThemedText>
      </View>

      <View style={styles.settingCard}>
        <ThemedText style={styles.settingTitle}>Ätiýaçlyk nusgasy</ThemedText>
        <ThemedText style={styles.settingDesc}>
          Ähli öňegidişligiňi bir faýla ýazdyryp, soň şol faýldan dikeldip bolýar. Telefon çalşanyňda peýdaly.
        </ThemedText>
        <ThemedText style={styles.listItem}>• Ýatda sakla — faýly döredýär we paýlaşýar</ThemedText>
        <ThemedText style={styles.listItem}>• Yzyna ýükle — faýldan öňegidişligi dikeldýär</ThemedText>
      </View>
    </PageWrapper>
  );
}

function TipsPage() {
  return (
    <PageWrapper label="Maslahatlar" title="Nähili öwrenmeli">
      <ThemedText style={styles.tipItem}>
        Her gün azajyk geçiň — günde 10-15 minut köp ýagdaýy birden 2 sagatdan has peýdaly. Yzygiderlik beýnä iň gowusy.
      </ThemedText>
      <ThemedText style={styles.tipItem}>
        Ses bilen gaýtalaň. Diňe okamak ýeterlik däl — sözi eşidip, özüňiz hem sesli aýdyň, şonda has gowy ýatda galýar.
      </ThemedText>
      <ThemedText style={styles.tipItem}>
        Söz tertibine üns beriň. Iňlis dilinde eýe — işlik — doldurgyç tertibi berk, ony üýtgetmek manyny bozýar.
      </ThemedText>
      <ThemedText style={styles.tipItem}>
        Nädogry işlikleri toparlap öwreniň. go → went, see → saw ýaly sanawlary birbada däl-de, bölek-bölek ýat tutuň.
      </ThemedText>
      <ThemedText style={styles.tipItem}>
        Ýalňyşlykdan gorkmaň. Her ýalňyş — öwrenmegiň bir bölegi. Gönükmäni täzeden geçip bilersiňiz.
      </ThemedText>
      <ThemedText style={styles.tipItem}>
        Bap synagyny birnäçe gezek geçiň. Her gezek başga soraglar düşýär — pugta ýatda saklamak üçin iň oňat usul.
      </ThemedText>
      <ThemedText style={styles.tipItem}>
        Ýazuw gönükmelerini geçmäň. Olara baha berilmeýär, ýöne öz sözlemiňi düzmek — iň peýdaly maşk.
      </ThemedText>
    </PageWrapper>
  );
}

const PAGES: { key: string; render: () => React.ReactNode }[] = [
  { key: "welcome", render: () => <WelcomePage /> },
  { key: "main", render: () => <MainScreenPage /> },
  { key: "chapters", render: () => <ChaptersPage /> },
  { key: "lesson-flow", render: () => <LessonFlowPage /> },
  { key: "exercises", render: () => <ExercisesPage /> },
  { key: "test", render: () => <TestPage /> },
  { key: "settings", render: () => <SettingsPage /> },
  { key: "tips", render: () => <TipsPage /> },
];

export default function AboutAppScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setCurrentPage(viewableItems[0].index);
      }
    },
    [],
  );

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const goTo = (index: number) => {
    if (index >= 0 && index < PAGES.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} hitSlop={20} style={styles.backButton} accessibilityRole="button" accessibilityLabel={T.a11y.back}>
          <Ionicons name="arrow-back" size={24} color={Colors.light.text} />
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <ThemedText style={styles.headerTitle}>Programma hakynda</ThemedText>
        </View>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        ref={flatListRef}
        data={PAGES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={{ width: SCREEN_WIDTH }}>{item.render()}</View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(_, index) => ({
          length: SCREEN_WIDTH,
          offset: SCREEN_WIDTH * index,
          index,
        })}
      />

      <View style={[styles.bottomNav, { paddingBottom: 12 + insets.bottom }]}>
        <Pressable
          style={[styles.navButton, currentPage === 0 && styles.navButtonDisabled]}
          onPress={() => goTo(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <Ionicons
            name="chevron-back"
            size={18}
            color={currentPage === 0 ? "#ccc" : Colors.primaryAccentColor}
          />
          <ThemedText
            style={[styles.navButtonText, currentPage === 0 && styles.navButtonTextDisabled]}
          >
            Yza
          </ThemedText>
        </Pressable>

        <View style={styles.pageIndicator}>
          <ThemedText style={styles.pageNumber}>
            {currentPage + 1} / {PAGES.length}
          </ThemedText>
          <View style={styles.dots}>
            {PAGES.map((_, i) => (
              <View key={i} style={[styles.dot, i === currentPage && styles.dotActive]} />
            ))}
          </View>
        </View>

        <Pressable
          style={[
            styles.navButton,
            currentPage === PAGES.length - 1 && styles.navButtonDisabled,
          ]}
          onPress={() => goTo(currentPage + 1)}
          disabled={currentPage === PAGES.length - 1}
        >
          <ThemedText
            style={[
              styles.navButtonText,
              currentPage === PAGES.length - 1 && styles.navButtonTextDisabled,
            ]}
          >
            Öňe
          </ThemedText>
          <Ionicons
            name="chevron-forward"
            size={18}
            color={currentPage === PAGES.length - 1 ? "#ccc" : Colors.primaryAccentColor}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surfacePrimary },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
  },
  backButton: { width: 40, height: 40, alignItems: "center", justifyContent: "center" },
  headerTitleContainer: { flex: 1, alignItems: "center" },
  headerTitle: { fontFamily: FontFamily.bold, fontSize: 18, color: Colors.textPrimary },

  pageScroll: { flex: 1 },
  pageContent: { padding: 20, paddingBottom: 20 },
  pageLabel: {
    fontFamily: FontFamily.semibold,
    fontSize: 12,
    color: Colors.primaryAccentColor,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  pageTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: -0.4,
    color: Colors.textPrimary,
    marginBottom: 16,
  },

  body: {
    fontFamily: FontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textSecondary,
    marginBottom: 12,
  },
  listItem: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
    color: Colors.textSecondary,
    marginBottom: 6,
    paddingLeft: 4,
  },

  statsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginVertical: 12 },
  statBox: {
    flex: 1,
    minWidth: "22%",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 12,
    backgroundColor: Colors.primaryAccentBg,
  },
  statValue: {
    fontFamily: FontFamily.bold,
    fontSize: 22,
    color: Colors.primaryAccentColor,
  },
  statLabel: {
    fontFamily: FontFamily.medium,
    fontSize: 11,
    color: Colors.subduedTextColor,
    marginTop: 4,
  },

  featureCard: {
    flexDirection: "row",
    padding: 14,
    borderRadius: 14,
    backgroundColor: Colors.surfaceSecondary,
    marginBottom: 10,
    gap: 12,
    alignItems: "flex-start",
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.primaryAccentBg,
    alignItems: "center",
    justifyContent: "center",
  },
  featureContent: { flex: 1 },
  featureTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  featureDesc: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    lineHeight: 20,
    color: Colors.subduedTextColor,
  },

  stepRow: { flexDirection: "row", marginBottom: 14, gap: 12, alignItems: "flex-start" },
  stepNum: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primaryAccentColor,
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumText: {
    fontFamily: FontFamily.bold,
    fontSize: 14,
    color: Colors.textInverse,
    lineHeight: 16,
  },
  stepContent: { flex: 1, paddingTop: 2 },
  stepTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  stepDesc: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    lineHeight: 20,
    color: Colors.subduedTextColor,
  },

  chapterCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 12,
    backgroundColor: Colors.surfaceSecondary,
    marginBottom: 10,
    gap: 12,
  },
  chapterBadge: {
    fontFamily: FontFamily.bold,
    fontSize: 11,
    color: Colors.textInverse,
    backgroundColor: Colors.primaryAccentColor,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    overflow: "hidden",
    letterSpacing: 0.4,
  },
  chapterBadge2: {
    fontFamily: FontFamily.bold,
    fontSize: 11,
    color: Colors.textInverse,
    backgroundColor: Colors.successColor,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    overflow: "hidden",
    letterSpacing: 0.4,
  },
  chapterContent: { flex: 1 },
  chapterTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  chapterDesc: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    lineHeight: 20,
    color: Colors.subduedTextColor,
  },

  bigBlock: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: Colors.primaryAccentBg,
    marginBottom: 14,
  },
  bigBlockHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  bigBlockTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 17,
    color: Colors.textPrimary,
  },
  bigBlockBody: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
    marginBottom: 6,
  },

  settingCard: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: Colors.surfaceSecondary,
    marginBottom: 10,
  },
  settingTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  settingDesc: {
    fontFamily: FontFamily.regular,
    fontSize: 13,
    color: Colors.subduedTextColor,
    marginBottom: 8,
  },

  tipItem: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
    color: Colors.textSecondary,
    marginBottom: 10,
    paddingLeft: 14,
    borderLeftWidth: 3,
    borderLeftColor: Colors.successColor,
    paddingVertical: 4,
  },

  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    backgroundColor: Colors.surfacePrimary,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    gap: 4,
  },
  navButtonDisabled: { opacity: 0.4 },
  navButtonText: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.primaryAccentColor,
  },
  navButtonTextDisabled: { color: Colors.borderColorStrong },
  pageIndicator: { alignItems: "center", gap: 6 },
  pageNumber: {
    fontFamily: FontFamily.medium,
    fontSize: 13,
    color: Colors.subduedTextColor,
  },
  dots: { flexDirection: "row", gap: 6 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: Colors.borderColorStrong },
  dotActive: { backgroundColor: Colors.primaryAccentColor, width: 20 },
});
