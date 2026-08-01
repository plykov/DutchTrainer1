import { TargetLevel } from "../types";

export interface ListeningQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  explanationRu: string;
}

export interface ListeningItem {
  id: string;
  transcript: string;
  level: TargetLevel;
  topic: string;
  question: ListeningQuestion;
}

// §7 — Luisteren: single listen, no replay, 25s to pre-read the question
// before playback starts. Original transcripts, not exam material.
export const LISTENING_ITEMS: ListeningItem[] = [
  {
    id: "listen-1",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Goedemiddag, u spreekt met de huisartsenpraktijk. Uw afspraak van morgen is verzet naar vrijdag om tien uur. Belt u ons als dat niet uitkomt.",
    question: {
      prompt: "Naar welke dag is de afspraak verzet?",
      options: ["Naar morgen", "Naar vrijdag", "Naar maandag"],
      correctIndex: 1,
      explanationRu: "В сообщении сказано: 'verzet naar vrijdag om tien uur' — приём перенесён на пятницу.",
    },
  },
  {
    id: "listen-2",
    level: "A2",
    topic: "gemeente",
    transcript:
      "Voor het aanvragen van een nieuw paspoort moet u eerst online een afspraak maken bij de gemeente. Neem uw oude paspoort en een pasfoto mee.",
    question: {
      prompt: "Wat moet u eerst doen om een nieuw paspoort aan te vragen?",
      options: ["Een pasfoto laten maken", "Online een afspraak maken", "Naar de huisarts gaan"],
      correctIndex: 1,
      explanationRu: "Ключевое слово 'eerst' (сначала) — сначала нужно записаться онлайн на приём в мэрии.",
    },
  },
  {
    id: "listen-3",
    level: "B1",
    topic: "werk",
    transcript:
      "Bedankt voor uw sollicitatie. We hebben uw cv ontvangen en nodigen u uit voor een gesprek volgende week dinsdag om twee uur op ons kantoor.",
    question: {
      prompt: "Waarvoor wordt de luisteraar uitgenodigd?",
      options: ["Voor een cursus", "Voor een gesprek", "Voor een medische controle"],
      correctIndex: 1,
      explanationRu: "'nodigen u uit voor een gesprek' — приглашают на собеседование.",
    },
  },
  {
    id: "listen-4",
    level: "B1",
    topic: "gezondheid",
    transcript:
      "U kunt uw medicijnen ophalen bij de apotheek naast het ziekenhuis. De apotheek is open tot zes uur vanavond, dus kom op tijd.",
    question: {
      prompt: "Tot hoe laat is de apotheek vanavond open?",
      options: ["Tot vier uur", "Tot zes uur", "Tot acht uur"],
      correctIndex: 1,
      explanationRu: "'open tot zes uur vanavond' — открыто до шести часов вечера.",
    },
  },
  {
    id: "listen-5",
    level: "A2",
    topic: "wonen",
    transcript:
      "Beste bewoner, op maandag komt de monteur langs om de verwarming te controleren. Bent u er niet, bel dan naar het kantoor om een nieuwe afspraak te maken.",
    question: {
      prompt: "Wanneer komt de monteur?",
      options: ["Op maandag", "Op vrijdag", "Vandaag"],
      correctIndex: 0,
      explanationRu: "'op maandag komt de monteur langs' — мастер придёт в понедельник.",
    },
  },
  {
    id: "listen-6",
    level: "A2",
    topic: "onderwijs",
    transcript:
      "De Nederlandse les begint om negen uur, niet om tien uur zoals vorige week. Kom op tijd, want de deur gaat om vijf over negen dicht.",
    question: {
      prompt: "Hoe laat begint de les deze week?",
      options: ["Om negen uur", "Om tien uur", "Om elf uur"],
      correctIndex: 0,
      explanationRu: "'de les begint om negen uur, niet om tien uur' — время изменилось на девять часов.",
    },
  },
  {
    id: "listen-7",
    level: "B1",
    topic: "geld",
    transcript:
      "Uw rekening van deze maand is hoger dan normaal, omdat u meer stroom heeft gebruikt. Betaal het bedrag voor de vijftiende, anders krijgt u een herinnering.",
    question: {
      prompt: "Waarom is de rekening hoger dan normaal?",
      options: ["Meer stroom gebruikt", "Een fout van het bedrijf", "Een nieuwe woning"],
      correctIndex: 0,
      explanationRu: "'omdat u meer stroom heeft gebruikt' — счёт выше из-за большего потребления электроэнергии.",
    },
  },
  {
    id: "listen-8",
    level: "A2",
    topic: "gezondheid",
    transcript:
      "Uw recept is klaar bij de apotheek. U kunt het medicijn ophalen met uw pas. Neem het drie keer per dag in, na het eten.",
    question: {
      prompt: "Hoe vaak per dag moet u het medicijn innemen?",
      options: ["Een keer", "Twee keer", "Drie keer"],
      correctIndex: 2,
      explanationRu: "'Neem het drie keer per dag in' — принимать три раза в день.",
    },
  },
  {
    id: "listen-9",
    level: "B1",
    topic: "werk",
    transcript:
      "Uw contract loopt over twee maanden af. Als u wilt verlengen, moet u dat voor het einde van deze maand aan uw werkgever laten weten.",
    question: {
      prompt: "Wanneer loopt het contract af?",
      options: ["Over twee weken", "Over twee maanden", "Volgend jaar"],
      correctIndex: 1,
      explanationRu: "'Uw contract loopt over twee maanden af' — контракт заканчивается через два месяца.",
    },
  },
  {
    id: "listen-10",
    level: "A2",
    topic: "gemeente",
    transcript:
      "Voor een nieuwe pas moet u langskomen bij de gemeente met uw oude pas en een pasfoto. De balie is open van negen tot vier uur.",
    question: {
      prompt: "Wat moet u meenemen naar de gemeente?",
      options: ["Alleen een pasfoto", "De oude pas en een pasfoto", "Niets"],
      correctIndex: 1,
      explanationRu: "'met uw oude pas en een pasfoto' — нужно принести старую карту и фото.",
    },
  },
  {
    id: "listen-11",
    level: "B1",
    topic: "wonen",
    transcript:
      "De huur voor uw woning gaat volgend jaar iets omhoog. U krijgt binnenkort een brief met het nieuwe bedrag en de datum.",
    question: {
      prompt: "Wat gebeurt er met de huur volgend jaar?",
      options: ["Ze gaat omlaag", "Ze blijft gelijk", "Ze gaat omhoog"],
      correctIndex: 2,
      explanationRu: "'De huur ... gaat ... iets omhoog' — арендная плата немного повысится.",
    },
  },
  {
    id: "listen-12",
    level: "A2",
    topic: "afspraak_verzetten",
    transcript:
      "Uw afspraak bij de tandarts van donderdag is helaas geannuleerd. We bellen u volgende week om een nieuwe datum af te spreken.",
    question: {
      prompt: "Wat is er gebeurd met de afspraak van donderdag?",
      options: ["Ze is verzet naar vrijdag", "Ze is geannuleerd", "Ze blijft hetzelfde"],
      correctIndex: 1,
      explanationRu: "'is helaas geannuleerd' — приём отменён.",
    },
  },
  {
    id: "listen-13",
    level: "B1",
    topic: "geld",
    transcript:
      "Om een verzekering af te sluiten, heeft u een polis en uw inkomen nodig. U kunt alles online invullen op onze website.",
    question: {
      prompt: "Wat heeft u nodig om een verzekering af te sluiten?",
      options: ["Een polis en uw inkomen", "Alleen een adres", "Een nieuw paspoort"],
      correctIndex: 0,
      explanationRu: "'een polis en uw inkomen nodig' — для оформления страховки нужны полис и данные о доходе.",
    },
  },
  {
    id: "listen-14",
    level: "A2",
    topic: "buurt",
    transcript:
      "Volgende week is er een bijeenkomst voor de hele buurt in het buurthuis. Iedereen is welkom, ook kinderen.",
    question: {
      prompt: "Voor wie is de bijeenkomst?",
      options: ["Alleen volwassenen", "Voor de hele buurt", "Alleen voor kinderen"],
      correctIndex: 1,
      explanationRu: "'Iedereen is welkom, ook kinderen' — собрание для всех жителей района.",
    },
  },
];
