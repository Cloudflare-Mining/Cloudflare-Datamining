# DPoP for Web Platform API JavaScript runtimes

OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer - [RFC9449][].

## [💗 Help the project](https://github.com/sponsors/panva)

## Dependencies: 0

## [Documentation](docs/README.md)

**`example`** ESM import

```js
import DPoP, { generateKeyPair } from 'dpop'
```

**`example`** Deno import

```js
import DPoP, { generateKeyPair } from 'https://deno.land/x/dpop/src/index.ts'
```

## Runtime requirements

The supported JavaScript runtimes include ones that

- are reasonably up to date ECMAScript (targets ES2020, but may be further transpiled for compatibility)
- support required Web API globals and standard built-in objects
  - [Web Crypto API][] and its related globals [crypto][], [CryptoKey][]
  - [Encoding API][] and its related globals [TextEncoder][], [TextDecoder][]
  - [btoa][]
  - [Uint8Array][]
- These are (not an exhaustive list):
  - Browsers
  - Cloudflare Workers
  - Deno (^1.21.0)
  - Electron
  - Next.js Middlewares
  - Node.js (runtime flags may be needed)
  - Vercel Edge Functions

## Out of scope

- CommonJS

[web crypto api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
[textdecoder]: https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
[textencoder]: https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
[btoa]: https://developer.mozilla.org/en-US/docs/Web/API/btoa
[atob]: https://developer.mozilla.org/en-US/docs/Web/API/atob
[uint8array]: https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array
[crypto]: https://developer.mozilla.org/en-US/docs/Web/API/crypto
[cryptokey]: https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey
[encoding api]: https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API
[rfc9449]: https://www.rfc-editor.org/rfc/rfc9449.html
