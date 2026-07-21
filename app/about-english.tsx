import { ThemedText } from "@/components/themed-text";
import { Colors, FontFamily, Radius } from "@/constants/theme";
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

/** A single English form with its Turkmen meaning. */
function ExampleRow({ english, turkmen }: { english: string; turkmen: string }) {
  return (
    <View style={styles.exampleRow}>
      <ThemedText style={styles.exampleEnglish}>{english}</ThemedText>
      <ThemedText style={styles.exampleTurkmen}>{turkmen}</ThemedText>
    </View>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

function WhatIsEnglishPage() {
  return (
    <PageWrapper label="Tanyşlyk" title="Iňlis dili näme?">
      <ThemedText style={styles.body}>
        Iňlis dili dünýäde iň köp öwrenilýän dil. Ony ene dili hökmünde 400
        milliona golaý adam ulanýar, ikinji dil hökmünde bolsa — bir milliarddan
        gowrak.
      </ThemedText>
      <ThemedText style={styles.body}>
        Ol halkara aragatnaşygyň, internetiň, ylmyň we işewürligiň dili. Şonuň
        üçin iňlis dilini bilmek okuw, iş we syýahat üçin gapy açýar.
      </ThemedText>
      <Card>
        <ThemedText style={styles.cardTitle}>Gowy habar</ThemedText>
        <ThemedText style={styles.cardText}>
          Iňlis dilinde sözler üýtgemeýär diýen ýaly: at sözlerde düşüm
          goşulmalary ýok, işlikler bolsa örän az üýtgeýär. Türkmen dili bilen
          deňeşdireniňde grammatikasy ýönekeý.
        </ThemedText>
      </Card>
    </PageWrapper>
  );
}

function AlphabetPage() {
  return (
    <PageWrapper label="Ýazuw" title="Elipbiý">
      <ThemedText style={styles.body}>
        Iňlis elipbiýinde 26 harp bar — hemmesi latyn harplary, türkmen
        elipbiýindäki ýaly. Emma ses bilen ýazuwyň arasy hemişe gabat gelmeýär.
      </ThemedText>
      <Card>
        <ThemedText style={styles.cardTitle}>Bir harp — birnäçe ses</ThemedText>
        <ExampleRow english="cat" turkmen="[kät] — gysga a" />
        <ExampleRow english="car" turkmen="[kaa] — uzyn a" />
        <ExampleRow english="care" turkmen="[keə] — düýbünden başga" />
      </Card>
      <ThemedText style={styles.body}>
        Şonuň üçin täze sözi diňe okamak ýeterlik däl — aýdylyşyny hem
        diňlemeli. Programmada her sözüň ýanynda ses düwmesi bar.
      </ThemedText>
    </PageWrapper>
  );
}

function WordOrderPage() {
  return (
    <PageWrapper label="Grammatika" title="Söz tertibi">
      <ThemedText style={styles.body}>
        Iňlis dilinde söz tertibi berk: eýe → işlik → doldurgyç. Türkmen dilinde
        işlik soňunda gelýär, iňlis dilinde bolsa ortada.
      </ThemedText>
      <Card>
        <ExampleRow english="I read a book." turkmen="Men kitap okaýaryn." />
        <ExampleRow english="She loves music." turkmen="Ol sazy söýýär." />
      </Card>
      <ThemedText style={styles.body}>
        Tertibi üýtgetseň, many üýtgeýär ýa-da ýitýär. Şonuň üçin iňlis dilinde
        tertip — grammatikanyň özi.
      </ThemedText>
    </PageWrapper>
  );
}

function ArticlesPage() {
  return (
    <PageWrapper label="Grammatika" title="Artikller: a, an, the">
      <ThemedText style={styles.body}>
        Türkmen dilinde artikl ýok, şonuň üçin bu tema başda kyn görünýär. Ýöne
        düzgün ýönekeý.
      </ThemedText>
      <Card>
        <ThemedText style={styles.cardTitle}>a / an — nätanyş zat</ThemedText>
        <ExampleRow english="a book" turkmen="haýsydyr bir kitap" />
        <ExampleRow english="an apple" turkmen="çekimli sesden öň — an" />
      </Card>
      <Card>
        <ThemedText style={styles.cardTitle}>the — tanyş zat</ThemedText>
        <ExampleRow english="the book" turkmen="edil şol kitap" />
      </Card>
    </PageWrapper>
  );
}

function TensesPage() {
  return (
    <PageWrapper label="Grammatika" title="Esasy zamanlar">
      <ThemedText style={styles.body}>
        Başlangyç derejede üç zaman ýeterlik. Bu kursda olaryň hemmesi
        yzygiderli öwredilýär.
      </ThemedText>
      <Card>
        <ThemedText style={styles.cardTitle}>Present Simple — hemişelik</ThemedText>
        <ExampleRow english="I work every day." turkmen="Men her gün işleýärin." />
      </Card>
      <Card>
        <ThemedText style={styles.cardTitle}>Present Continuous — häzir</ThemedText>
        <ExampleRow english="I am working now." turkmen="Men häzir işleýärin." />
      </Card>
      <Card>
        <ThemedText style={styles.cardTitle}>Past Simple — geçmiş</ThemedText>
        <ExampleRow english="I worked yesterday." turkmen="Men düýn işledim." />
      </Card>
    </PageWrapper>
  );
}

function IrregularVerbsPage() {
  return (
    <PageWrapper label="Grammatika" title="Nädogry işlikler">
      <ThemedText style={styles.body}>
        Köp işlik geçmiş zamanda -ed goşulmasyny alýar: work → worked. Ýöne iň
        köp ulanylýan işlikler bu düzgüne boýun bolmaýar — olary ýat tutmaly.
      </ThemedText>
      <Card>
        <ExampleRow english="go → went" turkmen="gitmek" />
        <ExampleRow english="see → saw" turkmen="görmek" />
        <ExampleRow english="have → had" turkmen="bolmak, eýe bolmak" />
        <ExampleRow english="sing → sang" turkmen="aýdym aýtmak" />
      </Card>
      <ThemedText style={styles.body}>
        Gorkma: gündelik gepleşikde 50-60 sany nädogry işlik ýeterlik.
      </ThemedText>
    </PageWrapper>
  );
}

function StudyStructurePage() {
  return (
    <PageWrapper label="Kurs" title="Bu kurs nähili gurlan">
      <ThemedText style={styles.body}>
        Kurs baplardan durýar, her bap bir grammatik tema bagyşlanan. Her bapda
        dört sapak we bir synag bar.
      </ThemedText>
      <Card>
        <ThemedText style={styles.cardTitle}>Sapagyň içi</ThemedText>
        <ThemedText style={styles.cardText}>
          Gysga düşündiriş → gönükmeler → ýene düşündiriş. Teoriýa aýratyn
          ýatdan öwrenilmeýär, ol maşkyň ýanynda berilýär.
        </ThemedText>
      </Card>
      <Card>
        <ThemedText style={styles.cardTitle}>Bap synagy</ThemedText>
        <ThemedText style={styles.cardText}>
          Bapdaky gönükmelerden 15-si tötänleýin saýlanýar. Geçmek üçin 70%
          gerek. Synagy tabşyrmasaň, indiki bap açylmaýar.
        </ThemedText>
      </Card>
    </PageWrapper>
  );
}

function TipsPage() {
  return (
    <PageWrapper label="Maslahat" title="Nädip has çalt öwrenmeli">
      <Card>
        <ThemedText style={styles.cardTitle}>Her gün az-azdan</ThemedText>
        <ThemedText style={styles.cardText}>
          Hepdede bir gezek iki sagatdan, her gün 15 minut has peýdaly. Streak
          hasaplaýjy şonuň üçin bar.
        </ThemedText>
      </Card>
      <Card>
        <ThemedText style={styles.cardTitle}>Ses bilen gaýtala</ThemedText>
        <ThemedText style={styles.cardText}>
          Diňe okamak ýeterlik däl. Sözi eşit, soň özüň sesli aýt — şonda ýatda
          has gowy galýar.
        </ThemedText>
      </Card>
      <Card>
        <ThemedText style={styles.cardTitle}>Ýalňyşdan gorkma</ThemedText>
        <ThemedText style={styles.cardText}>
          Ýazuw gönükmeleri bahalandyrylmaýar — olar erkin maşk üçin. Ýalňyş
          goýberseň, ol seniň bahaňa täsir etmeýär.
        </ThemedText>
      </Card>
    </PageWrapper>
  );
}

const PAGES: { key: string; render: () => React.ReactNode }[] = [
  { key: "what-is", render: () => <WhatIsEnglishPage /> },
  { key: "alphabet", render: () => <AlphabetPage /> },
  { key: "word-order", render: () => <WordOrderPage /> },
  { key: "articles", render: () => <ArticlesPage /> },
  { key: "tenses", render: () => <TensesPage /> },
  { key: "irregular", render: () => <IrregularVerbsPage /> },
  { key: "study", render: () => <StudyStructurePage /> },
  { key: "tips", render: () => <TipsPage /> },
];

export default function AboutEnglishScreen() {
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
        <Pressable
          onPress={() => router.back()}
          hitSlop={20}
          style={styles.backButton}
          accessibilityRole="button"
          accessibilityLabel={T.a11y.back}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <ThemedText style={styles.headerTitle}>Iňlis dili hakynda</ThemedText>
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
            size={22}
            color={currentPage === 0 ? Colors.borderColorStrong : Colors.primaryAccentColor}
          />
        </Pressable>

        <View style={styles.dots}>
          {PAGES.map((page, i) => (
            <View
              key={page.key}
              style={[styles.dot, i === currentPage && styles.dotActive]}
            />
          ))}
        </View>

        <Pressable
          style={[
            styles.navButton,
            currentPage === PAGES.length - 1 && styles.navButtonDisabled,
          ]}
          onPress={() => goTo(currentPage + 1)}
          disabled={currentPage === PAGES.length - 1}
        >
          <Ionicons
            name="chevron-forward"
            size={22}
            color={
              currentPage === PAGES.length - 1
                ? Colors.borderColorStrong
                : Colors.primaryAccentColor
            }
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
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleContainer: { flex: 1, alignItems: "center" },
  headerTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 18,
    color: Colors.textPrimary,
  },

  pageScroll: { flex: 1 },
  pageContent: { padding: 24, paddingBottom: 40 },
  pageLabel: {
    fontFamily: FontFamily.semibold,
    fontSize: 12,
    color: Colors.primaryAccentColor,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  pageTitle: {
    fontFamily: FontFamily.bold,
    fontSize: 26,
    color: Colors.textPrimary,
    marginBottom: 16,
    letterSpacing: -0.4,
  },
  body: {
    fontFamily: FontFamily.regular,
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textPrimary,
    marginBottom: 14,
  },

  card: {
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: Radius.lg,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  cardText: {
    fontFamily: FontFamily.regular,
    fontSize: 14,
    lineHeight: 21,
    color: Colors.textSecondary,
  },

  exampleRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 6,
    gap: 10,
  },
  exampleEnglish: {
    fontFamily: FontFamily.semibold,
    fontSize: 15,
    color: Colors.primaryAccentColor,
    minWidth: 120,
  },
  exampleTurkmen: {
    flex: 1,
    fontFamily: FontFamily.regular,
    fontSize: 14,
    color: Colors.textSecondary,
  },

  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryAccentBg,
  },
  navButtonDisabled: { backgroundColor: Colors.surfaceTertiary },
  dots: { flexDirection: "row", gap: 6 },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Colors.borderColorStrong,
  },
  dotActive: {
    backgroundColor: Colors.primaryAccentColor,
    width: 20,
  },
});
