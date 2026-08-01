import { McItem } from "../types";

// §7 — Staatsexamen NT2 P1 Lezen: 110 min / 6 texts / ~36 MC items [VERIFY].
// Original short passages modelled on the public blueprint, not
// reproductions of secure material. This is a 15-item mechanism demo
// (single pass, countdown, no feedback until the run ends via ExamRunner),
// not a full-length 36-question run.
function lezenItem(overrides: Omit<McItem, keyof ReturnType<typeof base>> & Partial<ReturnType<typeof base>>): McItem {
  return { ...base(), ...overrides } as McItem;
}

function base() {
  return {
    examTrack: "staatsexamen_p1" as const,
    cefrLevel: "B1" as const,
    skill: "reading" as const,
    taskType: "mc" as const,
    register: "neutral" as const,
    regionVariant: "netherlandic" as const,
    targetLemmas: [],
    errorCodes: [],
    l1ContrastFlag: false,
    singleListen: false,
    allowedTools: "dictionary" as const,
    timeLimitS: 183, // ~110 min / 36 items
    responseMinLen: null,
    difficultyTheta: 0,
  };
}

export const LEZEN_ITEMS: McItem[] = [
  lezenItem({
    id: "lezen-1",
    topic: "gemeente",
    prompt:
      "Beste bewoner,\n\nVanaf 1 september is de gemeentebalie alleen op afspraak open. U kunt online een afspraak maken via de website. Zonder afspraak kunt u niet geholpen worden.\n\nVraag: Wat moet u doen voordat u naar de gemeentebalie gaat?",
    options: ["Online een afspraak maken", "Gewoon langskomen", "Bellen naar de politie"],
    correctIndex: 0,
    explanationRu: "Текст явно говорит: с 1 сентября без предварительной онлайн-записи попасть на приём нельзя.",
  }),
  lezenItem({
    id: "lezen-2",
    topic: "gezondheid",
    prompt:
      "De huisartsenpraktijk is deze week gesloten wegens een studiedag. Voor spoedgevallen kunt u bellen naar de huisartsenpost. Voor niet-spoedeisende zaken kunt u volgende week weer terecht.\n\nVraag: Wat kunt u doen bij een spoedgeval deze week?",
    options: ["Bellen naar de huisartsenpost", "Wachten tot volgende week", "Naar de gemeente gaan"],
    correctIndex: 0,
    explanationRu: "Для срочных случаев указан отдельный номер — huisartsenpost, а не ожидание до следующей недели.",
  }),
  lezenItem({
    id: "lezen-3",
    topic: "werk",
    prompt:
      "Wij zoeken een collega voor de ochtenddienst, van 7 tot 12 uur. Ervaring is niet vereist, wel goede beheersing van het Nederlands. Reageren kan tot vrijdag.\n\nVraag: Is werkervaring vereist voor deze baan?",
    options: ["Nee, ervaring is niet vereist", "Ja, minimaal twee jaar ervaring", "Alleen ervaring in de zorg"],
    correctIndex: 0,
    explanationRu: "В объявлении прямо сказано: 'Ervaring is niet vereist' — опыт не требуется.",
  }),
  lezenItem({
    id: "lezen-4",
    topic: "wonen",
    prompt:
      "Let op: vanaf maandag wordt er in het hele gebouw aan de leidingen gewerkt. Het water kan tussen 9 en 15 uur worden afgesloten. Vul op tijd genoeg water af.\n\nVraag: Wat wordt er in het gebouw gedaan?",
    options: ["Er wordt aan de leidingen gewerkt", "Het gebouw wordt geverfd", "Er komt een nieuwe lift"],
    correctIndex: 0,
    explanationRu: "'aan de leidingen gewerkt' — идут работы по трубам/коммуникациям.",
  }),
  lezenItem({
    id: "lezen-5",
    topic: "onderwijs",
    prompt:
      "De cursus Nederlands B1 start over twee weken. Er zijn nog vijf plaatsen vrij. Inschrijven kan via de website van de gemeente, tot en met komende vrijdag.\n\nVraag: Tot wanneer kun je je inschrijven voor de cursus?",
    options: ["Tot en met vrijdag", "Tot het einde van de maand", "Er is geen deadline"],
    correctIndex: 0,
    explanationRu: "'Inschrijven kan ... tot en met komende vrijdag' — запись открыта до пятницы включительно.",
  }),
  lezenItem({
    id: "lezen-6",
    topic: "geld",
    prompt:
      "Uw energierekening wordt voortaan maandelijks geïncasseerd in plaats van per kwartaal. Dit verandert niets aan het totale jaarbedrag, alleen de betaalfrequentie.\n\nVraag: Wat verandert er precies?",
    options: ["Alleen hoe vaak u betaalt", "Het totale jaarbedrag stijgt", "U hoeft niet meer te betalen"],
    correctIndex: 0,
    explanationRu: "'Dit verandert niets aan het totale jaarbedrag, alleen de betaalfrequentie' — меняется только частота платежей.",
  }),
  lezenItem({
    id: "lezen-7",
    topic: "buurt",
    prompt:
      "Op zaterdag organiseert de buurtvereniging een opruimdag. Iedereen die wil helpen, verzamelt om 10 uur bij het buurthuis. Handschoenen worden uitgedeeld.\n\nVraag: Waar verzamelen de deelnemers?",
    options: ["Bij het buurthuis", "Bij de gemeente", "Bij het ziekenhuis"],
    correctIndex: 0,
    explanationRu: "'verzamelt om 10 uur bij het buurthuis' — сбор у общественного дома района.",
  }),
  lezenItem({
    id: "lezen-8",
    topic: "documenten",
    prompt:
      "Om een uittreksel uit het bevolkingsregister aan te vragen, heeft u een geldig identiteitsbewijs nodig. Dit kan zowel online als aan de balie van de gemeente.\n\nVraag: Wat heeft u nodig om een uittreksel aan te vragen?",
    options: ["Een geldig identiteitsbewijs", "Een medische verklaring", "Een werkgeversverklaring"],
    correctIndex: 0,
    explanationRu: "'heeft u een geldig identiteitsbewijs nodig' — нужен действительный документ, удостоверяющий личность.",
  }),
  lezenItem({
    id: "lezen-9",
    topic: "gezondheid",
    prompt:
      "Het ziekenhuis vraagt patiënten om vijftien minuten voor de afspraak aanwezig te zijn, in verband met de inschrijving bij de balie.\n\nVraag: Hoeveel eerder moet je aanwezig zijn?",
    options: ["Vijftien minuten", "Een uur", "Vijf minuten"],
    correctIndex: 0,
    explanationRu: "'vijftien minuten voor de afspraak aanwezig te zijn' — прийти на пятнадцать минут раньше.",
  }),
  lezenItem({
    id: "lezen-10",
    topic: "werk",
    prompt:
      "Vanwege een reorganisatie verandert het rooster per 1 oktober. Medewerkers ontvangen hun nieuwe rooster uiterlijk twee weken van tevoren.\n\nVraag: Wanneer ontvangen medewerkers hun nieuwe rooster ten laatste?",
    options: ["Twee weken van tevoren", "Op de dag zelf", "Een maand van tevoren"],
    correctIndex: 0,
    explanationRu: "'ontvangen hun nieuwe rooster uiterlijk twee weken van tevoren' — не позднее чем за две недели.",
  }),
  lezenItem({
    id: "lezen-11",
    topic: "wonen",
    prompt:
      "De huurverhoging voor dit jaar bedraagt maximaal 3 procent, zoals landelijk vastgesteld. Verhuurders die meer vragen, overtreden de regels.\n\nVraag: Wat is het maximale huurverhogingspercentage dit jaar?",
    options: ["3 procent", "10 procent", "Er is geen maximum"],
    correctIndex: 0,
    explanationRu: "'maximaal 3 procent' — максимум три процента повышения аренды.",
  }),
  lezenItem({
    id: "lezen-12",
    topic: "onderwijs",
    prompt:
      "Kinderen tussen 5 en 16 jaar zijn in Nederland leerplichtig. Daarna geldt tot 18 jaar de kwalificatieplicht, tenzij ze al een startkwalificatie hebben.\n\nVraag: Tot welke leeftijd geldt de leerplicht?",
    options: ["16 jaar", "18 jaar", "21 jaar"],
    correctIndex: 0,
    explanationRu: "'leerplichtig' до 16 лет, затем частичная kwalificatieplicht — до 18, если нет базовой квалификации.",
  }),
  lezenItem({
    id: "lezen-13",
    topic: "geld",
    prompt:
      "Als u recht heeft op zorgtoeslag, wordt deze automatisch maandelijks op uw rekening gestort door de Belastingdienst, mits u zich op tijd heeft aangemeld.\n\nVraag: Wie stort de zorgtoeslag?",
    options: ["De Belastingdienst", "De gemeente", "Uw werkgever"],
    correctIndex: 0,
    explanationRu: "'wordt ... gestort door de Belastingdienst' — пособие на медстраховку выплачивает налоговая служба.",
  }),
  lezenItem({
    id: "lezen-14",
    topic: "dagelijks_leven",
    prompt:
      "De supermarkt is op nationale feestdagen gesloten, behalve op Koningsdag, wanneer de openingstijden beperkt zijn tot 10 tot 17 uur.\n\nVraag: Wat geldt er voor Koningsdag?",
    options: ["Beperkte openingstijden, van 10 tot 17 uur", "Volledig gesloten", "Normale openingstijden"],
    correctIndex: 0,
    explanationRu: "'behalve op Koningsdag, wanneer de openingstijden beperkt zijn' — в День короля магазин работает по сокращённому графику.",
  }),
  lezenItem({
    id: "lezen-15",
    topic: "documenten",
    prompt:
      "Formulieren die u per post opstuurt naar de gemeente, moeten binnen twee weken na verzending worden bevestigd met een ontvangstbewijs. Ontvangt u niets, neem dan telefonisch contact op.\n\nVraag: Wat moet u doen als u geen ontvangstbewijs krijgt?",
    options: ["Telefonisch contact opnemen", "Niets doen", "Het formulier weggooien"],
    correctIndex: 0,
    explanationRu: "'Ontvangt u niets, neem dan telefonisch contact op' — если подтверждение не пришло, нужно позвонить.",
  }),
];
