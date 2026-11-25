# @cloudflare/polystella-core

## 0.8.0

### Minor Changes

- [#89](https://github.com/cloudflare/polystella/pull/89) [`aa0d4f6`](https://github.com/cloudflare/polystella/commit/aa0d4f66d0048dae53feda3e6e0e70608cd7f1cf) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - The EmDash admin now has a PolyStella sidebar group with Settings (Translation settings, Collections and Sandbox tabs, chosen with `?tab=`), Catalog and Batch translation pages; the old `/` address opens Settings. Code-defined instructions and glossaries open read-only in a new window, and every link that opens a new window shows an icon. Collections show as two columns with a link to each content type, catalog keys drop their group prefix, and the editor panel's SEO note is collapsed.

  Batch run pages label locales with `localeTags`, counts read "1 entry" and "1 batch", debug traces show the extra Workers AI input each request sends (such as thinking settings), and Collections warns when a ticked repeater subfield looks like a link or ID. Core exports `workersAIRequestParams`.

## 0.7.0

### Minor Changes

- [#70](https://github.com/cloudflare/polystella/pull/70) [`af5bf77`](https://github.com/cloudflare/polystella/commit/af5bf77417169c3f21e8abb0fa324b685af6bb4e) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - `translateSegments` accepts an opt-in `concurrency` (default 1) that sends several batches at once; the first failure aborts the batches still in flight. EmDash content translation now sends up to 3 batches of an entry at once, so long entries translate faster. The Astro build keeps one batch at a time per file, since it already translates several files in parallel.

  A reply cut off at the output token limit (`finish_reason: "length"` from Workers AI, `stop_reason: "max_tokens"` from Anthropic) now fails with "model ran out of output tokens", naming the model and limit, instead of an "unexpected response shape" or missing-segment error. EmDash shows this message to editors.

- [#77](https://github.com/cloudflare/polystella/pull/77) [`e73169a`](https://github.com/cloudflare/polystella/commit/e73169a96f9e155b2365dc3af078ee355cb3f4a5) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - UI-string catalogs can skip entries that are not messages. List regex strings in `catalog.ignoreKeys` in `polystella.config.mjs`, for example `catalog: { ignoreKeys: ["\\$schema"] }` for the `$schema` key in inlang / Paraglide message files. Each pattern must match the whole dotted key, and a matched group skips its whole subtree.

  `sync-ui`, `check-ui`, `translate-ui`, the build's drift check and `catalogAstro()` skip ignored entries: they are never synced, checked or sent to the model, and they may hold any value, such as an inlang variant-message array. Ignored entries already in a locale file are kept as they are. A top-level `$schema` from the default-locale file is copied into locale files that lack it. An invalid pattern fails at config load.

  The option is read only from `polystella.config.mjs`. `polystella()` accepts a `catalog` key so a shared config object still validates, and warns when an inline value differs from the file. `sync-ui` and `translate-ui --sync-only` now load `polystella.config.mjs` when it exists. A catalog array value that is not ignored still fails, and the error now suggests `catalog.ignoreKeys`. The catalog commands now report an unreadable catalog file (invalid JSON, an array value) with exit code 1 instead of crashing, and `polystella.config.mjs` falls back to Astro's Vite loader when Node cannot import it, the same way `astro.config.mjs` does.

- [#77](https://github.com/cloudflare/polystella/pull/77) [`9640535`](https://github.com/cloudflare/polystella/commit/9640535b064a7cb0e986a0cc8f3902bf675d7c88) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - UI-string catalogs can use standard ICU MessageFormat. Set `catalog: { messageSyntax: "icu" }` in `polystella.config.mjs` to write placeholders as `{name}` and plurals as `{count, plural, one {# item} other {# items}}` instead of the default `{{name}}` syntax. This fits catalogs from inlang's ICU MessageFormat plugin.

  `check-ui`, `translate-ui`, the build's drift checks, `Astro.locals.t`, `getTranslations()`, `useTranslations()` and `catalogAstro()` follow the setting. Single-brace placeholders get the same missing/spurious checks, plural-category checks and translation retries as `{{name}}`. A default-locale string that isn't valid ICU (such as inlang markup) is reported by `check-ui` and never sent to the model by `translate-ui`, which lists it as a failure. The standalone `formatMessage()` and the core validators take the syntax as an optional argument, defaulting to `"polystella"`.

  The EmDash plugin takes the same block as a new `catalog` option (`catalog: { ignoreKeys, messageSyntax }`), since it can't read `polystella.config.mjs`. Ignored keys are left out of the Catalog tab, validation and generation, and JSON export keeps them as they are. An ignored array value no longer fails validation. `messageSyntax` applies to override validation, catalog generation, the Catalog tab's placeholder hint and the runtime `t()`. A nested JSON export now keeps an override for a key that only the default-locale file has; it used to drop it.

  `check-ui` now fails with exit 1 when the default-locale catalog file is missing, as `sync-ui --check` already did. The build's drift check still skips it.

- [#72](https://github.com/cloudflare/polystella/pull/72) [`914e09b`](https://github.com/cloudflare/polystella/commit/914e09b426f6a2bc5d5abd45522a9a22c79c41b6) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Large glossaries now work. Each translation request carries only the `doNotTranslate` terms and `preferredTranslations` whose source term appears in its text or document context (case-insensitive, at word boundaries); style rules and notes are always sent. A 35K-character glossary drops from about 9K tokens per request to the style rules plus a few matched terms. Cache keys are unchanged.

  - `glossary.matchInflections` (Astro and the catalog CLI) and `glossaryMatchInflections` (EmDash) let any letters follow a term, so `Worker` also matches "Workers". Default off.
  - `provider.maxPromptTokens` (default 8000) caps a whole prompt. A batch over it is split; a single segment over it fails with `PromptTooLargeError` ("prompt for segment … is about N tokens, over maxPromptTokens").
  - EmDash no longer caps the effective glossary at 10,000 characters, which blocked both translation and saving Translation settings for sites with large code-defined glossaries. Only the administrator-typed glossary text keeps its 10,000-character cap; `glossaryDefaults` get a 1,000,000-character sanity bound.
  - Debug traces show how many glossary terms each batch sent.
  - Core exports `selectGlossaryForText`, `buildBatchPrompt`, `estimatePromptTokens`, `DEFAULT_MAX_PROMPT_TOKENS` and `PromptTooLargeError`; `TranslateBatchAttemptEvent` gains `glossary` stats.

- [#70](https://github.com/cloudflare/polystella/pull/70) [`c996787`](https://github.com/cloudflare/polystella/commit/c99678710c2cdf43e06e6874a1b1da910b3fcdf4) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Inline markup is now protected during translation. A `Segment` can set `markup: "html"` or `"markdown"`; `translateSegments` swaps its tags (and Markdown links, images, emphasis, code spans and escapes) for `{{ps_N}}` placeholders before the model call and puts them back afterwards, so URLs never reach the model. A reply that loses, repeats, reorders or empties a placeholder is resent once with the problem explained, then fails with `InlineMarkupError` ("model changed inline markup") instead of saving broken links or tags.

  The Markdown adapter opts `.md` body segments in, so Astro `.md` translations get the same protection; MDX keeps its existing inline JSX placeholders. Cache keys are unchanged.

  `@cloudflare/polystella-core/adapters` adds `splitMarkdownText(source)`, which cuts one Markdown string into the same body segments as the Markdown adapter and splices translations back, without frontmatter or MDX support (about 45 KB gzipped instead of about 140 KB). Core is now marked `"sideEffects": false`, so bundlers drop the adapters a Worker doesn't import.

  EmDash protects inline tags such as `<gradient>…</gradient>` in every translated string, and `blockFields` paths can be `{ path, format: "markdown" }` to translate a Markdown string one paragraph, heading or list item at a time.

- [#76](https://github.com/cloudflare/polystella/pull/76) [`ff7629f`](https://github.com/cloudflare/polystella/commit/ff7629fc371084b33645b3b7cb568e6aa4600eb0) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Reasoning models' thinking can be turned on or off per locale, next to the locale's model. An entry in EmDash `models.defaults`, or in the `translate-ui` CLI's `provider.model` (`kind: "workers-ai"`), can be `{ model, enable_thinking }`:

  ```js
  defaults: {
    default: { model: MODEL, enable_thinking: false },
    "ja-JP": { model: MODEL, enable_thinking: true },
  },
  ```

  It applies while the locale uses that model; a model an administrator picks instead keeps its own params. `enable_thinking: true | false` in `models.params` (EmDash), `provider.params` (CLI, new) or the Workers AI translators' `params` (core) sets it for every locale. PolyStella sends it as `chat_template_kwargs.enable_thinking`, the only form Workers AI reads; it silently ignores a top-level `enable_thinking`, so that key used to have no effect. A non-boolean value, or also setting it in `chat_template_kwargs`, is rejected.

  Core exports the `ModelChoice` and `ModelChoiceSpec` types, `resolveModelChoice`, and from `providers/workers-ai` `workersAIParamsProblem` and `workersAIParamsForLocale`. `resolveModelId` accepts a `ModelChoiceSpec`.

- [#73](https://github.com/cloudflare/polystella/pull/73) [`7d79462`](https://github.com/cloudflare/polystella/commit/7d79462cf6564a8c70c425feb6f670b8c09202cd) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Workers AI requests can now be tuned and measured.

  - `models.params` (EmDash) sets extra Workers AI input per allowed model, such as `{ chat_template_kwargs: { enable_thinking: false } }` to turn off GLM-4.7-flash's reasoning. Keys PolyStella sets (`messages`, `prompt`, `max_tokens`, `max_completion_tokens`, `stream`) are rejected. Core's Workers AI translators take the same `params`.
  - `provider.timeoutMs` (EmDash, default 200,000) stops waiting for a reply, under Workers AI's own ~236 s timeout, and fails with "The translation model timed out". Core's Workers AI translators take `timeoutMs` and throw the retriable `ProviderTimeoutError`. HTTP requests are aborted; with the binding, PolyStella stops waiting while the upstream call may finish.
  - Each attempt in the debug trace, and the server log entry of a failed reply, shows the finish reason, input, output and reasoning tokens, and the reasoning text size. `Translator.translate` takes an optional `onResponse` callback for this, and `TranslateBatchAttemptEvent` gains `providerResponse`.
  - Fixed: `glossaryMatchInflections` was dropped when EmDash options were serialized, so it never reached the server.

### Patch Changes

- [#74](https://github.com/cloudflare/polystella/pull/74) [`6c71933`](https://github.com/cloudflare/polystella/commit/6c71933a3bbb8af80df3ac393fd319833301d51f) Thanks [@dependabot](https://github.com/apps/dependabot)! - Update runtime dependencies: `satteri` 0.11, `acorn`, `picomatch`, `yaml`, and `intl-messageformat` with its ICU parser.

- [#70](https://github.com/cloudflare/polystella/pull/70) [`f1a58b1`](https://github.com/cloudflare/polystella/commit/f1a58b1172c2c76cb03359bfcf358557ca1f2046) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Translation failures now log the raw error under their Diagnostic ID, in the server log only: the full message (including the provider response preview), any error code, and the cause chain. Editors still see only the short, safe message. Workers AI "unexpected response shape" errors now start their preview with the first choice's `finish_reason` and the size of each reply field, such as `reasoning_content`, so a long reasoning field no longer hides them.

- [#72](https://github.com/cloudflare/polystella/pull/72) [`7633d18`](https://github.com/cloudflare/polystella/commit/7633d184f8bed6219a5fcb145943b2e79ce24ccf) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - A one-segment batch whose reply has no `@@<id>@@` marker line is now accepted as that segment's translation instead of failing with "no segment markers"; inline-markup placeholders are still checked afterwards. EmDash shows Workers AI timeouts (`AiError` "3046: Request timeout") as "The translation model timed out (Workers AI error 3046). Try again, or translate fewer fields at once or pick a faster model." instead of the generic failure.

## 0.6.0

### Minor Changes

- [#64](https://github.com/cloudflare/polystella/pull/64) [`78d52ff`](https://github.com/cloudflare/polystella/commit/78d52ff45fe626e1e1a4039db715217741fed474) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Catalog strings are now ICU messages written with double outer braces, so plurals, select, ordinals and number/date formatting work in `t()`: `{{count, plural, =0 {No roles} one {# role} other {# roles}}}`. Existing `{{name}}` strings keep working, and `{{ name }}` with spaces now works too. A missing value stays visible as source text; a string that is not a valid message falls back to the default locale's string, then to the key. Apostrophes follow ICU quoting: write `''` directly before `{{`, `}` or a plural `#`.

  New: `formatMessage`, `MessageSyntaxError`, `createPassthroughTranslateFn` and locale-tag helpers in `@cloudflare/polystella-core/catalog`; `t.raw(key)` and `t.locale` on every translator; `useTranslations(dictionary, locale?)`; and a `localeTags` option (site locale code → BCP 47 tag) on `polystella.config.mjs`, the Astro integration, `catalogAstro()` and the EmDash plugin. Startup fails when a locale does not resolve to a tag `Intl` recognises. Tags also name the language in translation prompts.

  `check-ui` now reports invalid messages, apostrophes that hide a placeholder, stray `{`/`}` (a doubled `}}}}` that would show on the page), and translations whose placeholders or plural/select branches differ from the default locale (exit 1); Astro builds log them as warnings. `translate-ui` and EmDash catalog generation tell the model the target's plural categories, remove branches the target never uses, and retry mismatches: a retry resends only the failed keys, with the previous answer and the problem in the prompt. EmDash rejects overrides that fail the same checks.

  Breaking: `TranslateFn` is now an interface with required `raw` and `locale` members, so hand-written `(key) => key` mocks need `createPassthroughTranslateFn()`. Placeholder names with dots or hyphens (`{{user.name}}`) make a string invalid, and a single apostrophe directly before `{{` now quotes the placeholder. The main Astro middleware's `t` now falls back per key to the default-locale dictionary.

## 0.5.0

### Minor Changes

- [#36](https://github.com/cloudflare/polystella/pull/36) [`ab709dc`](https://github.com/cloudflare/polystella/commit/ab709dcfd0706b4bd16b6a1e70b3eccf12192b68) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Extract PolyStella into the independently versioned portable core package (with adapters, providers, and catalog CLI subpaths), plus the canonical `@cloudflare/polystella-astro` integration (successor to the retired `@cloudflare/polystella` package).

- [#40](https://github.com/cloudflare/polystella/pull/40) [`ebddbae`](https://github.com/cloudflare/polystella/commit/ebddbaeb4b617b5cbb6f247c62aa1fe94f890b58) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Add the native EmDash plugin with administrator-owned collection policies, saved-entry content translation, per-locale model and glossary settings, shared instruction controls, request-scoped administrator debug traces, Workers AI binding or runtime-secret HTTP routes, temporary catalog overrides, deterministic JSON export, a Kumo-based React admin UI, companion Astro runtime catalog integration, and the existing catalog CLI commands. Extract those commands into core's shared CLI subpath so Astro and EmDash use the same implementation.

- [#51](https://github.com/cloudflare/polystella/pull/51) [`2c4c28a`](https://github.com/cloudflare/polystella/commit/2c4c28a132640e454bcfc4b3cce650392e86be8a) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Load per-locale glossary YAML from authenticated HTTP directories and private R2 buckets while preserving content-based cache invalidation.

- [#48](https://github.com/cloudflare/polystella/pull/48) [`0b8fa4d`](https://github.com/cloudflare/polystella/commit/0b8fa4d772132a69b6371a04537ac54aee648fcf) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Merge the `@cloudflare/polystella-adapters`, `@cloudflare/polystella-providers`, and `@cloudflare/polystella-cli` packages into `@cloudflare/polystella-core` as namespaced subpaths (`/adapters`, `/providers`, `/providers/*`, `/cli`, `/cli/*`). The old package names are not republished as compatibility wrappers; rewrite imports to the new subpaths. Core's root, catalog, adapters, and providers entrypoints stay Workerd-portable without `nodejs_compat`; Node imports exist only under `/cli`.

- [#43](https://github.com/cloudflare/polystella/pull/43) [`42fb7d4`](https://github.com/cloudflare/polystella/commit/42fb7d43c265aedee4b75f0a158669dfa62cf3c2) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Support nested catalog JSON format alongside the flat string→string format. Nested groups are flattened to dotted keys so `t("site.title")` works identically in both formats; an optional `i18n_group_title` key per group is metadata for tooling and is excluded from translation keys, drift checks, and AI translation. Format is auto-detected per file; all locale files must match the default locale's format. Drift detection, `sync-ui`, `translate-ui`, the content-collection `i18nSchema`, and the EmDash runtime, admin, overrides, and export flow all handle nested files through the same core catalog functions.

- [#36](https://github.com/cloudflare/polystella/pull/36) [`b501153`](https://github.com/cloudflare/polystella/commit/b501153b0cf33ede02a531c1362e27b139024fea) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Colocate the Markdown and MDX adapter implementation, move MDX-specific options out of generic contracts, protect nested inline JSX, and reject malformed key paths.

### Patch Changes

- [#39](https://github.com/cloudflare/polystella/pull/39) [`f0955c4`](https://github.com/cloudflare/polystella/commit/f0955c4f68c522187271665cd8cab005b3ff60bc) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Expose portable catalog runtime and AI translation subpaths from core while preserving the existing Astro catalog and UI-string APIs.

- [#36](https://github.com/cloudflare/polystella/pull/36) [`9469492`](https://github.com/cloudflare/polystella/commit/946949252728c51a73ac1bbeb8944b50a371ee23) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Document post-migration package ownership, dependency boundaries, key files, and package relationships for contributors.

- [#36](https://github.com/cloudflare/polystella/pull/36) [`9469492`](https://github.com/cloudflare/polystella/commit/946949252728c51a73ac1bbeb8944b50a371ee23) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Keep format-specific prompt guidance in its owning adapter, enforce segment grouping invariants, reject duplicate segment IDs, and expose optional per-attempt translation observations in the format-neutral core.

- [#59](https://github.com/cloudflare/polystella/pull/59) [`69d12e5`](https://github.com/cloudflare/polystella/commit/69d12e55e86b963c1062acb6df538aeaeba92030) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Raise the `smol-toml` dependency floor to `^1.9.1` to pick up the patched release.

- [#53](https://github.com/cloudflare/polystella/pull/53) [`fbbf92b`](https://github.com/cloudflare/polystella/commit/fbbf92bae447f6720edd72c4eeb2c3d61c40be86) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Load the Astro config the way Astro does in every CLI command: find `astro.config.{mjs,js,ts,mts}`, try a plain Node import, and fall back to the project's Astro-installed Vite when that fails. Configs that import TypeScript-only packages no longer break `check-ui`, `sync-ui`, `translate-ui`, `translate`, or `audit-mdx`.
