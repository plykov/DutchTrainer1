import { TargetLevel } from "../types";

export interface SpeakingPrompt {
  id: string;
  text: string;
  topic: string;
  level: TargetLevel;
  focusHintRu: string;
}

// §8 — elicited imitation as the cheap speaking proxy for placement and
// progress checks: read the target sentence aloud, then self-compare
// against your own recording. No ASR scoring — see README for why.
export const SPEAKING_PROMPTS: SpeakingPrompt[] = [
  {
    id: "sp-1",
    text: "Ik heb een afspraak bij de huisarts.",
    topic: "gezondheid",
    level: "A2",
    focusHintRu: "Следите за /x/ в 'huisarts' — это не русское [х].",
  },
  {
    id: "sp-2",
    text: "Kunt u mij een andere datum geven?",
    topic: "afspraak_verzetten",
    level: "A2",
    focusHintRu: "Обратите внимание на интонацию вежливого вопроса и позицию глагола 'kunt' в начале.",
  },
  {
    id: "sp-3",
    text: "Ik woon er sinds twee jaar en het bevalt me goed.",
    topic: "wonen",
    level: "B1",
    focusHintRu: "'er' здесь заменяет место — потренируйте его слитное произношение с предыдущим словом.",
  },
  {
    id: "sp-4",
    text: "Kom maar binnen, het is koud buiten.",
    topic: "gesprek",
    level: "A2",
    focusHintRu: "Частица 'maar' произносится безударно и быстро — не выделяйте её как отдельное слово.",
  },
  {
    id: "sp-5",
    text: "Ik heb net een nieuwe baan gevonden bij een groot bedrijf.",
    topic: "werk",
    level: "B1",
    focusHintRu: "Долгота гласных: 'baan' с долгим [aː], в отличие от короткого 'ban'.",
  },
];
