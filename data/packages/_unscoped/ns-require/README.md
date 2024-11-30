# ns-require

[![Codecov](https://img.shields.io/codecov/c/github/shigma/ns-require?style=flat-square)](https://codecov.io/gh/shigma/ns-require)
[![downloads](https://img.shields.io/npm/dm/ns-require?style=flat-square)](https://www.npmjs.com/package/ns-require)
[![npm](https://img.shields.io/npm/v/ns-require?style=flat-square)](https://www.npmjs.com/package/ns-require)
[![GitHub](https://img.shields.io/github/license/shigma/ns-require?style=flat-square)](https://github.com/shigma/ns-require/blob/master/LICENSE)

Require with Namespace.

## Basic Usage

```ts
import ns from 'ns-require'

const scope = ns({
  namespace: 'awesome',
  prefix: 'plugin',
})

scope.require('foo')        // will resolve to `awesome-plugin-foo`
scope.require('@foo/bar')   // will resolve to `@foo/awesome-plugin-bar`
```

## With Official Scope

```ts
import ns from 'ns-require'

const scope = ns({
  namespace: 'awesome',
  prefix: 'plugin',
  official: 'scope',
})

scope.require('foo')        // will resolve to `@scope/plugin-foo`
                            // and then `awesome-plugin-foo`
scope.require('@foo/bar')   // will resolve to `@foo/awesome-plugin-bar`
```
