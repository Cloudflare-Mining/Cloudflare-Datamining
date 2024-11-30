# commitlint-plugin-scope-empty-exceptions

A `commitlint` plugin to support exceptions in `scope-empty`-rules.

## Installation

**pnpm**

```sh
pnpm install --dev commitlint-plugin-scope-empty-exceptions
```

**yarn**

```sh
yarn add --dev commitlint-plugin-scope-empty-exceptions
```

**npm**

```sh
npm install --save-dev commitlint-plugin-scope-empty-exceptions
```

## Usage

To configure that scopes for types `ci` and `chore` can be empty, while other scopes can not:

```js
module.exports = {
  plugins: ['scope-empty-exceptions'],
  rules: {
    'scope-empty': [2, 'never', ['ci', 'chore']],
  },
};
```

## Examples

```
$ cat commitlint.config.js

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['scope-empty-exceptions'],
  rules: {
    'scope-empty': [2, 'always', ['ci']]
  }
}

$ echo "ci: this will succeed" | npx commitlint --verbose
⧗   input: ci: this will succeed
✔   found 0 problems, 0 warnings

$ echo "feat: this will fail" | npx commitlint --verbose
⧗   input: feat: this will fail
✖   scope may not be empty [scope-empty]
✖   found 1 problems, 0 warnings
```
