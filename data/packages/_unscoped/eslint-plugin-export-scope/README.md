# eslint-plugin-export-scope

Don't leak **LOCAL** utils, states, contexts, components into the global scope.

![Basics](/readme-src/basics.jpg "Basics")

## Demo

![Demo](/readme-src/demo.gif "Demo")

## Scopes

<p align="center">

| scope           | importable from                         |                               |
| --------------- | --------------------------------------- | ----------------------------- |
| .               | current directory and children          | default for all exports       |
| ..              | parent directory and children           | default for **`index`** files |
| ../..           | two directories above and children      |                               |
| src/consumer    | within specified directory and children |                               |
| src/consumer.ts | within specified file                   |                               |
| \*              | anywhere                                |                               |

</p>

## Scoped Exports

```ts
/** @scopeDefault ../.. */
/** ☝ Applies to all exports in the file unless overriden with a local `@scope` */

/** @scope * */
export const helper1 = ""; // 👈 Available everywhere

export const helper2 = ""; // 👈 inherits scope `../..` from `@scopeDefault`

/** @scope src/components */
export default "";
```

## Default folder scope with `.scope.ts` files

<p align="center">
<img src="./readme-src/scope_file.png" width="500" title="Scope File example">
</p>

```ts
└── src
  └── `common`
    ├── utils.ts
    ├── context.ts
    └── `.scope.ts`
             │
             │
  ╭────────────────────╮
  │ export default '*' │
  ╰────────────────────╯
// ⬆ this will make all exports within `common`
// importable from anywhere unless a
// specific export is overriden on a lower level

```

### Exceptions

#### Export scope exceptions

```ts
// schema.ts
/**
 * @scope ..
 * @scopeException src/schemaConsumer 👈 whole folder has access
 * @scopeException src/schemaConsumer/index.ts 👈 whole file has access
 */
export default "";
```

#### Folder scope exceptions in `.scope.ts` files

```ts
└── src
  └── `generated`
    ├── schema.ts
    └── `.scope.ts`
             │
             │
  ╭──────────────────────────────────╮
  │ export default '.';              │
  │                                  │
  │ export const exceptions = [      │
  │   'src/schemaConsumer',          │
  │   'src/scripts/schemaParser.ts', │
  │ ]                                │
  ╰──────────────────────────────────╯
// ⬆ by default exports are only importable
// within `generated` folder, but
// folders/files in `exceptions` are exempt.

```

## Installation

Install [ESLint](https://eslint.org/) and the `export-scope` package. This package includes both an `ESLint` plugin and a `TS Language Server` plugin.

#### ESLint plugin will highlight imports outside the scope

<details>
  <summary>Using ESLint Flat Config (ESLint v8 if enabled, ESLint v9)</summary>

```sh
npm i -D eslint typescript-eslint eslint-plugin-export-scope
```

```json
// package.json

{
  "type": "module"
}
```

```js
// eslint.config.js

// @ts-check

import tseslint from "typescript-eslint";
import exportScope from "eslint-plugin-export-scope";

export default tseslint.config(
  // other configs,
  exportScope.configs.flatConfigRecommended,
);
```

<details>
  <summary>Manual Flat Config</summary>

```js
// eslint.config.js

// @ts-check

import tseslint from "typescript-eslint";
import exportScope from "eslint-plugin-export-scope";

export default tseslint.config(
  // other configs,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mts", "**/*.mjs", "**/*.cjs"],
    plugins: { "export-scope": exportScope.plugin },
    rules: { "export-scope/no-imports-outside-export-scope": "error" },
    languageOptions: { parser: tseslint.parser, parserOptions: { project: true } },
  },
);
```

</details>
</details>

<details>
  <summary>Using Legacy Config</summary>

```sh
npm i -D eslint @typescript-eslint/parser eslint-plugin-export-scope
                    # ⬆ v6 or above
```

```js
// .eslintrc.js
module.exports = {
  // ...
  extends: ["plugin:eslint-plugin-export-scope/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true, tsconfigRootDir: __dirname },
  ignorePatterns: ["!.scope.ts"],
};
```

<details>
  <summary>Manual Legacy Config</summary>

```js
// .eslintrc.js
module.exports = {
  // ...
  parser: "@typescript-eslint/parser",
  parserOptions: { project: true, tsconfigRootDir: __dirname },
  plugins: ["export-scope"],
  rules: { "export-scope/no-imports-outside-export-scope": "error" },
  ignorePatterns: ["!.scope.ts"],
};
```

</details>
</details>

#### TS plugin will disable autocompletion for exports outside the scope

```js
// tsconfig.json
"compilerOptions": {
  "plugins": [{ "name": "eslint-plugin-export-scope" }],
},
"include": ["**/*", "**/.scope.ts"]
//                  "../../**/.scope.ts" for monorepos
```

Tell VSCode to `Use Workspace Version` of TypeScript. Otherwise TS plugin won't work.

<p align="center">
  <img src="readme-src/ts_version.png" alt="Select TS version" width="600" />
</p>

<details>
  <summary>Configuration for JS projects</summary>

- `tsconfig.json` file is still required for the plugin to work
- replace `.scope.ts` in both configs with `.scope.js`
- set `compilerOptions.allowJs`to `true` in `tsconfig.json`
</details>

## Upgrading from v1 to v2

- Replace all `//` comments with jsDocs `/** */`
- Replace `@scope default` with `@scopeDefault`
- Relace `@..` file/folder prefixes with `.scope.ts` files.
- Make sure `.eslintrc.js` and `tsconfig.json` configs are updated

## Hints

- Type `@` above exports for automatic jsDoc generation.
- Use autocompletion provided within jsDocs and `.scope.ts` files.
- Root `.scope.ts` file (next to package.json) sets the default for the whole project. Having `export default '*'` there will make all exports global by default if you prefer a less strict approach.

## Issues

⚠️ To re-lint an import in VSCode after updating a `scope` declaration either `touch` this import or restart the ESLint Server [(ESLint limitation)](https://github.com/microsoft/vscode-eslint/issues/1565#event-7958473201).

<p align="center">
  <img src="readme-src/restart_eslint_server.png" alt="Restart ESLint Server" width="200" />
</p>
