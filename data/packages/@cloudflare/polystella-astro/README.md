# @cloudflare/polystella-astro

The canonical PolyStella Astro integration for build-time AI translation, R2
caching, and localized routes.

```sh
pnpm add @cloudflare/polystella-astro
```

## Scope

This package composes PolyStella's reusable packages and owns all host policy:

- Astro hooks, configuration, virtual modules, and middleware.
- Filesystem source discovery and translated-content staging.
- R2 cache keys, reads, writes, metadata, local indexes, reports, and pruning.
- Overrides, AI markers, URL rewriting, and route shims.
- Content collections, custom loaders, runtime APIs, UI strings, and React hooks.
- Catalog-only mode, MDX recipes, and the `polystella` CLI.

## How It Connects

```text
@cloudflare/polystella-astro
  └──> @cloudflare/polystella-core
```

The legacy [`@cloudflare/polystella`](https://www.npmjs.com/package/@cloudflare/polystella)
package is retired and deprecated. Import `@cloudflare/polystella-astro` instead.

## Key Files

- `src/index.ts` - integration hooks and root exports.
- `src/config/options.ts` - public option schema.
- `src/translation/run.ts` - translation pass shared with the CLI.
- `src/storage/` - R2, cache, local index, pruning, and reports.
- `src/parsing/` - Astro wrappers around portable adapters and URL policy.
- `src/content/` and `src/runtime/` - localized collections and request APIs.
- `src/routing/` - locale-prefixed route shims.
- `src/i18n/` and `src/catalog/` - UI strings and catalog-only mode.
- `src/cli.ts` and `src/cli/` - standalone CLI.

Public import paths are declared in `package.json`; `client.d.ts` provides the
types-only `@cloudflare/polystella-astro/client` entry.

See the
[repository README](https://github.com/cloudflare/polystella#readme),
[package architecture](https://github.com/cloudflare/polystella/blob/main/PACKAGE_ARCHITECTURE.md),
and [system architecture](https://github.com/cloudflare/polystella/blob/main/ARCHITECTURE.md).
