# @cloudflare/polystella-core

Platform-neutral translation contracts, portable format adapters, AI provider
transports, and shared catalog CLI commands for PolyStella.

## Scope

The root entrypoint owns:

- `Segment`, `Glossary`, `Logger`, and `Translator` contracts.
- Prompt construction and provider-response parsing.
- Token estimation, grouping validation, and batch packing.
- Translation execution, retries, cancellation, and `PermanentProviderError`.
- Optional per-attempt observation of prompts, normalized responses, parsing,
  timing, and batch metrics.
- Catalog lookup, fallback, interpolation, and UI-string translation.

Namespaced subpaths own the rest:

- `/adapters` — portable Markdown, MDX, JSON, YAML, and TOML parsing,
  extraction, grouping, and translation application.
- `/providers` — Workers AI HTTP/binding and Anthropic transports.
- `/cli` — Node.js catalog command handlers, filesystem drift/sync, config
  loading, and glossary loading.

The root, catalog, adapters, and providers entrypoints do not depend on
Astro or Node filesystem APIs and run in Workerd without `nodejs_compat`.
Node imports exist only under `/cli`.

## Key Files

- `src/index.ts` - public barrel.
- `src/translator.ts` - provider contract and permanent errors.
- `src/prompt.ts` - prompt construction and response parsing.
- `src/batch.ts` - token estimation and batch packing.
- `src/translate-batch.ts` - retries and one provider request.
- `src/translate-segments.ts` - end-to-end segment orchestration.
- `src/catalog/index.ts` - dependency-free catalog runtime.
- `src/catalog/translate.ts` - catalog AI translation and token validation.
- `src/adapters/` - portable format adapters and key paths.
- `src/providers/` - Workers AI and Anthropic transports.
- `src/cli/` - shared Node.js catalog commands.

Public import paths:

- `@cloudflare/polystella-core` - translation protocol and orchestration.
- `@cloudflare/polystella-core/catalog` - catalog runtime without the retry path.
- `@cloudflare/polystella-core/catalog/translate` - selected-entry and empty-placeholder catalog AI translation.
- `@cloudflare/polystella-core/adapters` - portable format adapters.
- `@cloudflare/polystella-core/providers` - provider factories from one entrypoint.
- `@cloudflare/polystella-core/providers/workers-ai` and `.../anthropic` - per-provider factories.
- `@cloudflare/polystella-core/cli` and `@cloudflare/polystella-core/cli/*` - Node.js catalog commands.

See the
[package architecture](https://github.com/cloudflare/polystella/blob/main/PACKAGE_ARCHITECTURE.md)
and [translator contract](https://github.com/cloudflare/polystella/blob/main/ARCHITECTURE.md#translator-contract)
for contributor guidance.
