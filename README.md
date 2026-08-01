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
- **Coverage-gated extensive reading** (`/reading`, `lib/coverage.ts`, 20 seed texts across
  gezondheid/wonen/werk/onderwijs/gemeente/geld) — implements the scope doc's own call-out as "the single
  most consequential content rule": text is only offered for free extensive reading at ≥95%
  known-word coverage, ≥98% drops glossing entirely for a confidence mode, and below 95% locks into
  intensive mode with unknown words glossed inline (§4). This is a simplified stand-in for the real
  SUBTLEX-NL × NT2Lex × LiNT pipeline — see `lib/coverage.ts` for exactly what's approximated and why.
- **Exam simulation mechanics** (`/exam`) — one demo per Staatsexamen NT2 P1 component plus KNM, all
  single-pass with no backtracking and no feedback until the run ends (§7). Numbers below are sourced
  from staatsexamensnt2.nl and related sites (see PR/commit history for links), not guessed:
  - **Lezen** (36 items) — matches the real ~35–36 question count. Short original passages with a
    comprehension question each.
  - **Luisteren** (40 items, `ExamListeningRunner`) — matches the real ~40 question count, and
    implements the actual single-listen mechanic: forced 25s pre-read, one playback (Web Speech API
    or text-flash fallback), no replay, then answer.
  - **Schrijven** (`SchrijvenStructuredRunner`) — reproduces the real task structure: 8 zinstaken
    (complete/write one sentence) → 2 deelschrijftaken (fill in a form/short message) → 2 korte
    schrijftaken (short free text), all under one countdown that force-ends the session at zero. A
    separate "свободная практика" mode still offers 16 standalone writing tasks to pick from.
  - **Spreken** (16 items, `ExamSpeakingRunner`) — exactly 8 short (20s) + 8 medium (30s) prompts,
    beep-paced: a 2s "get ready" cue, then a fixed recording window per item that auto-advances with
    no way back, ending in a playback-only summary showing the real Cito rubric breakdown (Inhoud 39
    + Woord-/zinsvorming 33 + Woordenschat 12 + Uitspraak 9 + Woordkeus 6 + Tempo 4 = 103, pass 66).
    Still no ASR scoring.
  - **KNM** (21 items) — countdown MC run; still short of the real 40-question length.
- **Speaking practice** (`/speaking`, 15 prompts) — elicited imitation (§8): record yourself reading a target
  sentence, play it back, self-compare, self-grade into FSRS. The recording is processed entirely in
  the browser and discarded the moment you grade or leave the page — never uploaded, never stored
  (the §9 transient-voice-processing default, taken literally since there's no ASR backend to send it
  to anyway).
- **Listening** (`/listening`, 14 items) — the exam's single-listen mechanic (§7): 25s to pre-read the
  question before playback, one pass, no replay button anywhere. Playback uses the browser's built-in
  Web Speech API (`nl-NL`) when available; if the browser has no speech synthesis support, the
  transcript flashes once for a reading-paced duration instead of staying silent — labeled honestly
  in the UI either way, since this environment has no server-side TTS/audio infra.
- **Interaction** (`/interaction`, 31 items) — the fifth CEFR skill from the learner profile model
  (§2), previously unbuilt. Distinct from monologic "speaking": each item is a short dialogue with a
  gap for the learner's turn — requesting, clarifying, declining, apologizing, confirming, phone and
  service-desk etiquette — and three candidate responses to choose the most pragmatically appropriate
  one from. Deliberately constrained response-selection, not a free-form chat partner: §1 explicitly
  defers an unconstrained conversational AI tutor, since it accepts ungrammatical/unnatural input
  whenever intent is recoverable, which is the opposite of what this skill should train.
- Grammar item bank now covers every §5 syntax/morphology error code with at least one item
  (`ERR_CLUSTER`, `ERR_SEP_PART`, `ERR_NEG_POS`, `ERR_PLUR`, `ERR_DIM_ART`, `ERR_PREP_FIXED`,
  `ERR_COLLOC`, plus text-based awareness items for the four `ERR_PHON_*` codes since there's no
  audio for true perception testing), and the noun bank grew from 8 to 30 lemmas across more
  exam-domain topics (work, housing, health, official paperwork, money/insurance).
- **Settings** (`/settings`, linked from the ⚙️ icon in the nav) — a profile summary, a tester
  feedback form, and a destructive-with-confirmation "delete all progress" button. No backend exists
  on a static export, so feedback submits as a pre-filled GitHub issue on this repo (or a `mailto:`
  fallback) instead of going to a server; deleting progress clears `localStorage` only, nothing else
  to clean up since nothing else is stored anywhere.
- **English UI mode** — a RU/EN toggle in the nav (`lib/i18n.ts`, `lib/store.ts`'s `uiLang`) switches
  the app chrome: nav, onboarding, dashboard, settings/feedback/delete-progress, and the
  practice/vocab/interaction/exam-MC/speaking-practice session UIs (buttons, labels, status text).
  Pedagogical content — every `explanationRu` in `lib/content/*` — stays Russian regardless of
  `uiLang`, on purpose: it's Russian-L1-contrastive by design (§5), explaining specifically Russian
  speakers' traps, so translating it to English would remove the thing it exists to explain. A few
  session components (`WritingTask`, the Schrijven/Luisteren/Spreken exam runners, `ReadingRoom`)
  still have Russian-only chrome text — not yet wired into `lib/i18n.ts`.
- **Randomized MC answer position** (`lib/shuffle.ts`) — multiple-choice content is authored with the
  correct answer clustered at a predictable index, which lets a learner game position instead of
  actually knowing the answer. `shuffleOptions()` runs a Fisher-Yates shuffle once per question (or
  once per exam run) and is wired into every MC surface: `PracticeSession`, `ExamRunner` (KNM/Lezen
  demos), `InteractionSession`, `ExamListeningRunner`, and `ListeningSession`.

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
