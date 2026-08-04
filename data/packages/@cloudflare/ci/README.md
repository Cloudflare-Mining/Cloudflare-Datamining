# Cloudflare CI

A Cloudflare-native CI engine built on Workflows and Sandbox. The repository
root is the publishable `@cloudflare/ci` package; deployable Workers live under
[`examples/`](./examples/).

## Install

```sh
pnpm add @cloudflare/ci
```

`@cloudflare/ci` targets Cloudflare Workers and publishes TypeScript source for
Workers-aware bundlers such as Wrangler. It is not a directly executable Node.js
package. Workers importing `@cloudflare/ci/worker` must enable the
[`nodejs_compat`](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)
compatibility flag.

## Package API

Repository workflows import their authoring API from `@cloudflare/ci`:

```ts
import {
  CIWorkflow,
  isCiRunnerFailure,
  type CiContext,
  type CiParams,
  type CiRunnerFailureDiagnostics,
  type CiRunnerResult,
  type CloudflareArtifacts,
} from '@cloudflare/ci';
```

The package targets the Cloudflare Workers runtime directly. It intentionally
uses Workers modules and Cloudflare runtime libraries internally rather than
providing a Node.js-compatible build.

Reusable primitives needed by a deployable Worker entry point are exposed from
`@cloudflare/ci/worker`. The HTTP routes, queue handler, Wrangler configuration,
bindings, and concrete Workflow classes remain application code in each
example.

Runner commands execute inside retryable Workflow steps. Commands with external
side effects must therefore be idempotent, as required by Cloudflare Workflows.
`CiRunnerResult.logs` contains raw command output and is not secret-redacted;
only provider notification previews and failure messages are redacted.

## Examples

- [`examples/cloudflare-artifacts`](./examples/cloudflare-artifacts/) is a basic
  install, check, and deploy pipeline.
- [`examples/self-healing`](./examples/self-healing/) adds an application-owned
  Healing Agent that consumes the package's neutral runner-failure diagnostics.

Both examples are self-contained deployable Workers. The Healing Agent, its
tools, and its AI dependencies are not part of `@cloudflare/ci`.

## Develop

```sh
pnpm install
pnpm test
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

Run an example's commands from its own directory. Each example has an independent
package manifest, lockfile, TypeScript configuration, and Wrangler configuration
so Cloudflare can deploy the example subdirectory as a standalone repository.
The package publishes its TypeScript source directly and targets Workers-aware
bundlers rather than producing a Node.js-compatible `dist` build.

## License

Copyright 2026 Cloudflare, Inc. Licensed under the
[Apache License, Version 2.0](./LICENSE).

[Sandbox]: https://developers.cloudflare.com/sandbox/
