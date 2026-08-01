// §6 Writing feedback: detect-then-explain, adequacy-gated.
// This is a lightweight pattern-based detector — a stand-in for the eventual
// NLP/LLM-backed checker (Phase 2). It demonstrates the required flow:
// task-completion gate first, then span-level error detection against the
// §5 taxonomy, never silent auto-correction.

import { ErrorCode } from "./types";

export interface DetectedError {
  code: ErrorCode;
  span: string;
  hintRu: string;
}

export interface AdequacyResult {
  passed: boolean;
  missing: string[]; // requirement labels not satisfied
}

export function checkAdequacy(text: string, requirements: string[], minLen: number | null): AdequacyResult {
  const missing: string[] = [];
  if (minLen && text.trim().split(/\s+/).filter(Boolean).length < minLen) {
    missing.push(`ответ короче ${minLen} слов`);
  }
  // Heuristic keyword coverage per requirement — Phase 2 replaces this with
  // a proper NLP task-completion classifier.
  const lower = text.toLowerCase();
  const keywordMap: Record<string, string[]> = {
    "vraagt om de afspraak te verzetten": ["verzetten", "andere dag", "andere datum"],
    "geeft een reden": ["omdat", "want", "reden"],
    "stelt een nieuwe datum of vraagt om opties": ["datum", "week", "wanneer", "opties"],
    "beleefde aanhef en afsluiting": ["beste", "geachte", "groet", "bedankt"],
  };
  for (const req of requirements) {
    const keywords = keywordMap[req];
    if (keywords && !keywords.some((k) => lower.includes(k))) missing.push(req);
  }
  return { passed: missing.length === 0, missing };
}

const PATTERNS: { re: RegExp; code: ErrorCode; hintRu: string }[] = [
  {
    re: /\bomdat ik (ben|heb|word)\b/i,
    code: "ERR_SUB_END",
    hintRu: "Проверьте порядок слов после 'omdat' — спрягаемый глагол должен быть в конце.",
  },
  {
    re: /\b(morgen|vandaag|straks|daarna) ik\b/i,
    code: "ERR_V2_POS",
    hintRu: "Проверьте позицию спрягаемого глагола — правило V2 требует его на втором месте.",
  },
  {
    re: /\bik heb (ge)?ga(an)?\b/i,
    code: "ERR_AUX_SEL",
    hintRu: "Проверьте вспомогательный глагол с 'gaan' — hebben или zijn?",
  },
  {
    re: /\bde huis\b/i,
    code: "ERR_ART_DEHET",
    hintRu: "Проверьте артикль перед 'huis'.",
  },
  {
    re: /\bik opbel\b|\bik aanbel\b/i,
    code: "ERR_SEP_SPLIT",
    hintRu: "Это разделяемый глагол — приставка должна уйти в конец предложения.",
  },
];

export function detectErrors(text: string): DetectedError[] {
  const found: DetectedError[] = [];
  for (const p of PATTERNS) {
    const m = text.match(p.re);
    if (m) found.push({ code: p.code, span: m[0], hintRu: p.hintRu });
  }
  return found;
}
