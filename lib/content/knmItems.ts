import { McItem } from "../types";

// §7 — KNM as rebuilt 1 July 2025: factual multiple-choice, revised
// eindtermen with added emphasis on women's self-determination and
// Holocaust knowledge. These are original demo items modelled on the public
// blueprint, not reproductions of secure Cito material — a real KNM run is
// 40 items / 45 minutes / pass 28-40 [VERIFY]; this is a 6-item mechanism
// demo, not a full-length practice test.
function knmItem(overrides: Omit<McItem, keyof ReturnType<typeof base>> & Partial<ReturnType<typeof base>>): McItem {
  return { ...base(), ...overrides } as McItem;
}

function base() {
  return {
    examTrack: "knm" as const,
    cefrLevel: "A2" as const,
    skill: "reading" as const,
    taskType: "mc" as const,
    register: "neutral" as const,
    regionVariant: "netherlandic" as const,
    targetLemmas: [],
    errorCodes: [],
    l1ContrastFlag: false,
    singleListen: false,
    allowedTools: "none" as const,
    timeLimitS: 68, // ~45 min / 40 items
    responseMinLen: null,
    difficultyTheta: 0,
  };
}

export const KNM_ITEMS: McItem[] = [
  knmItem({
    id: "knm-1",
    topic: "gelijkheid",
    prompt: "Mag een vrouw in Nederland zelf beslissen of ze buitenshuis werkt?",
    options: ["Ja, dat mag zij zelf beslissen", "Nee, alleen met toestemming van haar man", "Alleen als de gemeente het goedkeurt"],
    correctIndex: 0,
    explanationRu: "В Нидерландах женщина сама решает, работать ли ей вне дома — это часть самоопределения, закреплённого в eindtermen KNM с 2025 года.",
  }),
  knmItem({
    id: "knm-2",
    topic: "geschiedenis",
    prompt: "In welke jaren vond de Tweede Wereldoorlog in Nederland plaats?",
    options: ["1914–1918", "1940–1945", "1950–1955"],
    correctIndex: 1,
    explanationRu: "Нидерланды были оккупированы с 1940 по 1945 год. Знание Холокоста — отдельный обязательный блок в обновлённой программе KNM.",
  }),
  knmItem({
    id: "knm-3",
    topic: "gelijkheid",
    prompt: "Moeten mannen en vrouwen volgens de wet gelijk loon krijgen voor gelijk werk?",
    options: ["Ja, dat is wettelijk verplicht", "Nee, de werkgever mag zelf kiezen", "Alleen in de overheidssector"],
    correctIndex: 0,
    explanationRu: "Равная оплата за равный труд закреплена законом в Нидерландах.",
  }),
  knmItem({
    id: "knm-4",
    topic: "instellingen",
    prompt: "Bij welke instantie vraag je een verblijfsvergunning aan?",
    options: ["IND", "Belastingdienst", "UWV"],
    correctIndex: 0,
    explanationRu: "IND (Immigratie- en Naturalisatiedienst) занимается видами на жительство.",
  }),
  knmItem({
    id: "knm-5",
    topic: "onderwijs",
    prompt: "Is onderwijs in Nederland verplicht voor kinderen tot en met 16 jaar?",
    options: ["Ja, er is leerplicht", "Nee, onderwijs is altijd vrijwillig", "Alleen voor jongens"],
    correctIndex: 0,
    explanationRu: "В Нидерландах действует leerplicht (обязательное образование) минимум до 16 лет, затем ещё частичная kwalificatieplicht.",
  }),
  knmItem({
    id: "knm-6",
    topic: "vrijheid",
    prompt: "Mag je in Nederland in het openbaar kritiek geven op de regering?",
    options: ["Ja, vrijheid van meningsuiting geldt ook hiervoor", "Nee, dat is verboden", "Alleen via een advocaat"],
    correctIndex: 0,
    explanationRu: "Свобода слова гарантирована конституцией и распространяется на критику власти.",
  }),
];
