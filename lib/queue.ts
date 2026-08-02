// Builds the review queue: FSRS due cards, gated by the blocked→interleaved
// rule (§3) so a brand-new grammar target is drilled in isolation before it
// is mixed with confusable siblings.

import { PRACTICE_ITEMS } from "./content/items";
import { PracticeItem, RetrievalMode } from "./types";
import { CardState, GrammarTargetProgress, isDue, isNew } from "./fsrs";

export interface QueueEntry {
  item: PracticeItem;
  mode: RetrievalMode;
}

function retrievalModeForTask(item: PracticeItem): RetrievalMode {
  // MC / cloze recognition tasks are receptive; producing a transformed or
  // free sentence is productive (§3).
  return item.taskType === "mc" || item.taskType === "cloze" ? "receptive" : "productive";
}

function cardKeyId(itemId: string, mode: RetrievalMode): string {
  return `${itemId}::${mode}`;
}

export function buildQueue(
  grammarProgress: Record<string, GrammarTargetProgress>,
  cards: Record<string, CardState>,
  opts: { limit?: number; now?: Date } = {}
): QueueEntry[] {
  const now = opts.now ?? new Date();
  const entries: QueueEntry[] = [];

  for (const item of PRACTICE_ITEMS) {
    // /practice only drives the mc/cloze/sentence_transform grammar drills —
    // short_write items belong to /write and PracticeSession has no UI for
    // them, so they must never end up in this queue.
    if (item.taskType === "short_write") continue;

    const mode = retrievalModeForTask(item);
    const card = cards[cardKeyId(item.id, mode)];
    // Only ever serve a card that's brand new or actually due for review.
    // Without this check, a correctly-graded item reappears on every visit
    // regardless of its FSRS-scheduled next-review date — which is exactly
    // "always the same set of exercises" from the learner's side.
    if (card && !isNew(card) && !isDue(card, now)) continue;

    entries.push({ item, mode });
  }

  // Blocked-stage targets stay isolated from their confusable siblings, but
  // which of a target's (often small) item pool gets served, and in what
  // order, is randomized per build instead of always the same fixed slice
  // in source-file order.
  const blocked = entries.filter((e) => {
    const gt = e.item.grammarTarget;
    if (!gt) return false;
    const progress = grammarProgress[gt];
    return (progress?.stage ?? "blocked") === "blocked";
  });
  const rest = entries.filter((e) => !blocked.includes(e));

  const shuffledBlocked = [...blocked].sort(() => Math.random() - 0.5);
  const shuffledRest = [...rest].sort(() => Math.random() - 0.5);
  const combined = [...shuffledBlocked, ...shuffledRest];

  return opts.limit ? combined.slice(0, opts.limit) : combined;
}
