import { McItem } from "../types";

// §7 — KNM as rebuilt 1 July 2025: factual multiple-choice, revised
// eindtermen with added emphasis on women's self-determination and
// Holocaust knowledge. These are original demo items modelled on the public
// blueprint, not reproductions of secure Cito material — a real KNM run is
// 40 items / 45 minutes / pass 28-40 [VERIFY]; this is a 21-item mechanism
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
  knmItem({
    id: "knm-7",
    topic: "gelijkheid",
    prompt: "Mogen twee mensen van hetzelfde geslacht in Nederland trouwen?",
    options: ["Ja, dat is wettelijk toegestaan", "Nee, dat mag niet", "Alleen buiten Nederland"],
    correctIndex: 0,
    explanationRu: "Однополые браки легальны в Нидерландах с 2001 года — одна из первых стран в мире.",
  }),
  knmItem({
    id: "knm-8",
    topic: "instellingen",
    prompt: "Welke instantie betaalt een uitkering als je je baan verliest?",
    options: ["UWV", "IND", "Belastingdienst"],
    correctIndex: 0,
    explanationRu: "UWV (Uitvoeringsinstituut Werknemersverzekeringen) занимается пособиями по безработице.",
  }),
  knmItem({
    id: "knm-9",
    topic: "geschiedenis",
    prompt: "Wat is de betekenis van 4 en 5 mei in Nederland?",
    options: ["Dodenherdenking en Bevrijdingsdag", "Koningsdag", "Sinterklaas"],
    correctIndex: 0,
    explanationRu: "4 мая — день поминовения погибших, 5 мая — день освобождения от нацистской оккупации.",
  }),
  knmItem({
    id: "knm-10",
    topic: "gezondheid",
    prompt: "Is een zorgverzekering in Nederland verplicht voor volwassenen?",
    options: ["Ja, voor iedereen verplicht", "Nee, alleen voor ouderen", "Alleen als je ziek bent"],
    correctIndex: 0,
    explanationRu: "Медицинская страховка обязательна для всех взрослых, проживающих в Нидерландах.",
  }),
  knmItem({
    id: "knm-11",
    topic: "instellingen",
    prompt: "Waar moet je je inschrijven als je in een nieuwe gemeente gaat wonen?",
    options: ["Bij de gemeente (basisregistratie)", "Bij de huisarts", "Bij de kerk"],
    correctIndex: 0,
    explanationRu: "Прописка (basisregistratie personen) оформляется в мэрии по новому месту жительства.",
  }),
  knmItem({
    id: "knm-12",
    topic: "vrijheid",
    prompt: "Mag je in Nederland zelf kiezen welke religie je hebt, of geen religie?",
    options: ["Ja, godsdienstvrijheid is een grondrecht", "Nee, iedereen moet dezelfde religie hebben", "Alleen met toestemming van de gemeente"],
    correctIndex: 0,
    explanationRu: "Свобода вероисповедания — конституционное право, включая право не исповедовать никакой религии.",
  }),
  knmItem({
    id: "knm-13",
    topic: "gelijkheid",
    prompt: "Mag een werkgever iemand weigeren om alleen zijn of haar afkomst?",
    options: ["Nee, discriminatie is verboden", "Ja, dat mag hij zelf beslissen", "Alleen bij overheidsbanen"],
    correctIndex: 0,
    explanationRu: "Дискриминация по происхождению при найме на работу запрещена законом.",
  }),
  knmItem({
    id: "knm-14",
    topic: "onderwijs",
    prompt: "Mogen meisjes en jongens in Nederland naar dezelfde school?",
    options: ["Ja, jongens en meisjes leren samen", "Nee, altijd gescheiden scholen", "Alleen tot 10 jaar"],
    correctIndex: 0,
    explanationRu: "Совместное обучение мальчиков и девочек — обычная практика в нидерландских школах.",
  }),
  knmItem({
    id: "knm-15",
    topic: "instellingen",
    prompt: "Bij welke instantie vraag je kinderbijslag aan?",
    options: ["SVB (Sociale Verzekeringsbank)", "IND", "Politie"],
    correctIndex: 0,
    explanationRu: "SVB (Sociale Verzekeringsbank) выплачивает пособия на детей и другие социальные выплаты.",
  }),
  knmItem({
    id: "knm-16",
    topic: "vrijheid",
    prompt: "Mag je in Nederland lid worden van een vakbond?",
    options: ["Ja, vrijheid van vereniging geldt ook hiervoor", "Nee, dat is verboden voor werknemers", "Alleen met toestemming van de werkgever"],
    correctIndex: 0,
    explanationRu: "Свобода объединений включает право вступать в профсоюзы без разрешения работодателя.",
  }),
  knmItem({
    id: "knm-17",
    topic: "gezondheid",
    prompt: "Mag een vrouw in Nederland zelf beslissen over anticonceptie?",
    options: ["Ja, dat is haar eigen keuze", "Nee, alleen met toestemming van haar partner", "Alleen na overleg met de gemeente"],
    correctIndex: 0,
    explanationRu: "Право самостоятельно принимать решения о контрацепции — часть self-determination в обновлённой программе KNM.",
  }),
  knmItem({
    id: "knm-18",
    topic: "geschiedenis",
    prompt: "Wat gebeurde er met de meeste Joodse inwoners van Nederland tijdens de Tweede Wereldoorlog?",
    options: ["De meesten werden gedeporteerd en vermoord tijdens de Holocaust", "Ze werden allemaal beschermd door de regering", "Er veranderde niets voor hen"],
    correctIndex: 0,
    explanationRu: "Большинство еврейского населения Нидерландов было депортировано и убито во время Холокоста — ключевая тема обновлённой программы KNM.",
  }),
  knmItem({
    id: "knm-19",
    topic: "instellingen",
    prompt: "Wat doet de Belastingdienst?",
    options: ["Belasting innen en toeslagen uitbetalen", "Huizen verkopen", "Medicijnen verstrekken"],
    correctIndex: 0,
    explanationRu: "Belastingdienst — налоговая служба, которая также выплачивает пособия (toeslagen).",
  }),
  knmItem({
    id: "knm-20",
    topic: "gelijkheid",
    prompt: "Mag een vrouw in Nederland zonder toestemming van haar man werken, reizen of studeren?",
    options: ["Ja, zij heeft dezelfde rechten als een man", "Nee, ze heeft altijd toestemming nodig", "Alleen als ze getrouwd is"],
    correctIndex: 0,
    explanationRu: "Женщина имеет те же права, что и мужчина, и не нуждается в разрешении супруга — базовый принцип самоопределения.",
  }),
  knmItem({
    id: "knm-21",
    topic: "vrijheid",
    prompt: "Mag je in Nederland vreedzaam demonstreren tegen een beslissing van de overheid?",
    options: ["Ja, demonstratievrijheid is een grondrecht", "Nee, dat is altijd verboden", "Alleen met toestemming van de koning"],
    correctIndex: 0,
    explanationRu: "Свобода мирных демонстраций — конституционное право в Нидерландах.",
  }),
];
