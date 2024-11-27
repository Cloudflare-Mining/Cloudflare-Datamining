# vite-plugin-miniflare

vite@6 or higher is required.

## Sample code

https://github.com/SoraKumo001/hono-miniflare  
https://github.com/SoraKumo001/remix-prisma-vite-miniflare

- vite.config.ts

Using vite-plugin-miniflare

```ts
import { defineConfig } from "vite";
import { devServer } from "vite-plugin-miniflare";
export default defineConfig({
  // Only if the front module is required
  // build: {},

  plugins: [
    devServer({
      entry: "src/index.tsx",
      // Bundle all ENTRY modules.
      bundle: true,
      // Set to true for automatic reloading without HMR
      reload: true,
    }),
  ],
});
```

- src/index.tsx

Making CacheAPI work on Vite

```ts
import { Hono } from "hono";

const app = new Hono();

const getCount = async () => {
  const cache = await caches.open("hono-ssr-react-miniflare");
  const url = new URL("/count", "http://localhost");
  const cachedResponse = await cache.match(url);
  const count = cachedResponse ? parseInt(await cachedResponse.text()) : 1;
  await cache.put(
    url,
    new Response((count + 1).toString(), {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "max-age=31536000",
      },
    })
  );
  return count;
};

app.get("*", async (c) => {
  return c.html(
    <html>
      <body>{await getCount()}</body>
    </html>
  );
});

export default app;
```
