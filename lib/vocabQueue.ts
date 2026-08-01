import { NOUN_BUNDLES } from "./content/nouns";
import { NounBundle } from "./types";
import { CardState, isDue, isNew } from "./fsrs";

export function nounCardId(lemma: string): string {
  return `noun:${lemma}::receptive`;
}

/** Bundles due for review, new bundles first exhausted before repeats (§3 receptive track). */
export function buildVocabQueue(cards: Record<string, CardState>, now: Date = new Date()): NounBundle[] {
  const due: NounBundle[] = [];
  const fresh: NounBundle[] = [];

  for (const bundle of NOUN_BUNDLES) {
    const card = cards[nounCardId(bundle.lemma)];
    if (!card || isNew(card)) fresh.push(bundle);
    else if (isDue(card, now)) due.push(bundle);
  }

  return [...due, ...fresh];
}
