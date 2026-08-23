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
  hintEn: string;
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
      return { code, span, hintRu: `LanguageTool: ${m.message}`, hintEn: `LanguageTool: ${m.message}` };
    }
    const suggestion = m.replacements[0]?.value;
    const hintRu = suggestion
      ? `LanguageTool (нидерл.): ${m.message} Предлагаемое исправление: "${suggestion}".`
      : `LanguageTool (нидерл.): ${m.message}`;
    const hintEn = suggestion
      ? `LanguageTool (Dutch): ${m.message} Suggested correction: "${suggestion}".`
      : `LanguageTool (Dutch): ${m.message}`;
    return { code: "ERR_NLP_OTHER", span, hintRu, hintEn };
  });
}

export interface AdequacyResult {
  passed: boolean;
  missing: string[]; // requirement labels not satisfied
}

export interface AdequacyContext {
  taskPrompt: string;
  modelAnswer: string;
}

// Hand-tuned overrides for requirement phrasings where the generic
// derivation below (stopword-stripping) would leave the wrong keyword —
// e.g. "de afspraak te verzetten" strips down to "afspraak", which is too
// generic to actually confirm a reschedule was requested.
const KEYWORD_OVERRIDES: Record<string, string[]> = {
  "vraagt om de afspraak te verzetten": ["verzetten", "andere dag", "andere datum"],
  "stelt een nieuwe datum of vraagt om opties": ["datum", "week", "wanneer", "opties"],
  // Strips to nothing content-bearing under the generic rule ("hoe"/"lang"
  // are stopwords) — checks for an actual duration instead.
  "geeft aan voor hoe lang": ["dag", "dagen", "week", "weken", "maand", "maanden", "uur", "uren", "jaar"],
  // Same issue — "hoeveel"/"was" strip to nothing; checks for an amount.
  "geeft aan hoeveel het was": ["euro", "bedrag", "€"],
  // "nodigt uit" is the whole separable verb ("uitnodigen") with nothing
  // else to strip — checks for invitation language instead of a leftover noun.
  "nodigt uit": ["uitnodig", "kom", "welkom", "graag"],
};

// "beleefde aanhef en afsluiting" / "beleefde toon" / "vriendelijke toon" /
// "korte, duidelijke toon" etc. ask for a *style*, not a specific word — so
// this checks for the conventions a Dutch email greeting/closing actually
// uses, rather than one fixed phrase.
const POLITE_MARKERS = ["beste", "geachte", "meneer", "mevrouw", "groet", "bedankt", "hoogachtend", "dank"];

// "geeft de reden aan" / "geeft aan waarom ..." ask the learner to justify
// something. Checking for the literal word "reden" would miss the far more
// common way Dutch actually expresses a reason: a subordinate clause with
// omdat/want.
const REASON_MARKERS = ["omdat", "want", "doordat", "vanwege", "daarom", "reden"];

// Dutch verb/function-word scaffolding that recurs across the requirement
// phrasings in lib/content/items.ts ("vraagt om X", "geeft aan Y", "legt uit
// Z", "meldt W", ...) but carries no content of its own — stripped so
// whatever remains is the actual thing the learner's text needs to mention.
const REQUIREMENT_STOPWORDS = new Set([
  "vraagt", "geeft", "legt", "meldt", "noemt", "beschrijft", "stelt", "biedt",
  "kondigt", "nodigt", "herinnert", "feliciteert", "vertelt", "reserveert",
  "annuleert", "heet",
  "aan", "om", "naar", "uit", "dat", "je", "jou", "jouw", "het", "de", "een",
  "over", "met", "dan", "of", "zich", "zijn", "er", "tegen", "voor", "en",
  "van", "weer", "denkt", "te", "wilt", "wil", "kunt", "kan", "hebt", "heb",
  "is", "was", "al", "lang", "hoe", "hoeveel", "welke", "waarvoor", "waarmee",
  "specifiek", "kort", "korte", "duidelijke", "toon", "vriendelijk",
  "vriendelijke", "beleefd", "beleefde", "aanhef", "afsluiting", "welkom",
]);

// Derives the keyword(s) a response must contain to satisfy a requirement
// string. Returns null when nothing content-bearing is left to check (a
// pure style instruction) — the caller then treats that requirement as
// unenforceable rather than impossible to satisfy.
function deriveKeywords(req: string): string[] | null {
  if (KEYWORD_OVERRIDES[req]) return KEYWORD_OVERRIDES[req];
  const lower = req.toLowerCase();
  if (lower.includes("aanhef") || lower.includes("afsluiting") || lower.includes("toon")) {
    return POLITE_MARKERS;
  }
  if (lower.includes("reden") || lower.includes("waarom")) {
    return REASON_MARKERS;
  }
  const words = lower
    .replace(/[().,]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !REQUIREMENT_STOPWORDS.has(w));
  return words.length > 0 ? words : null;
}

const TOPIC_STOPWORDS = new Set([
  ...REQUIREMENT_STOPWORDS,
  "schrijf", "bericht", "email", "mail", "kort", "graag", "beste", "vriendelijke", "groet",
  "meneer", "mevrouw", "kunt", "willen", "moeten", "maken", "geven", "hebben", "worden",
]);

function contentStems(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .match(/\p{L}+/gu)
      ?.filter((word) => word.length >= 4 && !TOPIC_STOPWORDS.has(word))
      .map((word) => word.slice(0, 6)) ?? []
  );
}

function hasReferenceOverlap(text: string, context: AdequacyContext): boolean {
  const response = contentStems(text);
  const reference = contentStems(`${context.taskPrompt} ${context.modelAnswer}`);
  let matches = 0;
  for (const stem of response) {
    if (reference.has(stem)) matches++;
  }
  return matches >= Math.min(2, reference.size);
}

export function checkAdequacy(
  text: string,
  requirements: string[],
  minLen: number | null,
  context?: AdequacyContext
): AdequacyResult {
  const missing: string[] = [];
  const modelWordCount = context?.modelAnswer.trim().split(/\s+/).filter(Boolean).length;
  const effectiveMinLen = minLen && modelWordCount ? Math.min(minLen, modelWordCount) : minLen;
  if (effectiveMinLen && text.trim().split(/\s+/).filter(Boolean).length < effectiveMinLen) {
    missing.push(`ответ короче ${effectiveMinLen} слов`);
  }
  // Heuristic keyword coverage per requirement — Phase 2 replaces this with
  // a proper NLP task-completion classifier.
  const lower = text.toLowerCase();
  const referenceOverlap = context ? hasReferenceOverlap(text, context) : false;
  for (const req of requirements) {
    const keywords = deriveKeywords(req);
    if (keywords && !keywords.some((k) => lower.includes(k)) && !referenceOverlap) missing.push(req);
  }
  return { passed: missing.length === 0, missing };
}

const PATTERNS: { re: RegExp; code: ErrorCode; hintRu: string; hintEn: string }[] = [
  {
    re: /\bomdat ik (ben|heb|word)\b/i,
    code: "ERR_SUB_END",
    hintRu: "Проверьте порядок слов после 'omdat' — спрягаемый глагол должен быть в конце.",
    hintEn: "Check the word order after 'omdat' — the conjugated verb must come at the end.",
  },
  {
    re: /\b(morgen|vandaag|straks|daarna) ik\b/i,
    code: "ERR_V2_POS",
    hintRu: "Проверьте позицию спрягаемого глагола — правило V2 требует его на втором месте.",
    hintEn: "Check the conjugated verb's position — the V2 rule requires it to be in second position.",
  },
  {
    re: /\bik heb (ge)?ga(an)?\b/i,
    code: "ERR_AUX_SEL",
    hintRu: "Проверьте вспомогательный глагол с 'gaan' — hebben или zijn?",
    hintEn: "Check the auxiliary verb used with 'gaan' — should it be hebben or zijn?",
  },
  {
    re: /\bde huis\b/i,
    code: "ERR_ART_DEHET",
    hintRu: "Проверьте артикль перед 'huis'.",
    hintEn: "Check the article before 'huis'.",
  },
  {
    re: /\bik opbel\b|\bik aanbel\b|\bik opruim\b|\bik aanzet\b/i,
    code: "ERR_SEP_SPLIT",
    hintRu: "Это разделяемый глагол — приставка должна уйти в конец предложения, а не остаться перед основой.",
    hintEn: "This is a separable verb — the prefix belongs at the end of the sentence, not before the stem.",
  },
  {
    re: /\b(wij|zij|ze) (ben|is)\b/i,
    code: "ERR_AUX_SEL",
    hintRu: "Проверьте спряжение 'zijn' — с 'wij'/'zij' используется 'zijn', а не 'ben'/'is'.",
    hintEn: "Check the conjugation of 'zijn' — use 'zijn' with 'wij'/'zij', not 'ben'/'is'.",
  },
  {
    re: /\b(naar|bij|op|in) de \w+ niet\b/i,
    code: "ERR_NEG_POS",
    hintRu: "'Niet' обычно ставится перед предложной группой места ('niet naar de markt'), а не после неё.",
    hintEn: "'Niet' normally comes before a prepositional phrase of place ('niet naar de markt'), not after it.",
  },
  {
    re: /\b(is|zijn|staat|staan|komt|komen) (een|twee|drie|veel|geen)\b(?!.*\ber\b)/i,
    code: "ERR_ER_EXIST",
    hintRu: "Перед неопределённым подлежащим в начале высказывания обычно нужно вводное 'er' ('Er is een...').",
    hintEn: "An indefinite subject at the start of a statement normally needs introductory 'er' ('Er is een...').",
  },
  {
    re: /\bik heb (twee|drie|vier|vijf|veel|weinig)\b(?!.*\ber\b)/i,
    code: "ERR_ER_QUANT",
    hintRu: "Если существительное после числительного опущено, перед числительным нужно 'er' ('Ik heb er twee').",
    hintEn: "When the noun after a number is omitted, put 'er' before the number ('Ik heb er twee').",
  },
  {
    re: /\b(had|heeft|heb) (ge)?\w+ (moeten|willen|kunnen|zullen)\b/i,
    code: "ERR_CLUSTER",
    hintRu: "Проверьте порядок глаголов в кластере — модальный глагол обычно идёт перед смысловым в конце предложения.",
    hintEn: "Check the verb-cluster order — the modal verb normally comes before the main verb at the end of the sentence.",
  },
];

export function detectErrors(text: string): DetectedError[] {
  const found: DetectedError[] = [];
  for (const p of PATTERNS) {
    const m = text.match(p.re);
    if (m) found.push({ code: p.code, span: m[0], hintRu: p.hintRu, hintEn: p.hintEn });
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

export async function detectErrorsCombined(
  text: string,
  useLanguageTool = false
): Promise<DetectedError[]> {
  const local = detectErrors(text);
  // Learner text is personal data. The external check is deliberately
  // opt-in at the call site; local feedback remains fully functional when
  // consent is not given or the learner is offline.
  const ltMatches = useLanguageTool ? await fetchLanguageToolMatches(text) : [];
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
