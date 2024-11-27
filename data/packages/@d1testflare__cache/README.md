# `@d1testflare/cache`

Cache module for [Miniflare](https://github.com/cloudflare/miniflare): a fun,
full-featured, fully-local simulator for Cloudflare Workers. See
[✨ Cache](https://miniflare.dev/storage/cache) for more details.

## Example

```js
import { Cache } from "@d1testflare/cache";
import { Response } from "@d1testflare/core";
import { MemoryStorage } from "@d1testflare/storage-memory";

const cache = new Cache(new MemoryStorage());

const key = "http://localhost";
const res = new Response("body", {
  headers: { "Cache-Control": "max-age=3600" },
});
await cache.put(key, res);

const cachedRes = await cache.match(key);
console.log(await cachedRes.text()); // body
```
