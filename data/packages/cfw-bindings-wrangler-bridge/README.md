# cfw-bindings-wrangler-bridge

This bridge makes it possible to interact with **remote** Cloudflare Workers bindings(like KV, D1, etc...) **from anywhere** you want.

For example,

- Use remote data with Vite based meta frameworks local development
- CLI tools to sync remote data to local, copy remote data to remote
- Static Site Generation, Pre-rendering with remote data
- etc...

Many possibilities are unlocked now! 🔓

To understand the motivation in detail, see also my talk [slides](https://leaysgur.github.io/slides/cloudflare_workers_tech_talks-2).

> [!IMPORTANT]  
> If your purpose is to mock bindings only for closed, local development and no initial data is needed(or can be easily prepared), you may not need this bridge.
>
> For these cases, we recommend using mock APIs like:
>
> - [`miniflare@3`](https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare#class-miniflare) API
>   - Some of frameworks may have its own support for `miniflare` in their adapters like [SolidStart](https://github.com/solidjs/solid-start/tree/main/packages/start-cloudflare-pages)
> - [`getPlatformProxy()`](https://developers.cloudflare.com/workers/wrangler/api/#getplatformproxy) from `wrangler` module
>
> If those do not match for your case or you really need the remote data, please go ahead. 🤤

## How it works

This bridge has 2 components.

- Module: Mock module to be `import`ed into your application
  - written as pure ESM
  - run on any environment
- Worker: Proxy worker to be invoked by the bridge module
  - hosted by `wrangler dev` or `unstable_dev()` in advance
  - run on Cloudflare Workers environment

Bridge module itself is platform agnostic, you can use it on any platform|environment.

## Install & Prerequisite

Install bridge as usual.

```sh
npm install -D cfw-bindings-wrangler-bridge
```

And make sure to prepare `wrangler.toml` for your needs.

## Usage

There are 2 options.

- 🅰️ Bridge worker w/ external `wrangler dev` process
- 🅱️ Bridge worker w/ `unstable_dev()` API by `wrangler` package

It's up to your usecase.

### 🅰️ With external `wrangler dev` process

```sh
wrangler dev ./path/to/node_modules/cfw-bindings-wrangler-bridge/worker/index.js --remote
# Worker will be running on `http://127.0.0.1:8787` by default
```

Of course you can interact with local environment by omitting `--remote`. All the other options(like `--port`, `--persist-to`) are also available.

Then, create bridge modules and use them anywhere in your code.

```js
import { KVNamespace$ } from "cfw-bindings-wrangler-bridge";

// Default is bound to `http://127.0.0.1:8787`
const MY_KV = new KVNamespace$("MY_KV");
// Or specify origin
// const MY_KV = new KVNamespace$("MY_KV", {
//   bridgeWorkerOrigin: "http://localhsot:8686",
// });

// ✌️ This is remote KV!
await MY_KV.put("foo", "bar");
await MY_KV.get("foo"); // "bar"
```

This is isomorphoc approach, your module can be run on everywhere(Node.js, Bun, Browsers, etc).

Setups can be done in synchronous, it keeps your code as simple as possible.

### 🅱️ With `unstable_dev()` API by `wrangler` package

You need to `npm install -D warngler` and create `UnstableDevWorker` instance.

```js
import { unstable_dev } from "wrangler";
import { KVNamespace$ } from "cfw-bindings-wrangler-bridge";

const worker = await unstable_dev(
  "./path/to/node_modules/cfw-bindings-wrangler-bridge/worker/index.js",
  {
    local: false,
    // config: "./path/to/your/wrangler.toml",
    experimental: { disableExperimentalWarning: true },
  },
);

const MY_KV = new KVNamespace$("MY_KV", {
  bridgeWorkerOrigin: `http://${worker.address}:${worker.port}`,
});

// ✌️ This is remote KV!
await MY_KV.put("foo", "bar");
await MY_KV.get("foo"); // "bar"

// DO NOT FORGET...
await worker.stop();
```

This is Node.js only option since `wrangler` package depends on Node.js but may be handy for some cases.

It requires asynchronous style APIs for setup and dev worker should be managed by yourself.

## Advanced usage

Create multiple module instances automatically by `getBindings()` helper.

```ts
import { getBindings } from "cfw-bindings-wrangler-bridge";

const env = await getBindings<{
  TODOS: KVNamespace;
  SESSIONS: KVNamespace;
}>();

const user = await env.SESSIONS.get("abc", "json");
const todos = await env.TODOS.get(user.id);
```

---

Mixing local and remote service bindings is now possible.

> https://github.com/cloudflare/workers-sdk/issues/1182

```js
import { Fetcher$ } from "cfw-bindings-wrangler-bridge";

const AUTH_SERVICE = new Fetcher$("AUTH", {
  bridgeWorkerOrigin: "http://127.0.0.1:3000",
});
const CART_SERVICE = new Fetcher$("CART", {
  bridgeWorkerOrigin: "http://127.0.0.1:4000",
});
```

---

Any type of bindings can be mixed with local and remote.

```js
import { unstable_dev } from "wrangler";
import { R2Bucket$, KVNamespace$ } from "cfw-bindings-wrangler-bridge";

const prodWorker = await unstable_dev(/* ... */);

// Use remote
const PROD_ASSETS = new R2Bucket$("ASSETS", {
  bridgeWorkerOrigin: `http://${prodWorker.address}:${prodWorker.port}`,
});
// Use local
const DEV_KV = new KVNamespace$("SNAPSHOTS");
```

> [!NOTE]  
> AFAIK, this is the only way to achieve this situation for now.

## Supported bindings

| binding                                                                              | module            | support | memo                                           |
| :----------------------------------------------------------------------------------- | :---------------- | :-----: | :--------------------------------------------- |
| [KV namespace](https://developers.cloudflare.com/workers/runtime-apis/kv/)           | `KVNamespace$`    |   💯    |                                                |
| [R2 bucket](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/) | `R2Bucket$`       |   💯    |                                                |
| [D1 database](https://developers.cloudflare.com/d1/platform/client-api/)             | `D1Database$`     |   💯    |                                                |
| [Service](https://developers.cloudflare.com/workers/runtime-apis/service-bindings/)  | `Fetcher$`        |   💯    |                                                |
| [Queue](https://developers.cloudflare.com/queues/platform/javascript-apis/)          | `WorkerQueue$`    |   💯    | Producer usage only                            |
| [Vectorize](https://developers.cloudflare.com/vectorize/platform/client-api/)        | `VectorizeIndex$` |   💯    | `--remote` only [for now](#vectorize-bindings) |

More to come...? PRs are welcome! 😉

## Known limitations

### Compatibility issues

The instances and values available from this bridge are not 100% compatible.

For example,

- Binding instances
  - The class constructors like `KVNamespace`, `R2Object`(aka `HeadResult`) are not publicly exposed
- Enumerable instance properties
  - Read-only properties are emulated by simple implementation
  - Some private properties and methods are included
- Exception
  - Not a specific error like `TypeError`, but just an `Error`
- etc...

But I don't think there are any problems in practical use.

### Max limits for API call

For example, KV has a limitation of only being able to call the API up to 1000 operations per 1 worker invocation.

However, via this bridge, the API call becomes a separate worker invocation, which circumvents that limitation.

This may be a problem after you deployed that worker.

### Vectorize bindings

Since `wrangler(miniflare)` does not support Vectorize yet, you need `--remote` to interact with Vectorize binding.

> https://github.com/cloudflare/workers-sdk/issues/4360

## Examples

### CLI

<details>

If you are using REST API in your CLI, now you can replace it.

```diff
-const putKV = async (API_KEY, API_URL, [key, value]) => {
-  const res = await fetch(`${API_URL}/values/${key}`, {
-    method: "PUT",
-    headers: { Authorization: `Bearer ${API_KEY}` },
-    body: value,
-  });
-
-  const json = await res.json();
-  if (!json.success)
-    throw new Error(json.errors.map(({ message }) => message).join("\n"));
-};
+import { KVNamespace$ } from "cfw-bindings-wrangler-bridge";
+import { unstable_dev } from "wrangler";
+
+const worker = await unstable_dev(/* ... */);
+
+const putKV = async (KV_BINDING_NAME, [key, value]) => {
+  const KV = new KVNamespace$(
+    KV_BINDING_NAME,
+    { bridgeWorkerOrigin: `http://${worker.address}:${worker.port}` }
+  );
+  await KV.put(key, value);
+};
+
+await worker.stop();
```

</details>

### SvelteKit local development

<details>

Be sure to wrap with `if (dev) {}`, not to be included in production build.

```js
// server.hooks.js
import { KVNamespace$, D1Database$ } from "cfw-bindings-wrangler-bridge";
import { dev } from "$app/environment";

export const handle = async ({ event, resolve }) => {
  if (dev) {
    event.platform = {
      env: {
        SESSIONS: new KVNamespace$("SESSIONS"),
        TODOS: new D1Database$("TODOS"),
      },
    };
  }

  return resolve(event);
};
```

OR

```ts
import { getBindings } from "cfw-bindings-wrangler-bridge";
import { unstable_dev } from "wrangler";
import { dev } from "$app/environment";
import type { Handle } from "@sveltejs/kit";
import type { UnstableDevWorker } from "wrangler";

let worker: UnstableDevWorker;
let env: App.Platform["env"];
export const handle: Handle = async ({ event, resolve }) => {
  if (dev) {
    if (!env) {
      worker = await unstable_dev(
        "./node_modules/cfw-bindings-wrangler-bridge/worker/index.js",
        { experimental: { disableExperimentalWarning: true } },
      );
      env = await getBindings({
        bridgeWorkerOrigin: `http://${worker.address}:${worker.port}`,
      });
    }

    event.platform = { env };
  }

  return resolve(event);
};
```

</details>

### Astro local development

<details>

Be sure to wrap with `if (import.meta.env.DEV) {}`, not to be included in production build.

```astro
---
// your-page.astro
import { getRuntime } from "@astrojs/cloudflare/runtime";
import { KVNamespace$ } from "cfw-bindings-wrangler-bridge";

let runtime = getRuntime(Astro.request) ?? {};
if (import.meta.env.DEV) {
  runtime.env = {
    NEWS: new KVNamespace$("NEWS"),
  };
}
---

<!-- ... -->
```

</details>
