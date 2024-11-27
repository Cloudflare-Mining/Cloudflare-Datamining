<div align="center">

# cachified-adapter-cloudflare-kv

</div>

<div align="center">

[![CI](https://github.com/AdiRishi/cachified-adapter-cloudflare-kv/actions/workflows/ci.yml/badge.svg)](https://github.com/AdiRishi/cachified-adapter-cloudflare-kv/actions/workflows/ci.yml) [![npm version](https://img.shields.io/npm/v/cachified-adapter-cloudflare-kv.svg?style=flat)](https://www.npmjs.com/package/cachified-adapter-cloudflare-kv) [![Coverage Status](https://coveralls.io/repos/github/AdiRishi/cachified-adapter-cloudflare-kv/badge.svg)](https://coveralls.io/github/AdiRishi/cachified-adapter-cloudflare-kv) ![GitHub License](https://img.shields.io/github/license/AdiRishi/cachified-adapter-cloudflare-kv) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

</div>

## 🚀 Introduction

`cachified-adapter-cloudflare-kv` is the official adapter for [`@epic-web/cachified`](https://github.com/epicweb-dev/cachified), designed to provide a seamless and efficient integration with [Cloudflare KV](https://developers.cloudflare.com/kv/) storage.

## 📦 Installation

```sh
npm install cachified-adapter-cloudflare-kv @epic-web/cachified
```

`@epic-web/cachified` is a peer dependency of `cachified-adapter-cloudflare-kv` and must be installed separately.

## 💡 Usage

This adapter is designed to be used with Cloudflare Workers. The example below shows a simple Cloudflare worker script that uses this adapter.

```ts
import { cachified, Cache } from "@epic-web/cachified";
import { cloudflareKvCacheAdapter } from "cachified-adapter-cloudflare-kv";

export interface Env {
    KV: KVNamespace;
    CACHIFIED_KV_CACHE: Cache;
}

export async function getUserById(
    userId: number,
    env: Env,
    ctx: ExecutionContext,
): Promise<Record<string, unknown>> {
    return cachified({
        key: `user-${userId}`,
        cache: env.CACHIFIED_KV_CACHE,
        async getFreshValue() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return response.json();
        },
        ttl: 60_000, // 1 minute
        staleWhileRevalidate: 300_000, // 5 minutes
        waitUntil: ctx.waitUntil.bind(ctx), // The .bind() call is necessary as ctx accesses `this`
    });
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        // It is a common pattern to pass around the env object to most functions when writing workers code
        // So it's convenient to inject the cache adapter into the env object
        env.CACHIFIED_KV_CACHE = cloudflareKvCacheAdapter({
            kv: env.KV,
            keyPrefix: "mycache", // optional
            name: "CloudflareKV", // optional
        });
        const userId = Math.floor(Math.random() * 10) + 1;
        const user = await getUserById(userId, env, ctx);
        return new Response(JSON.stringify(user), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
};
```

## ⚙️ Configuration

The adapter takes the following configuration options:

-   kv: The KVNamespace instance used to interact with Cloudflare KV.
-   keyPrefix (optional): A prefix for all keys managed by this adapter. Useful when sharing a KVNamespace for multiple purposes.
-   name (optional): Name for the cache instance, defaults to "CloudflareKV". Used by `@epic-web/cachified` to identify the cache instance during reporting

The `KVNamespace` instance can be obtained from the `env` object passed to the `fetch` event handler of a Cloudflare worker.

You can create a new KVNamespace using the wrangler CLI:

```sh
wrangler kv:namespace create <YOUR_NAMESPACE>
🌀  Creating namespace with title <YOUR_WORKER-YOUR_NAMESPACE>
✨  Success!
Add the following to your configuration file:
kv_namespaces = [
  { binding = <YOUR_BINDING>, id = "e29b263ab50e42ce9b637fa8370175e8" }
]
```

Then add the following to your `wrangler.toml` file:

```toml
kv_namespaces = [
    { binding = "<YOUR_BINDING>", id = "<YOUR_ID>" }
]
```

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. Check our [contributing guidelines](.github/CONTRIBUTING.md).

## 🙏 Acknowledgments

-   [@epic-web/cachified](https://github.com/epicweb-dev/cachified) - For the foundational caching library.
-   [Cloudflare KV](https://developers.cloudflare.com/kv/) - For the underlying caching technology.

---

<div align="center">

Made with ❤️

</div>
