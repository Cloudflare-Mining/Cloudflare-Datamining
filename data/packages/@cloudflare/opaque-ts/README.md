# opaque-ts

This is a Typescript library for the Asymmetric Password-Authenticated Key Exchange (OPAQUE) protocol.

[![NPM](https://nodei.co/npm/@cloudflare/opaque-ts.png)](https://www.npmjs.com/package/@cloudflare/opaque-ts)

### Use

Available at: [@cloudflare/opaque-ts](https://www.npmjs.com/package/@cloudflare/opaque-ts)

```sh
 $ npm install @cloudflare/opaque-ts
```

### Specification

IETF Draft: [OPAQUE v07](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-opaque-07)

### Test and Coverage

```sh
 $ npm ci
 $ npm test
```

### Dependencies

Uses `@cloudflare/voprf-ts` for the group and OPRF operations, WebCrypto API for hashing and key derivation functions, and `@noble/hashes` for scrypt memory-hard function.

### License

[BSD-3-Clause](LICENSE.txt)
