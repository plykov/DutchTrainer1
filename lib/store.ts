"use client";

import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  CardState,
  GrammarTargetProgress,
  Grade,
  advanceBlockedProgress,
  newCard,
  newGrammarTargetProgress,
  reviewCard,
} from "./fsrs";
import { CardKey, LearnerProfile, RetrievalMode, Skill } from "./types";
import { PRACTICE_ITEMS } from "./content/items";

function cardKeyId(key: CardKey): string {
  return `${key.itemId}::${key.mode}`;
}

export interface ReviewLogEntry {
  cardId: string;
  grade: Grade;
  timestamp: string;
  latencyMs: number;
}

export type UiLang = "ru" | "en";

interface AppState {
  profile: LearnerProfile | null;
  cards: Record<string, CardState>;
  grammarProgress: Record<string, GrammarTargetProgress>;
  reviewLog: ReviewLogEntry[];
  streakDays: number;
  lastQualityActionDate: string | null;
  uiLang: UiLang;

  setProfile: (profile: LearnerProfile) => void;
  ensureCard: (key: CardKey) => CardState;
  ensureGrammarProgress: (grammarTarget: string, siblingGroup?: string) => GrammarTargetProgress;
  review: (key: CardKey, grade: Grade, latencyMs: number) => void;
  resetAll: () => void;
  setUiLang: (lang: UiLang) => void;
}

// A review counts as a "quality action" for streaks (§9) only if it reflects
// real retrieval effort — never raw time spent.
function isQualityAction(grade: Grade): boolean {
  return grade === "hard" || grade === "good" || grade === "easy";
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      profile: null,
      cards: {},
      grammarProgress: {},
      reviewLog: [],
      streakDays: 0,
      lastQualityActionDate: null,
      uiLang: "ru",

      setProfile: (profile) => set({ profile }),
      setUiLang: (uiLang) => set({ uiLang }),

      ensureCard: (key) => {
        const id = cardKeyId(key);
        const existing = get().cards[id];
        if (existing) return existing;
        const created = newCard(key);
        set((s) => ({ cards: { ...s.cards, [id]: created } }));
        return created;
      },

      ensureGrammarProgress: (grammarTarget, siblingGroup) => {
        const existing = get().grammarProgress[grammarTarget];
        if (existing) return existing;
        const created = newGrammarTargetProgress(grammarTarget, siblingGroup);
        set((s) => ({ grammarProgress: { ...s.grammarProgress, [grammarTarget]: created } }));
        return created;
      },

      review: (key, grade, latencyMs) => {
        const state = get();
        const id = cardKeyId(key);
        const current = state.cards[id] ?? newCard(key);
        const { next } = reviewCard(current, grade, {
          examDate: state.profile?.examDate ?? null,
          latencyMs,
        });

        const item = PRACTICE_ITEMS.find((i) => i.id === key.itemId);
        let grammarProgress = state.grammarProgress;
        if (item?.grammarTarget) {
          const gp = state.grammarProgress[item.grammarTarget] ?? newGrammarTargetProgress(item.grammarTarget);
          const wasCorrect = grade !== "again";
          grammarProgress = {
            ...state.grammarProgress,
            [item.grammarTarget]: advanceBlockedProgress(gp, wasCorrect),
          };
        }

        const logEntry: ReviewLogEntry = {
          cardId: id,
          grade,
          timestamp: new Date().toISOString(),
          latencyMs,
        };

        const today = todayIso();
        let streakDays = state.streakDays;
        let lastQualityActionDate = state.lastQualityActionDate;
        if (isQualityAction(grade) && lastQualityActionDate !== today) {
          const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
          streakDays = lastQualityActionDate === yesterday ? streakDays + 1 : 1;
          lastQualityActionDate = today;
        }

        set({
          cards: { ...state.cards, [id]: next },
          grammarProgress,
          reviewLog: [...state.reviewLog, logEntry].slice(-2000),
          streakDays,
          lastQualityActionDate,
        });
      },

      resetAll: () =>
        set({
          profile: null,
          cards: {},
          grammarProgress: {},
          reviewLog: [],
          streakDays: 0,
          lastQualityActionDate: null,
        }),
    }),
    {
      name: "dutch-a2b1-store",
      storage: createJSONStorage(() => localStorage, {
        // CardState.card.due/last_review are real `Date` objects (ts-fsrs's
        // Card type), but JSON.stringify calls Date.prototype.toJSON() and
        // serializes them to plain ISO strings *before* any replacer
        // function ever sees the value — so a replacer can never detect
        // `value instanceof Date` here, and a reviver keyed off a custom
        // wrapper shape (e.g. { __type: "Date" }) never matches anything.
        // The only reliable fix on the read side is to reconstruct by key
        // name: these are the only two Date fields on a persisted card.
        reviver: (key, value) => {
          if ((key === "due" || key === "last_review") && typeof value === "string") {
            return new Date(value);
          }
          return value;
        },
      }),
    }
  )
);

export function skillForItem(itemId: string): Skill | null {
  return PRACTICE_ITEMS.find((i) => i.id === itemId)?.skill ?? null;
}

export function retrievalModeLabel(mode: RetrievalMode): string {
  return mode === "productive" ? "продуктивный" : "рецептивный";
}

export function useHasHydrated(): boolean {
  return useSyncExternalStore(
    (onChange) => useAppStore.persist.onFinishHydration(onChange),
    () => useAppStore.persist.hasHydrated(),
    () => false
  );
}
