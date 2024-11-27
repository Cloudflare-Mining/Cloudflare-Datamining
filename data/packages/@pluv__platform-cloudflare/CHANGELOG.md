# @pluv/platform-cloudflare

## 0.32.9

### Patch Changes

- @pluv/io@0.32.9
- @pluv/persistence-cloudflare-transactional-storage@0.32.9
- @pluv/types@0.32.9

## 0.32.8

### Patch Changes

- Updated dependencies [e659f8a]
  - @pluv/io@0.32.8
  - @pluv/persistence-cloudflare-transactional-storage@0.32.8
  - @pluv/types@0.32.8

## 0.32.7

### Patch Changes

- @pluv/io@0.32.7
- @pluv/persistence-cloudflare-transactional-storage@0.32.7
- @pluv/types@0.32.7

## 0.32.6

### Patch Changes

- Updated dependencies [c0956e7]
  - @pluv/io@0.32.6
  - @pluv/persistence-cloudflare-transactional-storage@0.32.6
  - @pluv/types@0.32.6

## 0.32.5

### Patch Changes

- 98d7585: Update `meta` type on platform contexts to allow for nested json types.
  - @pluv/io@0.32.5
  - @pluv/persistence-cloudflare-transactional-storage@0.32.5
  - @pluv/types@0.32.5

## 0.32.4

### Patch Changes

- fd054db: Add support for adding metadata to context when creating a room.

  ```ts
  import { createIO } from "@pluv/io";

  // If using Cloudflare
  import { platformCloudflare } from "@pluv/platform-cloudflare";

  const io = createIO({
    // ...
    platform: platformCloudflare<CloudflareEnv, { myCustomData: string }>(),
    context: ({
      env,
      state,
      // This is now available on the context function
      meta,
    }) => ({ env, state, meta }),
  });

  const ioServer = io.server();

  ioServer.createRoom("my-room", {
    // ...
    // This will now be a required property when creating a room
    meta: { myCustomData: "hello world" },
  });

  // If using Node.js
  import { platformNode } from "@pluv/platform-node";

  const io = createIO({
    // ...
    platform: platformNode<{ myCustomData: string }>(),
    context: ({
      // This is now available on the context function
      meta,
    }) => ({ env, state, meta }),
  });

  const ioServer = io.server();

  ioServer.createRoom("my-room", {
    // ...
    // This will now be a required property when creating a room
    meta: { myCustomData: "hello world" },
  });
  ```

  - @pluv/io@0.32.4
  - @pluv/persistence-cloudflare-transactional-storage@0.32.4
  - @pluv/types@0.32.4

## 0.32.3

### Patch Changes

- Updated dependencies [bb21274]
  - @pluv/io@0.32.3
  - @pluv/persistence-cloudflare-transactional-storage@0.32.3
  - @pluv/types@0.32.3

## 0.32.2

### Patch Changes

- Updated dependencies [890d45b]
  - @pluv/io@0.32.2
  - @pluv/persistence-cloudflare-transactional-storage@0.32.2
  - @pluv/types@0.32.2

## 0.32.1

### Patch Changes

- @pluv/io@0.32.1
- @pluv/persistence-cloudflare-transactional-storage@0.32.1
- @pluv/types@0.32.1

## 0.32.0

### Patch Changes

- Updated dependencies [cde5305]
  - @pluv/io@0.32.0
  - @pluv/persistence-cloudflare-transactional-storage@0.32.0
  - @pluv/types@0.32.0

## 0.31.0

### Minor Changes

- b3c31d7: **BREAKING**

  Fixed platform context types. This will require additional properties when registering a websocket and creating authorization tokens. See example below:

  ```ts
  // @pluv/platform-node example

  import { platformNode } from "@pluv/platform-node";
  import { createIO } from "@pluv/io";
  import type { IncomingMessage } from "node:http";
  import { z } from "zod";

  const io = createIO({
      // If using a function authorize parameter, `req` is now available as a param
      authorize: ({ req }) => ({
          required: true,
          secret: "MY-CUSTOM-SECRET",
          user: z.object({
              id: z.string(),
          }),
      }),
      platformNode(),
  });

  // Before
  io.createToken({
      room: "my-custom-room",
      user: { id: "abc123" },
  });

  // After
  io.createToken({
      room: "my-custom-room",
      user: { id: "abc123" },

      // Previously not required, but now required
      req: req as IncomingMessage,
  });
  ```

  ```ts
  // @pluv/platform-cloudflare example

  import { platformCloudflare } from "@pluv/platform-cloudflare";
  import { createIO } from "@pluv/io";
  import { z } from "zod";

  const io = createIO({
      // If using a function authorize parameter, `env` and `request` are now available as params
      authorize: ({ env, request }) => ({
          required: true,
          secret: "MY-CUSTOM-SECRET",
          user: z.object({
              id: z.string(),
          }),
      }),
      platformCloudflare(),
  });

  // Before
  io.createToken({
      room: "my-custom-room",
      user: { id: "abc123" },
  });

  // After
  io.createToken({
      room: "my-custom-room",
      user: { id: "abc123" },

      // Previously not required, but now required
      env: env as Env,
      request: request as Request,
  });
  ```

- 0f98064: **BREAKING**

  Update `authorize` params so that `roomId` is renamed to `room` and more platform-specific parameters are exposed. See example below:

  ```ts
  // @pluv/platform-cloudflare example
  import { createPluvHandler } from "@pluv/platform-cloudflare";

  // Before
  createPluvHandler({
    // ...
    authorize: ({ roomId }) => {
      // ...
    },
  });

  // After
  createPluvHandler({
    // ...
    authorize: ({ env, request, room }) => {
      // ...
    },
  });
  ```

  ```ts
  // @pluv/platform-node example
  import { createPluvHandler } from "@pluv/platform-node";

  // Before
  createPluvHandler({
    // ...
    authorize: ({ roomId }) => {
      // ...
    },
  });

  // After
  createPluvHandler({
    // ...
    authorize: ({ req, room }) => {
      // ...
    },
  });
  ```

### Patch Changes

- Updated dependencies [b3c31d7]
  - @pluv/io@0.31.0
  - @pluv/persistence-cloudflare-transactional-storage@0.31.0
  - @pluv/types@0.31.0

## 0.30.2

### Patch Changes

- 6521b05: Export the types of `NodePlatform` and `CloudflarePlatform`.
  - @pluv/io@0.30.2
  - @pluv/persistence-cloudflare-transactional-storage@0.30.2
  - @pluv/types@0.30.2

## 0.30.1

### Patch Changes

- Updated dependencies [b9c3633]
  - @pluv/io@0.30.1
  - @pluv/persistence-cloudflare-transactional-storage@0.30.1
  - @pluv/types@0.30.1

## 0.30.0

### Patch Changes

- Updated dependencies [7246a9e]
  - @pluv/io@0.30.0
  - @pluv/persistence-cloudflare-transactional-storage@0.30.0
  - @pluv/types@0.30.0

## 0.29.0

### Patch Changes

- @pluv/io@0.29.0
- @pluv/persistence-cloudflare-transactional-storage@0.29.0
- @pluv/types@0.29.0

## 0.28.0

### Patch Changes

- @pluv/io@0.28.0
- @pluv/persistence-cloudflare-transactional-storage@0.28.0
- @pluv/types@0.28.0

## 0.27.0

### Patch Changes

- Updated dependencies [19ed36c]
- Updated dependencies [e309b0b]
  - @pluv/io@0.27.0
  - @pluv/persistence-cloudflare-transactional-storage@0.27.0
  - @pluv/types@0.27.0

## 0.26.0

### Patch Changes

- 2a6e078: Updated `@pluv/platform-cloudflare` and `@pluv/platform-node` so that exact properties are used in its initialization.
  - @pluv/io@0.26.0
  - @pluv/persistence-cloudflare-transactional-storage@0.26.0
  - @pluv/types@0.26.0

## 0.25.4

### Patch Changes

- Updated dependencies [7a9080c]
  - @pluv/io@0.25.4
  - @pluv/persistence-cloudflare-transactional-storage@0.25.4
  - @pluv/types@0.25.4

## 0.25.3

### Patch Changes

- Updated dependencies [50d9b96]
  - @pluv/io@0.25.3
  - @pluv/persistence-cloudflare-transactional-storage@0.25.3
  - @pluv/types@0.25.3

## 0.25.2

### Patch Changes

- Updated dependencies [60a0bf1]
  - @pluv/io@0.25.2
  - @pluv/persistence-cloudflare-transactional-storage@0.25.2
  - @pluv/types@0.25.2

## 0.25.1

### Patch Changes

- Updated dependencies [3925f7c]
  - @pluv/io@0.25.1
  - @pluv/persistence-cloudflare-transactional-storage@0.25.1
  - @pluv/types@0.25.1

## 0.25.0

### Minor Changes

- 9db06ba: **BREAKING **

  Fixed typos `persistance` to `persistence`.

  This does mean that all properties referencing `persistance` will need to be fixed. Examples below:

  ```bash
  # Re-install @pluv/persistence-redis
  pnpm uninstall @pluv/persistance-redis
  pnpm install @pluv/persistence-redis
  ```

  ```ts
  // Before
  createIO({
    platform: platformNode({
      persistance: new PersistanceRedis(/* ... */),
    }),
  });

  // After
  createIO({
    platform: platformNode({
      persistence: new PersistenceRedis(/* ... */),
    }),
  });
  ```

  `@pluv/persistance-redis` has been deprecated for `@pluv/persistence-redis`.

### Patch Changes

- Updated dependencies [9db06ba]
- Updated dependencies [4e078ca]
- Updated dependencies [f556d30]
- Updated dependencies [9db06ba]
  - @pluv/persistence-cloudflare-transactional-storage@0.25.0
  - @pluv/io@0.25.0
  - @pluv/types@0.25.0

## 0.24.1

### Patch Changes

- @pluv/io@0.24.1
- @pluv/types@0.24.1

## 0.24.0

### Patch Changes

- Updated dependencies [6ac8a46]
- Updated dependencies [c26986d]
  - @pluv/io@0.24.0
  - @pluv/types@0.24.0

## 0.23.0

### Patch Changes

- Updated dependencies [c01b16f]
  - @pluv/io@0.23.0
  - @pluv/types@0.23.0

## 0.22.0

### Minor Changes

- 650e577: \* Fix `@pluv/platform-cloudflare` causing frequent disconnects due to incorrect heartbeat handling.
  - Updated default `mode` of `@pluv/platform-cloudflare` back to `"detached"` (i.e. use Cloudflare Worker Hibernation API by default).

### Patch Changes

- Updated dependencies [650e577]
  - @pluv/io@0.22.0
  - @pluv/types@0.22.0

## 0.21.1

### Patch Changes

- ba53e7a: Revert `@platform/cloudflare` mode to `attached` from `detached` temporarily.
  - @pluv/io@0.21.1
  - @pluv/types@0.21.1

## 0.21.0

### Minor Changes

- 307bd44: `@pluv/platform-cloudflare` now supports Cloudflare Worker's WebSocket Hibernation API, and usees it by default.

  To switch back to not using the WebSocket Hibernation API, specify a `mode` of `attached`.

  ```ts
  // With event-listeners directly attached to the websocket on registration (i.e. non-hibernation)
  createIO({
    platform: platformCloudflare({
      mode: "attached",
    }),
  });

  // With event listeners unattached to the websocket during registration (i.e. hibernation)
  createIO({
    platform: platformCloudflare({
      mode: "detached",
    }),
  });
  ```

- 41b15e4: **BREAKING** - Updated `sessions` type in the procedure context from `Map<string, WebSocketSession>` to `readonly WebSocketSession[]`.
- f570c8a: **BREAKING**: The original request object is no longer available in the context of any event resolvers.

  Previously, the request object that was passed into `PluvServer.getRoom` would be made available on the context object of each of the resolvers. This is no-longer a part of the event context, and therefore needs to be omitted from calls to `PluvServer.getRoom`.

  ```ts
  // Before

  // With platform-node
  ioServer.getRoom(websocket, { req, token });

  // With platform-cloudflare
  ioServer.getRoom(websocket, { env, req, token });
  ```

  ```ts
  // Now

  // With platform-node
  ioServer.getRoom(websocket, { req });

  // With platform-cloudflare
  ioServer.getRoom(websocket, { env, req });
  ```

- b98ab6b: Internal updates to platforms (i.e. `@pluv/platform-cloudflare` and `@pluv/platform-node`) to be able to support Cloudflare Worker Websocket Hibernation APIs.
- 4c2228d: **BREAKING**: Require `DurableObjectState` in `ioServer.getRoom`.

  ```ts
  // Before

  // With platform-cloudflare
  ioServer.getRoom(websocket, { env, req });
  ```

  ```ts
  // Now

  // With platform-cloudflare
  ioServer.getRoom(websocket, { env, req, state });
  ```

### Patch Changes

- cc2613e: Moved `sessionId` from being derived in `IORoom` to being derived as a getter in `AbstractWebsocket`.
- Updated dependencies [307bd44]
- Updated dependencies [41b15e4]
- Updated dependencies [f570c8a]
- Updated dependencies [b98ab6b]
- Updated dependencies [4c2228d]
- Updated dependencies [cc2613e]
  - @pluv/io@0.21.0
  - @pluv/types@0.21.0

## 0.20.0

### Patch Changes

- @pluv/io@0.20.0
- @pluv/types@0.20.0

## 0.19.0

### Patch Changes

- @pluv/io@0.19.0
- @pluv/types@0.19.0

## 0.18.0

### Minor Changes

- 99b5ca9: ## Breaking Changes

  - `@pluv/io` has been updated to introduce `PluvProcedure`, `PluvRouter` and `PluvServer`. This change is intended to improve the ergonomics of declaring events and simplifying inferences of event types.

  ### Before:

  ```ts
  // backend/io.ts

  import { createIO } from "@pluv/io";
  import { createPluvHandler, platformNode } from "@pluv/platform-node";
  import { z } from "zod";

  export const io = createIO({
    platform: platformNode(),
  })
    .event("SEND_MESSAGE", {
      input: z.object({ message: z.string() }),
      resolver: ({ message }) => ({ RECEIVE_MESSAGE: { message } }),
    })
    .event("DOUBLE_VALUE", {
      input: z.object({ value: z.number() }),
      resolver: ({ value }) => ({ VALUE_DOUBLED: { value: value * 2 } }),
    });

  const Pluv = createPluvHandler({
    io,
    /* ... */
  });
  ```

  ```ts
  // frontend/pluv.ts

  import { createClient } from "@pluv/react";
  import type { io } from "../backend/io";

  const client = createClient<typeof io>({
    /* ... */
  });
  ```

  ### Now:

  ```ts
  import { createIO } from "@pluv/io";
  import { createPluvHandler, platformNode } from "@pluv/platform-node";
  import { z } from "zod";

  const io = createIO({
    platform: platformNode(),
  });

  const router = io.router({
    SEND_MESSAGE: io.procedure
      .input(z.object({ message: z.string() }))
      .broadcast(({ message }) => ({
        RECEIVE_MESSAGE: { message },
      })),
    DOUBLE_VALUE: io.procedure
      .input(z.object({ value: z.number() }))
      .broadcast(({ value }) => ({
        VALUE_DOUBLED: { value: value * 2 },
      })),
  });

  export const ioServer = io.server({ router });

  const Pluv = createPluvHandler({
    io: ioServer, // <- This uses the PluvServer now
    /* ... */
  });
  ```

  ```ts
  // frontend/pluv.ts

  import { createClient } from "@pluv/react";
  import type { ioServer } from "../backend/io";

  // This users the PluvServer type now
  const client = createClient<typeof ioServer>({
    /* ... */
  });
  ```

  - `PluvRouter` instances can also be merged via the `mergeRouters` method, which effectively performs an `Object.assign` of the events object and returns a new `PluvRouter` with the correct types:

  ```ts
  const router = io.mergeRouters(router1, router2);
  ```

### Patch Changes

- Updated dependencies [428c21c]
- Updated dependencies [329dbcd]
- Updated dependencies [99b5ca9]
  - @pluv/io@0.18.0
  - @pluv/types@0.18.0

## 0.17.3

### Patch Changes

- @pluv/io@0.17.3
- @pluv/types@0.17.3

## 0.17.2

### Patch Changes

- @pluv/io@0.17.2
- @pluv/types@0.17.2

## 0.17.1

### Patch Changes

- @pluv/io@0.17.1
- @pluv/types@0.17.1

## 0.17.0

### Minor Changes

- 507bc00: _BREAKING_: The `authorize` config when calling `createIO` can now also be a function that exposes the platform context.
  This allows accessing the `env` in Cloudflare workers.

  ```ts
  import { createIO } from "@pluv/io";
  import { platformCloudflare } from "@pluv/platform-cloudflare";
  import { z } from "zod";

  const io = createIO({
    authorize: ({ env }) => ({
      required: true,
      secret: env.PLUV_AUTHORIZE_SECRET,
      user: z.object({
        id: z.string(),
        name: z.string(),
      }),
    }),
    platform: platformCloudflare<{ PLUV_AUTHORIZE_SECRET: string }>(),
    // ...
  });
  ```

  This also requires that the platform contexts are passed to `io.createToken`.

  ```ts
  // If using `platformNode`
  await io.createToken({
    req, // This `IncomingMessage` is now required
    room,
    user: {
      id: "user_123",
      name: "john doe",
    },
  });

  // If using `platformCloudflare`
  await io.createToken({
    env, // This env is now required from the handler's fetch function
    room,
    user: {
      id: "user_123",
      name: "john doe",
    },
  });
  ```

### Patch Changes

- Updated dependencies [507bc00]
  - @pluv/types@0.17.0
  - @pluv/io@0.17.0

## 0.16.3

### Patch Changes

- Updated dependencies [0bf0934]
  - @pluv/io@0.16.3
  - @pluv/types@0.16.3

## 0.16.2

### Patch Changes

- Updated dependencies [06f572d]
  - @pluv/io@0.16.2
  - @pluv/types@0.16.2

## 0.16.1

### Patch Changes

- Updated dependencies [cd05d96]
  - @pluv/io@0.16.1
  - @pluv/types@0.16.1

## 0.16.0

### Patch Changes

- Updated dependencies [4280220]
  - @pluv/io@0.16.0
  - @pluv/types@0.16.0

## 0.15.0

### Patch Changes

- @pluv/io@0.15.0
- @pluv/types@0.15.0

## 0.14.1

### Patch Changes

- @pluv/io@0.14.1
- @pluv/types@0.14.1

## 0.14.0

### Patch Changes

- @pluv/io@0.14.0
- @pluv/types@0.14.0

## 0.13.0

### Patch Changes

- @pluv/io@0.13.0
- @pluv/types@0.13.0

## 0.12.3

### Patch Changes

- da9f600: Upgraded dependencies
- Updated dependencies [da9f600]
  - @pluv/io@0.12.3
  - @pluv/types@0.12.3

## 0.12.2

### Patch Changes

- 259a7da: Bumped dependencies

## 0.12.1

### Patch Changes

- @pluv/io@0.12.1
- @pluv/types@0.12.1

## 0.12.0

### Patch Changes

- @pluv/io@0.12.0
- @pluv/types@0.12.0

## 0.11.1

### Patch Changes

- 74b3061: Bumped minor and patch dependencies.
- Updated dependencies [74b3061]
  - @pluv/io@0.11.1
  - @pluv/types@0.11.1

## 0.11.0

### Patch Changes

- Updated dependencies [b538f5c]
  - @pluv/io@0.11.0
  - @pluv/types@0.11.0

## 0.10.3

### Patch Changes

- Updated dependencies [a7d3ad1]
  - @pluv/io@0.10.3
  - @pluv/types@0.10.3

## 0.10.2

### Patch Changes

- Updated dependencies [3deee13]
  - @pluv/io@0.10.2
  - @pluv/types@0.10.2

## 0.10.1

### Patch Changes

- 0eeb67c: Passed through sessionId and userId into platform websockets.
- 885835d: remove unnecessary dependency
- Updated dependencies [0eeb67c]
- Updated dependencies [885835d]
  - @pluv/io@0.10.1
  - @pluv/types@0.10.1

## 0.10.0

### Minor Changes

- f43f1cc: Change packages to all be versioned together for consistency.

### Patch Changes

- Updated dependencies [f43f1cc]
  - @pluv/io@0.10.0
  - @pluv/types@0.10.0

## 0.3.4

### Patch Changes

- @pluv/io@0.7.2

## 0.3.3

### Patch Changes

- 8fba48b: fix including incorrect dependency
- 8997c65: bumped dependencies
- Updated dependencies [8fba48b]
- Updated dependencies [8997c65]
  - @pluv/types@0.2.2
  - @pluv/io@0.7.1

## 0.3.2

### Patch Changes

- 8d11672: bumped dependencies to latest
- Updated dependencies [8d11672]
- Updated dependencies [829d31b]
  - @pluv/types@0.2.1
  - @pluv/io@0.7.0

## 0.3.1

### Patch Changes

- Updated dependencies [2e7cbfa]
  - @pluv/io@0.6.0

## 0.3.0

### Minor Changes

- ae4e1f1: added platform-specific contexts to expose env in cloudflare and req in node.js

### Patch Changes

- Updated dependencies [ae4e1f1]
  - @pluv/io@0.5.0

## 0.2.1

### Patch Changes

- Updated dependencies [8917309]
  - @pluv/io@0.4.2

## 0.2.0

### Minor Changes

- 643d5b5: added createPluvHandler to automatically set-up a pluv server with reasonable defaults

### Patch Changes

- b85a232: bumped dependencies
- fde89cf: added defaults to the client to align it with createPluvClient by default
- Updated dependencies [b85a232]
  - @pluv/io@0.4.1
  - @pluv/types@0.2.0

## 0.1.18

### Patch Changes

- Updated dependencies [41943cf]
- Updated dependencies [0dd847e]
- Updated dependencies [bb2886b]
- Updated dependencies [ae679a8]
- Updated dependencies [3518a83]
  - @pluv/io@0.4.0
  - @pluv/types@0.2.0

## 0.1.17

### Patch Changes

- Updated dependencies [abb3622]
  - @pluv/io@0.3.9

## 0.1.16

### Patch Changes

- Updated dependencies [bcf1c3e]
  - @pluv/io@0.3.8

## 0.1.15

### Patch Changes

- Updated dependencies [ecc4040]
  - @pluv/io@0.3.7

## 0.1.14

### Patch Changes

- Updated dependencies [a7e2980]
  - @pluv/io@0.3.6

## 0.1.13

### Patch Changes

- 78fd644: updated readmes with links to the documentation website
- Updated dependencies [78fd644]
  - @pluv/io@0.3.5

## 0.1.12

### Patch Changes

- 850626e: bumped dependencies
- Updated dependencies [850626e]
  - @pluv/types@0.1.6
  - @pluv/io@0.3.4

## 0.1.11

### Patch Changes

- Updated dependencies [77069a1]
  - @pluv/io@0.3.3
  - @pluv/types@0.1.5

## 0.1.10

### Patch Changes

- Updated dependencies [9ae251d]
  - @pluv/io@0.3.2

## 0.1.9

### Patch Changes

- 74870ee: bumped dependencies
- Updated dependencies [74870ee]
  - @pluv/types@0.1.5
  - @pluv/io@0.3.1

## 0.1.8

### Patch Changes

- Updated dependencies [c5567f1]
- Updated dependencies [c5567f1]
  - @pluv/io@0.3.0
  - @pluv/types@0.1.4

## 0.1.7

### Patch Changes

- 9516a4e: updated typescript to 5.0
- 7b6da1c: bumped dependencies
- e9c1514: bumped dependencies
- 9d1829c: chore: bumped dependencies
- Updated dependencies [9516a4e]
- Updated dependencies [7b6da1c]
- Updated dependencies [e9c1514]
- Updated dependencies [9d1829c]
  - @pluv/types@0.1.4
  - @pluv/io@0.2.6

## 0.1.6

### Patch Changes

- 161e00e: fixed links to other pluv packages in readmes
- Updated dependencies [161e00e]
- Updated dependencies [f6c0e65]
  - @pluv/io@0.2.5
  - @pluv/types@0.1.3

## 0.1.5

### Patch Changes

- 8bf62cb: bumped dependencies
- 7e52685: Bumped dependencies
- d6dd1c3: updated dependencies
- 8e97fb2: Updated dependencies
- Updated dependencies [8bf62cb]
- Updated dependencies [7e52685]
- Updated dependencies [3b7b17a]
- Updated dependencies [b1cb325]
- Updated dependencies [8e97fb2]
  - @pluv/io@0.2.4
  - @pluv/types@0.1.3

## 0.1.4

### Patch Changes

- Updated dependencies [95b5ef8]
- Updated dependencies [e23fbbe]
  - @pluv/io@0.2.3
  - @pluv/types@0.1.2

## 0.1.3

### Patch Changes

- fe80d7b: added preview disclaimer about breaking changes in the readme
- Updated dependencies [fe80d7b]
  - @pluv/io@0.2.2
  - @pluv/types@0.1.2

## 0.1.2

### Patch Changes

- Updated dependencies [b45d642]
- Updated dependencies [203dfee]
  - @pluv/io@0.2.1

## 0.1.1

### Patch Changes

- 24016e6: Updated dependencies
- Updated dependencies [23a7382]
- Updated dependencies [39271d4]
- Updated dependencies [24016e6]
  - @pluv/io@0.2.0
  - @pluv/types@0.1.1

## 0.1.0

### Minor Changes

- a22f525: Added documentation

### Patch Changes

- Updated dependencies [a22f525]
  - @pluv/io@0.1.0
  - @pluv/types@0.1.0
