## Introduction

[![npm version](https://img.shields.io/npm/v/commitlint-plugin-selective-scope.svg)](https://npmjs.com/package/commitlint-plugin-selective-scope)
[![npm downloads](https://img.shields.io/npm/dt/commitlint-plugin-selective-scope.svg)](https://npmjs.com/package/commitlint-plugin-selective-scope)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.com/ridvanaltun/commitlint-plugin-selective-scope.svg?branch=master)](https://travis-ci.com/ridvanaltun/commitlint-plugin-selective-scope)
[![Coverage Status](https://coveralls.io/repos/github/ridvanaltun/commitlint-plugin-selective-scope/badge.svg?branch=master)](https://coveralls.io/github/ridvanaltun/commitlint-plugin-selective-scope?branch=master)
[![license](https://img.shields.io/npm/l/commitlint-plugin-selective-scope.svg)](https://github.com/ridvanaltun/commitlint-plugin-selective-scope/blob/master/LICENSE)

> Limit scopes per type with regexp and plain text.

## Installation

```bash
npm i commitlint-plugin-selective-scope --save-dev
```

## Usage

- If a type does not appear in the rule, do not enforce scope
- If a type appears in the rule with an empty array, do not allow scope
- If a type appears in the rule with an non-empty array, only allow the values in the array for scope.
- If the array includes null, the scope is optional.

## Example

```javascript
module.exports = {
  plugins: ['selective-scope'],
  rules: {
    'selective-scope': [
      2,
      'always',
      {
        feat: [/^frontend\/[^\/]+$/, 'backend'],
        perf: [],
        ci: [null, 'codebuild', 'jenkins']
      }
    ]
  }
}
```

**In the above rules configuration,**

- if the type is `feat`, the scope must be either match the regex `/frontend\/[^\/]+/` or be `backend`
- if the type if `chore`, the scope is optional and can be anything
- if the type is `perf`, a scope is not allowed
- if the type is `ci`, the scope must be `codebuild` or `jenkins` if present, but is not required
