# vite-plugin-cloudflare-functions

[![version](https://img.shields.io/npm/v/vite-plugin-cloudflare-functions?color=rgb%2850%2C203%2C86%29&label=npm)](https://www.npmjs.com/package/vite-plugin-cloudflare-functions) [![CI](https://github.com/yjl9903/vite-plugin-cloudflare-functions/actions/workflows/ci.yml/badge.svg)](https://github.com/yjl9903/vite-plugin-cloudflare-functions/actions/workflows/ci.yml) [![miki](https://img.shields.io/endpoint?url=https://pages.onekuma.cn/project/vite-plugin-cloudflare-functions&label=Demo)](https://vite-plugin-cloudflare-functions.pages.dev/)

Make [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/) works with Vite friendly.

## Features

When should you use this plugin?

+ If it is not necessary to use a heavy SSR framework like [nuxt](https://nuxt.com)
+ If your application is a static SPA, but you also want to write several API endpoints

If you have used some meta SSR framework like [nuxt](https://nuxt.com), there is no need to use this plugin. But if you want to add some API endpoints to your SPA, just use it.

This plugin provides some simple utilities to help you develop a SPA with serverless API endpoints powered by [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/).

+ **Dev**: Automatically start wrangler pages dev server
+ **Dev**: Automatically generate serverless functions API type declaration
+ **Build**: Automatically move the functions source directory for monorepo

## Installation

```bash
npm i -D vite-plugin-cloudflare-functions
```

```ts
// vite.config.ts

import { defineConfig } from 'vite';

import CloudflarePagesFunctions from 'vite-plugin-cloudflare-functions';

export default defineConfig({
  plugins: [
    CloudflarePagesFunctions()
  ]
});
```

## Usage

### Functions

Just write pages functions as usual, but you can use the following utility functions to make auto-generation and IDE type inference work.

+ `makePagesFunction`
+ `makeRawPagesFunction`
+ `makeResponse`: create a [Response](https://developers.cloudflare.com/workers/runtime-apis/response/) using your JSON object
+ `makeRawResponse`: same with [new Response(...)](https://developers.cloudflare.com/workers/runtime-apis/response/) but wrapped with a generic type used for type inference

```ts
// /api/[msg].ts

import {
  makeRawPagesFunction,
  makePagesFunction,
  makeResponse
} from 'vite-plugin-cloudflare-functions/worker';

export const onRequestGet = makePagesFunction(({ params }) => ({
  status: 'OK',
  data: 'Hello, ' + params.msg + '!'
}));

export const onRequestPost = makeRawPagesFunction(({ params }) =>
  makeResponse({
    status: 'OK',
    data: 'Post ' + params.msg + ' OK!'
  })
);
```

#### Override environment

For example, you have set the environment variable `PASS` (you can config it in the plugin option, see [Configuration](#configuration)).

```ts
// cloudflare.d.ts

/// <reference types="@cloudflare/workers-types" />
/// <reference types="vite-plugin-cloudflare-functions/types" />

import 'vite-plugin-cloudflare-functions/worker';

declare module 'vite-plugin-cloudflare-functions/worker' {
  interface PagesFunctionEnv {
    PASS: string;
  }

  interface PagesFunctionData {}
}
```

Then you can find the parameter `env` has corresponding type declarations.

```ts
// /api/index.ts

import { makePagesFunction } from 'vite-plugin-cloudflare-functions/worker';

export const onRequestGet = makePagesFunction(({ env }) => ({
  pass: env.PASS
}));
```

### Client

Just write you client code as usual, but for we generate the API endpoint response body type declarations automatically, so that with the provided client `useFunctions` (powered by [axios](https://github.com/axios/axios)), your IDE will provide smarter IntelliSense.

```ts
// /main.ts
import { useFunctions } from 'vite-plugin-cloudflare-functions/client';

const client = useFunctions();

client.get('/api/world').then((resp) => {
  // The type of resp is { status: string, data: string }
});
```

Full example is [here](./playground/).

## Configuration

```ts
// vite.config.ts

import { defineConfig } from 'vite';

import CloudflarePagesFunctions from 'vite-plugin-cloudflare-functions';

export default defineConfig({
  plugins: [
    CloudflarePagesFunctions({
      // Cloudflare Functions root directory
      root: './functions',
      // Copy the functions directory to outDir or do nothing
      outDir: undefined,
      // Generate API type declarations
      dts: './cloudflare.d.ts',
      // Wrangler configuration
      wrangler: {
        // Wrangler dev server port
        port: 8788,
        // Enable wrangler log
        log: true,
        // Bind variable/secret
        binding: {
          KEY: 'VALUE'
        },
        // Bind KV namespace
        kv: [
          'NAMESPACE'
        ],
        // Bind D1 database 
        d1: [
          'D1'
        ],
        // Bind Durable Object
        do: {
          DO: 'DO'
        },
        // Bind R2 bucket
        r2: [
          'BUCKET'
        ]
      }
    })
  ]
});
```

> **Note**
>
> **This plugin starts the wrangler pages dev server under the hood**. The configuration field `binding`, `kv`, `do`, `d1`, `r2` are passed to run the command `wrangler pages dev` to start pages dev server. You can find more information about this command at [Commands - Cloudflare Worker docs](https://developers.cloudflare.com/workers/wrangler/commands/#dev-1).
>
> The generated command of the above example is `wrangler pages dev --local --ip localhost --port 8788 --proxy <generated by vite dev server> --binding KEY=VALUE --kv NAMESPACE --d1 D1 --do DO=DO --r2 BUCKET`.

## License

MIT License © 2022 [XLor](https://github.com/yjl9903)
