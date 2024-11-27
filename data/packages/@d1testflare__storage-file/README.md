# `@d1testflare/storage-file`

File-system storage module for
[Miniflare](https://github.com/cloudflare/miniflare): a fun, full-featured,
fully-local simulator for Cloudflare Workers.

## Example

```js
import { KVNamespace } from "@d1testflare/kv";
import { FileStorage } from "@d1testflare/storage-file";

const ns = new KVNamespace(new FileStorage("./data"));
await ns.put("key", "value");
console.log(await ns.get("key")); // value
```
