# @cloudflare/polystella-astro

## 0.5.0

### Minor Changes

- [#36](https://github.com/cloudflare/polystella/pull/36) [`ab709dc`](https://github.com/cloudflare/polystella/commit/ab709dcfd0706b4bd16b6a1e70b3eccf12192b68) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Extract PolyStella into the independently versioned portable core package (with adapters, providers, and catalog CLI subpaths), plus the canonical `@cloudflare/polystella-astro` integration (successor to the retired `@cloudflare/polystella` package).

- [#51](https://github.com/cloudflare/polystella/pull/51) [`2c4c28a`](https://github.com/cloudflare/polystella/commit/2c4c28a132640e454bcfc4b3cce650392e86be8a) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Load per-locale glossary YAML from authenticated HTTP directories and private R2 buckets while preserving content-based cache invalidation.

- [#43](https://github.com/cloudflare/polystella/pull/43) [`42fb7d4`](https://github.com/cloudflare/polystella/commit/42fb7d43c265aedee4b75f0a158669dfa62cf3c2) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Support nested catalog JSON format alongside the flat string→string format. Nested groups are flattened to dotted keys so `t("site.title")` works identically in both formats; an optional `i18n_group_title` key per group is metadata for tooling and is excluded from translation keys, drift checks, and AI translation. Format is auto-detected per file; all locale files must match the default locale's format. Drift detection, `sync-ui`, `translate-ui`, the content-collection `i18nSchema`, and the EmDash runtime, admin, overrides, and export flow all handle nested files through the same core catalog functions.

- [#36](https://github.com/cloudflare/polystella/pull/36) [`b501153`](https://github.com/cloudflare/polystella/commit/b501153b0cf33ede02a531c1362e27b139024fea) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Colocate the Markdown and MDX adapter implementation, move MDX-specific options out of generic contracts, protect nested inline JSX, and reject malformed key paths.

### Patch Changes

- [#39](https://github.com/cloudflare/polystella/pull/39) [`f0955c4`](https://github.com/cloudflare/polystella/commit/f0955c4f68c522187271665cd8cab005b3ff60bc) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Expose portable catalog runtime and AI translation subpaths from core while preserving the existing Astro catalog and UI-string APIs.

- [#40](https://github.com/cloudflare/polystella/pull/40) [`ebddbae`](https://github.com/cloudflare/polystella/commit/ebddbaeb4b617b5cbb6f247c62aa1fe94f890b58) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Add the native EmDash plugin with administrator-owned collection policies, saved-entry content translation, per-locale model and glossary settings, shared instruction controls, request-scoped administrator debug traces, Workers AI binding or runtime-secret HTTP routes, temporary catalog overrides, deterministic JSON export, a Kumo-based React admin UI, companion Astro runtime catalog integration, and the existing catalog CLI commands. Extract those commands into core's shared CLI subpath so Astro and EmDash use the same implementation.

- [#36](https://github.com/cloudflare/polystella/pull/36) [`9469492`](https://github.com/cloudflare/polystella/commit/946949252728c51a73ac1bbeb8944b50a371ee23) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Document post-migration package ownership, dependency boundaries, key files, and package relationships for contributors.

- [#36](https://github.com/cloudflare/polystella/pull/36) [`9469492`](https://github.com/cloudflare/polystella/commit/946949252728c51a73ac1bbeb8944b50a371ee23) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Keep format-specific prompt guidance in its owning adapter, enforce segment grouping invariants, reject duplicate segment IDs, and expose optional per-attempt translation observations in the format-neutral core.

- [#48](https://github.com/cloudflare/polystella/pull/48) [`0b8fa4d`](https://github.com/cloudflare/polystella/commit/0b8fa4d772132a69b6371a04537ac54aee648fcf) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Merge the `@cloudflare/polystella-adapters`, `@cloudflare/polystella-providers`, and `@cloudflare/polystella-cli` packages into `@cloudflare/polystella-core` as namespaced subpaths (`/adapters`, `/providers`, `/providers/*`, `/cli`, `/cli/*`). The old package names are not republished as compatibility wrappers; rewrite imports to the new subpaths. Core's root, catalog, adapters, and providers entrypoints stay Workerd-portable without `nodejs_compat`; Node imports exist only under `/cli`.

- [#58](https://github.com/cloudflare/polystella/pull/58) [`55b64a8`](https://github.com/cloudflare/polystella/commit/55b64a8633fd4757d9b915ec76ef5232b23c570d) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Retire the `@cloudflare/polystella` compatibility package. Install `@cloudflare/polystella-astro` and rewrite imports; the Astro, core, and EmDash packages are now versioned independently.

- [#53](https://github.com/cloudflare/polystella/pull/53) [`fbbf92b`](https://github.com/cloudflare/polystella/commit/fbbf92bae447f6720edd72c4eeb2c3d61c40be86) Thanks [@diogoascarneiro](https://github.com/diogoascarneiro)! - Load the Astro config the way Astro does in every CLI command: find `astro.config.{mjs,js,ts,mts}`, try a plain Node import, and fall back to the project's Astro-installed Vite when that fails. Configs that import TypeScript-only packages no longer break `check-ui`, `sync-ui`, `translate-ui`, `translate`, or `audit-mdx`.

- Updated dependencies [[`f0955c4`](https://github.com/cloudflare/polystella/commit/f0955c4f68c522187271665cd8cab005b3ff60bc), [`ab709dc`](https://github.com/cloudflare/polystella/commit/ab709dcfd0706b4bd16b6a1e70b3eccf12192b68), [`ebddbae`](https://github.com/cloudflare/polystella/commit/ebddbaeb4b617b5cbb6f247c62aa1fe94f890b58), [`9469492`](https://github.com/cloudflare/polystella/commit/946949252728c51a73ac1bbeb8944b50a371ee23), [`2c4c28a`](https://github.com/cloudflare/polystella/commit/2c4c28a132640e454bcfc4b3cce650392e86be8a), [`9469492`](https://github.com/cloudflare/polystella/commit/946949252728c51a73ac1bbeb8944b50a371ee23), [`0b8fa4d`](https://github.com/cloudflare/polystella/commit/0b8fa4d772132a69b6371a04537ac54aee648fcf), [`42fb7d4`](https://github.com/cloudflare/polystella/commit/42fb7d43c265aedee4b75f0a158669dfa62cf3c2), [`69d12e5`](https://github.com/cloudflare/polystella/commit/69d12e55e86b963c1062acb6df538aeaeba92030), [`b501153`](https://github.com/cloudflare/polystella/commit/b501153b0cf33ede02a531c1362e27b139024fea), [`fbbf92b`](https://github.com/cloudflare/polystella/commit/fbbf92bae447f6720edd72c4eeb2c3d61c40be86)]:
  - @cloudflare/polystella-core@0.5.0

## 0.4.0

Compatibility package for `@cloudflare/polystella`.
