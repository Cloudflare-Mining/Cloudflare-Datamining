[![npm](https://img.shields.io/npm/v/konsum-cloudflare-worker.svg)](https://www.npmjs.com/package/konsum-cloudflare-worker)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![bundlejs](https://deno.bundlejs.com/?q=konsum-cloudflare-worker\&badge=detailed)](https://bundlejs.com/?q=konsum-cloudflare-worker)
[![downloads](http://img.shields.io/npm/dm/konsum-cloudflare-worker.svg?style=flat-square)](https://npmjs.org/package/konsum-cloudflare-worker)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fkonsumation%2Fkonsum-cloudflare-worker%2Fbadge\&style=flat)](https://actions-badge.atrox.dev/konsumation/konsum-cloudflare-worker/goto)
## Router

This template demonstrates using the [`itty-router`](https://github.com/kwhitley/itty-router) package to add routing to your Cloudflare Workers.

[`index.js`](https://github.com/cloudflare/worker-template-router/blob/master/index.js) is the content of the Workers script.

#### Wrangler

You can use [wrangler](https://github.com/cloudflare/wrangler) to generate a new Cloudflare Workers project based on this template by running the following command from your terminal:

```
wrangler generate myapp https://github.com/cloudflare/worker-template-router
```

Before publishing your code you need to edit `wrangler.toml` file and add your Cloudflare `account_id` - more information about configuring and publishing your code can be found [in the documentation](https://developers.cloudflare.com/workers/learning/getting-started#7-configure-your-project-for-deployment).

Once you are ready, you can publish your code by running the following command:

```
wrangler publish
```

