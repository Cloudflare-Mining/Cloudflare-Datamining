# `@d1testflare/scheduler`

Scheduler module for [Miniflare](https://github.com/cloudflare/miniflare): a
fun, full-featured, fully-local simulator for Cloudflare Workers. See
[⏰ Scheduled Events](https://miniflare.dev/core/scheduled) for more details.

## Example

```js
import { CorePlugin, MiniflareCore } from "@d1testflare/core";
import { VMScriptRunner } from "@d1testflare/runner-vm";
import { Log, LogLevel } from "@d1testflare/shared";
import { SchedulerPlugin, startScheduler } from "@d1testflare/scheduler";
import { MemoryStorage } from "@d1testflare/storage-memory";

export class BadStorageFactory {
  storage() {
    throw new Error("This example shouldn't need storage!");
  }
}
const plugins = { CorePlugin, SchedulerPlugin };
const ctx = {
  log: new Log(LogLevel.INFO),
  storageFactory: new BadStorageFactory(),
  scriptRunner: new VMScriptRunner(),
};

const mf = new MiniflareCore(plugins, ctx, {
  modules: true,
  script: `export default {
    async scheduled(request, env) {
      console.log("tick");
    }
  }`,
  crons: ["* * * * *"],
});

const scheduler = await startScheduler(mf); // tick, tick, tick, ...
scheduler.dispose();
```
