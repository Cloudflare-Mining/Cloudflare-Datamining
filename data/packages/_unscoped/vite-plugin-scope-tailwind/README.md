# vite-plugin-scope-tailwind

[![NPM version][npm-image]][npm-url]
[![Downloads per month][downloads-image]][downloads-url]
[![GitHub Action Workflow Status][github-actions-workflow-image]][github-actions-workflow-url]
[![Known Vulnerabilities][snky-image]][snky-url]
[![PRs Welcome][pr-image]][pr-url]
[![codecov][codecov-image]][codecov-url]

> Encapsulate and scope your TailwindCSS styles to your library and prevent them affecting styles outside.

Love using TailwindCSS? Other people also love using TailwindCSS? Trying to mix them together? Usually this leads to problems as the tailwind classes such as `flex`, `bg-red-500` will clash and change specificity.

**Potential solutions**:

- A solution would be to [prefix your `TailwindCSS` styles in your libraries](https://stackoverflow.com/a/63770585), for example `my-lib-flex`, `my-lib-bg-red-500`, but this simply isn't good enough. The solution breaks down when there are multiple libraries using `TailwindCSS`. You would need a `prefix-` for each library. Unnecessary mental load.

- Another solution would be to [make the parent app important](https://stackoverflow.com/a/65907678). But this is an anti-pattern, and is a leaky abstraction. It is not feasible to tell all the consumers of your library to do this as a pre-requisite.

## Installation

```bash
npm i vite-plugin-scope-tailwind -D
```

## Usage

`vite-plugin-scope-tailwind` to the rescue!

This plugin scopes/encapsulates/contains all the `TailwindCSS` styles of your library all in, without any extra hacking around.

Add the `scopeTailwind` plugin into the `plugins` list in your `vite.config.js`:

```ts
import scopeTailwind from "vite-plugin-scope-tailwind";

export default defineConfig({
    ...
    plugins: [
        ...
        scopeTailwind(), // or scopeTailwind({ react: true }) for a React app
        ...
    ],
    ...
});
```

### Options

```ts
{
    react: boolean // If your app is a React app
    ignore: RegExp | RegExp[] | string | string[] // If you want to exclude some classes from being scoped
}
```

---

Made with ❤️

[npm-image]: https://badge.fury.io/js/vite-plugin-scope-tailwind.svg
[npm-url]: https://npmjs.org/package/vite-plugin-scope-tailwind
[downloads-image]: https://img.shields.io/npm/dm/vite-plugin-scope-tailwind.svg
[downloads-url]: https://npmjs.org/package/vite-plugin-scope-tailwind
[github-actions-workflow-image]: https://github.com/dolanmiu/vite-plugin-scope-tailwind/workflows/Tests%20&%20Build/badge.svg
[github-actions-workflow-url]: https://github.com/dolanmiu/vite-plugin-scope-tailwind/actions
[snky-image]: https://snyk.io/test/github/dolanmiu/vite-plugin-scope-tailwind/badge.svg
[snky-url]: https://snyk.io/test/github/dolanmiu/vite-plugin-scope-tailwind
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[pr-url]: http://makeapullrequest.com
[codecov-image]: https://codecov.io/gh/dolanmiu/vite-plugin-scope-tailwind/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/dolanmiu/vite-plugin-scope-tailwind
