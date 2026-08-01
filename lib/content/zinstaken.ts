export interface ZinsTaakItem {
  id: string;
  prompt: string;
  sampleAnswer: string;
  explanationRu: string;
}

// §7 — Schrijven zinstaken: write one sentence or complete one, max 2 points
// each in the real exam. No auto-grading here — reveal the sample answer
// and self-compare, consistent with the rest of the app's approach when
// there's no NLP backend to score free text against.
export const ZINSTAKEN_ITEMS: ZinsTaakItem[] = [
  {
    id: "zin-1",
    prompt: "Maak de zin af: 'Ik kan morgen niet komen, want ___.'",
    sampleAnswer: "ik moet werken.",
    explanationRu: "После 'want' идёт обычный порядок слов (не как после 'omdat'), просто причина.",
  },
  {
    id: "zin-2",
    prompt: "Schrijf een zin waarin je een afspraak afzegt.",
    sampleAnswer: "Ik moet mijn afspraak van morgen helaas afzeggen.",
    explanationRu: "Ключевые слова для отмены — 'afzeggen', вежливое 'helaas'.",
  },
  {
    id: "zin-3",
    prompt: "Maak de zin af: 'Als het morgen regent, ___.'",
    sampleAnswer: "blijf ik thuis.",
    explanationRu: "После условного 'als'-предложения в начале — инверсия: глагол перед подлежащим ('blijf ik').",
  },
  {
    id: "zin-4",
    prompt: "Schrijf een zin waarin je om hulp vraagt bij een formulier.",
    sampleAnswer: "Kunt u mij helpen met dit formulier?",
    explanationRu: "Вежливая просьба о помощи начинается с модального глагола 'kunt' в начале вопроса.",
  },
  {
    id: "zin-5",
    prompt: "Maak de zin af: 'Nadat ik gegeten had, ___.'",
    sampleAnswer: "ging ik naar bed.",
    explanationRu: "'Nadat' вводит придаточное предшествования; в главном предложении — обычная инверсия V2.",
  },
  {
    id: "zin-6",
    prompt: "Schrijf een zin waarin je uitlegt dat je ziek bent.",
    sampleAnswer: "Ik voel me niet goed en blijf vandaag thuis.",
    explanationRu: "Простая, естественная формулировка причины отсутствия.",
  },
  {
    id: "zin-7",
    prompt: "Maak de zin af: 'Hoewel het duur was, ___.'",
    sampleAnswer: "heb ik het toch gekocht.",
    explanationRu: "'Hoewel' (хотя) требует придаточного с глаголом в конце; в главном предложении — снова инверсия.",
  },
  {
    id: "zin-8",
    prompt: "Schrijf een zin waarin je vraagt hoe laat een winkel opengaat.",
    sampleAnswer: "Weet u hoe laat de winkel opengaat?",
    explanationRu: "Косвенный вопрос: порядок слов как в утверждении ('de winkel opengaat'), не как в прямом вопросе.",
  },
];
