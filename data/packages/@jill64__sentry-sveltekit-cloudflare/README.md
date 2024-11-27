<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/sentry-sveltekit-cloudflare

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/sentry-sveltekit-cloudflare"><img src="https://img.shields.io/npm/v/@jill64/sentry-sveltekit-cloudflare" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/sentry-sveltekit-cloudflare"><img src="https://img.shields.io/npm/l/@jill64/sentry-sveltekit-cloudflare" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/sentry-sveltekit-cloudflare"><img src="https://img.shields.io/npm/dm/@jill64/sentry-sveltekit-cloudflare" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/sentry-sveltekit-cloudflare"><img src="https://img.shields.io/bundlephobia/min/@jill64/sentry-sveltekit-cloudflare" alt="npm-min-size" /></a> <a href="https://github.com/jill64/sentry-sveltekit-cloudflare/actions/workflows/ci.yml"><img src="https://github.com/jill64/sentry-sveltekit-cloudflare/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a>

<!----- END GHOST DOCS BADGES ----->

♟️ Unofficial Sentry Integration for SvelteKit Cloudflare Adapter

<!----- END GHOST DOCS HEADER ----->

Workaround until close [@sentry/javascript #8291](https://github.com/getsentry/sentry-javascript/issues/8291).

> [!NOTE]
> If you are looking for other node-less adapters, see [sentry-sveltkeit-edge](https://github.com/jill64/sentry-sveltekit-edge).

## Installation

```sh
npm i @jill64/sentry-sveltekit-cloudflare
```

## Configuration

Add the following settings to your SvelteKit application's `vite.config.js`.

```js
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  ssr: {
    noExternal: ['@jill64/sentry-sveltekit-cloudflare']
  }
  // ...
})
```

## Usage

### Client

```js
// hooks.client.js
import { init } from '@jill64/sentry-sveltekit-cloudflare/client'
// or
// import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'

const onError = init(
  '__YOUR_SENTRY_DSN__'
  // ,
  // {
  //   sentryOptions: {
  //     // ... Other Sentry Config
  //   },
  //   enableInDevMode: boolean (default: false)
  // }
)

export const handleError = onError((e, sentryEventId) => {
  // Your Error Handler
})
```

### Server

```js
// hooks.server.js
import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
// or
// import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = init(
  '__YOUR_SENTRY_DSN__'
  // ,
  // {
  //   toucanOptions: {
  //     // ... Other Sentry Config
  //   },
  //   handleOptions: {
  //     handleUnknownRoutes: boolean (default: false)
  //   },
  //   enableInDevMode: boolean (default: false)
  // }
)

export const handle = onHandle(({ event, resolve }) => {
  // Your Handle Code
})

export const handleError = onError((e, sentryEventId) => {
  // Your Error Handler
})
```

## Configure Source Map (Optional)

Use [@sentry/vite-plugin](https://npmjs.com/package/@sentry/vite-plugin).

### Example

```js
// vite.config.js
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    sentryVitePlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN
    }),
    sveltekit()
  ]
})
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
