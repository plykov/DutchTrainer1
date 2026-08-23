# Content source and review workflow

Learner content should enter the app through a structured source document, not by directly editing a
generated TypeScript bank. The pilot bank is `sources/speaking-exam.json`; migrate the other banks to
the same pattern incrementally.

Each source document records:

- source-level origin, license, URL, and verification date;
- item-level source reference and locator;
- editorial state: `unreviewed`, `in_review`, `changes_requested`, or `approved`;
- the reviewer, review date, and notes. Approved items require a reviewer and date.

## Commands

```bash
npm run content:check
npm run content:generate
npm run content:review-export -- speaking-exam
npm run content:review-import -- speaking-exam content/reviews/speaking-exam.review.tsv
```

`content:check` validates source and review metadata, validates bank-specific constraints, and fails if
the committed TypeScript output is stale. CI runs it on every pull request. `content:generate` updates
all registered generated banks deterministically.

For educator review, export a TSV, edit only `status`, `reviewer`, `reviewedAt`, and `notes`, then import
it. The `text` column is context; wording changes belong in the source JSON and should be regenerated.
Review TSV files are working documents and are ignored by Git; the imported review state in source JSON
is the durable record.

This workflow records review; it does not claim that unreviewed content is validated. A bank is only
qualified for production when its relevant items are approved by appropriately qualified reviewers.
