// §6 Writing feedback: detect-then-explain, adequacy-gated.
//
// Error detection is hybrid:
//   1. A local regex pattern set (PATTERNS below) — the only thing that
//      reliably catches this app's core word-order/auxiliary-selection
//      patterns (V2, subordinate-clause verb-final, hebben/zijn, separable
//      verbs). These are genuinely rule-governed but LanguageTool's free
//      Dutch rule set does not check them (verified by hand against its
//      public API — it has no rule that fires on "Morgen ik ga" or "Ik heb
//      naar Utrecht gegaan").
//   2. LanguageTool's public checking API (https://api.languagetool.org),
//      a real NLP/rule-based grammar+spellchecker, for the morphological
//      and orthographic errors it *is* good at (de/het, adjective
//      inflection, subject-verb agreement, spelling). This is the "real
//      NLP-backed" half — genuinely external, not a stand-in.
// Matches from LanguageTool are mapped to this app's §5 error codes where
// a confident mapping exists (LT_RULE_MAP below); anything else is still
// surfaced under ERR_NLP_OTHER with LanguageTool's own message, rather
// than silently dropped.
//
// The API call is best-effort: on any failure (offline, rate-limited,
// timeout) detectErrorsCombined() falls back to local-only results, so
// writing feedback never hard-depends on network access.

import { ErrorCode } from "./types";

export interface DetectedError {
  code: ErrorCode;
  span: string;
  hintRu: string;
}

// LanguageTool public API rule ids/categories confirmed (by direct testing
// against api.languagetool.org) to map cleanly onto this app's taxonomy.
const LT_RULE_TO_CODE: Record<string, ErrorCode> = {
  DE_IPV_HET: "ERR_ART_DEHET",
  HET_IPV_DE: "ERR_ART_DEHET",
  EEN_LELIJKE_MEISJE: "ERR_ADJ_INFL",
};

interface LtMatch {
  message: string;
  offset: number;
  length: number;
  replacements: { value: string }[];
  rule: { id: string; category: { name: string } };
}

async function fetchLanguageToolMatches(text: string): Promise<LtMatch[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ text, language: "nl" }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return [];
    const data = (await res.json()) as { matches?: LtMatch[] };
    return data.matches ?? [];
  } catch {
    // Offline, rate-limited, timed out, or CORS-blocked — feedback still
    // works via the local patterns below, just without the NLP layer.
    return [];
  }
}

function ltMatchesToDetectedErrors(text: string, matches: LtMatch[]): DetectedError[] {
  return matches.map((m) => {
    const span = text.slice(m.offset, m.offset + m.length);
    const code = LT_RULE_TO_CODE[m.rule.id];
    if (code) {
      return { code, span, hintRu: `LanguageTool: ${m.message}` };
    }
    const suggestion = m.replacements[0]?.value;
    const hintRu = suggestion
      ? `LanguageTool (нидерл.): ${m.message} Предлагаемое исправление: "${suggestion}".`
      : `LanguageTool (нидерл.): ${m.message}`;
    return { code: "ERR_NLP_OTHER", span, hintRu };
  });
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
    re: /\bik opbel\b|\bik aanbel\b|\bik opruim\b|\bik aanzet\b/i,
    code: "ERR_SEP_SPLIT",
    hintRu: "Это разделяемый глагол — приставка должна уйти в конец предложения, а не остаться перед основой.",
  },
  {
    re: /\b(wij|zij|ze) (ben|is)\b/i,
    code: "ERR_AUX_SEL",
    hintRu: "Проверьте спряжение 'zijn' — с 'wij'/'zij' используется 'zijn', а не 'ben'/'is'.",
  },
  {
    re: /\b(naar|bij|op|in) de \w+ niet\b/i,
    code: "ERR_NEG_POS",
    hintRu: "'Niet' обычно ставится перед предложной группой места ('niet naar de markt'), а не после неё.",
  },
  {
    re: /\b(is|zijn|staat|staan|komt|komen) (een|twee|drie|veel|geen)\b(?!.*\ber\b)/i,
    code: "ERR_ER_EXIST",
    hintRu: "Перед неопределённым подлежащим в начале высказывания обычно нужно вводное 'er' ('Er is een...').",
  },
  {
    re: /\bik heb (twee|drie|vier|vijf|veel|weinig)\b(?!.*\ber\b)/i,
    code: "ERR_ER_QUANT",
    hintRu: "Если существительное после числительного опущено, перед числительным нужно 'er' ('Ik heb er twee').",
  },
  {
    re: /\b(had|heeft|heb) (ge)?\w+ (moeten|willen|kunnen|zullen)\b/i,
    code: "ERR_CLUSTER",
    hintRu: "Проверьте порядок глаголов в кластере — модальный глагол обычно идёт перед смысловым в конце предложения.",
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

// The primary entry point used by the app: local patterns (always
// available, catches the syntax patterns central to this app's taxonomy)
// combined with LanguageTool's NLP checker (best-effort, catches
// morphology/spelling the local patterns don't attempt). Deduplicates by
// span so the same mistake isn't shown twice, and caps the result so the
// one-error-at-a-time review flow in WritingTask doesn't get overwhelming.
const MAX_ERRORS_SHOWN = 6;

export async function detectErrorsCombined(text: string): Promise<DetectedError[]> {
  const local = detectErrors(text);
  const ltMatches = await fetchLanguageToolMatches(text);
  const nlp = ltMatchesToDetectedErrors(text, ltMatches);

  const combined: DetectedError[] = [...local];
  const seenSpans = new Set(local.map((e) => e.span.toLowerCase()));
  for (const e of nlp) {
    const key = e.span.toLowerCase();
    if (seenSpans.has(key)) continue;
    seenSpans.add(key);
    combined.push(e);
  }
  return combined.slice(0, MAX_ERRORS_SHOWN);
}
