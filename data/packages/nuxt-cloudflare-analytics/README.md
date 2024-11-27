# Nuxt Cloudflare Web Analytics Modules

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Add Cloudflare Web Analytics to your Nuxt Project.
The latest versions, above `1.0.8+` are made for Nuxt 3, if you want to use nuxt 2, use `0.1.5`

**Note:** this modules is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup

- Add `nuxt-cloudflare-analytics` dependency using yarn or npm to your project `npm i nuxt-cloudflare-analytics` or `yarn install nuxt-cloudflare-analytics`
- Add `nuxt-cloudflare-analytics` to `modules` section of `nuxt.config.ts`

```ts
{
  // either
  modules: [
    [
      'nuxt-cloudflare-analytics',
      {
        // See below for more options
        token: 'your-token', // Example 1a2b3v4a5er6ac7r8afd
      },
    ],
  ]

  // or
  modules: [
    'nuxt-cloudflare-analytics'
  ],
  cloudflareAnalytics: {
    // See below for more options
    token: 'your-token', // Example 1a2b3v4a5er6ac7r8afd
  }
}
```

You can find token on Web Aalytics Page at Cloudflare Dashboard.

## Options

### `token` (!string)

- Required
- Cloudflare analytics token, example: `1a2b3v4a5er6ac7r8afd`

### `scriptPath` (string | false | undefined)

- (Optional), defaults to `/_ca/b.js`. This is the `beacon.min.js` from cloudflare.
- You can set it to `false` to not use a local script and instead use the CDN script (https://static.cloudflareinsights.com/beacon.min.js).
  This is not recommended though, since some browsers may not load this script otherwise.
- You can set it to a custom path to define where your local script is. This **must** be a `.js` file inside your `public` folder. So if you have this file
  under `public/my/beacon.js`, you should set this option to `my/beacon.js`.

### `proxyPath` (string | false | undefined)

- (Optional), defaults to `false`.
- You can set it to a custom path to generate a proxy nuxt server api endpoint. This **must** start with `/api`.
  E.g. set `proxyPath` to `/api/_ca/p`, then the module will automatically
  - Generate this endpoint
  - Change the `scriptPath` to use this endpoint (as long as you don't set it to something own)
- The automatically created proxy endpoint is used to send data to Cloudflare.
  - Benefit: This avoids some browsers blocking this request.
  - Downside: Depending where you host your page, cloudflare will take this country as the origin of the page click. So if you host your page in the US (e.g. vercel) but your visitor is from Germany, you will see the US as the origin of the click in your dashboard.
- You can set it to `false` to not use a proxy and directly call cloudflare.
  Be prepared that some browsers may block the request and you will not see any data.
- If you have another solution for this, e.g. vercels rewrite config, set `proxyPath` to `false` and define a `customProxyPath` (see below).

### `customProxyPath` (string | undefined)

- (Optional), defaults to `undefined`. Only define this if you set `proxyPath` to `false`.
- This is the path to your custom proxy endpoint, e.g. from vercels rewrite config.
- e.g.

```ts
// nuxt.config.ts
{
  cloudflareAnalytics: {
    token: 'your-token', // Example 1a2b3v4a5er6ac7r8afd
    proxyPath: false,
    customProxyPath: '/my-proxy'
  }
}
```

```json
// vercel.json
{
	"rewrites": [{ "source": "/my-proxy", "destination": "https://cloudflareinsights.com/cdn-cgi/rum" }]
}
```

## Contributors

- hamlogic (https://github.com/hamlogic)
- madebyfabian (https://github.com/madebyfabian)

## License

MIT © [Hamjs](https://hamjs.com)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-cloudflare-analytics/latest.svg
[npm-version-href]: https://www.npmjs.com/package/nuxt-cloudflare-analytics
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-cloudflare-analytics.svg
[npm-downloads-href]: https://www.npmjs.com/package/nuxt-cloudflare-analytics

## Development

- Clone repo
- Install dependencies
- Switch into [**Take Over Mode**](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)
- Ensure local files are generated using npm run dev:prepare
- Start playground using npm run dev
- Follow this document to learn more about Nuxt modules: https://nuxt.com/docs/guide/going-further/modules
