// §4 — the coverage gate. Extensive reading/listening is served only at
// >=95% known-word coverage; >=98% is confidence/fluency mode (no glossing);
// below 95% is intensive-only, with glossing and pre-teaching, never served
// as extensive input.
//
// This is a simplified stand-in for the real pipeline (SUBTLEX-NL x NT2Lex
// frequency grading + LiNT readability scoring, §4). Coverage here is
// computed against two sources: a small closed-class "always known" A1
// function-word list (articles, pronouns, common auxiliaries — words a
// learner at this stage has almost certainly mastered) and the learner's
// actual FSRS-tracked noun vocabulary (lib/content/nouns.ts). Content words
// outside both sets count as unknown, which is the conservative, honest
// choice for a seed vocabulary this small.

import { NOUN_BUNDLES } from "./content/nouns";
import { CardState, isNew } from "./fsrs";
import { nounCardId } from "./vocabQueue";

const FUNCTION_WORDS = new Set(
  [
    "de", "het", "een", "ik", "jij", "je", "u", "wij", "we", "zij", "ze", "hij",
    "mijn",
    "is", "ben", "bent", "zijn", "was", "waren", "heb", "heeft", "hebben",
    "in", "op", "van", "voor", "naar", "met", "bij", "aan", "om", "te", "uit",
    "en", "maar", "of", "want", "dus", "omdat", "dat", "die", "deze", "dit",
    "niet", "geen", "ook", "wel", "graag", "alstublieft", "bedankt",
    "wil", "wilt", "kan", "kunt", "moet", "moeten", "ga", "gaat", "gaan",
    "vandaag", "morgen", "gisteren", "nu", "straks", "altijd", "soms",
    "een", "twee", "drie", "vier", "vijf",
  ].map((w) => w.toLowerCase())
);

function buildLemmaIndex(): Map<string, string> {
  const index = new Map<string, string>();
  for (const b of NOUN_BUNDLES) {
    for (const form of [b.lemma, b.plural, b.diminutive, b.diminutivePlural]) {
      index.set(form.toLowerCase(), b.lemma);
    }
  }
  return index;
}

const LEMMA_INDEX = buildLemmaIndex();

export function tokenize(text: string): string[] {
  return (text.toLowerCase().match(/\p{L}+/gu) ?? []).filter(Boolean);
}

export function knownLemmas(cards: Record<string, CardState>): Set<string> {
  const known = new Set<string>();
  for (const b of NOUN_BUNDLES) {
    const card = cards[nounCardId(b.lemma)];
    if (card && !isNew(card)) known.add(b.lemma);
  }
  return known;
}

export interface CoverageResult {
  coverage: number; // 0..1
  totalTokens: number;
  unknownTokens: string[]; // unique unknown surface forms, for glossing
  mode: "intensive" | "extensive" | "confidence";
}

export function computeCoverage(text: string, known: Set<string>): CoverageResult {
  const tokens = tokenize(text);
  let knownCount = 0;
  const unknownSet = new Set<string>();

  for (const tok of tokens) {
    if (FUNCTION_WORDS.has(tok)) {
      knownCount++;
      continue;
    }
    const lemma = LEMMA_INDEX.get(tok);
    if (lemma && known.has(lemma)) {
      knownCount++;
    } else {
      unknownSet.add(tok);
    }
  }

  const coverage = tokens.length === 0 ? 1 : knownCount / tokens.length;
  const mode = coverage >= 0.98 ? "confidence" : coverage >= 0.95 ? "extensive" : "intensive";

  return { coverage, totalTokens: tokens.length, unknownTokens: [...unknownSet], mode };
}
