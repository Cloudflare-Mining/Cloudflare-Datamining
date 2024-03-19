# @cloudflare/pages-plugin-cloudflare-access

## 1.0.4

### Patch Changes

- 6089299: maintenance: Build Plugins with newer `--outdir` option, actually build the APIs of Plugins, and update `package.json`s to be more complete.
- 9ba89fd: chore: Improve conversion from string to char array

  This code was a bit hard to read and got typescript errors when copying to a Workers project. This improves the speed by 1.8X and makes the code easier to understand.

## 1.0.2

### Patch Changes

- 90281ad: fix: Cloudflare Access failing to validate JWTs
