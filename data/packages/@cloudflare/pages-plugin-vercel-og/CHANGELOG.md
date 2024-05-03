# @cloudflare/pages-plugin-vercel-og

## 0.1.2

### Patch Changes

- 567f8c5: Add MIT license

## 0.1.1

### Patch Changes

- 6089299: maintenance: Build Plugins with newer `--outdir` option, actually build the APIs of Plugins, and update `package.json`s to be more complete.
- 47f7a33: chore: Fix `@cloudflare/pages-plugin-vercel-og/api`.

  Previously, the API wasn't built and the Wasm/binary files weren't being brought along. This change now produces a bundle with these files.
