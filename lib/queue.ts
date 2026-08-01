// Builds the review queue: FSRS due cards, gated by the blocked→interleaved
// rule (§3) so a brand-new grammar target is drilled in isolation before it
// is mixed with confusable siblings.

import { PRACTICE_ITEMS } from "./content/items";
import { PracticeItem, RetrievalMode } from "./types";
import { GrammarTargetProgress } from "./fsrs";

export interface QueueEntry {
  item: PracticeItem;
  mode: RetrievalMode;
}

function retrievalModeForTask(item: PracticeItem): RetrievalMode {
  // MC / cloze recognition tasks are receptive; producing a transformed or
  // free sentence is productive (§3).
  return item.taskType === "mc" || item.taskType === "cloze" ? "receptive" : "productive";
}

export function buildQueue(
  grammarProgress: Record<string, GrammarTargetProgress>,
  opts: { limit?: number } = {}
): QueueEntry[] {
  const entries: QueueEntry[] = [];

  for (const item of PRACTICE_ITEMS) {
    if (item.grammarTarget) {
      const progress = grammarProgress[item.grammarTarget];
      const stage = progress?.stage ?? "blocked";
      if (stage === "blocked") {
        // Blocked stage: only this single target is served, never mixed
        // with its sibling group.
        entries.push({ item, mode: retrievalModeForTask(item) });
        continue;
      }
      // Interleaved stage: eligible for mixing with confusable siblings.
      entries.push({ item, mode: retrievalModeForTask(item) });
    } else {
      entries.push({ item, mode: retrievalModeForTask(item) });
    }
  }

  // Interleave: shuffle within sibling groups that have graduated, keep
  // blocked-stage targets clustered so they aren't accidentally interleaved.
  const blocked = entries.filter((e) => {
    const gt = e.item.grammarTarget;
    if (!gt) return false;
    const progress = grammarProgress[gt];
    return (progress?.stage ?? "blocked") === "blocked";
  });
  const rest = entries.filter((e) => !blocked.includes(e));

  const shuffledRest = [...rest].sort(() => Math.random() - 0.5);
  const combined = [...blocked, ...shuffledRest];

  return opts.limit ? combined.slice(0, opts.limit) : combined;
}
