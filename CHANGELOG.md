# Changelog

User-visible changes are recorded here. The project follows [Semantic Versioning](https://semver.org/)
for releases and remains a public beta while its version is below `1.0.0`.

## Unreleased

### Added

- A provenance-aware source, generation, validation, and educator-review workflow, initially applied
  to the Spreken exam bank and enforced against generated-file drift in CI.

### Changed

- Completed English learner-facing chrome across navigation, learning modules, writing feedback,
  reading/listening sessions, and the KNM/Lezen/Luisteren/Schrijven/Spreken exam flows. Russian
  L1-specific teaching explanations remain intentionally Russian.

## 0.2.0-beta.1 - 2026-08-23

### Added

- Plain-language privacy notice and terms of use, linked from every page.
- A documented release and versioning process.

### Changed

- Email feedback now opens a message addressed to the project maintainer.

## 0.1.0 - 2026-08-23

### Added

- Initial public beta: onboarding, local FSRS progress, vocabulary, grammar, reading, listening,
  writing, speaking, interaction, exam simulations, settings, and GitHub Pages deployment.

### Security and privacy

- Browser-local progress deletion and explicit, off-by-default LanguageTool integration.
- Automated unit, content, privacy-boundary, and browser smoke tests in CI.
