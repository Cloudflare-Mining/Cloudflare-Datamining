# nimbus-docs

Astro integration, content schemas, data helpers (`getSidebar`, `getPrevNext`, `getTOC`, `getBreadcrumbs`, `getEditUrl`), the MDX→markdown primitive (`renderEntryAsMarkdown`), client-side primitives (`@cloudflare/nimbus-docs/client`), package-manager command translator (`@cloudflare/nimbus-docs/lib/pkgm`), and the `nimbus-docs` CLI for installing components, utilities, features, and server-output adapters into your project.

Most users install via the scaffolder:

```sh
npx @cloudflare/create-nimbus-docs@latest my-docs
```

Subpaths:

- `@cloudflare/nimbus-docs` — integration + data helpers + `defineConfig`.
- `@cloudflare/nimbus-docs/content` — `docsCollection()`, `partialsCollection()` factories.
- `@cloudflare/nimbus-docs/schemas` — `docsSchema`, `partialsSchema`, `defineDocSchema`.
- `@cloudflare/nimbus-docs/types` — public type re-exports.
- `@cloudflare/nimbus-docs/server` — server-runtime helpers.
- `@cloudflare/nimbus-docs/adapters` — unstable adapter recipes used by the scaffolder.
- `@cloudflare/nimbus-docs/client` — `mount`, `makeDisclosure`, `initTabs`, `lockScroll`, `codeCopy`, `headingAnchors`, etc.
- `@cloudflare/nimbus-docs/react` — headless React primitives for interactive diagrams: `<Diagram>` + `useDiagram` / `usePhase` / `useMeasure` / `useTabIndicator` + `diagramRegistry`. `react` and `react-dom` are optional peer deps; only required when this entry is imported.
- `@cloudflare/nimbus-docs/lib/pkgm` — `getCommand`, `getTabs`, `MANAGERS`.
- `@cloudflare/nimbus-docs/components/NimbusHead.astro` — `<NimbusHead />` for `<head>` plumbing.

Opt an existing static scaffold into server output with an Astro adapter:

```sh
pnpm exec nimbus-docs add adapter-cloudflare
```

Fresh Cloudflare server scaffolds enable request rendering automatically. For an existing project, run the command inside a coding agent to hand off the full setup automatically. From a regular shell, pipe the runbook manually:

```sh
pnpm exec nimbus-docs add adapter-cloudflare --print | claude
```

Static output remains deployable to any static host.

## Interactive diagrams

```tsx
import { Diagram, usePhase, useMeasure } from "@cloudflare/nimbus-docs/react";

export function MyCard() {
  return (
    <Diagram label="My card">
      {/* your card body */}
    </Diagram>
  );
}
```

The visible components — action bar, tabs, controls — install on demand:

```sh
pnpm dlx @cloudflare/nimbus-docs add diagram
```

Mount cards via Astro's `client:visible` directive so hydration defers until the diagram enters the viewport.

Project home: [nimbus-docs.com](https://nimbus-docs.com)

## License

MIT
