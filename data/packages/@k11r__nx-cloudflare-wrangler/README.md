# nx-cloudflare-wrangler

An executor and generator for Cloudflare Wrangler (workers and pages)

## Workers

### Generate a new worker project

`npx nx g @k11r/nx-cloudflare-wrangler:worker <app-name>`

Creates a new NX project (based on the node template) with a new worker.
`build` and `deploy` targets are added automatically.

## Pages

### Add `deploy` target to an existing project

`npx nx g @k11r/nx-cloudflare-wrangler:pages <app-name>`

This will only add a `deploy` target, the `build` property in `wrangler.toml` will point to the `build` target of the project.
