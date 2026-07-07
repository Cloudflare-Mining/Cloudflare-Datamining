# Changelog

## 0.4.0

### Minor Changes

- [#14](https://github.com/cloudflare/polystella/pull/14) [`6122f6f`](https://github.com/cloudflare/polystella/commit/6122f6fe64927aa3aa5d8d6fdf0aa670dbda2fa7) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Default Markdown and MDX parsing to Satteri, with `markdown.parser: "remark"` available as a legacy compatibility escape hatch. The parser choice is now part of the Markdown/MDX extraction policy hash, so Satteri and Remark outputs use separate cache entries.

  This release also updates the package and playground/docs fixtures for Astro 7, reconstructs missing Satteri MDX ESTree metadata needed by static-data extraction and MDX audits, rewrites relative MDX imports only in staged translated files, and refreshes the local staging-cache index version to avoid stale staged MDX output.

### Patch Changes

- [#15](https://github.com/cloudflare/polystella/pull/15) [`8120b2f`](https://github.com/cloudflare/polystella/commit/8120b2f354152b7577040f97f73542019e930439) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Document the requirement to add a Changesets entry for package-affecting changes and record the docs migration to Nimbus.

All notable changes to PolyStella are tracked here. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/);
published releases follow [semver](https://semver.org/) pre-1.0
versioning.

## [Unreleased]

### Added

- Documentation site (Starlight) under `docs/`. Configuration
  reference auto-generated from the zod schema; CI asserts every
  public export has a docs entry.
- `react` declared as an **optional peer dependency**
  (`^17.0.0 || ^18.0.0 || ^19.0.0`). The `@cloudflare/polystella/react`
  subpath only imports `useMemo`, which is stable across all
  three React majors. Marked optional so consumers that don't use
  the React hooks aren't pestered for the dep.
- `@astrojs/sitemap` declared as a **dev dependency**. The
  `polystella/i18n/sitemap` helper produces options for
  `@astrojs/sitemap` but doesn't import it at runtime; consumers
  wire their own `@astrojs/sitemap` install as usual.
- `@cloudflare/polystella/client` export — types-only entrypoint for
  `env.d.ts` virtual-module references.
- `@cloudflare/polystella/runtime/middleware` export — direct middleware
  entrypoint used by `addMiddleware`. Rarely imported directly.
- `r2.bulkListOnStart` config option (default `true`). Issues one
  `r2.list()` per locale at the start of the live phase to populate
  an in-memory key set, replacing per-pair cache-check GETs with
  O(1) lookups.
- `provider.batchInputTokenBudget` config option (default 4000).
  Soft cap on per-batch input tokens; the pipeline groups adapter
  segments into batches that fit under this budget.
- Per-batch document-context block. `markdown.contextKeys`
  declares frontmatter keys whose source-language values are
  injected into the system prompt to keep terminology consistent
  across batches when a long document is split.
- `polystella check-ui`, `sync-ui`, `translate-ui` subcommands for
  UI-string maintenance.
- `PermanentProviderError` class. Translator implementations throw
  it on 401/403/404/422 to short-circuit the retry loop.
- `AbortSignal` threading. Ctrl-C during a build cleanly aborts
  in-flight provider calls.
- End-to-end smoke test (`tests/smoke.test.ts`) that drives the
  `polystella(options)` factory against a real temp project.

### Changed

- **Breaking:** the CLI is now subcommand-based. Run
  `polystella --help` for the menu. Subcommands own their own argv
  parsing.
- The parser round-trip test runs over a bundled
  `tests/fixtures/parsing/round-trip/` corpus. 15 fixtures cover
  the full feature surface of `remark-parse + remark-gfm +
remark-frontmatter`: frontmatter shapes, inline formatting,
  headings, lists (incl. task lists), code blocks, blockquotes,
  GFM tables, raw HTML, thematic breaks, empty frontmatter, no
  frontmatter, footnotes, images, and a punctuation-heavy edge-
  case file with Unicode + escapes.
- `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`,
  `noImplicitReturns`, `noFallthroughCasesInSwitch` enabled in
  `tsconfig.json`.
- Translation retries migrated from a hand-rolled loop to
  `p-retry` with exponential backoff and jitter.
- `POLYSTELLA_VERSION` constant now reads from `package.json` via
  a JSON import, ensuring R2 metadata always reflects the actual
  published version.

### Performance

- Dry-run and live passes merged. Live builds now do ONE
  `adapter.parse` per source (was two).
- R2 bulk pre-list (see Added). Replaces per-pair GETs with O(1)
  lookups; typically reduces cold-build network round-trips by
  20–30x.
- Picomatch matcher caching. `WeakMap` per `noPrefixUrls` array in
  the runtime hot paths; pattern-keyed `Map` per glob in the build
  hot paths. Compilation moves from per-call to first-call-only.
- Glossary reuse between `runTranslationPass` and
  `publishRuntimeBridge`. Saves one FS read per locale per build.

### Fixed

- `extractSegments` and `selectTranslatableFrontmatter` no longer
  crash on files with empty YAML frontmatter (`---\n---`). The
  `yaml` parser returns `null` for empty input, which the old
  `as Record<string, unknown>` cast didn't guard against. Both
  functions now coerce non-object YAML to an empty record.
- `publishRuntimeBridge` no longer loses its `stagingDir` parameter
  on signature changes.
- 6 non-null assertions (`!`) and 4 `: any` annotations removed
  from `src/`.

### Documentation

- New `ARCHITECTURE.md` covers system-level design, hard
  invariants, domain glossary, and per-subsystem reference.
- New `AGENTS.md` covers agent-facing context.
- New `skills/polystella-consumer/SKILL.md` and
  `skills/polystella-contributor/SKILL.md` — opt-in agent skills
  for consumer and contributor workflows.
- New `llms.txt` and `llms-full.txt` at the package root per the
  llmstxt.org convention.

## Earlier history

Pre-0.1, breaking changes were rolled forward without a log because
the package was internal-only. The git history is the authoritative
record.
