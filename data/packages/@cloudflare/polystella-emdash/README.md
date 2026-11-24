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

Each translation request carries only the glossary terms its text uses, plus
the style rules and notes, so code-defined glossaries can be large (up to
1,000,000 characters per locale). `glossaryMatchInflections: true` lets any
letters follow a term, so `Worker` also matches "Workers".

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

Whether or not debug mode is on, every failure writes its diagnostic ID to the
server log with the full error message, its code and cause chain, and for an
unusable model reply the finish reason and reply field sizes. Editors see only a
short, safe message and the same ID.

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
stored policy fails closed. Translation also checks the live collection schema
(`schema:read`) and refuses fields that were removed, changed type, or marked
non-translatable. Settings saves are conditional on the loaded revision; a
concurrent save by another Administrator is rejected instead of overwritten.

The panel translates selected `string`, `text`, Portable Text and `blocks` fields in an
existing target-locale draft. The private route rereads the source values
through its `content:read` capability. On EmDash 1.6 and later, the panel puts
the translation into the open form through `editorDraft`, keeping other unsaved
changes, and the editor is asked to review it. A patch is refused if a selected
field changed during translation, and nothing is sent from a read-only editor. The
entry is marked AI-translated when it is saved. In collections with SEO, the
panel also translates the SEO title and meta description; on published and scheduled entries
only when an Administrator allows it in **Translation settings**, because EmDash
saves SEO text at once. On older EmDash, the panel saves with EmDash's `_rev`
token and reloads; unsaved changes are lost after confirmation, and a save
refused by another editor's edit lock names the lock holder.

Same-page links (`#…`) are copied unchanged. EmDash gives headings no ids, so
sites build their own, often from the heading text, and a translated heading can
get a different anchor. The panel and batch results list these links for review.

Long entries are translated in parts of up to 30,000 characters and 500 text
segments, one request per part, so each request stays short. The panel shows
which part is running; queued batch jobs translate one part per queue message.
An entry can hold up to 500,000 characters and 5,000 segments. If the source
entry changes between parts, the translation stops and asks to start again.

Portable Text paragraphs, headings, lists and tables are always translated.
EmDash's own block types (`image`, `gallery`, `video`, `button`, `buttons`,
`columns`, `cover`, `pullquote`, `embed`, `iframe`) are translated by default;
`code`, `htmlBlock` and `file` never are. Other custom blocks are copied
unchanged unless the `blockFields` option lists their text paths by block
`_type`. An entry for an EmDash type replaces its default, and `[]` turns it off:

```js
polystellaEmdash({
  // ...
  blockFields: {
    "marketing.hero": ["headline", "cta.label", "banners[].title"],
    "marketing.columns": ["columns[].content"],
  },
});
```

Mark a Markdown string with `{ path: "answer", format: "markdown" }`. It is
translated one paragraph, heading or list item at a time, with links, emphasis
and code replaced by placeholders, so URLs never reach the model. Inline tags
such as `<gradient>` are protected the same way in every string. A reply that
loses or reorders a placeholder is resent once, then fails.

For [`blocks` fields](https://docs.emdashcms.com/guides/blocks/), list each
block type's text fields the same way, keyed by the block type slug, such as
`hero: ["heading", "body", "link_label"]`. Unlisted block types and fields,
including `_version`, `_key`, URLs and media, are copied unchanged. EmDash's own
block-type defaults don't apply inside `blocks` fields.

| Path                | Translates                                        |
| :------------------ | :------------------------------------------------ |
| `headline`          | A string property                                 |
| `cta.label`         | A property of a nested object                     |
| `banners[].title`   | That property on every item of a list             |
| `tags[]`            | Every string in a list                            |
| `columns[].content` | A nested Portable Text array, walked like a field |

A path a block doesn't have, or whose value is neither text nor an array, is
skipped silently, so one list can cover several stored shapes of the same block
type. An array at the end of a path without `[]` is read as Portable Text and
must be valid; otherwise the request fails and names the location, such as
`body[3].columns[0].content[1]`.
List only copy, never URLs, IDs, icons or media references.

On a source-locale entry, the panel instead creates a missing locale: it
translates the selected fields, creates the draft as the signed-in user through
EmDash's content API (copying the source entry and slug, like EmDash's
**Create translation** button), and opens it. Locales that already have an
entry are not offered.

Content translation displays named percentage stages while loading the entry,
translating fields, and filling the form or saving.

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
Override saves are conditional on the value you loaded, and **Clear synced
overrides** removes every override that already matches the deployed catalog.

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

## EmDash Limitations

- Before EmDash 1.6, the panel saves the translation and reloads, so unsaved
  changes are lost.
- Before EmDash 1.5, the PolyStella section shows on every collection. On
  collections not enabled in plugin settings, the panel says so and links
  Administrators to the Collections tab.
