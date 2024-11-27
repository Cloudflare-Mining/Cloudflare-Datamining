# Remix Cloudflare Module Workers

Use [Remix](https://remix.run/) with [Cloudflare module workers](https://developers.cloudflare.com/workers/)

## Motivation

The official `remix-cloudflare-workers` adapter does not support Cloudflare Workers' [new Module Worker format](https://developers.cloudflare.com/workers/learning/migrating-to-module-workers/). Some of Workers' new features (like Durable Objects and D1) are not supported using the Service Worker syntax, making them inaccessible for use in your Remix app. This package adds compatibility with the new format.

## Usage

Since the changes needed to use `remix-cloudflare-module-workers` are minimal, you can use the official `create-remix` command. When prompted where you want to deploy, choose "Cloudflare Workers"

```sh
npx create-remix@latest
```

`cd` into your project and install `remix-cloudflare-module-workers`

```sh
npm i remix-cloudflare-module-workers
```

Replace `server.js` with this snippet:

```typescript
import { createEventHandler } from "remix-cloudflare-module-workers";
import * as build from "@remix-run/dev/server-build";

export default {
  fetch: createEventHandler({ build, mode: process.env.NODE_ENV }),
};
```

Change the `serverDependenciesToBundle` in `remix.config.js`:

```diff
-   serverDependenciesToBundle: "all",
+   serverDependenciesToBundle: [/^(?!(__STATIC_CONTENT_MANIFEST)$).*$/u],
```

Run `miniflare` with the `--modules` flag in `package.json`:

```diff
    "scripts": {
-     "dev:miniflare": "cross-env NODE_ENV=development miniflare ./build/index.js --watch",
+     "dev:miniflare": "cross-env NODE_ENV=development miniflare ./build/index.js --watch --modules",
```

That's it! Run `npm run dev` to start the dev server.

## Environment variables and bindings

Refer to the [Workers docs on environment variables](https://developers.cloudflare.com/workers/platform/environment-variables/) for more information.

With module Workers, environment variables and bindings are available on the `env` parameter passed to the Worker's `fetch` event handler. You can rewrite the `fetch` event handler to access them before passing the request to Remix's `createEventHandler`.

Rename `server.js` to `server.ts`:

```typescript
// server.ts

import { createEventHandler } from "remix-cloudflare-module-workers";
import * as build from "@remix-run/dev/server-build";

export type Environment = {
  __STATIC_CONTENT: KVNamespace<string>;
  // add your env variable / bindings here
};

export default {
  async fetch(request: Request, env: Environment, ctx: ExecutionContext) {
    console.log(env);
    return createEventHandler({
      build,
      mode: process.env.NODE_ENV,
    })(request, env, ctx);
  },
};
```

### `env` helper service

To access the Worker's `env` throughout your Remix app, you can create a small helper service to easily set and retrieve the `env`.

```typescript
// services/environment.server.ts

export type Environment = {
  __STATIC_CONTENT: KVNamespace<string>; // this is required
  YOUR_ENV_VARIABLE: string;
};

export function setEnvironment(e: Environment) {
  env = e;
}

export let env: Environment;
```

And update `server.ts` as follows:

```diff
+ import { setEnvironment, type Environment } from "~/services/environment.server";

- export type Environment = {
-   __STATIC_CONTENT: KVNamespace<string>;
- };

  export default {
    async fetch(request: Request, env: Environment, ctx: ExecutionContext){
+     setEnvironment(env);
      return createEventHandler({
        build,
        mode: process.env.NODE_ENV,
      })(request, env, ctx);
    },
  };
```

Now, you can access the Worker's `env` anywhere (server-side) in your Remix app.

```typescript
import { env } from "~/services/environment.server";

console.log(env.YOUR_ENV_VARIABLE);
```

### `getLoadContext`

Alternatively, you can also bind `env` to your loaders and actions context by using Remix's built-in `getLoadContext`. To get type suggestions, you'll need to override Remix's `AppLoadContext` type.

In `server.ts`

```diff
  export type Environment = {
    __STATIC_CONTENT: KVNamespace<string>;
    // add your env variable / bindings types here
  };

+ declare module "@remix-run/server-runtime" {
+   interface AppLoadContext extends Environment {}
+ }

  export default {
    async fetch(request: Request, env: Environment, ctx: ExecutionContext){
+     function getLoadContext() {
+       return env;
+     }
      return createEventHandler({
        build,
+       getLoadContext,
        mode: process.env.NODE_ENV,
      })(request, env, ctx);
    },
  };
```

In your loaders and actions, you can use the `context` param now to access your environment variables and bindings.

```typescript
// app/routes/_index.tsx

export async function loader({ request, context }: LoaderArgs) {
  console.log(context.YOUR_ENV_VARIABLE);

  return json({
    your_env: context.YOUR_ENV_VARIABLE,
  });
}
```

### Secrets in development

When developing your Remix app locally, create a `.env` file in the root of your project to define your environment variables. Remix uses Miniflare for development, read the [Miniflare docs on environment variables](https://miniflare.dev/core/variables-secrets) for more information.

## KV, D1 and other Workers APIs

With your Worker's `env` set up, you can access all bindings throughout your Remix app.

### KV

Use Wrangler to create a KV namespace:

```sh
npx wrangler kv:namespace create <YOUR_NAMESPACE>
```

Add the generated kv_namespace to your `wrangler.toml` file:

```toml
kv_namespaces = [
    { binding = "<YOUR_BINDING>", id = "<YOUR_ID>" }
]
```

You can give `binding` any value you want. You'll be able to access this binding on the Worker's `env` parameter with the name you choose here.

To use this KV namespace in development mode, pass it to `miniflare` in your `package.json`:

```diff
    "scripts": {
-     "dev:miniflare": "cross-env NODE_ENV=development miniflare ./build/index.js --watch --modules",
+     "dev:miniflare": "cross-env NODE_ENV=development miniflare ./build/index.js --watch --kv YOUR_BINDING --kv YOUR_BINDING_2 --modules",
```

By default, KV data is stored in memory. To persist KV data between runs, add the `--kv-persist` flag to the miniflare command.

Add the KVNamespace to your `Environment` type.

```diff
  export type Environment = {
    __STATIC_CONTENT: KVNamespace<string>;
+   YOUR_BINDING: KVNamespace<string>;
  };
```

Your KV database is now available on `env` if you are using the `env` helper service, or on `context` if you are loading `env` via `getLoadContext`.

References:

- [Cloudflare Workers KV](https://developers.cloudflare.com/workers/runtime-apis/kv/)
- [Miniflare KV](https://miniflare.dev/storage/kv)
- [Wrangler KV](https://developers.cloudflare.com/workers/wrangler/workers-kv/)

### D1

Workers uses `better-sqlite3` to access D1:

```sh
npm i better-sqlite3
```

Use Wrangler to create a D1 database:

```sh
npx wrangler d1 create <YOUR_DATABASE>
```

Add the generated D1 namespace to your `wrangler.toml` file:

```toml
[[d1_databases]]
binding = "<BINDING_NAME>"
database_name = "<DATABASE_NAME>"
database_id = "<UUID>"
```

To develop locally, add your database to the `miniflare` command in your `package.json`:

```diff
    "scripts": {
-     "dev:miniflare": "cross-env NODE_ENV=development miniflare ./build/index.js --watch --modules",
+     "dev:miniflare": "cross-env NODE_ENV=development miniflare ./build/index.js --watch --d1 BINDING_NAME --modules",
```

Your D1 database is now available on the `env` object in your Remix app. For more info on how to bootstrap your D1 database and write queries for it, read the [official Cloudflare D1 docs](https://developers.cloudflare.com/d1/get-started/#5-run-a-query-against-your-d1-database).

### Other bindings

With `remix-cloudflare-module-workers`, all Workers features and APIs should be supported. Refer to the [Cloudflare Workers docs](https://developers.cloudflare.com/workers/) and [Miniflare docs](https://miniflare.dev/) (for local development) for the setup and usage of other Workers APIs.

## Related Links

- [Remix documentation on adapters](https://remix.run/docs/en/main/other-api/adapter)
- [Prior discussion on a ES modules Workers adapter](https://github.com/remix-run/remix/pull/4676)
