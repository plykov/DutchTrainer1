# Product roadmap

This is the current, consolidated backlog for Dutch A2/B1 Examentrainer. It replaces the older
"seed slice" wording in the narrative README: the app currently contains 5,000 noun bundles and
200 items in each main practice bank, but that content still requires editorial validation before a
learner-facing production launch.

## Milestone 1 — safe, testable beta

- [x] Keep learner progress in browser-local storage and provide a full-progress delete control.
- [x] Make the optional LanguageTool writing check explicit: it is off by default and clearly states
  that enabled submissions are sent to LanguageTool.
- [x] Add automated tests for deterministic scheduling and writing-feedback rules.
- [x] Add automated content validation: unique IDs, answer-schema checks, coverage-token checks, and
  grammar-target/error-code consistency.
- [x] Validate that every authored writing model answer passes its own adequacy gate, with task/reference
  vocabulary supporting valid paraphrases instead of requiring exact wording from requirement labels.
- [x] Add browser end-to-end smoke checks to CI. Expand these with dedicated keyboard and screen-reader
  checks as the UI grows.
- [x] Add a privacy policy, terms, and a release/versioning process. The beta notices are deliberately
  plain-language and data-flow-specific; professional legal review remains part of production readiness.

## Milestone 2 — validated learning content

- [ ] Have qualified NT2 educators review content, Russian explanations, answer keys, CEFR labels, and
  machine-translated vocabulary glosses.
- [ ] Migrate all banks through the provenance-aware import-and-review pipeline rather than maintaining
  them directly in TypeScript. Spreken exam prompts and Schrijven zinstaken are migrated; remaining
  banks are pending.
- [ ] Add high-frequency verbs, adjectives, fixed expressions, and productive-use activities alongside
  the current noun-first vocabulary bank.
- [x] Finish English UI chrome for reading, writing, and all exam runners. Russian L1-specific teaching
  explanations remain intentionally Russian unless a separately reviewed English pedagogy is added.

## Milestone 3 — assessment and exam realism

- [ ] Replace heuristic writing adequacy with a validated task-completion/rubric workflow.
- [ ] Add licensed natural Dutch audio and multi-speaker listening material.
- [ ] Add ASR/GOP-based pronunciation feedback with explicit voice-data consent and retention controls.
- [ ] Complete full-length timed simulations and re-verify official-format details before each release.

## Milestone 4 — learner platform

- [ ] Add authentication, encrypted/synchronised progress, backup/export, and account deletion.
- [ ] Add an offline/PWA experience that has a defined behaviour when optional external checks are absent.
- [ ] Build teacher/cohort dashboards only after learner data, permissions, and consent are designed.
- [ ] Consider CNaVT/Flemish support as a separate curriculum, not a locale switch.

## Definition of a production launch

The app should not be presented as a validated exam predictor until Milestones 1–3 have passed content
review, accessibility/browser QA, and a privacy review. Its readiness indicator remains formative.
