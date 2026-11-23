# @cloudflare/oxlint-config

Shared Oxlint config for JavaScript and TypeScript projects. It builds on
[@nkzw/oxlint-config](https://github.com/nkzw-tech/oxlint-config) and adds
rules for type safety, promise handling, and type-only imports.

## Usage

Use Node.js 22.18 or later on the 22.x line, or Node.js 24 or later.
Node.js 22.18 is the first 22.x release that can load `oxlint.config.ts`
without extra flags.

### Standalone Oxlint

Install the preset with Oxlint and `tsrs`, its type-aware backend.

```sh
npm install -D @cloudflare/oxlint-config oxlint@^1.94.0 tsrs@^7.1.0-beta.tsrs2
```

Create `oxlint.config.ts` in the project root:

```ts
import cloudflare from '@cloudflare/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [cloudflare],
  env: cloudflare.env,
  ignorePatterns: cloudflare.ignorePatterns,
});
```

Run `oxlint .` locally and in CI.

### Vite+

In a project that uses `vite-plus@1.7.0` or later, install the preset.
Vite+ supplies Oxlint and its type-aware backend.

```sh
vp add -D @cloudflare/oxlint-config
```

Import the Vite+ entry in the project's root `vite.config.ts`.

```ts
import cloudflare from '@cloudflare/oxlint-config/vite-plus';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  lint: {
    extends: [cloudflare],
    env: cloudflare.env,
    ignorePatterns: cloudflare.ignorePatterns,
  },
});
```

Run `vp lint` locally and in CI.

### Project settings

Both examples set `env` and `ignorePatterns` explicitly because Oxlint 1.94
reads them from the root lint config. To customize the preset, add `rules`
and `overrides` alongside `extends`. This standalone example allows non-null
assertions throughout the project and console calls in `scripts/`.

```ts
export default defineConfig({
  extends: [cloudflare],
  env: cloudflare.env,
  ignorePatterns: cloudflare.ignorePatterns,
  rules: {
    'typescript/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['scripts/**'],
      rules: { 'no-console': 'off' },
    },
  ],
});
```

Oxlint doesn't report TypeScript compiler errors by default, so keep your
type-check command in CI or set `options.typeCheck: true`.

## Migrating an existing project

1. Adopt the preset in one passing commit, with newly failing rules
   temporarily turned off.
2. For each rule, use one commit to enable it with fixes or explain why it
   stays off. Rules that don't fit the project can stay off.
3. Open one pull or merge request for the migration and squash it when
   merging.

The [migration skill](skills/migrate-oxlint-config/SKILL.md) gives coding
agents the full workflow. The npm package includes it at the same path.

## Rule behavior

- Enabled rules are errors. Oxlint's category defaults are off, so Oxlint
  upgrades can't enable rules through category membership.
- `eqeqeq` applies to `null` checks. Use `value === null || value === undefined`
  to check for both.
- `typescript/no-misused-promises` reports promise-returning callbacks where
  `void` is expected. React projects can set
  `checksVoidReturn: { attributes: false }` in a JSX file override and catch
  rejections in the handler.
- Returned promises must be awaited where it affects error handling, such as
  inside `try`. Elsewhere, `return await` is optional.
- Empty interfaces are errors, including interfaces that only extend another
  type.
- `@ts-ignore` is banned. `@ts-expect-error` needs a description.
- `eval`, including indirect calls, is an error. So is a module importing
  itself.
- TypeScript uses `typescript/only-throw-error` instead of `no-throw-literal`.
  JavaScript keeps `no-throw-literal` and turns off the five
  `typescript/no-unsafe-*` rules.
- TypeScript test files (`*.{test,spec,integration,e2e}.*` and `__tests__/`)
  turn off `only-throw-error`, `unbound-method`, `no-explicit-any`,
  `no-non-null-assertion`, `no-unsafe-argument`, `no-unsafe-assignment`, and
  `no-unsafe-member-access`.
- `no-console` applies everywhere, including the entry points that nkzw
  exempts. Add a file override where logging is expected.

## Development

Install [Vite+](https://viteplus.dev/guide/) and use Node.js 24 LTS (24.11+),
as CI does. Run `vp install`, `vp check`, and `vp test`. Use `vp pm pack` to
build a tarball for testing in a consumer project.

Open a pull request for changes. If you change a rule, include code that it
now reports or allows. Maintainers squash approved pull requests after CI
passes. Report vulnerabilities through the [security policy](SECURITY.md).

## Releases

1. Merge the version bump to `main`.
2. Create and push a signed `v<version>` tag on that commit.
3. Run **Publish to npm** from `main` while `main` still points at the tagged
   commit.

The workflow checks that GitHub verified the tag and that it points at the
commit being published. It then runs `vp check` and `vp test`, and publishes
with provenance through npm Trusted Publishing.
