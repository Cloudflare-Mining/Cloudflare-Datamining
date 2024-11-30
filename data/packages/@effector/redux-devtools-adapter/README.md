# redux-devtools-adapter

Simple adapter to connect Effector's Inspect API to Redux DevTools, extracted from the old `effector-logger` project.

<img width="1512" alt="image" src="https://user-images.githubusercontent.com/32790736/235296652-b74df685-c436-45c1-911e-7a6e99e78770.png">

## Installation

```sh
yarn add -D @effector/redux-devtools-adapter
```

## Usage

### Prepare metadata

To make logs more useful we need additional metadata (like names, locations in the code, etc), which is provided by one of the `effector` plugins.

#### Babel-plugin

Babel-plugin is built-in in the `effector` package.

Just add it to your babel configuration.

```json
{
  "plugins": ["effector/babel-plugin"]
}
```

It is also useful to enable `loc` generation for dev environment, to see for exact locations of `sample`s and other operators in the code.

```json
{
  "plugins": [["effector/babel-plugin", { "addLoc": true }]]
}
```

[Read the docs](https://effector.dev/docs/api/effector/babel-plugin/#usage)

#### SWC Plugin

[Read effector SWC plugin documentation](https://github.com/effector/swc-plugin)

### In the code

Just call `attachReduxDevTools()` somewhere in your project's entrypoint and you are good to go.

```ts
// e.g. src/main.ts
import { attachReduxDevTools } from "@effector/redux-devtools-adapter";

attachReduxDevTools();
```

You can also provide some additional configuration. All fields are optional.

#### name

Type: `string`.
Will be visible in the Redux Devtools

#### scope

Type: `Scope`
Effector's Scope from Fork API, if your app uses it.

See [the docs](https://effector.dev/docs/api/effector/scope/) and [the article](https://dev.to/effector/the-best-part-of-effector-4c27)

#### trace

Type: `boolean`
Enables traces of effector's calculations in the actions. Disabled by default.

#### batch

Type: `boolean | { size: number; latency: number; }`.
Enables batching of logs at the adapter's side. Redux DevTools are trying to print each and every log they get, which may cause performance issues in the large apps.

With batching enabled adapter sends logs only once in `latency` milliseconds and with number of logs no more than `size` number.
This means that only last `size` number of logs will be visible in the DevTools at all times.

Enabled by default, defautls are: last 100 logs with latency 500 milliseconds.

### stateTab

Type: `boolean`.
Enables state tab with state of all stores at each point in time. May cause performance issues in the large apps. Disabled by default.

#### devToolsConfig

Config for Redux DevTools, passed directly to the `connect` call.
See [the official docs](https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md).

Example of configurated call:

```ts
import { attachReduxDevTools } from "@effector/redux-devtools-adapter";

attachReduxDevTools({
  name: "My App",
  scope,
  trace: true,
});
```

### In the Next.js - Pages Router

[Read effector/next documentation](https://github.com/effector/next#pages-router-dev-tools-example)

### In the Next.js - App Router

[Read effector/next documentation](https://github.com/effector/next#app-router-dev-tools-example)

## Release process

1. Check out the [draft release](https://github.com/effector/redux-devtools-adapter/releases).
1. All PRs should have correct labels and useful titles. You can [review available labels here](https://github.com/effector/redux-devtools-adapter/blob/main/.github/release-drafter.yml).
1. Update labels for PRs and titles, next [manually run the release drafter action](https://github.com/effector/redux-devtools-adapter/actions/workflows/release-drafter.yml) to regenerate the draft release.
1. Review the new version and press "Publish"
1. If required check "Create discussion for this release"
