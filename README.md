# Dutch A2/B1 Examentrainer

Exam-prep web app for Russian-speaking learners preparing for **DUO Inburgering (B1 route)** and
**Staatsexamen NT2 Programma I (B1)**, plus an A2 track for the legacy population. Built against the
"Dutch A2/B1 Exam-Prep App — Consolidated Scope v1" document.

This is the **Phase 1 — exam-ready core** slice of the roadmap (see the scope doc §11):

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
- Exam-constraint reference (`/exam`) summarizing Staatsexamen NT2 P1 timing/format and the
  post-1-July-2025 KNM rebuild, flagging every `[VERIFY]` figure from the scope doc.

## What's deliberately not here yet (see scope doc §11 Phase 2/3)

Whisper-NL/GOP pronunciation scoring, LiNT-based coverage-gated extensive reading, full timed exam
simulations, offline sync, CNaVT/Flemish/teacher-dashboard work, and a real NLP-backed writing-error
detector (the current one is a small pattern-matcher standing in for it). Content in `lib/content/`
is a seed slice, not the full ~2,000–5,000 lemma target — swap in a real content pipeline before
shipping to learners, and clear the `[VERIFY]` items in the scope doc's §12 backlog first.

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
