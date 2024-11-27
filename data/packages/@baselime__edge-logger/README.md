# Baselime Edge Logger
[![Documentation][docs_badge]][docs]
[![Latest Release][release_badge]][release]
[![License][license_badge]][license]

OpenTelemetry aware logger for Edge Runtimes.

Fully tested with:
- Cloudflare Workers
- Cloudflare Pages Functions
- Vercel Edge Functions

## Usage

```bash
npm i @baselime/edge-logger
```

### Example

```typescript
import { BaselimeLogger } from '@baselime/edge-logger'

export interface Env {
  BASELIME_API_KEY: string
}

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const logger = new BaselimeLogger({
      ctx,
      apiKey: env.BASELIME_API_KEY,
      service: 'my-service',
      dataset: 'cloudflare',
      namespace: 'my-worker-name',
      requestId: crypto.randomUUID(),
    })

    // Use the Baselime Edge logger to log
    logger.info('Hello, World!', { foo: 'bar' })

    // Make sure to add this to flush the logs to Baselime before the return statement
    ctx.waitUntil(logger.flush());
    return new Response('Request Completed');
  }
}
```

> Note the `ctx.waitUntil(logger.flush());` before the return statement of the function.

## Supported Methods

```typescript
logger.info("This is an informational message", { payload: { foo: "bar" } });
logger.warn("This is a warning message", { payload: { foo: "bar" } });
logger.error("This is an error message", { payload: { foo: "bar" } });
```

## Local Development

To get logs appropriately formatted in your local development environment using wrangler, add the `IS_LOCAL_DEV` environment variable to your `.dev.var` file.

```.env
IS_LOCAL_MODE=1
```

And use it when configuring the `BaselimeLogger`.

```typescript
export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const logger = new BaselimeLogger({
      ctx,
      apiKey: env.BASELIME_KEY,
      isLocalDev: env.IS_LOCAL_DEV
    })

    logger.info("Pretty Formatted Logs", { foo: "bar" });

    ctx.waitUntil(logger.flush())
  }
}
```

Local development mode is disabled by default to improve performance.

## Configuration

The BaselimeLogger class takes the following configuration options

| Property        | Type                |  Description                    |
|-----------------|---------------------|---------------------------------|
| `ctx`           | `ExecutionContext`  | Execution context              |
| `apiKey`        | `string`            |  API key for authentication      |
| `dataset`       | `string` (optional) |  Dataset name          |
| `service`       | `string` (optional) |  Service name          |
| `namespace`     | `string` (optional) |  Namespace             |
| `flushAfterMs`  | `number` (optional) |  Wait time to flush the logs to Baselime       |
| `flushAfterLogs`| `number` (optional) |  Threshold number of logs to flush   |
| `requestId`     | `string` (optional) |  Request ID   |
| `isLocalDev`    | `boolean` (optional)|  Indicates if it's for local development |

## Contributor Alumni

The Baselime Edge Logger was created for the [Baselime community](https://join.slack.com/t/baselimecommunity/shared_invite/zt-25rig7ul2-m06V0DdYWpFHu~qH3F7DhQ) and generously offered to Baselime by [Jacob Hands](https://github.com/jahands).

### Contributing

If you would like to contribute to the development of this library, please submit a pull request on GitHub.

### License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

<!-- Badges -->

[docs]: https://baselime.io/docs/
[docs_badge]: https://img.shields.io/badge/docs-reference-blue.svg?style=flat-square
[release]: https://github.com/baselime/edge-logger/releases/latest
[release_badge]: https://img.shields.io/github/release/baselime/edge-logger.svg?style=flat-square&ghcache=unused
[license]: https://opensource.org/licenses/MIT
[license_badge]: https://img.shields.io/github/license/baselime/edge-logger.svg?color=blue&style=flat-square&ghcache=unused
