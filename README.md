# Dutch A2/B1 Examentrainer

Exam-prep web app for Russian-speaking learners preparing for **DUO Inburgering (B1 route)** and
**Staatsexamen NT2 Programma I (B1)**, plus an A2 track for the legacy population. Built against the
"Dutch A2/B1 Exam-Prep App — Consolidated Scope v1" document.

Live at **https://plykov.github.io/DutchTrainer1/**.

For the current, prioritised development backlog and production-launch criteria, see
[ROADMAP.md](./ROADMAP.md). The long history below records delivered work; it is not the source of
truth for remaining scope.

Releases follow the documented [release process](./RELEASING.md), with user-visible changes in
[CHANGELOG.md](./CHANGELOG.md). The current package version is shown in the site footer.

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
- **Beta legal and release baseline** (`/privacy`, `/terms`, footer links, `RELEASING.md`,
  `CHANGELOG.md`) — documents the app's actual data boundaries: browser-local learner progress,
  transient microphone recordings, browser/OS speech synthesis, GitHub Pages security logging,
  public-or-email feedback, and the off-by-default LanguageTool request. The release checklist makes
  privacy review mandatory when those flows change and uses SemVer with `package.json` as the displayed
  version source. These are provisional beta notices; professional legal review remains required for
  production launch.
- **English UI mode** — a RU/EN toggle in the nav (`lib/i18n.ts`, `lib/store.ts`'s `uiLang`) switches
  the learner-facing app chrome across navigation, onboarding, dashboard, settings, every learning
  module, writing feedback, reading/listening sessions, and all exam runners (buttons, labels, status text).
  Pedagogical content — every `explanationRu` in `lib/content/*` — stays Russian regardless of
  `uiLang`, on purpose: it's Russian-L1-contrastive by design (§5), explaining specifically Russian
  speakers' traps, so translating it to English would remove the thing it exists to explain.
- **Provenance-aware content workflow** (`content/`, `scripts/content-pipeline.mjs`) — the Spreken exam
  bank, Schrijven zinstaken, and deelschrijftaken are migrated from hand-edited TypeScript to structured sources with
  source/license references and per-item educator-review state. The pipeline validates the source,
  generates the runtime TypeScript deterministically, detects generated-file drift in CI, and supports
  TSV review export/import. The remaining banks still need incremental migration through this workflow.
- **Randomized MC answer position** (`lib/shuffle.ts`) — multiple-choice content is authored with the
  correct answer clustered at a predictable index, which lets a learner game position instead of
  actually knowing the answer. `shuffleOptions()` runs a Fisher-Yates shuffle once per question (or
  once per exam run) and is wired into every MC surface: `PracticeSession`, `ExamRunner` (KNM/Lezen
  demos), `InteractionSession`, `ExamListeningRunner`, and `ListeningSession`.
- **Mobile nav menu** (`components/Nav.tsx`) — the 9-item section list used to spill into a horizontal
  scroll strip with no visual affordance, which testers on phone browsers found hard to discover and
  tap. Below the `md` breakpoint it's now a hamburger toggle (`☰`/`✕`, `aria-expanded`/`aria-controls`)
  that opens a full-width vertical panel with large (44px+) tap targets; the panel closes when a link
  is tapped. Desktop/tablet keeps the horizontal bar unchanged.
- **"Choose the next exercise" prompt** (`components/NextExercise.tsx`, `lib/moduleLinks.ts`) — finishing
  a session used to be a dead end on several screens (no automatic next question and no link anywhere
  else), leaving the nav as the only way out. The completion screens for `PracticeSession`,
  `VocabSession`, `InteractionSession`, and the free-practice `WritingTask` (`/write`, not the exam-mode
  instance) now end with a row of links to every other module. Exam-runner completion screens
  (`ExamRunner`, `ExamListeningRunner`, `SchrijvenStructuredRunner`, `ExamSpeakingRunner`) already
  return to the `/exam` picker, which serves the same purpose, so they were left as-is.
- **Fix: Luisteren/Spreken practice silently restarting instead of finishing** — `ListeningSession` and
  `SpeakingSession` advanced through their item list with `(i + 1) % length`, so finishing the last item
  wrapped straight back to item 1 with no completion message — reported by a tester as the session
  "restarting back to the start." Both now stop advancing past the last item, show a proper completion
  screen (score for listening; a completion message for speaking, since its self-graded rubric isn't a
  right/wrong count), and end with the same "choose the next exercise" links as the other modules. Audited
  every other session component for the same `% length` wraparound pattern — no other instance existed.
- **+10 items per exam module, plus question-order randomization** — every Staatsexamen demo grew by 10:
  KNM 21→31, Lezen 36→46, Luisteren 40→50 (`lib/content/knmItems.ts`, `lezenItems.ts`,
  `listeningExamItems.ts`); the Schrijven zinstaken bank grew 8→18 and the Spreken prompt bank grew
  16→26 (13 short + 13 medium). `ExamRunner` and `ExamListeningRunner` now shuffle question order per
  run (`lib/shuffle.ts`'s new `shuffleArray()`), on top of the existing per-question MC option shuffle.
  `SchrijvenStructuredRunner` draws a random 8 zinstaken + 2 korte schrijftaken from their bigger pools
  each run (previously the korte-schrijftaak slot was always the same fixed first 2 of 15 — a variety
  bug fixed along the way); `ExamSpeakingRunner` draws a random 8 short + 8 medium from its pool and
  shuffles their combined order. All five keep their real-exam structure (KNM/Lezen/Luisteren show every
  item in the (now larger) bank; Schrijven/Spreken still run at the real 8+2+2 / 8+8 counts) — only which
  items appear and in what order varies per run.
- **Resolved the remaining `/exam`-page `[VERIFY]` flags** — fetched staatsexamensnt2.nl and inburgeren.nl
  directly (August 2026) and confirmed: Lezen is exactly 36 questions (staatsexamensnt2.nl states "Bij de
  6 teksten moet u 36 vragen beantwoorden" — not the "35 or 36" the copy hedged on before); Van Dale
  Pocketwoordenboek NT2 has no edition restriction, only other dictionaries/translators are banned;
  Schrijven's 8 zinstaken + 2 deelschrijftaken + 2 korte schrijftaken structure is confirmed as-is; and
  Luisteren's "~40 questions" was already the official phrasing ("ongeveer 40 opdrachten"), not something
  to resolve further. The one real correction: KNM is **45** questions / 45 minutes / pass 27-45 (60%)
  per inburgeren.nl, not the 40/45/28-40 the app had been showing — that stale figure predated this
  session's research and is now fixed everywhere it appeared (`/exam` copy, `knmItems.ts` comment).
- **+100 vocab noun bundles (30→130)** — the first of a staged +100-per-section content expansion (the
  other six main modules — Practice, Reading, Listening, Speaking, Interaction, Writing — follow in
  separate commits so each batch can be typechecked/linted/spot-checked on its own). Covers housing,
  family, food/shopping, clothing, body, time/weather, transport, work/government, and health domains,
  in the same full-bundle schema as the seed slice (never bare translation pairs — article, plural,
  diminutive, adjective agreement, collocations, CEFR level). Verified no duplicate lemmas against the
  existing 30 (found and fixed 6 accidental repeats before shipping) and confirmed via Playwright that
  `/dashboard`'s known-word stat and `/vocab`'s session both reflect the new count (130) correctly.
- **+100 reading texts (20→120)** — second stage of the content expansion. `/reading`'s §4 coverage gate
  (`lib/coverage.ts`) only counts a token as "known" if it's in a small closed-class function-word list
  or a form from `lib/content/nouns.ts` — so unlike the other sections, these can't just be freely
  written prose; every token has to resolve against that fixed vocabulary or the coverage % becomes
  meaningless. Generated the batch with a validation script (run once, output pasted in and discarded —
  not part of the shipped app) that builds sentences only from function words and noun forms, rejects
  anything that doesn't validate, and prefers a "go to X" phrasing only for an explicit whitelist of
  actually-visitable nouns (dokter, school, kantoor, winkel, ...) rather than every noun in a topic, to
  cut down on the "Ik moet naar het formulier gaan" (go to the form) oddities that a fully mechanical
  pairing produces. Confirmed 100/100 passed validation with zero stray tokens, all 120 ids unique, and
  spot-checked via Playwright that `/reading` renders all 120 topic chips and computes coverage without
  errors.
- **+100 listening items (14→114)** — third stage. No coverage-gate constraint here (`/listening` doesn't
  call `computeCoverage`), so these are natural civic-life announcements/messages rather than
  vocabulary-constrained sentences: appointment reschedules, municipality notices, pharmacy/work/
  housing/transport/school/money/post/neighborhood scenarios, 10 per topic. Built from one vetted
  sentence frame per topic with day/time/name slots varied for genuine variety rather than copy-pasted
  repeats — confirmed all 100 transcripts are textually distinct (an early pass had 9 accidental repeats
  from too few distinct day values; fixed before shipping). Spot-checked via Playwright: `/listening`
  shows 114 total and plays/answers/grades several of the new items correctly.
- **+100 speaking prompts (15→115)** — fourth stage. Elicited-imitation sentences (read aloud, self-compare
  against your own recording, no ASR) across the same 10 civic-life topics as the listening batch, 10
  distinct sentences per topic rather than slot-filled repeats, each topic sharing one
  pronunciation-focus hint targeting a specific Russian-L1 trouble spot (guttural g/ch, the ui/ei/eu
  diphthongs, dental r, etc.). Confirmed all 100 sentences are textually distinct and spot-checked via
  Playwright (with the fake-media-device flags, since `/speaking` needs mic access): `/speaking` shows
  115 total and records/grades several of the new prompts correctly.
- **+100 interaction items (31→131)** — fifth stage. Dialogic-exchange items across 10 topics (huisarts,
  gemeente, werk, winkel, buurt, school, bank, apotheek, station, verzekering), 10 per topic; a first
  pass reused the exact same dialogue+options text across all 10 instances of 7 of the 10 topics (only
  37/100 were actually distinct) — fixed by threading a concrete slot (day, item, city, form name,
  amount) through every topic's template, confirmed all 100 now textually distinct. Spot-checked via
  Playwright that `/interaction` shows 131 total and grades several of the new items correctly.
- **+100 practice/grammar items (31→131)** — sixth stage, `/practice`'s bank. This one carries the most
  mechanical risk: each item's `grammarTarget` must pair with exactly the right `errorCodes` entry (the
  §5 error taxonomy — `ERR_V2_POS`, `ERR_SUB_END`, `ERR_ART_DEHET`, etc.) for FSRS's blocked→interleaved
  gating and the dashboard's per-target progress to stay meaningful. Added ~4-5 items per existing
  grammar target (mc/cloze/sentence_transform mixed) instead of piling onto a couple of them, so review
  data accumulates across the full grammar-point set. Verified programmatically that every one of the 23
  targets maps to a single consistent error code with no mismatches, all 100 new ids are unique and don't
  collide with the existing 31, and confirmed via Playwright that a full 12-item queue mixing all three
  task types renders, grades, and reaches the completion screen without errors.
- **+100 writing tasks (1→101), and a real fix: `/write` only ever used the pool's first item** — final
  stage. `app/write/page.tsx` did `PRACTICE_ITEMS.find((i) => i.taskType === "short_write")`, i.e. always
  the same single fixed task no matter how many existed in the bank — so the 100 new items would have
  been dead content without also fixing that. `/write` now picks a random task on load and has an "Ander
  onderwerp (101 beschikbaar)" button that swaps to a different random one (never repeats the current
  task twice in a row). Tasks span the same 10 civic-life topics as the other batches. Confirmed via
  Playwright: the button reports 101 available, and 8 clicks surfaced 7 distinct prompts.
- **Real NLP-backed writing-error detector** (`lib/writingCheck.ts`) — replaces the "small pattern-matcher
  standing in for it" this README used to flag. Hybrid design, decided after testing both halves directly
  against real learner-style sentences: local regex patterns stay for the word-order/auxiliary-selection
  codes central to this app's taxonomy (V2, subordinate-clause verb-final, hebben/zijn, separable verbs,
  er-existential/quantitative, verb clusters) because LanguageTool's free Dutch rule set has **no rule**
  for any of them — confirmed by hand: "Morgen ik ga", "Ik heb naar Utrecht gegaan", and "omdat ik ben
  ziek" all come back with zero matches from `api.languagetool.org`. LanguageTool is added as a second,
  genuinely-external NLP layer for what it *is* good at — de/het confusion, adjective inflection,
  subject-verb agreement, spelling — via a live `fetch` to its public checking API (CORS-open, no key
  needed). Matches map onto this app's §5 error codes where a confident mapping exists (`DE_IPV_HET` →
  `ERR_ART_DEHET`, `EEN_LELIJKE_MEISJE` → `ERR_ADJ_INFL`); anything else is still surfaced under a new
  `ERR_NLP_OTHER` catch-all with LanguageTool's own message, rather than silently dropped. The API call
  is best-effort with a 6s timeout — `detectErrorsCombined()` always resolves, falling back to local-only
  results on any network failure, so writing feedback never hard-depends on connectivity. `WritingTask`
  gained a `"checking"` stage (brief "Проверяем текст…" state) since detection is now async. Verified the
  live API's behavior and rule ids directly via curl against real Dutch sentences before writing the
  mapping table, and confirmed end-to-end via Playwright that the local-pattern path still works and the
  UI degrades gracefully when the NLP call can't complete (this sandbox's headless browser can't reach
  external hosts at all — a known limitation noted elsewhere in this session — so that fallback path is
  exactly what ran in-browser here; the real deployed site reaches the API directly).
- **Vocabulary bank grown from 130 to 2,030 noun bundles** — dataset-sourced rather than hand-authored, per
  the explicitly chosen tradeoff (less per-item scrutiny than prior batches, in exchange for reaching the
  §4 ~2,000-lemma target in one pass instead of dozens of hand-written commits). Pipeline: kaikki.org's
  Wiktextract-derived Dutch dictionary (`kaikki.org-dictionary-Dutch.jsonl`, ~145k entries) supplies
  lemma/article(gender)/plural/diminutive for every noun that has both a plural and diminutive form on
  record; hermitdave/FrequencyWords' OpenSubtitles-derived `nl_50k.txt` ranks them by real-world frequency
  so the selection favors common, exam-relevant words over obscure ones. `adjAgreement` and `collocations`
  are template-generated (not hand-written per item), and CEFR level is a frequency-rank proxy (top ~40%
  of the selection → A2, rest → B1) rather than a real CEFR-graded source — both are known simplifications
  of the full-bundle schema's rigor for this batch specifically.
  Three real bugs were found and fixed while spot-checking the generated output before merging: (1) the
  frequency list carries no part-of-speech tags, so pure lemma lookup against the noun index pulled in
  words that are overwhelmingly a *different* part of speech in real Dutch and only have a marginal/
  coincidental noun sense — "kan" (modal "can", not noun "jug"), "hij" (pronoun "he"), "een"/"de"
  (articles), "niet" (negation) — fixed with an explicit `FUNCTION_WORDS` blocklist covering Dutch
  pronouns, prepositions, conjunctions, negation/adverbs, and conjugated forms of ~15 extremely common
  verbs; (2) naive string-concatenation adjective inflection ("stem" + "e") violates real Dutch spelling
  rules — open/closed-syllable vowel-doubling reduction ("groot"+"e" is "grote", not "groote") and
  consonant doubling for short vowels ("druk"+"e" is "drukke", not "druke") — silently wrong on 6 of 23
  base adjectives (~26% of all generated entries), directly undermining this app's own `ERR_ADJ_INFL`
  taxonomy code; fixed with a hand-verified `ADJ_INFLECTED` lookup table instead of derivation; (3) a
  case-insensitive word-shape regex let a capitalized parsing artifact ("Let", from "Let op!") through as
  a lowercase "noun" — fixed by rejecting any candidate where `word != word.lower()` before the regex
  check. Beyond those, two full manual read-throughs of the 1,900-candidate output (in ~300-line chunks)
  surfaced and excluded roughly 130 more marginal entries via a growing `EXTRA_EXCLUDE` set: mistagged
  verb/adjective/adverb forms with only a coincidental noun sense ("goed", "gek", "horen", "leek", "las"),
  character/proper names from subtitle data ("jack", "kim", "romeo"), bare English artifacts ("guy",
  "dog", "game"), profanity/slurs/derogatory terms, graphic crime/violence topics unsuited to a beginner
  course (murder, rape, kidnapping, serial killers), redundant informal duplicates of already-present
  family terms ("papa"/"mama" next to existing "vader"/"moeder"), and archaic/dialectal fragments. This is
  a spot-check pass, not exhaustive line-by-line review of all 1,900 entries — consistent with the
  explicitly accepted tradeoff for this approach; some lower-quality entries likely remain. Verified: zero
  duplicate lemmas (cross-checked against both the existing 130 and within the new batch), `npx tsc
  --noEmit` / `npm run lint` / `npm run build` all clean, and confirmed via Playwright that `/vocab`
  sessions run correctly against the expanded pool (surfaced newly-added words like "salaris" mid-session
  without error) and `/dashboard` reflects the larger word count.
- **Fixed `checkAdequacy`'s keyword-map coverage gap** (`lib/writingCheck.ts`) — the §6 adequacy gate is
  supposed to block grammar feedback until a response actually satisfies its task requirements, but the
  `keywordMap` doing that check was a hardcoded `Record` with exactly **4** exact-string entries, all
  copied from the single original seed writing item. Once `/write` grew to 101 `short_write` items
  (previous batch), those items introduced **164 distinct requirement strings** — and for every one not in
  the map, `keywordMap[req]` was `undefined`, so the `if (keywords && ...)` check silently skipped it
  entirely. In practice this meant the adequacy gate only ever enforced anything on ~1 in 40 items; for the
  rest, a learner could submit content-free filler (as long as it met the minimum word count) and the app
  would treat every requirement as satisfied. Replaced the static map with a generic `deriveKeywords()`
  that strips the recurring Dutch verb/function-word scaffolding shared across the requirement phrasings
  ("vraagt om X", "geeft aan Y", "legt uit Z", "meldt W", ...) via a `REQUIREMENT_STOPWORDS` set, leaving
  whatever content word(s) remain as the keyword(s) to check for — so new items get adequacy coverage
  automatically instead of needing a hand-added map entry. Two categories get dedicated handling instead of
  literal stopword-stripping, since they need semantic rather than lexical matching: tone/politeness
  requirements ("beleefde aanhef en afsluiting", "vriendelijke toon", ...) check for actual Dutch email
  greeting/closing conventions (`beste`, `geachte`, `groet`, `bedankt`, ...) rather than one fixed phrase,
  and reason-giving requirements ("geeft de reden aan", "geeft aan waarom ...") check for the connectives
  Dutch actually uses to justify something (`omdat`, `want`, `doordat`, ...) instead of the literal word
  "reden". A handful of requirement strings strip down to a keyword too generic to be meaningful (e.g.
  "afspraak" alone doesn't confirm a *reschedule* was requested) or to nothing at all (e.g. "nodigt uit" is
  the entire separable verb, with no object left after stripping "uit") — those get explicit
  `KEYWORD_OVERRIDES`. Verified by running the derivation against all 164 real requirement strings pulled
  from `lib/content/items.ts`: 0 fall through with no enforceable keyword (previously 160/164 were silently
  unenforced). Confirmed end-to-end via Playwright against the live `/write` flow: a generic filler response
  is now correctly rejected with the actual missing requirements listed, and a response that genuinely
  satisfies an item's requirements (constructed from its displayed requirement text) passes through to the
  grammar-checking stage and completes successfully.
- **+10 items to each of the 5 exam-simulation modules**: KNM (31→41), Lezen (46→56), Luisteren
  (50→60), Spreken (26→36, split evenly 5 short + 5 medium to keep the pool's 18/18 short/medium
  balance for `ExamSpeakingRunner`'s random 8+8 draw), and Schrijven's zinstaken pool (18→28). Also grew
  Schrijven's deelschrijftaken pool from 2→10 — previously `SchrijvenStructuredRunner` drew *all*
  deelschrijftaken every run (`shuffleArray(DEELSCHRIJFTAKEN_ITEMS)` with no `.slice`), which was correct
  at exactly 2 items but would have shown all 10 in a single run once the pool grew, breaking the real
  exam's 2-deelschrijftaken structure — fixed by adding `.slice(0, 2)` so it draws 2 at random like the
  zinstaken/korte-schrijftaak pools already did. KNM/Lezen/Luisteren all run their entire pool each time
  (no slicing in `ExamRunner`/`ExamListeningRunner`), so those buttons' displayed counts update
  automatically via `.length`; updated the two hardcoded `passNote` strings (KNM, Lezen) and file-header
  comments that had the old counts baked into prose. Verified via `npx tsc --noEmit` / `npm run lint` /
  `npm run build`, and via Playwright: `/exam` now shows "41 вопрос" / "56 вопросов" / "60 вопросов" on the
  KNM/Lezen/Luisteren buttons, KNM's runner correctly shows "1 / 41", Luisteren's shows "1 / 60", and the
  Schrijven structured demo correctly shows "Zinstaken 1 / 8" drawn from the larger pool.
- **Vocabulary bank grown from 2,030 to 5,000 noun bundles** — a second pass of the same kaikki.org +
  hermitdave/FrequencyWords pipeline used for the first 130→2,030 batch, drawing 2,970 more candidates
  from further down the 50k-word frequency ranking. `adjAgreement`/`collocations` stay template-generated
  and CEFR level stays a frequency-rank proxy (this batch used a 15%-A2/85%-B1 split instead of the first
  batch's 40/60, since words this far down the frequency list are much less plausibly A2). Going deeper
  into OpenSubtitles-derived frequency data surfaced a much higher density of quality issues than the
  first batch: a full read-through of all 2,970 candidates (in ~300-line chunks, same process as before)
  found roughly **150 more** words needing exclusion — mostly informal insults/pejoratives ("stommeling",
  "leeghoofd", "zeurpiet", "klikspaan", and dozens more — subtitle dialogue skews heavily toward
  confrontational speech the deeper you go), plus bare English/foreign artifacts, proper-name fragments,
  a few more mistagged adjective/verb homonyms, and darker crime/violence topics (genocide, mass murder,
  beheading, sexual-assault terms) not present in the higher-frequency first batch. All additions folded
  into the same growing `EXTRA_EXCLUDE` set in the pipeline script; each exclusion round automatically
  pulled in a same-count replacement from further down the list, so the final output is still exactly
  2,970 entries. Verified: 0 duplicate lemmas across all 5,000 entries, `npx tsc --noEmit` / `npm run
  lint` / `npm run build` all clean, and confirmed via Playwright that `/dashboard` shows "Известные слова
  0/5000" and a `/vocab` session runs cleanly through the expanded pool without error.
- **Grew every remaining practice module to 200 items** (Vocab was already at 5,000 from the two batches
  above): Reading 120→200, Listening 114→200, Speaking 115→200, Interaction 131→200, Practice (grammar)
  130→200, Writing 101→200. Split the work by risk: Reading — constrained by the §4 coverage gate, so it
  needed a generator script rather than free authoring — and Practice (grammar), where an item's
  `errorCodes`/`grammarTarget` has to be linguistically correct against §5's taxonomy, were done directly;
  Listening, Speaking, Interaction, and Writing were delegated to parallel background agents, each briefed
  with the exact schema, existing style, a non-overlapping id prefix, and an explicit instruction not to
  run build/lint/commit (a single coordinating pass did that afterward).
  **Reading**: extended the same coverage-safe template generator from the batch above with 8 new topics
  (sport, natuur, technologie, veiligheid, dieren, reizen, vrije_tijd, gezondheidszorg) drawn from the now-
  5,000-word noun bank. First run flagged every single generated text as invalid — turned out `mijn` ("my"),
  used in nearly every sentence across all 120 existing reading texts, was never actually in
  `lib/coverage.ts`'s `FUNCTION_WORDS` set. That's a real pre-existing bug: the §4 coverage gate had been
  silently under-counting coverage for the entire `/reading` module since it was built, not something this
  batch introduced. Fixed by adding `"mijn"` to `FUNCTION_WORDS`; confirmed by re-scanning all 120 original
  texts programmatically that `mijn` was the *only* token failing to resolve against the function-word set
  or a noun form.
  **Practice (grammar)**: added 3 new items per each of the 23 practice-generatable §5 error codes (all of
  `ERROR_CODES` except the external-checker-only `ERR_NLP_OTHER`), covering mc/cloze/sentence_transform task
  types, following each error code's existing example pattern exactly (e.g. the vowel-length/front-rounded-
  vowel/final-devoicing phonology items pick real minimal-pair-style Dutch words, not arbitrary ones).
  **Writing**: 99 new items across 20 fresh civic-life scenarios (library, gym, insurance, energy company,
  childcare, vet, landlord, job applications, complaints, formal objections, tech support, official
  documents, tax office, parking permits, waste collection, safety/police, leisure, school, friendship) not
  covered by the existing 101-item batch. Every one of the 297 new requirement strings across this batch was
  checked against `checkAdequacy`'s keyword-derivation logic before merging (the algorithm fixed earlier this
  session) — caught and fixed 2 that stripped to nothing enforceable ("geeft aan waarvoor" / "geeft aan
  waarmee", both missing a content word) before they could silently become unenforceable in production.
  Verified: `npx tsc --noEmit` / `npm run lint` / `npm run build` all clean; 0 duplicate ids across all 6
  files; confirmed via Playwright that `/dashboard`'s per-skill bank counts reflect the new totals, `/write`
  surfaces new-batch topics at random, and a new writing item's adequacy gate correctly rejects generic
  filler with the actual missing requirements listed.
- **Fixed `/practice` ("Oefenen") always serving the same set of exercises** — `lib/queue.ts`'s `buildQueue`
  never checked FSRS due/new state at all (unlike `lib/vocabQueue.ts`, which already did this correctly for
  `/vocab`); it just included every practice item unconditionally on every visit. Combined with the
  blocked→interleaved gate (§3, `BLOCKED_REPS_MIN = 12`) and blocked-stage items being taken in fixed
  source-file order with no shuffling, a learner would see the same first grammar target's items (often only
  8-11 unique ones per target) in the same order, session after session, since 12+ correct reps are required
  before a target graduates out of isolation. Fixed by having `buildQueue` skip any card that's neither new
  nor actually due (mirroring `vocabQueue.ts`), and shuffling the blocked group instead of taking it in fixed
  order. Also excluded `short_write` items from this queue — they were being pulled into `/practice`'s
  grammar-drill array unconditionally too, but `PracticeSession` has no UI for that task type at all.
  Wiring this up surfaced a second, genuinely pre-existing bug it had been masking: `card.due`/`last_review`
  (real `Date` objects from `ts-fsrs`) were never actually being reconstructed as `Date` instances after a
  page reload. The store's custom Date replacer/reviver in `lib/store.ts` looked for a `{ __type: "Date" }`
  wrapper shape that was never actually produced, because `JSON.stringify` calls `Date.prototype.toJSON()`
  and converts a `Date` to a plain ISO string *before* any replacer function ever sees the value — so
  `value instanceof Date` inside the replacer was always false, dead code since the persistence layer was
  built. This was invisible until now because nothing had ever called a Date method (like `.getTime()`, via
  `isDue()`) on a *reloaded* card — `/practice` crashed outright on revisit once `buildQueue` started calling
  `isDue()`. Fixed by reconstructing `Date` objects by key name (`due`/`last_review`, the only two `Date`
  fields on a persisted card) in the reviver instead of relying on a wrapper shape that JSON.stringify can
  never produce. Since `/vocab` already called the same `isDue()` function on reloaded cards via
  `vocabQueue.ts`, this was very likely already silently crashing `/vocab` on any revisit after a graded
  session too — confirmed fixed there as well. Verified via `npx tsc --noEmit` / `npm run lint` / `npm run
  build`, and via Playwright: completed a full 12-item `/practice` session (now correctly drawn from a
  shuffled mix of many different grammar targets instead of one), reloaded the page, completed a second
  session, and confirmed zero item overlap between the two — plus confirmed `/vocab` reloads without error
  after a graded session.
- **Added word pronunciation to `/vocab`** — a 🔊 button next to the lemma speaks it via the browser's Web
  Speech API (`nl-NL` voice), reusing the same TTS mechanism already used for `/listening` transcripts,
  extracted into a small shared `lib/tts.ts` (`speakDutch()` + a `supportsTts` flag) rather than duplicated.
  Two buttons, deliberately different in scope: before reveal, the button speaks only the bare lemma — never
  the article, since giving that away would defeat the de/het recall exercise the card is testing. After
  reveal, a second button speaks the full `article + lemma` phrase, reinforcing the sound-to-gender pairing
  once the answer is already shown. The button renders only when `supportsTts` is true (some browsers lack
  `speechSynthesis`), matching the existing listening-module pattern. Verified via `npx tsc --noEmit` / `npm
  run lint` / `npm run build`, and via Playwright: both buttons render at the right stage (1 before reveal, 2
  after) and clicking every one triggers no console/page errors.
- **Added Russian translations to `/vocab`** — a `translationRu` field on `NounBundle`, shown only after
  Reveal alongside the existing grammar bundle fields (never before, and never as a replacement for them —
  consistent with the app's "never bare translation pairs" design; the full bundle stays the thing being
  tested, this is a supplementary gloss). Sourced by machine-translating all 5,000 lemmas nl→ru: Google
  Translate's unofficial endpoint as primary source (retried on 429s, ~5s pacing), MyMemory as fallback for
  anything Google couldn't produce a valid-looking result for (2 of 5,000 lemmas), run as a background batch
  job over ~30 minutes. Two loanwords ("dvd", "wifi") got neither a valid API result and were set by hand.
  Machine translation of single words out of context is genuinely unreliable for a language this
  homograph-heavy — Dutch nouns very often share a spelling with an unrelated verb or adjective (e.g.
  "baan" is overwhelmingly "job" as a noun but the API returned "отслеживать", the verb "to track";
  "sollicitatie" came back as "приложение", the software-application sense of "application", not the job-
  application sense actually needed here) — so this batch got a real, multi-pass quality-control effort
  rather than being trusted as-is:
  1. A cheap, high-yield automatic filter: every source word here is a noun, so any Russian result shaped
     like a verb infinitive (ending in -ть/-ти/-чь) is a strong signal of a wrong-sense pick. Flagged 365
     of 5,000; after excluding legitimate Russian nouns that happen to end the same way (е.g. "часть",
     "власть", "мать", "кость" — genuine -ь-final feminine nouns, not infinitives), ~237 were confirmed
     genuine errors and hand-corrected to the right noun sense.
  2. Two rounds of manual spot-checking on random samples (400 + 300 words, ~14% of the dataset) to catch
     wrong-sense errors that don't happen to look verb-shaped (this is how "sollicitatie" above was actually
     caught) — found and fixed ~15 more, mostly adjective-shaped or wrong-POS results for words the API
     picked an unrelated sense of.
  3. A handful of API-artifact fixes: sentence-initial capitalization on ordinary common nouns (normalized
     to lowercase across the board), and a few real Russian acronyms/abbreviations (ВВС, НЛО, ПИН-код) that
     the blanket lowercasing broke by lowercasing only the first letter — restored by hand.
  This is a real, meaningful spot-check pass, not exhaustive line-by-line verification of all 5,000 entries
  — consistent with the tradeoff already established for the vocabulary bank itself (dataset-sourced,
  spot-checked, not hand-authored per item); some remaining wrong-sense translations are still plausible
  in the untouched ~86% of the dataset. Also learned a real lesson mid-pass: an early fix used a blind
  string replace on a translation *value* ("приложение" → the correct job-application sense) which silently
  broke 3 *other*, unrelated, correctly-translated entries that happened to share that same Russian string
  ("app", "toepassing" — both genuinely "приложение" — and "blindedarm", coincidentally mistranslated to the
  same string) — caught by re-checking immediately after, fixed by switching every subsequent correction to
  a lemma-scoped regex instead of a global value replace. Verified: `npx tsc --noEmit` / `npm run lint` /
  `npm run build` all clean, 5,000/5,000 bundles have a `translationRu`, and confirmed via Playwright that
  the translation is hidden before Reveal and shown correctly after.

## What's still deliberately not here (see scope doc §11 Phase 2/3)

Whisper-NL/GOP pronunciation scoring (needs a fine-tuned ASR model and audio infra this environment
doesn't have), a live LiNT API integration (coverage above is a local approximation, not the real
service), full-length timed exam simulations, offline sync, and CNaVT/Flemish/teacher-dashboard work.
Content in `lib/content/` still needs qualified editorial review. The provenance-aware pipeline now has
a Spreken and structured-Schrijven pilot, but all remaining banks need migration before shipping to learners; clear the
`[VERIFY]` items in the scope doc's §12 backlog first.

State currently persists to `localStorage` (`lib/store.ts`, Zustand) — swap the storage adapter for
a real backend before multi-device sync or teacher dashboards are needed.

## Data and external services

Progress and recordings remain in the learner's browser. The optional LanguageTool writing check is
**off by default**. When a learner explicitly enables it on `/write`, their submitted text is sent to
LanguageTool's public checking service; local writing checks continue to work without it. A formal
beta [privacy notice](https://plykov.github.io/DutchTrainer1/privacy/) and
[terms](https://plykov.github.io/DutchTrainer1/terms/) now disclose these flows. They still require
professional legal review before a production launch; see the roadmap.

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
