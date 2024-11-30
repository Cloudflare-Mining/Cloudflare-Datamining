# check-dependencies

> Checks if currently installed npm dependencies are installed in the exact same versions that are specified in package.json

[![GitHub build](https://img.shields.io/github/workflow/status/mgol/check-dependencies/CI?style=flat-square)](https://github.com/mgol/check-dependencies/actions)
[![Version](https://img.shields.io/npm/v/check-dependencies.svg?style=flat-square)](http://npm.im/check-dependencies)
[![Downloads](https://img.shields.io/npm/dm/check-dependencies.svg?style=flat-square)](http://npm-stat.com/charts.html?package=check-dependencies)
[![MIT License](https://img.shields.io/npm/l/check-dependencies.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Installation

To install the package and add it to your `package.json`, invoke:

```shell
npm install check-dependencies --save-dev
```

## Rationale

When dependencies are changed in `package.json`, whether it's a version bump or a new package, one can forget to invoke `npm install` and continue using the application, possibly encountering errors caused by obsolete package versions. To avoid it, use the `check-dependencies` module at the top of the entry point of your application; it will inform about not up-to-date setup and optionally install the dependencies.

Another option would be to always invoke `npm install` at the top of the main file, but it can be slow and `check-dependencies` is fast.

## Usage

Once the package has been installed, it may be used via:

### CLI

```bash
$ check-dependencies
```

All options from the [API](#api) except `log` and `error` can be passed to the CLI, example:

```bash
$ check-dependencies --verbose --package-manager pnpm --scope-list dependencies
```

Options accepting array values in the API (like [`scopeList`](#scopelist)) should have each value passed individually, example:

```bash
$ check-dependencies --scope-list dependencies --scope-list devDependencies
```

### API

The exported function returns a promise which should eventually be fulfilled (never rejected).

```js
const output = await require('check-dependencies')(config);
```

where `config` is a configuration object.

`output` is an object containing fields:

```js
{
    status: number,      // 0 if successful, 1 otherwise
    depsWereOk: boolean, // true if dependencies were already satisfied
    log: array,          // array of logged messages
    error: array,        // array of logged errors
}
```

There is a synchronous alternative -- the following code:

```js
const output = require('check-dependencies').sync(config);
```

will assign to `output` the same object to which the returned promise would otherwise resolve to.

The `config` object may have the following fields:

#### packageManager

Package manager to check against. Example values: `'npm'`, `yarn`, `pnpm`.

**NOTE: The value passed to this parameter will be invoked if the `install` option is set to `true`. Do not pass untrusted input here. In the worst case, it may lead to arbitrary code execution! Also, versions below `1.1.1` did no validation of this parameter; versions `1.1.1` and newer ensure it matches the regex `/^[a-z][a-z0-9-]*$/i`. It is still not safe to provide untrusted input in versions `1.1.1` or newer, though.**

Type: `string`

Default: `'npm'`

#### packageDir

Path to the directory containing `package.json`.

Type: `string`

Default: the closest directory containing `package.json` when going up the tree, starting from the current one

#### onlySpecified

Ensures all installed dependencies are specified in `package.json`.

NOTE: Don't use this option with npm 3.0.0 or newer as it deduplicates the file dependency tree by default so `check-dependencies` will think many modules are excessive whereas in fact they will not.

Type: `boolean`

Default: `false`

#### install

Installs packages if they don't match. With the `onlySpecified` option enabled it installs if excessive packages are present as well.

Type: `boolean`

Default: `false`

#### scopeList

The list of keys in `package.json` where to look for package names & versions.

Type: `array`

Default: `['dependencies', 'devDependencies']`

#### optionalScopeList

The list of keys in `package.json` where to look for _optional_ package names & versions. An optional package is not required to be installed but if it's installed, it's supposed to match the specified version range.

This list is also consulted when using `onlySpecified: true`.

Type: `array`

Default: `['optionalDependencies']`

#### checkGitUrls

By default, check-dependencies will skip version check for packages whose version contains the full repository path. For example:

```js
    "dependencies": {
      "semver": "https://github.com/npm/node-semver.git#0.5.9"
    }
```

If checkGitUrls is enabled, check-dependencies will parse the version number (after the path to the git repository and the hash) and check it against the version of the installed package.

Type: `boolean`

Default: `false`

#### verbose

Prints messages to the console.

Type: `boolean`

Default: `false`

#### log

A function logging debug messages (applies only if `verbose: true`).

Type: `function`

Default: `console.log.bind(console)`

#### error

A function logging error messages (applies only if `verbose: true`).

Type: `function`

Default: `console.error.bind(console)`

## Usage Examples

The most basic usage:

```js
const output = await require('check-dependencies')();
```

This will check packages' versions and report an error to `output` if packages' versions are mismatched.

The following:

```js
await require('check-dependencies')({
    install: true,
    verbose: true,
});
```

will install mismatched ones.

## Supported Node.js versions

This project aims to support all Node.js versions supported upstream (see [Release README](https://github.com/nodejs/Release/blob/master/README.md) for more details).

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using `npm test`.

## License

Copyright (c) Michał Gołębiowski-Owczarek. Licensed under the MIT license.
