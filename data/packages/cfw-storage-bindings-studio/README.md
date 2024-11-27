# cfw-storage-bindings-studio

> 🚧 Work in progress... 👷

Generic GUI for storage-related bindings based on [`cfw-bindings-wrangler-bridge`](https://github.com/leaysgur/cfw-bindings-wrangler-bridge) module.

You can interact both local and remote data! 🧙

## What does it solve?

- Remotely: Cloudflare dashboard required auth, and not a good UX(sorry, IMO)
- Locally: `miniflare` persistent source, no way to easily see what's in it

This module tries to solve these both problems at once.

## Usage

```sh
npx cfw-storage-bindings-studio

# Options
# For GUI running port, default: 3000
npx cfw-storage-bindings-studio --studio-port 5173
# For bridge worker settings
npx cfw-storage-bindings-studio --config ./path/to/wrangler.toml --remote
npx cfw-storage-bindings-studio --config ./path/to/wrangler.toml --persist-to ./path/to/.wrangler/state
```

## TODOs

- [x] CLI
- [x] CLI <-> APP
- [x] List bindings
- [ ] Svelte 5 migration(blocked by svelte-query) 🔥
- [x] Fancy UI(temp)
- [x] KV.list
- [x] KV.get
- [x] Better details by MIME
- [x] KV.delete
- [x] KV.put(new)
- [x] KV.put(update)
- [x] KV.put(text | binary)
- [x] KV revalidate all/each
- [x] D1 showTables
- [x] D1 showAllRows
- [x] D1 custom SQL repl
- [ ] D1 LIMIT/OFFSET
- [ ] D1 Add record
- [ ] D1 Update record
- [ ] D1 Delete record
- [ ] R2.xxx
- [ ] TBD...
