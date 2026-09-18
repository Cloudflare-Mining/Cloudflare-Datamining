# Cloudflare AI Gateway extension for Pi

Adds the `cloudflare/auto` Smart Router model to Pi through Cloudflare's internal AI gateway. It records routing diagnostics silently and shows the latest decision on demand through `/aig-show`, without occupying persistent UI space. It registers an isolated provider without replacing Pi's built-in provider or model catalog.

## Prerequisites

- `cloudflared`
- Cloudflare Access entitlement to `opencode.cloudflare.dev`
- Pi 0.84.4

Authentication uses the same pinned `cloudflared access login` flow as `pi-cf-internal-gateway`. Tokens remain in memory and are not written to Pi's credential store.

## Install

```bash
pi install ./packages/aig-pi-extension
```

Select `cloudflare-auto/cloudflare/auto` with `/model` or start Pi with:

```bash
pi --model cloudflare-auto/cloudflare/auto
```

Pi estimates cost using the internal catalog's `cloudflare/auto` rate. AI Gateway billing and logs report the concrete routed model and actual cost.
