# PolyStella

> ⚠️ **Work in progress.** PolyStella is in active development. APIs, configuration shapes, and internal behaviour may change without notice. Do not adopt for new projects yet.

PolyStella is an [Astro](https://astro.build) integration that translates content into additional locales at build time using AI, caches translations in Cloudflare R2, and injects locale-prefixed routes for the translated pages.

## What it does

- **Build-time translation.** Translates `.md`, `.mdx`, and `.toml` content into additional locales during `astro build`. Visitors get static bytes; no runtime AI calls.
- **R2-cached.** Translations are content-addressed by source bytes + glossary + model. Unchanged pages cost zero on rebuild. Translations are never committed to the repo.
- **Glossary control.** Per-locale YAML files pin do-not-translate terms, preferred translations, and free-form translator notes.
- **Hand-translation overrides.** Drop a file at `i18n/overrides/{locale}/<mirrored-path>` and it wins over AI output verbatim.
- **Locale-prefixed routing.** Ships its own route shims that locale-prefix pages via injected dynamic routes.
- **UI-string maintenance.** Per-locale JSON files for chrome text, with build-time drift detection and a CLI for sync + AI-fill.

## Install

Install from npm:

```bash
pnpm add @cloudflare/polystella
```

Peer dependencies: `astro ^6.0.0`, optionally `react ^17 || ^18 || ^19`.

## Quick start

Four files participate in a typical setup.

**1. `astro.config.mjs`** — register the integration. Locale set lives here.

```js
import { defineConfig } from "astro/config";
import polystella from "@cloudflare/polystella";
import polystellaConfig from "./polystella.config.mjs";

export default defineConfig({
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "pt-BR", "ja-JP"],
  },
  integrations: [polystella(polystellaConfig)],
});
```

**2. `polystella.config.mjs`** — provider, glossary, R2, format-specific keys. Every option is documented in the [configuration reference](https://polystella-docs.pcx-team.workers.dev/configuration/reference/).

**3. `src/content.config.ts`** — register sibling collections so Astro's content layer picks up translations. Locale set is auto-derived from `astro.config.mjs`.

```ts
import { defineCollection } from "astro:content";
import { polystellaCollections } from "@cloudflare/polystella/content";
import { i18nLoader, i18nSchema } from "@cloudflare/polystella/i18n";

import { blog, authors } from "./content-schemas";

export const collections = {
  ...polystellaCollections({
    source: { blog, authors },
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
```

**4. `src/env.d.ts`** — pick up types for PolyStella's virtual modules:

```ts
/// <reference types="@cloudflare/polystella/client" />
```

## Catalog-Only Usage

Projects that already handle localized content and routing can adopt only
PolyStella's JSON catalog flow:

```ts
import catalogAstro from "@cloudflare/polystella/catalog/astro";

export default defineConfig({
  i18n: { defaultLocale: "en-US", locales: ["en-US", "pt-BR"] },
  integrations: [catalogAstro({ baseDir: "./src/i18n" })],
});
```

This binds `Astro.locals.t` and `Astro.locals.lhref` only. It does not
run content translation, route shims, R2 cache setup, or localized
collection APIs.

## Documentation

Full documentation lives at the Starlight docs site (under `docs/` in this repo):

- [Getting started](https://polystella-docs.pcx-team.workers.dev/getting-started/install/) — install, quick start, mental model
- [Concepts](https://polystella-docs.pcx-team.workers.dev/concepts/how-it-works/) — pipeline, cache, overrides, runtime bridge
- [Configuration reference](https://polystella-docs.pcx-team.workers.dev/configuration/reference/) — every option
- [CLI](https://polystella-docs.pcx-team.workers.dev/cli/) — `translate`, `check-ui`, `sync-ui`, `translate-ui`
- [Runtime API](https://polystella-docs.pcx-team.workers.dev/runtime-api/locals/) — `Astro.locals`, middleware, React hooks
- [Roadmap](https://polystella-docs.pcx-team.workers.dev/roadmap/) — shipped vs planned features

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). The agent-facing context is in [`AGENTS.md`](./AGENTS.md) and [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## License

[MIT](./LICENSE)
