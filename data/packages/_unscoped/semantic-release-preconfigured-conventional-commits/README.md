# Pre-configured shareable Semantic Release configuration for conventional commits

[![npm version](https://badge.fury.io/js/semantic-release-preconfigured-conventional-commits.svg)](https://badge.fury.io/js/semantic-release-preconfigured-conventional-commits)

This is a ready-to-use, pre-defined configuration for [semantic-release](https://www.npmjs.com/package/semantic-release),
meant to support the use of [conventional commits](https://www.conventionalcommits.org/) along with [Whitesource Renovate](https://github.com/renovatebot/renovate).

## Configuration

#### **MAJOR** release
* Any commit type and scope terminating with `!` causes a `BREAKING CHANGE`

#### **MINOR** release
* Commit type `chore` with scope `api-deps` (*Dependency updates*)
* Commit type `feat` (*Features*) with any scope

#### **PATCH** release
* Commit type `chore` with scope `core-deps` (*Dependency updates*)
* Commit type `fix` (*Bug Fixes*) with any scope
* Commit type `docs` (*Documentation*) with any scope
* Commit type `perf` (*Performance improvements*) with any scope
* Commit type `revert` (*Revert previous changes*) with any scope

#### No release
* Commit type `test` (*Tests*)
* Commit type `ci` (*Build and continuous integration*)
* Commit type `build` (*Build and continuous integration*)
* Commit type `chore` with scope `deps` (*Dependency updates*)
* Commit type `chore` (*General maintenance*) with scopes different than the ones mentioned above 
* Commit type `style` (*Style improvements*) with any scope 
* Commit type `refactor` (*Refactoring*) with any scope 

## Usage

To use this configuration, add to your `package.json`:

```json
  "devDependencies": {
    "semantic-release-preconfigured-conventional-commits": "latest"
  }
```
(actually, pick the latest stable version)

The configuration sets up and pre-applies `semantic-release/commit-analyzer`,
`semantic-release/release-notes-generator`,
and `semantic-release/changelog`.

These are usually always present, but rarely enough.

Then, the recommended way to exploit this pre-configuration is through a `release.config.js` file in the project root;
the reason is that currently the semantic release extension mechanism does not merge the configurations
in-depth, thus, adding further plugins results in the configuration being ignored.

A minimal `release.config.js` for creating releases on GitHub, for instance, looks like:

```js
var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    "@semantic-release/github",
    "@semantic-release/git",
)
module.exports = config

```

It can be easily enriched to account for more elaborate workflows, as, for instance:

```js
var publishCmd = `
IMAGE_NAME="danysk/docker-manjaro-texlive-ruby"
docker build -t "$IMAGE_NAME:\${nextRelease.version}"
docker push --all-tags "$IMAGE_NAME"
`
var config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd,
        }
    ],
    "@semantic-release/github",
    "@semantic-release/git",
)
module.exports = config
```

## Proposing changes

I gladly consider changes to the configuration.
In case you think something is missing or deserves to be changed,
[open an issue](https://github.com/DanySK/semantic-release-preconfigured-conventional-commits/issues).
