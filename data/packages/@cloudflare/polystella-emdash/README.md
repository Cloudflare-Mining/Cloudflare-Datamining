# @cloudflare/polystella-emdash

Native EmDash integration for PolyStella.

The plugin translates selected saved content fields and freeform sandbox text,
manages temporary UI-string overrides, and exports deterministic locale JSON.
Deployment configuration owns the default locale and bounds available locales
and models. Administrators own enabled collections and field policies in EmDash.

```ts
import { polystellaEmdash, type PolystellaEmdashOptions } from "@cloudflare/polystella-emdash";
import { polystellaEmdashAstro } from "@cloudflare/polystella-emdash/astro";
import { loadGlossaryDefaults } from "@cloudflare/polystella-emdash/config";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

const polystellaOptions = {
  provider: { kind: "workers-ai-binding", binding: "AI" },
  catalogs: {
    defaultLocale: "en-US",
    locales: {
      "en-US": {
        dictionary: { greeting: "Hello" },
        filePath: "src/i18n/en-US.json",
      },
    },
  },
  models: {
    allowed: ["@cf/zai-org/glm-4.7-flash"],
    defaults: {
      default: "@cf/zai-org/glm-4.7-flash",
    },
  },
  glossaryDefaults: await loadGlossaryDefaults({
    locales: ["en-US"],
    file: "./src/i18n/glossary/{locale}.yaml",
    projectRoot: new URL(".", import.meta.url),
  }),
} satisfies PolystellaEmdashOptions;

export default defineConfig({
  integrations: [emdash({ plugins: [polystellaEmdash(polystellaOptions)] }), polystellaEmdashAstro(polystellaOptions)],
  i18n: { defaultLocale: "en-US", locales: ["en-US"] },
});
```

`loadGlossaryDefaults` also accepts PolyStella's `http` and `r2`
glossary source forms. Remote sources load one `{locale}` YAML object
per configured locale and do not require `projectRoot`.

Keep `polystellaEmdashAstro()` after `emdash()`. It binds `Astro.locals.t` and
`Astro.locals.lhref`, overlays enabled EmDash overrides, and falls back to the
deployed dictionaries when storage is unavailable. Configure the named Workers
AI binding on the EmDash deployment.

Astro's i18n locale set must exactly match `catalogs`. Prerendered pages always
use deployed dictionaries so temporary overrides cannot be baked into a build.
Catalog dictionaries accept the same flat and nested JSON shapes as the main
Astro integration. Nested groups become dotted `t()` keys, group-title metadata
is ignored at runtime, and catalog exports retain the nested shape.

For Workers AI over HTTP, use runtime environment variable names instead of
literal credentials:

```ts
provider: {
  kind: "workers-ai-http",
  accountIdEnv: "CLOUDFLARE_ACCOUNT_ID",
  apiTokenEnv: "CLOUDFLARE_WORKERS_AI_TOKEN",
}
```

`models.defaults` may set a `default` fallback and locale-specific models. Each
target locale receives its own model and glossary settings. Administrators can
use the deployment glossary unchanged or append/replace `Glossary.notes` with
plain text; structured YAML remains code-defined. They cannot select a model
outside `models.allowed`. Shared code-defined instructions can likewise be used
unchanged, appended to, or replaced.

Administrators can also enable request-scoped debug traces from **Translation
settings**. Content, catalog, and sandbox translation traces include the
effective model, batch metrics, exact prompts, every provider attempt, normalized
model responses, parsed translations, validation issues, timings, and a
diagnostic ID. Traces are returned only to administrators, are not stored
server-side, and never include credentials, authorization headers, account IDs,
or raw provider HTTP envelopes. Successful content traces survive the existing
editor reload in browser session storage for one view.

The native admin registers one **PolyStella** page with **Catalog**,
**Collections**, **Translation settings**, and **Translation sandbox** tabs.
These controls use EmDash's Kumo design system; no generated plugin settings
page is registered. Translation settings and catalog controls list target
locales only; the code-defined default locale remains the source.

This package also installs `polystella check-ui`, `polystella sync-ui`, and
`polystella translate-ui`. They retain the Astro CLI's config and flags.

## Content Translation

The native editor panel appears for Editors and Administrators. The PolyStella
**Collections** tab lets an Administrator enable project collections and choose
translatable fields. The source locale is always the code-defined
`catalogs.defaultLocale` and cannot be changed in plugin settings. No collection
is enabled until an Administrator saves a valid policy. Missing or malformed
stored policy fails closed.

The panel translates selected `string`, `text`, and Portable Text fields in an
existing target-locale draft. The private route rereads selected values through
its `content:read` capability, while the panel updates with EmDash's `_rev` token
and reloads after success. Unsaved browser changes are not translated and are
lost after confirmation.

Content translation displays named percentage stages while loading the saved
entry, translating fields, and saving the patch.

## Translation Sandbox

Administrators can translate up to 30,000 characters of freeform text from the
code-defined default locale to any configured non-default locale. Sandbox output
stays browser-local and does not change content, catalog overrides, or repository
files. Each request can use any deployment-allowed model without changing saved
translation settings; the target locale's glossary and shared instructions still
apply. The UI displays a named percentage stage while translating and an explicit
100% completion state.

Progress percentages are client-side request stages, not streamed provider or
batch completion.

## Catalog Overrides

Repository JSON remains canonical. The catalog page can generate, edit, clear,
inspect deployment state, and export temporary per-key overrides. Runtime
overrides are disabled per locale until an Administrator explicitly enables them.

The catalog view groups entries by their first key segment; groups with an
`i18n_group_title` show that title with the group key alongside. A search box
filters groups by title, group key, or entry keys. Source cells containing
`{{variables}}` placeholders show a question-mark icon before the text; hovering
or clicking it explains that overrides should retain those placeholders.

The Astro integration reads enabled overrides directly from EmDash storage. It
caches each locale's override dictionary for 60 seconds per database and Worker
isolate; this is not an HTML or response cache. A write or runtime-toggle request
handled by the same isolate invalidates that locale immediately. Other isolates
can keep serving their previous dictionary until their own 60-second entry
expires. A failed override read falls back to the deployed dictionary, and that
fallback may also remain cached until expiry.

Application/CDN response caching is separate and can preserve already-rendered
HTML longer than 60 seconds. Purge that cache when an override must be visible
immediately.

The public `GET
/_emdash/api/plugins/polystella/overrides?locale=<locale>` remains available for
other runtimes. Its separate HTTP cache policy allows a response to be fresh for
60 seconds and served stale while revalidating for another 300 seconds. Its
success envelope's `data` is either:

```json
{ "enabled": false, "overrides": {} }
```

or an enabled envelope containing only stored overrides. Overlay enabled values
on the bundled locale dictionary; keep bundled JSON as the fallback.

For server routes that need a locale other than `Astro.currentLocale`, reference
the client types and use the request-bound factory:

```ts
/// <reference types="@cloudflare/polystella-emdash/client" />

const t = await Astro.locals.buildCatalogTranslator(locale);
```

## EmDash 0.36 Limitations

- Panels use the latest saved entry, not unsaved form state.
- EmDash leaves an empty PolyStella section on collections disabled in plugin
  settings because panel visibility cannot be resolved asynchronously.
- EmDash does not expose authoritative collection schema metadata to plugin
  routes. The server enforces the stored collection/field policy and saved value
  shapes; administrators must revisit the **Collections** tab after schema
  changes.
