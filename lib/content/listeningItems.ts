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
];
