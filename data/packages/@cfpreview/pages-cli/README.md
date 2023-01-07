# \[Beta\] Pages CLI

```txt
$ npm install @cfpreview/pages-cli
```

```txt
$ pages dev [directory | -- command]
```

## Examples

### Create React App

```txt
$ pages dev --proxy 3000 -- npx react-scripts start
```

### A static folder

```txt
$ pages dev ./public
```

## Options

| Name       | Description                                           | Default                                                 |
| ---------- | ----------------------------------------------------- | ------------------------------------------------------- |
| `--port`   | The port to listen on.                                | `7000`                                                  |
| `--proxy`  | The port to proxy requests for `env.ASSETS.fetch` to. | Automatically determined by inspecting command process. |
| `--config` | The path to the beta configuration file.              | `./pages-functions-beta.json`                           |

## Miniflare

Inside your `pages-functions-beta.json` file, you can add a `"miniflare"` object which is passed into the constructor of Miniflare:

```json
{
  "entryPoint": "./functions",
  "baseURL": "/",
  "miniflare": {
    "kvPersist": true,
    "kvNamespaces": ["MyKVNamespace"]
  }
}
```

You can use this to enable [environment variables and secret bindings](https://miniflare.dev/variables-secrets.html), [custom build commands for single Worker setups](https://miniflare.dev/builds.html), [KV](https://miniflare.dev/kv.html), and [Durable Objects](https://miniflare.dev/durable-objects.html).

Note: this is only for local development and has no impact on any production settings.

## Roadmap

- [ ] Improve help message (the `-- command` option presents weirdly)
- [x] Auto-configure `--proxy` based on command run
  - [x] Testing on Windows
- [x] Bindings
- [x] Custom build scripts for single Worker setups
