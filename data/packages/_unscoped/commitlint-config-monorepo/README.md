# commitlint-config-monorepo

A mixin `commitlint` config intended for monorepos. Makes (scope)s required and forces you to be explicit about which (scope) values are allowed. Intended to be used with another config as the base.

## Differences from Conventional Commits

Invalid:

```sh
echo "fix: some message" # a (scope) is required
```

Valid:

```sh
echo "fix(docs): Sandbox re-renders as expected"
```

## Getting started

> **note:** see [this gist](https://gist.github.com/pskfyi/497fbcc10a0625c716d30995fe336947) for setting up commitlint and husky.

```sh
npm i -D commitlint-config-monorepo
```

In `commitlint.config.js` at the root of your repo:

```js
module.exports = {
  extends: ["some-other-base-config", "monorepo"],
  rules: {
    // Override this rule to explicitly state your own (scope)s.
    "scope-enum": [
      2, // Throw error when (scope) is not one of these values.
      "always",
      [
        // This is the only default value baked into the config.
        "repo",
      ],
    ],
  },
};
```

### Advanced Configuration

This configuration dynamically reads subdirectories of `/packages` and makes them valid (scope)s. Ex. if you have a subdirectory `/packages/components/` this would make "components" a valid (scope).

```js
const { readdirSync: readDirectory } = require("fs");
const DEFAULT_SCOPES = ["repo"];

const packageDirNames = readDirectory("./packages", { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((dir) => dir.name);

const scopes = DEFAULT_SCOPES.concat(packageDirNames);

module.exports = {
  extends: ["monorepo"],
  rules: {
    "scope-enum": [2, "always", scopes],
  },
};
```

## FAQ

### Why not `@commitlint/config-conventional`?

- This minimal ruleset is meant to be added to another config. Use it with `@commitlint/config-conventional` if you want!

- Mandatory scope provides consistency and discourages haphazard commits that would apply to multiple scopes.

### Why not use `@commitlint/config-lerna-scopes` or a similar pattern?

- Being forced to be explicit about which scopes are allowed makes you more aware of them.

- Desire to call out non-package scopes; ex. the config defaults to "repo" as a scope.

- Lerna package names can sometimes be more verbose than is desirable in a commit message; '@my-org-name/projectname-packagename' is a common pattern, and `@commitlint/config-lerna-scopes` will only trim off '@my-org-name'
