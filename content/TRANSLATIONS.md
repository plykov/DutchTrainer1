# Instruction translation status

English learner-visible instructions and explanations were machine-translated from the existing
Russian copy with Argos Translate ru-en 1.9 on 2026-08-23. They are functional fallbacks for learners
who select English as their explanation language, but remain **unreviewed** and must not be described
as educator-validated.

The translated fields are `explanationEn`, `focusHintEn`, `instructionEn`, `situationEn`, `l1NoteEn`,
and `hintEn` in:

- `content/sources/knm.json`, `content/sources/zinstaken.json`, and
  `content/sources/deelschrijftaken.json` (with generated runtime banks);
- the practice, interaction, listening, listening-exam, reading-exam, and speaking-prompt banks;
- the error taxonomy and local writing-error patterns.

Russian source fields remain intact and are the runtime fallback. Vocabulary `translationRu` glosses
and the bilingual privacy and terms pages are deliberately outside this migration.

An editorial QA pass on 2026-08-23 corrected recurring machine-translation defects in grammar and
pronunciation terminology and repaired malformed instructions. Automated content tests reject the
known failure patterns found in that audit. This improves readability but does not change the English
copy's `unreviewed` status or replace review by a qualified NT2 educator.

A second editorial sweep corrected additional literal translations involving appointments,
registration, prescriptions, benefits, municipal services, separable verbs, negation, and pronominal
`er`. These remain high-confidence readability corrections, not educator validation.
