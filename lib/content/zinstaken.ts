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
  {
    id: "zin-9",
    prompt: "Maak de zin af: 'Voordat ik naar mijn werk ga, ___.'",
    sampleAnswer: "drink ik een kop koffie.",
    explanationRu: "После придаточного с 'voordat', стоящего в начале, в главном предложении — инверсия (глагол перед подлежащим).",
  },
  {
    id: "zin-10",
    prompt: "Schrijf een zin waarin je vraagt om een kopie van een document.",
    sampleAnswer: "Zou ik een kopie van dit document kunnen krijgen?",
    explanationRu: "Вежливая просьба через 'zou... kunnen' — более вежливая конструкция, чем простое 'kan ik'.",
  },
  {
    id: "zin-11",
    prompt: "Maak de zin af: 'Omdat het laat was, ___.'",
    sampleAnswer: "ging ik meteen naar bed.",
    explanationRu: "После 'omdat' в начале — придаточное с глаголом в конце, затем в главном предложении снова инверсия ('ging ik').",
  },
  {
    id: "zin-12",
    prompt: "Schrijf een zin waarin je een compliment geeft over andermans werk.",
    sampleAnswer: "Wat knap dat u dit zo snel heeft opgelost!",
    explanationRu: "Восклицательные конструкции с 'wat' + прилагательное — распространённый способ выразить комплимент.",
  },
  {
    id: "zin-13",
    prompt: "Maak de zin af: 'Zodra ik thuis ben, ___.'",
    sampleAnswer: "bel ik u terug.",
    explanationRu: "'Zodra' (как только) вводит придаточное времени в начале; далее в главном предложении — инверсия.",
  },
  {
    id: "zin-14",
    prompt: "Schrijf een zin waarin je zegt dat je iets niet begrijpt.",
    sampleAnswer: "Ik begrijp dit gedeelte van het formulier niet.",
    explanationRu: "Простое отрицание с 'niet' в конце предложения при отсутствии дополнения после глагола.",
  },
  {
    id: "zin-15",
    prompt: "Maak de zin af: 'Terwijl ik aan het koken was, ___.'",
    sampleAnswer: "ging de telefoon.",
    explanationRu: "'Terwijl' вводит одновременность действий; порядок слов в главном предложении — снова инверсия, так как придаточное стоит первым.",
  },
  {
    id: "zin-16",
    prompt: "Schrijf een zin waarin je een klacht indient over een product.",
    sampleAnswer: "Dit product werkt niet goed en ik wil graag mijn geld terug.",
    explanationRu: "Структура жалобы: описание проблемы + чёткое требование ('ik wil graag...').",
  },
  {
    id: "zin-17",
    prompt: "Maak de zin af: 'Voordat u het formulier opstuurt, ___.'",
    sampleAnswer: "controleert u het nog een keer.",
    explanationRu: "После придаточного времени в начале — инверсия в главном предложении (глагол 'controleert' перед 'u').",
  },
  {
    id: "zin-18",
    prompt: "Schrijf een zin waarin je iemand feliciteert met een nieuwe baan.",
    sampleAnswer: "Gefeliciteerd met je nieuwe baan!",
    explanationRu: "Стандартная формула поздравления: 'Gefeliciteerd met' + существительное.",
  },
];
