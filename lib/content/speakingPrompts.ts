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
  {
    id: "sp-6",
    text: "Ik ben mijn sleutel vergeten, kunt u de deur openmaken?",
    topic: "wonen",
    level: "A2",
    focusHintRu: "Разделяемый глагол 'openmaken' — в устной речи оба элемента произносятся отдельно и чётко.",
  },
  {
    id: "sp-7",
    text: "Wachten jullie al lang op de dokter?",
    topic: "gezondheid",
    level: "A2",
    focusHintRu: "'wachten op' — устойчивый предлог, произносите как единый смысловой блок.",
  },
  {
    id: "sp-8",
    text: "Ik moet mijn rekening voor het einde van de maand betalen.",
    topic: "geld",
    level: "B1",
    focusHintRu: "Финальное оглушение в 'rekening' — звучит на конце глухо, но пишется через -g.",
  },
  {
    id: "sp-9",
    text: "Heeft u een moment, ik wil graag iets vragen.",
    topic: "gesprek",
    level: "A2",
    focusHintRu: "Вежливая вводная фраза — интонация должна звучать мягко, не как требование.",
  },
  {
    id: "sp-10",
    text: "Ik volg een cursus Nederlands bij de gemeente, twee keer per week.",
    topic: "onderwijs",
    level: "A2",
    focusHintRu: "/x/ в 'cursus' звучит иначе, чем в 'gemeente' — сравните позицию звука в слове.",
  },
  {
    id: "sp-11",
    text: "Kunt u mij helpen met het invullen van dit formulier?",
    topic: "gemeente",
    level: "B1",
    focusHintRu: "Долгий кластер согласных в 'invullen' — не глотайте средние звуки при быстрой речи.",
  },
  {
    id: "sp-12",
    text: "Mijn buurman is heel aardig, we drinken soms samen koffie.",
    topic: "buurt",
    level: "A2",
    focusHintRu: "Огублённый гласный в 'buurman' — не путайте с русским [у].",
  },
  {
    id: "sp-13",
    text: "Ik heb een nieuw adres, ik moet dat nog doorgeven aan de gemeente.",
    topic: "gemeente",
    level: "B1",
    focusHintRu: "Разделяемый глагол 'doorgeven' — 'geven' спрягается, 'door' остаётся в конце.",
  },
  {
    id: "sp-14",
    text: "Ik heb een verzekering afgesloten voor mijn nieuwe woning.",
    topic: "geld",
    level: "B1",
    focusHintRu: "Причастие 'afgesloten' — приставка 'ge-' встраивается внутрь разделяемого глагола.",
  },
  {
    id: "sp-15",
    text: "Ik ga morgen naar de tandarts, ik heb al twee weken kiespijn.",
    topic: "gezondheid",
    level: "A2",
    focusHintRu: "Долгий гласный в 'tandarts' vs короткий в похожих словах — следите за длительностью.",
  },
];
