# @cloudflare/streamline

`@cloudflare/streamline` provides the self-hosted Streamline session API and the
Cloudflare Durable Object base class that coordinates media sessions.

## Session Client

The client models a media pipeline as a session-ID-fenced session. It uses short
HTTP control requests; browser preview media remains on the relay WebSocket path.

```ts
import { createStreamline } from '@cloudflare/streamline/client'

const media = createStreamline({
  baseUrl: 'https://media.example',
})

const session = await media.sessions.create()
await session.start({
  input: { type: 'webcam' },
  pipeline: [
    { op: 'overlay', params: { image: '/app/assets/streamline-logo.png', position: 'top-right' } },
    { op: 'encode', params: { codec: 'h264', resolution: '1280x720' } },
  ],
  output: { mode: 'websocket' },
})

await session.ingest(webmChunk)
await session.annotation(pngBlob)
const metrics = await session.metrics()
await session.stop()
```

Self-hosted applications can supply a `fetcher` that forwards requests through a
Durable Object or Workers Service Binding. Authentication and application media
policy remain the responsibility of that application. The session client never
handles stream keys, relay capabilities, or Access service credentials.

## Durable Object Base

`StreamlineSessionDO` extends `Container` and owns the generic session lifecycle:

- Container readiness, expiry, and failed-start cleanup.
- Principal-bound session IDs and relay capabilities.
- Publisher and viewer WebSockets.
- Session-ID-fenced ingest, annotation, metrics, and stop requests.

The deployed Worker exports a concrete subclass for Wrangler registration. That
subclass supplies application-specific start policy and any app-owned routes. For
example, `streamline-demo` keeps `MediaContainer` as the deployed class while its
implementation inherits this package's `StreamlineSessionDO`.
Application routes run only after the base class has handled its session and relay
routes, so subclasses cannot override lifecycle or authorization checks.

Import `ContainerProxy` from `@cloudflare/streamline` alongside
`StreamlineSessionDO`. Both must use the same `@cloudflare/containers` module
instance so static outbound handlers are visible to the proxy.

## Development and Smoke Testing

Run the package contract tests:

```bash
cd packages/cloudflare
npm install
npm test
```

The package test suite installs the packed tarball in an isolated consumer before
release. After publishing, applications can install the released package with
their normal npm workflow.
