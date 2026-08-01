// §3 Scheduling engine — FSRS-6 (not SM-2), receptive/productive split,
// blocked-first-then-interleaved gate.

import { Card, createEmptyCard, fsrs, FSRSParameters, generatorParameters, Rating, State } from "ts-fsrs";
import { CardKey, RetrievalMode } from "./types";

export type Grade = "again" | "hard" | "good" | "easy";

const GRADE_TO_RATING: Record<Grade, Rating> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
};

export const DEFAULT_RETENTION = 0.9;
export const PRE_EXAM_RETENTION = 0.95;
export const PRE_EXAM_WINDOW_DAYS = 42; // final 6 weeks

/** Retention target rises as exam_date approaches (§3). */
export function retentionTargetFor(examDate: string | null, now: Date = new Date()): number {
  if (!examDate) return DEFAULT_RETENTION;
  const days = (new Date(examDate).getTime() - now.getTime()) / 86_400_000;
  if (days >= 0 && days <= PRE_EXAM_WINDOW_DAYS) return PRE_EXAM_RETENTION;
  return DEFAULT_RETENTION;
}

function buildParams(requestRetention: number): FSRSParameters {
  return generatorParameters({ request_retention: requestRetention, enable_fuzz: true });
}

// Productive retrieval carries higher weight in mastery estimation (§3).
export const RETRIEVAL_WEIGHT: Record<RetrievalMode, number> = {
  receptive: 1,
  productive: 1.6,
};

// Response latency above this threshold shortens the next interval even on
// a correct answer (§3).
export const LATENCY_THRESHOLD_MS = 8000;

export interface CardState {
  key: CardKey;
  card: Card;
}

export function newCard(key: CardKey, now: Date = new Date()): CardState {
  return { key, card: createEmptyCard(now) };
}

export interface ReviewResult {
  next: CardState;
  intervalDays: number;
}

export function reviewCard(
  state: CardState,
  grade: Grade,
  opts: { examDate: string | null; latencyMs?: number; now?: Date }
): ReviewResult {
  const now = opts.now ?? new Date();
  const retention = retentionTargetFor(opts.examDate, now);
  const f = fsrs(buildParams(retention));

  let effectiveGrade = grade;
  // A slow-but-correct answer is downgraded one notch so the next interval
  // shortens, without ever marking a correct answer as a lapse.
  if (opts.latencyMs && opts.latencyMs > LATENCY_THRESHOLD_MS && grade === "good") {
    effectiveGrade = "hard";
  }

  const schedulingCards = f.repeat(state.card, now);
  const rating = GRADE_TO_RATING[effectiveGrade] as Exclude<Rating, Rating.Manual>;
  const chosen = schedulingCards[rating];
  const nextCard = chosen.card;
  const intervalDays = Math.max(
    0,
    Math.round((nextCard.due.getTime() - now.getTime()) / 86_400_000)
  );

  return {
    next: { key: state.key, card: nextCard },
    intervalDays,
  };
}

export function isDue(state: CardState, now: Date = new Date()): boolean {
  return state.card.due.getTime() <= now.getTime();
}

export function isNew(state: CardState): boolean {
  return state.card.state === State.New;
}

// --- §3 Blocked-first, then interleaved --------------------------------------

export const BLOCKED_REPS_MIN = 12;
export const BLOCKED_REPS_MAX = 20;

export type PoolStage = "blocked" | "interleaved";

export interface GrammarTargetProgress {
  grammarTarget: string;
  siblingGroup?: string;
  stage: PoolStage;
  blockedReps: number;
  blockedCorrectStreak: number;
}

/**
 * A blocked-set target graduates to the interleaved pool once it has enough
 * reps AND an initial mastery check pass (3 correct in a row after the
 * minimum rep count). Until then it stays isolated from confusable siblings.
 */
export function advanceBlockedProgress(
  progress: GrammarTargetProgress,
  wasCorrect: boolean
): GrammarTargetProgress {
  if (progress.stage === "interleaved") return progress;

  const blockedReps = progress.blockedReps + 1;
  const blockedCorrectStreak = wasCorrect ? progress.blockedCorrectStreak + 1 : 0;

  const masteryCheckPassed = blockedReps >= BLOCKED_REPS_MIN && blockedCorrectStreak >= 3;
  const forcedGraduate = blockedReps >= BLOCKED_REPS_MAX;

  return {
    ...progress,
    blockedReps,
    blockedCorrectStreak,
    stage: masteryCheckPassed || forcedGraduate ? "interleaved" : "blocked",
  };
}

export function newGrammarTargetProgress(
  grammarTarget: string,
  siblingGroup?: string
): GrammarTargetProgress {
  return { grammarTarget, siblingGroup, stage: "blocked", blockedReps: 0, blockedCorrectStreak: 0 };
}
