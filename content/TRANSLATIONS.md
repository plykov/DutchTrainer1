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
