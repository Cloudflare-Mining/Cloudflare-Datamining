# vite-node-miniflare

> [!note]
> now it uses [`ViteRuntime`](https://github.com/vitejs/vite/discussions/15774) instead of `vite-node`

Running [`vite-node`](https://github.com/vitest-dev/vitest/tree/main/packages/vite-node) on [`miniflare`](https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare).

See https://github.com/dario-piotrowicz/vite-workerd-ssr-request-handler-experimentation/pull/1 for the motivation.

See https://github.com/hi-ogawa/vite-plugins/issues/127 for known limitations.

## examples

- [`vite-runtime-workerd-examples`](https://github.com/hi-ogawa/vite-runtime-workerd-examples) : example repository with Cloudflare Pages deployment
- [`./examples/basic`](./examples/basic) : Simple demo of SSR, Hydration and HMR with [`@hiogawa/tiny-react`](https://github.com/hi-ogawa/js-utils/tree/main/packages/tiny-react)
- [`./examples/react`](./examples/react) : Simple demo with React
- [`./examples/react-router`](./examples/react-router) : React Router SSR application with [`@hiogawa/vite-glob-routes`](https://github.com/hi-ogawa/vite-plugins)
- [`./examples/remix`](./examples/remix) : [Remix Vite Plugin](https://remix.run/docs/en/main/future/vite) integration

## usage

```ts
//
// vite.config.ts
//
import { defineConfig } from "vite";
import { vitePluginViteNodeMiniflare } from "@hiogawa/vite-node-miniflare";

export default defineConfig({
  plugins: [vitePluginViteNodeMiniflare({ entry: "/worker-entry.ts" })],
});

//
// worker-entry.ts
//
export default {
  async fetch() {
    return new Response("hello workerd");
  },
};
```

## credits/references

- https://github.com/dario-piotrowicz/vite-workerd-ssr-request-handler-experimentation
- https://github.com/vitest-dev/vitest/tree/main/packages/vite-node
- https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare
- https://github.com/nuxt/nuxt/blob/1de44a5a5ca5757d53a8b52c9809cbc027d2d246/packages/vite/src/vite-node.ts
- https://github.com/sapphi-red/vite-envs/tree/use-vite-runtime
- https://github.com/vitejs/vite/discussions/14288
