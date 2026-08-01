# Dutch A2/B1 Examentrainer

Exam-prep web app for Russian-speaking learners preparing for **DUO Inburgering (B1 route)** and
**Staatsexamen NT2 Programma I (B1)**, plus an A2 track for the legacy population. Built against the
"Dutch A2/B1 Exam-Prep App — Consolidated Scope v1" document.

Live at **https://plykov.github.io/DutchTrainer1/**.

## Phase 1 — exam-ready core

- Learner profile onboarding (`/onboarding`) — legal track, target level, exam date, explanation
  language, script support (§2).
- FSRS-6 spaced-repetition engine (`lib/fsrs.ts`) via `ts-fsrs`, with a receptive/productive dual
  stability track and a blocked-set → interleaved-pool gate for new grammar targets (§3).
- Vocabulary core seeded as full noun bundles — article, plural, diminutive, adjective agreement,
  collocations — never bare translation pairs (§4, `lib/content/nouns.ts`).
- Dutch error taxonomy (`lib/errorTaxonomy.ts`) covering syntax, morphology, tense/aspect, the four
  `er`-functions, modal particles, and phonology, each with a Russian-L1 contrastive note (§5).
- Practice session (`/practice`) that routes items through the taxonomy and blocked/interleaved gate.
- Writing feedback (`/write`) implementing detect-then-explain with a literal **adequacy gate**: a
  response that fails task completion never gets grammar feedback (§6).
- Dashboard (`/dashboard`) with per-skill evidence, quality-gated streaks, and a formative-only
  readiness signal that stays hidden until enough review volume exists (§6, §9).

## Phase 2 slice landed so far

- **Vocab review** (`/vocab`) — a receptive FSRS flashcard flow over the noun bundles, so the app has
  real per-learner "known word" data to gate on, instead of an empty deck.
- **Coverage-gated extensive reading** (`/reading`, `lib/coverage.ts`) — implements the scope doc's
  own call-out as "the single most consequential content rule": text is only offered for free
  extensive reading at ≥95% known-word coverage, ≥98% drops glossing entirely for a confidence mode,
  and below 95% locks into intensive mode with unknown words glossed inline (§4). This is a
  simplified stand-in for the real SUBTLEX-NL × NT2Lex × LiNT pipeline — see `lib/coverage.ts` for
  exactly what's approximated and why.
- **Exam simulation mechanics** (`/exam`) — a KNM demo (6 original civic-knowledge MC items, single
  pass, countdown, no feedback until the run ends) and a timed Schrijven demo (the existing writing
  task under a hard countdown that auto-submits at zero, mirroring exam-mode's "no backtracking, no
  mid-task feedback" rule, §7). These are mechanism demos, not full-length exams — the seed item bank
  is far too small for a real 36-question Lezen or 40-question KNM run.

## What's still deliberately not here (see scope doc §11 Phase 2/3)

Whisper-NL/GOP pronunciation scoring (needs a fine-tuned ASR model and audio infra this environment
doesn't have), a live LiNT API integration (coverage above is a local approximation, not the real
service), full-length timed exam simulations, offline sync, CNaVT/Flemish/teacher-dashboard work, and
a real NLP-backed writing-error detector (the current one is a small pattern-matcher standing in for
it). Content in `lib/content/` is a seed slice, not the full ~2,000–5,000 lemma target — swap in a
real content pipeline before shipping to learners, and clear the `[VERIFY]` items in the scope doc's
§12 backlog first.

State currently persists to `localStorage` (`lib/store.ts`, Zustand) — swap the storage adapter for
a real backend before multi-device sync or teacher dashboards are needed.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build + typecheck
npm run lint    # eslint
```

## Deployment

Pushes to `main` build a static export (`next.config.ts`, `output: "export"`) and publish it to
GitHub Pages via `.github/workflows/deploy-pages.yml`.
