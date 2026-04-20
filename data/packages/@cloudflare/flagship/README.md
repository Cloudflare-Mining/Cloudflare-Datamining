# @cloudflare/flagship

[![npm version](https://img.shields.io/npm/v/@cloudflare/flagship.svg)](https://www.npmjs.com/package/@cloudflare/flagship)
[![npm downloads](https://img.shields.io/npm/dm/@cloudflare/flagship.svg)](https://www.npmjs.com/package/@cloudflare/flagship)
[![license](https://img.shields.io/npm/l/@cloudflare/flagship.svg)](https://github.com/cloudflare/flagship/blob/main/LICENSE)

[OpenFeature](https://openfeature.dev)-compliant provider SDK for [Flagship](https://github.com/cloudflare/flagship), Cloudflare's globally distributed, low-latency feature flag platform.

Server-side (Node.js, Cloudflare Workers) and client-side (browser) support via isolated sub-path exports. Tree-shakeable — importing `@cloudflare/flagship/server` never loads `@openfeature/web-sdk` and vice versa.

## Install

**Server-side** (Node.js, Cloudflare Workers):

```bash
npm install @cloudflare/flagship @openfeature/server-sdk
```

**Client-side** (browser):

```bash
npm install @cloudflare/flagship @openfeature/web-sdk
```

## Quick start — server

```typescript
import { OpenFeature } from '@openfeature/server-sdk';
import { FlagshipServerProvider } from '@cloudflare/flagship/server';

await OpenFeature.setProviderAndWait(
  new FlagshipServerProvider({ appId: 'your-app-id', accountId: 'your-account-id', authToken: 'your-token' }),
);

const client = OpenFeature.getClient();
const enabled = await client.getBooleanValue('dark-mode', false, { userId: 'user-123' });
```

## Quick start — Cloudflare Workers

The recommended approach for Cloudflare Workers. Uses a wrangler binding — no HTTP overhead, no auth tokens needed.

Configure in `wrangler.json`:

```jsonc
{
  "flagship": [{ "binding": "FLAGS", "app_id": "<your-app-id>" }]
}
```

```typescript
import { OpenFeature } from '@openfeature/server-sdk';
import { FlagshipServerProvider } from '@cloudflare/flagship/server';
import type { FlagshipBinding } from '@cloudflare/flagship/server';

export default {
  async fetch(request: Request, env: { FLAGS: FlagshipBinding }): Promise<Response> {
    await OpenFeature.setProviderAndWait(new FlagshipServerProvider({ binding: env.FLAGS }));

    const client = OpenFeature.getClient();
    const darkMode = await client.getBooleanValue('dark-mode', false, {
      targetingKey: new URL(request.url).searchParams.get('userId') ?? 'anonymous',
    });

    return Response.json({ darkMode });
  },
};
```

## Quick start — HTTP

For Workers without a Flagship binding, or non-Workers server environments:

```typescript
import { OpenFeature } from '@openfeature/server-sdk';
import { FlagshipServerProvider } from '@cloudflare/flagship/server';

let initialized = false;

export default {
  async fetch(request: Request): Promise<Response> {
    if (!initialized) {
      await OpenFeature.setProviderAndWait(
        new FlagshipServerProvider({ appId: 'your-app-id', accountId: 'your-account-id', authToken: 'your-token' }),
      );
      initialized = true;
    }

    const client = OpenFeature.getClient();
    const darkMode = await client.getBooleanValue('dark-mode', false, {
      userId: new URL(request.url).searchParams.get('userId') ?? 'anonymous',
    });

    return Response.json({ darkMode });
  },
};
```

## Quick start — browser

```typescript
import { OpenFeature } from '@openfeature/web-sdk';
import { FlagshipClientProvider } from '@cloudflare/flagship/web';

await OpenFeature.setProviderAndWait(
  new FlagshipClientProvider({
    appId: 'your-app-id',
    accountId: 'your-account-id',
    authToken: 'your-token',
    prefetchFlags: ['dark-mode', 'welcome-message'],
  }),
);

await OpenFeature.setContext({ userId: 'user-123', plan: 'premium' });

const client = OpenFeature.getClient();
const darkMode = client.getBooleanValue('dark-mode', false);
```

## Features

| Feature               | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| OpenFeature compliant | Implements the CNCF OpenFeature specification                                |
| Workers binding       | Native wrangler binding support — zero HTTP overhead, no auth tokens         |
| Server + client       | Async per-request (server) and sync cache-based (browser) providers          |
| Server providers      | `FlagshipServerProvider` works via HTTP or wrangler binding                  |
| All flag types        | Boolean, string, number, and object (JSON)                                   |
| Authentication        | `authToken` option adds `Authorization: Bearer` to every request (HTTP only) |
| Logging               | `logging` option surfaces fetch errors and cache misses (off by default)     |
| Retries + timeouts    | Configurable retry logic with `AbortController`-based timeouts (HTTP only)   |
| Hooks                 | Built-in `LoggingHook` and `TelemetryHook`                                   |
| Tree-shakeable        | Server and client bundles are fully isolated                                 |
| TypeScript            | Strict types throughout                                                      |

## Packages

| Export                        | Description                      | Peer dependency           |
| ----------------------------- | -------------------------------- | ------------------------- |
| `@cloudflare/flagship`        | Core client, types, errors       | None                      |
| `@cloudflare/flagship/server` | `FlagshipServerProvider` + hooks | `@openfeature/server-sdk` |
| `@cloudflare/flagship/web`    | `FlagshipClientProvider`         | `@openfeature/web-sdk`    |

## Documentation

- [API reference](../../docs/API.md)
- [OpenFeature specification](https://openfeature.dev/specification/)
- [Examples](./examples/)

## Development

```bash
pnpm install         # install dependencies
pnpm run dev         # watch mode
pnpm run test        # run tests
pnpm run build       # build for distribution
```

## Contributing

Contributions are welcome. Please open an issue first to discuss what you'd like to change. See the [repository](https://github.com/cloudflare/flagship) for more details.

## License

[Apache-2.0](../../LICENSE)
