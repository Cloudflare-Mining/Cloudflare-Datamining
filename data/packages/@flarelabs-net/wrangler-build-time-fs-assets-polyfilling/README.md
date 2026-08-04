# wrangler-build-time-fs-assets-polyfilling

The package in a nutshell generates files at built time that define what static assets
a Cloudflare worker has access to alongside fs polyfills that make sure to such files
to provide support for some `fs` functions.

A more proper documentation will be added later here if beneficial 🙂

## How to use the package

Install the package as a dev dependency:

```sh
npm i -D @flarelabs-net/wrangler-build-time-fs-assets-polyfilling
```

The package can be run via `npx` and similar tools:

```sh
npx wrangler-build-time-fs-assets-polyfilling --assets ./public
```

The command currently accepts two types of options:

- `--assets`|`-a`\
   What path of a directory containing the assets the command
  needs to generate the build-time files from
  (multiple paths can be provided here).
- `--assets-output-dir`|`-o`\
  Path were to copy all the assets. This is mandatory only when
  multiple assets paths are provided.

Besides the above you need to update your wrangler config file to:

- include an `assets` binding, its binding name needs to be
  `ASSETS` and it's directory needs to be either:

  - the assets output directory specified when running the command
  - or the single assets path specified when running the command

- include `alias`es set to the following:

  - `node:fs`: `./.wrangler/fs-assets-polyfilling/polyfills/node/fs.ts`
  - `fs`: `./.wrangler/fs-assets-polyfilling/polyfills/node/fs.ts`
  - `node:fs/promises`: `./.wrangler/fs-assets-polyfilling/polyfills/node/fs/promises.ts`
  - `fs/promises`: `./.wrangler/fs-assets-polyfilling/polyfills/node/fs/promises.ts`

- optionally a `build` command that runs the `wrangler-build-time-fs-assets-polyfilling` command (for convenience)
