# Release process

Dutch A2/B1 Examentrainer uses [Semantic Versioning](https://semver.org/). Versions below `1.0.0`
are beta releases: breaking changes are possible, but they must still be documented.

## Version rules

- `PATCH` — backwards-compatible fixes, content corrections, and maintenance.
- `MINOR` — new learner-facing capabilities or meaningful content-bank expansion.
- `MAJOR` — incompatible persisted-data, public-interface, or product-contract changes. `1.0.0`
  additionally requires the production-launch criteria in `ROADMAP.md`.
- Pre-release suffixes such as `-beta.1` may be used for a release that needs targeted validation.

`package.json` is the version source of truth. The root layout reads it at build time and displays it
in the site footer. `package-lock.json` must carry the same version.

## Prepare a release

1. Start from a clean, up-to-date `main` branch and choose the version according to the rules above.
2. Move completed entries from `CHANGELOG.md`'s **Unreleased** section into a dated version section.
3. Update both package files without creating a tag yet:

   ```bash
   npm version <patch|minor|major|x.y.z> --no-git-tag-version
   ```

4. If storage, accounts, analytics, recording, feedback, or any external service changed, audit the
   actual data flow and update `/privacy`, `/terms`, consent copy, and tests. Legal review is required
   before a production (`1.0.0`) launch.
5. Run the same gates as CI:

   ```bash
   npm ci
   npm run lint
   npm run test
   npx playwright install --with-deps chromium
   npm run test:e2e
   npm run build
   ```

6. Open a pull request titled `Release vX.Y.Z`. Merge only after the hosted checks pass and the
   learner-facing copy/content review appropriate to the change is recorded in the PR.

## Publish and verify

1. Confirm the post-merge GitHub Pages `build` and `deploy` jobs succeeded on the release commit.
2. Create one annotated, immutable tag on that exact commit and publish a GitHub release:

   ```bash
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin vX.Y.Z
   gh release create vX.Y.Z --verify-tag --title "vX.Y.Z" --notes-from-tag
   ```

3. Open the deployed site, confirm the footer version, and smoke-test onboarding plus every module
   affected by the release.

Do not move or reuse a published tag. If a release is faulty, revert the change on `main`, allow Pages
to redeploy, and publish a new patch version. Record the rollback and replacement in `CHANGELOG.md`.
