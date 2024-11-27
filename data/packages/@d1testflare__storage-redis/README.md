# `@d1testflare/storage-redis`

Redis storage module for [Miniflare](https://github.com/cloudflare/miniflare): a
fun, full-featured, fully-local simulator for Cloudflare Workers.

## Example

```js
import { KVNamespace } from "@d1testflare/kv";
import { RedisStorage } from "@d1testflare/storage-redis";
import IORedis from "ioredis";

const redis = new IORedis("redis://localhost:6379");
const ns = new KVNamespace(new RedisStorage(redis, "namespace"));
await ns.put("key", "value");
console.log(await ns.get("key")); // value
```
