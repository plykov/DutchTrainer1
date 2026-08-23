import { describe, expect, it } from "vitest";
import {
  BLOCKED_REPS_MAX,
  DEFAULT_RETENTION,
  PRE_EXAM_RETENTION,
  advanceBlockedProgress,
  newGrammarTargetProgress,
  retentionTargetFor,
} from "./fsrs";

describe("retentionTargetFor", () => {
  const now = new Date("2026-08-01T12:00:00Z");

  it("raises retention only during the six-week pre-exam window", () => {
    expect(retentionTargetFor("2026-09-12", now)).toBe(PRE_EXAM_RETENTION);
    expect(retentionTargetFor("2026-09-13", now)).toBe(DEFAULT_RETENTION);
    expect(retentionTargetFor("2026-07-31", now)).toBe(DEFAULT_RETENTION);
    expect(retentionTargetFor(null, now)).toBe(DEFAULT_RETENTION);
  });
});

describe("advanceBlockedProgress", () => {
  it("graduates after the minimum reviews and three correct answers in a row", () => {
    let progress = newGrammarTargetProgress("word-order");
    for (let i = 0; i < 9; i++) progress = advanceBlockedProgress(progress, true);
    progress = advanceBlockedProgress(progress, false);
    for (let i = 0; i < 3; i++) progress = advanceBlockedProgress(progress, true);

    expect(progress.blockedReps).toBe(13);
    expect(progress.stage).toBe("interleaved");
  });

  it("forces graduation at the configured maximum", () => {
    let progress = newGrammarTargetProgress("word-order");
    for (let i = 0; i < BLOCKED_REPS_MAX; i++) progress = advanceBlockedProgress(progress, false);

    expect(progress.stage).toBe("interleaved");
  });
});
