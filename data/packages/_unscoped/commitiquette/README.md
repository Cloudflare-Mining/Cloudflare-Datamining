# Commitiquette

Plugin for Commitizen that uses commitLint configuration. Allows you to use both Commitizen and commitLint with a single configuration.

![Node.js CI](https://github.com/martinmcwhorter/commitiquette/workflows/Node.js%20CI/badge.svg)
[![codecov](https://codecov.io/gh/martinmcwhorter/commitiquette/branch/master/graph/badge.svg)](https://codecov.io/gh/martinmcwhorter/commitiquette)
[![npm version](https://badge.fury.io/js/commitiquette.svg)](https://badge.fury.io/js/commitiquette)

## Installation

You will first need to follow the commitizen and commitlint instalation instructions if you do not already have these installed.

- [commitizen](http://commitizen.github.io/cz-cli/)
- [commitlint](https://commitlint.js.org/#/guides-local-setup)

Use npm or yarn to install commitiquette into your project.

```bash
npm install commitiquette --save-dev
```

## Usage

Update `package.json` Commitizen configuration.

```json
  "config": {
    "commitizen": {
      "path": "commitiquette"
    }
  },
```

## Purpose

The purpose of this project is to have a single configuration for both `commitlint` and `commitizen` -- while prompting the user for each answer.

## Similar Projects

Both of these wonderful projects are use the `commitlint` config as well.

- [@commitlint/prompt](https://www.npmjs.com/package/@commitlint/prompt)
- [@commitlint/prompt-cli](https://www.npmjs.com/package/@commitlint/prompt-cli)

Commitiquette differs by using simple prompts, list selects whenever possible, for answers -- much like the `cz-conventional-changelog` commitizen plugin.

## Fully Configurable

Commitiquitte is fully configurable using the `commitlint` configuration.

Examples

### Disable Prompting for scope

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'always']
  }
};
```

### List select for scope

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['docs', 'core', 'lib', 'misc', 'etc']]
  }
};
```

## Filtering and Validation

Commitiquette will validate against all but the deprecated `commitlint` rules.

> **NOTE:** This is not a replacement for `commitlint`. Commitlint should still validate the message before each commit.

Where possible, commitlint rules will be used to filter messages.

Validation is run at Level Error (2) -- where filtering will apply at if the rule is set to Warn (1) or Error (2.)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
