# firebase-auth-cloudflare-workers

**Zero-dependencies** firebase auth library for Cloudflare Workers.

- Implemented by only Web Standard API.
- Supported UTF-8.
- Supported Firebase Auth Emulator.

## Synopsis

```ts
import type { EmulatorEnv } from "firebase-auth-cloudflare-workers";
import { Auth, WorkersKVStoreSingle } from "firebase-auth-cloudflare-workers";

interface Bindings extends EmulatorEnv {
  PROJECT_ID: string
  PUBLIC_JWK_CACHE_KEY: string
  PUBLIC_JWK_CACHE_KV: KVNamespace
  FIREBASE_AUTH_EMULATOR_HOST: string
}

const verifyJWT = async (req: Request, env: Bindings): Promise<Response> => {
  const authorization = req.headers.get('Authorization')
  if (authorization === null) {
    return new Response(null, {
      status: 400,
    })
  }
  const jwt = authorization.replace(/Bearer\s+/i, "")
  const auth = Auth.getOrInitialize(
    env.PROJECT_ID,
    WorkersKVStoreSingle.getOrInitialize(env.PUBLIC_JWK_CACHE_KEY, env.PUBLIC_JWK_CACHE_KV)
  )
  const firebaseToken = await auth.verifyIdToken(jwt, env)

  return new Response(JSON.stringify(firebaseToken), {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
```

### wrangler.toml

```toml
name = "firebase-auth-example"
compatibility_date = "2022-07-05"
workers_dev = true

[vars]
FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099"
PROJECT_ID = "example-project12345"

# Specify cache key to store and get public jwk.
PUBLIC_JWK_CACHE_KEY = "public-jwk-cache-key"

[[kv_namespaces]]
binding = "PUBLIC_JWK_CACHE_KV"
id = ""
preview_id = "testingId"
```

### Module Worker syntax

```ts
export async function fetch(req: Request, env: Bindings) {
  return await verifyJWT(req, env)
}

export default { fetch };
```

### Service Worker syntax

```ts
declare global {
  const PROJECT_ID: string
  const PUBLIC_JWK_CACHE_KEY: string
  const PUBLIC_JWK_CACHE_KV: KVNamespace
  const FIREBASE_AUTH_EMULATOR_HOST: string
}

addEventListener('fetch', (event: FetchEvent) => {
  // Create env object for verifyIdToken API.
  const bindings: EmulatorEnv = {
    PROJECT_ID,
    PUBLIC_JWK_CACHE_KEY,
    PUBLIC_JWK_CACHE_KV,
    FIREBASE_AUTH_EMULATOR_HOST,
  }
  event.respondWith(verifyJWT(event.request, bindings))
})
```

## Install

You can install from npm registry.

```
$ npm i firebase-auth-cloudflare-workers
```

## Docs

- [API](#api)
- [Type](#type)
- [Run example code](#run-example-code)
- [Todo](#todo)

## API

### `Auth.getOrInitialize(projectId: string, keyStore: KeyStorer, credential?: Credential): Auth`

Auth is created as a singleton object. This is because the Module Worker syntax only use environment variables at the time of request.

- `projectId` specifies the ID of the project for which firebase auth is used.
- `keyStore` is used to cache the public key used to validate the Firebase ID token (JWT).
- `credential` is an optional. This is used to utilize Admin APIs such as `createSessionCookie`. Currently, you can specify `ServiceAccountCredential` class, which allows you to use a service account.

See official document for project ID: https://firebase.google.com/docs/projects/learn-more#project-identifiers

### `authObj.verifyIdToken(idToken: string, checkRevoked?: boolean, env?: EmulatorEnv): Promise<FirebaseIdToken>`

Verifies a Firebase ID token (JWT). If the token is valid, the promise is fulfilled with the token's decoded claims; otherwise, the promise is rejected.

See the [ID Token section of the OpenID Connect spec](http://openid.net/specs/openid-connect-core-1_0.html#IDToken) for more information about the specific properties below.

- `idToken` The ID token to verify.
- `checkRevoked` -  Whether to check if the session cookie was revoked. This requires an extra request to the Firebase Auth backend to check the `tokensValidAfterTime` time for the corresponding user. When not specified, this additional check is not performed.
- `env` is an optional parameter. but this is using to detect should use emulator or not.

### `authObj.verifySessionCookie(sessionCookie: string, checkRevoked?: boolean, env?: EmulatorEnv): Promise<FirebaseIdToken>`

Verifies a Firebase session cookie. Returns a Promise with the cookie claims. Rejects the promise if the cookie could not be verified.

See [Verify Session Cookies](https://firebase.google.com/docs/auth/admin/manage-cookies#verify_session_cookie_and_check_permissions) for code samples and detailed documentation.

- `sessionCookie` The session cookie to verify.
- `checkRevoked` -  Whether to check if the session cookie was revoked. This requires an extra request to the Firebase Auth backend to check the `tokensValidAfterTime` time for the corresponding user. When not specified, this additional check is not performed.
- `env` is an optional parameter. but this is using to detect should use emulator or not.

### `authObj.createSessionCookie(idToken: string, sessionCookieOptions: SessionCookieOptions, env?: EmulatorEnv): Promise<string>`

Creates a new Firebase session cookie with the specified options. The created JWT string can be set as a server-side session cookie with a custom cookie policy, and be used for session management. The session cookie JWT will have the same payload claims as the provided ID token. See [Manage Session Cookies](https://firebase.google.com/docs/auth/admin/manage-cookies) for code samples and detailed documentation.

- `idToken` The Firebase ID token to exchange for a session cookie.
- `sessionCookieOptions` The session cookie options which includes custom session duration.
- `env` is an optional parameter. but this is using to detect should use emulator or not.

**Required** service acccount credential to use this API. You need to set the credentials with `Auth.getOrInitialize`.

### `authObj.getUser(uid: string, env?: EmulatorEnv): Promise<UserRecord>`

Gets the user data for the user corresponding to a given `uid`.

- `uid` corresponding to the user whose data to fetch.
- `env` is an optional parameter. but this is using to detect should use emulator or not.

### `authObj.revokeRefreshTokens(uid: string, env?: EmulatorEnv): Promise<void>`

Revokes all refresh tokens for an existing user.

-  `uid` corresponding to the user whose refresh tokens are to be revoked.
- `env` is an optional parameter. but this is using to detect should use emulator or not.

### `authObj.setCustomUserClaims(uid: string, customUserClaims: object | null, env?: EmulatorEnv): Promise<void>`

Sets additional developer claims on an existing user identified by the provided `uid`, typically used to define user roles and levels of access. These claims should propagate to all devices where the user is already signed in (after token expiration or when token refresh is forced) and the next time the user signs in. If a reserved OIDC claim name is used (sub, iat, iss, etc), an error is thrown. They are set on the authenticated user's ID token JWT.

- `uid` - The `uid` of the user to edit.
- `customUserClaims` The developer claims to set. If null is passed, existing custom claims are deleted. Passing a custom claims payload larger than 1000 bytes will throw an error. Custom claims are added to the user's ID token which is transmitted on every authenticated request. For profile non-access related user attributes, use database or other separate storage systems.
- `env` is an optional parameter. but this is using to detect should use emulator or not.

### `WorkersKVStoreSingle.getOrInitialize(cacheKey: string, cfKVNamespace: KVNamespace): WorkersKVStoreSingle`

WorkersKVStoreSingle is created as a singleton object. This is because the Module Worker syntax only use environment variables at the time of request.

This caches the public key used to verify the Firebase ID token in the [Workers KV](https://developers.cloudflare.com/workers/runtime-apis/kv/).

This is implemented `KeyStorer` interface.

- `cacheKey` specifies the key of the public key cache.
- `cfKVNamespace` specifies the KV namespace which is bound your workers.

### `AdminAuthApiClient.getOrInitialize(projectId: string, credential: Credential, retryConfig?: RetryConfig): AdminAuthApiClient`

AdminAuthApiClient is created as a singleton object. This is because the Module Worker syntax only use environment variables at the time of request.

You can send request with the [Admin Auth API](https://cloud.google.com/identity-platform/docs/reference/rest). To generate an access token, you will use the `Credential` class. For instance, if you want to generate an access token from a Service Account JSON, you need to specify `ServiceAccountCredential` as a parameter during initialization.

By specifying the [`roles/firebaseauth.admin`](https://firebase.google.com/docs/projects/iam/roles-predefined-product#app-distro) role to the Service Account, it becomes available for use. If you want finer control over permissions, create a Custom Role based on the [Access Control](https://cloud.google.com/identity-platform/docs/access-control) guide and assign it to the Service Account.

### `emulatorHost(env?: EmulatorEnv): string | undefined`

Returns the host of your Firebase Auth Emulator. For example, this case returns `"127.0.0.1:9099"` if you configured like below.

`wrangler.toml`

```toml
[vars]
FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9099"
```

### `useEmulator(env?: EmulatorEnv): boolean`

This is a wrapper `emulatorHost` function.

When true the SDK should communicate with the Auth Emulator for all API calls and also produce unsigned tokens.

## Type

### `KeyStorer`

This is an interface to cache the public key used to verify the Firebase ID token. By creating a class that implemented this interface, you can cache it in any storage of your choice.

```ts
interface KeyStorer {
  get<ExpectedValue = unknown>(): Promise<ExpectedValue | null>;
  put(value: string, expirationTtl: number): Promise<void>;
}
```

### `EmulatorEnv`

```ts
interface EmulatorEnv {
  FIREBASE_AUTH_EMULATOR_HOST: string | undefined
}
```

### `FirebaseIdToken`

Interface representing a decoded Firebase ID token, returned from the `authObj.verifyIdToken` method.

## Run example code

I put an [example](https://github.com/Code-Hex/firebase-auth-cloudflare-workers/tree/master/example) directory as Module Worker Syntax. this is explanation how to run the code.

1. Clone this repository and change your directory to it.
2. Install dev dependencies as `pnpm` command.
3. Run firebase auth emulator by `$ pnpm start-firebase-emulator`
4. Access to Emulator UI in your favorite browser.
5. Create a new user on Emulator UI. (email: `test@example.com` password: `test1234`)
6. Run example code on local (may serve as `localhost:8787`) by `$ pnpm start-example`
7. Get jwt for created user by `$ curl -s http://localhost:8787/get-jwt | jq .idToken -r`
8. Try authorization with user jwt `$ curl http://localhost:8787/ -H 'Authorization: Bearer PASTE-JWT-HERE'`

### for Session Cookie

You can try session cookie with your browser.

Access to `/admin/login` after started up Emulator and created an account (email: `test@example.com` password: `test1234`).

## Todo

### Non-required service account key.

- [x] IDToken verification

### Required service account key.

- [x] Check authorized user is deleted (revoked)
