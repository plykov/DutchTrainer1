import { describe, expect, it } from "vitest";
import { computeCoverage } from "../coverage";
import { ERROR_TAXONOMY } from "../errorTaxonomy";
import { DEELSCHRIJFTAKEN_ITEMS } from "./deelschrijftaken";
import { INTERACTION_ITEMS } from "./interactionItems";
import { KNM_ITEMS } from "./knmItems";
import { LEZEN_ITEMS } from "./lezenItems";
import { LISTENING_EXAM_ITEMS } from "./listeningExamItems";
import { LISTENING_ITEMS } from "./listeningItems";
import { NOUN_BUNDLES } from "./nouns";
import { PRACTICE_ITEMS } from "./items";
import { READING_TEXTS } from "./readingTexts";
import { SPEAKING_EXAM_ITEMS } from "./speakingExamItems";
import { SPEAKING_PROMPTS } from "./speakingPrompts";
import { WRITING_EXAM_ITEMS } from "./writingExamItems";
import { ZINSTAKEN_ITEMS } from "./zinstaken";

function assertUnique(values: readonly string[], label: string) {
  expect(new Set(values).size, `${label} must not contain duplicate IDs`).toBe(values.length);
}

function assertMcItems(items: { id: string; options: string[]; correctIndex: number }[], label: string) {
  for (const item of items) {
    expect(item.options.length, `${label}/${item.id} needs at least two options`).toBeGreaterThanOrEqual(2);
    expect(item.correctIndex, `${label}/${item.id} has an invalid correctIndex`).toBeGreaterThanOrEqual(0);
    expect(item.correctIndex, `${label}/${item.id} has an invalid correctIndex`).toBeLessThan(item.options.length);
  }
}

describe("content-bank invariants", () => {
  it("keeps IDs unique in each content bank", () => {
    const banks: [string, readonly { id: string }[]][] = [
      ["practice", PRACTICE_ITEMS],
      ["reading", READING_TEXTS],
      ["listening", LISTENING_ITEMS],
      ["interaction", INTERACTION_ITEMS],
      ["speaking", SPEAKING_PROMPTS],
      ["KNM", KNM_ITEMS],
      ["Lezen", LEZEN_ITEMS],
      ["exam listening", LISTENING_EXAM_ITEMS],
      ["exam speaking", SPEAKING_EXAM_ITEMS],
      ["writing", WRITING_EXAM_ITEMS],
      ["zinstaken", ZINSTAKEN_ITEMS],
      ["deelschrijftaken", DEELSCHRIJFTAKEN_ITEMS],
    ];

    for (const [label, bank] of banks) assertUnique(bank.map((item) => item.id), label);
  });

  it("keeps multiple-choice answer schemas valid", () => {
    assertMcItems(PRACTICE_ITEMS.filter((item) => item.taskType === "mc"), "practice");
    assertMcItems(INTERACTION_ITEMS, "interaction");
    assertMcItems(KNM_ITEMS, "KNM");
    assertMcItems(LEZEN_ITEMS, "Lezen");
    assertMcItems(LISTENING_ITEMS.map((item) => ({ id: item.id, ...item.question })), "listening");
  });

  it("keeps practice error codes attached to the published taxonomy", () => {
    const taxonomyCodes = new Set(ERROR_TAXONOMY.map((entry) => entry.code));
    const practicedCodes = new Set<string>();
    const codesByTarget = new Map<string, Set<string>>();

    for (const item of PRACTICE_ITEMS) {
      expect(item.errorCodes.length, `practice/${item.id} needs an error code`).toBeGreaterThan(0);
      for (const code of item.errorCodes) {
        expect(taxonomyCodes, `practice/${item.id} uses an unknown error code`).toContain(code);
        practicedCodes.add(code);
        if (item.grammarTarget) {
          const codes = codesByTarget.get(item.grammarTarget) ?? new Set<string>();
          codes.add(code);
          codesByTarget.set(item.grammarTarget, codes);
        }
      }
    }

    for (const entry of ERROR_TAXONOMY) {
      if (entry.code !== "ERR_NLP_OTHER") {
        expect(practicedCodes, `${entry.code} needs at least one practice item`).toContain(entry.code);
      }
    }

    for (const [target, codes] of codesByTarget) {
      expect(codes.size, `grammar target ${target} maps to inconsistent error codes`).toBe(1);
    }
  });

  it("keeps noun bundles complete and unique", () => {
    assertUnique(NOUN_BUNDLES.map((bundle) => bundle.lemma.toLocaleLowerCase("nl-NL")), "noun bundles");
    for (const bundle of NOUN_BUNDLES) {
      expect(bundle.translationRu, `noun/${bundle.lemma} needs a Russian gloss`).toBeTruthy();
      expect(bundle.plural, `noun/${bundle.lemma} needs a plural`).toBeTruthy();
      expect(bundle.diminutive, `noun/${bundle.lemma} needs a diminutive`).toBeTruthy();
      expect(bundle.collocations.length, `noun/${bundle.lemma} needs collocations`).toBeGreaterThanOrEqual(2);
    }
  });

  it("keeps every reading text compatible with the known-word coverage gate", () => {
    const allKnown = new Set(NOUN_BUNDLES.map((bundle) => bundle.lemma));
    for (const text of READING_TEXTS) {
      const coverage = computeCoverage(text.body, allKnown);
      expect(coverage.unknownTokens, `reading/${text.id} contains tokens outside the coverage vocabulary`).toEqual([]);
    }
  });
});
