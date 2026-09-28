# RealtimeKit Proto Entities

Protocol Buffer types for Cloudflare RealtimeKit, published for TypeScript and Kotlin Multiplatform.

## TypeScript

Install the package from the public npm registry:

```bash
npm install @cloudflare/realtimekit-proto-entities
```

Import browser-safe message types from the default entrypoint:

```ts
import { BaseHubMessage } from "@cloudflare/realtimekit-proto-entities";
```

Node.js consumers can import gRPC clients and servers from the Node entrypoint:

```ts
import type { IWorkerClient } from "@cloudflare/realtimekit-proto-entities/node";
```

Consumers migrating from `@dyteinternals/proto-entities` only need to update the package name and import paths. The generated JavaScript, declarations, and public entrypoints remain compatible.

## Kotlin Multiplatform

Use the Maven Central coordinates:

```text
com.cloudflare.realtimekit:proto-entities:<version>
```

The package supports JVM, Linux, and iOS targets and contains message types only.

## Development

```bash
npm ci
npm run lint
npm run build

cd kotlin
./gradlew build
```

## License

Apache License 2.0. See [`LICENSE`](./LICENSE).
