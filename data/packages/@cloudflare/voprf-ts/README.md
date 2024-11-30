[![NPM](https://img.shields.io/npm/v/@cloudflare/voprf-ts?style=plastic)](https://www.npmjs.com/package/@cloudflare/voprf-ts) [![NPM](https://img.shields.io/npm/l/@cloudflare/voprf-ts?style=plastic)](LICENSE.txt)

[![NPM](https://nodei.co/npm/@cloudflare/voprf-ts.png)](https://www.npmjs.com/package/@cloudflare/voprf-ts)

# voprf-ts: A TypeScript Library for Oblivious Pseudorandom Functions (OPRF)

An **Oblivious Pseudorandom Function (OPRF)** is a two-party protocol between a client and server for computing the output of a Pseudorandom Function (PRF).

The server provides the PRF secret key, and the client provides the PRF input.
At the end of the protocol, the client learns the PRF output without learning anything about the PRF secret key, and the server learns neither the PRF input nor output.

A **verifiable OPRF (VOPRF)** ensures clients can verify that the server used a specific private key during the execution of the protocol.

A **partially-oblivious (POPRF)** extends a VOPRF allowing the client and server to provide public shared input to the PRF computation.

|Specification: [RFC 9497](https://doi.org/10.17487/RFC9497)|
|--|

This library supports all three modes:

```js
Oprf.Mode.OPRF
Oprf.Mode.VOPRF
Oprf.Mode.POPRF
```

and supports the following suites corresponding to the underlying group and hash used:

```js
Oprf.Suite.P256_SHA256
Oprf.Suite.P384_SHA384
Oprf.Suite.P521_SHA512
```

Additional suites are also supported when using the [@noble/curves](https://www.npmjs.com/package/@noble/curves) library as the `CryptoProvider`. See [examples/facade/index.ts](examples/facade/index.ts) to setup this `CryptoProvider`.

```js
Oprf.Suite.RISTRETTO255_SHA512
Oprf.Suite.DECAF448_SHAKE256
```

## Usage

### Step 1

First set up a client and a server. In this example, we use the VOPRF mode with suite P384-SHA384.

```js
import {
    Oprf, VOPRFClient, VOPRFServer, generatePublicKey, randomPrivateKey
} from '@cloudflare/voprf-ts';

const suite = Oprf.Suite.P384_SHA384;
const privateKey = await randomPrivateKey(suite);
const publicKey = generatePublicKey(suite, privateKey);

const server = new VOPRFServer(suite, privateKey);
const client = new VOPRFClient(suite, publicKey);
```

### Step 2

The client prepares arbitrary input(s) that will be batch evaluated by the server. The blinding method produces an evaluation request, and some finalization data to be used later. Then, the client sends the evaluation request to the server.

```js
const input = new TextEncoder().encode('This is the client's input');
const batch = [input]
const [finData, evalReq] = await client.blind(batch);
```

### Step 3

Once the server received the evaluation request, it responds to the client with an evaluation.

```js
const evaluation = await server.blindEvaluate(evalReq);
```

### Step 4

Finally, the client can produce the output(s) of the OPRF protocol using the server's evaluation and the finalization data from the second step. If the mode is verifiable, this step also checks the proof that the server used the expected private key for the evaluation.

```js
// Get output matching first input of batch
const [output] = await client.finalize(finData, evaluation);
```

### Development

| Task            | NPM scripts          |
|-----------------|----------------------|
| Installing      | `$ npm ci`           |
| Building        | `$ npm run build`    |
| Unit Tests      | `$ npm run test`     |
| Examples        | `$ npm run examples` |
| Benchmarking    | `$ npm run bench`    |
| Code Linting    | `$ npm run lint`     |
| Code Formatting | `$ npm run format`   |

## Security Disclaimer

🚨 This library is offered as-is, and without a guarantee. Therefore, it is expected that changes in the code, repository, and API occur in the future. We recommend to take caution before using this library in a production application since part of its content is experimental. All security issues must be reported, please notify us immediately following the instructions given in our [Security Policy](https://github.com/cloudflare/voprf-ts/security/policy).

### Cryptography Providers

Although this library relies on the standard [Web Cryptography API](https://www.w3.org/TR/WebCryptoAPI/) for high-level operations, prime field and elliptic curve operations are not covered by the standard API. For this reason, this library can be configured to use one of the following providers:

* The Stanford JavaScript Crypto Library [sjcl](https://github.com/bitwiseshiftleft/sjcl).
* The [@noble/curves](https://www.npmjs.com/package/@noble/curves) library.

⚠️ **Note:** Running operations in constant time is a basic requirement to prevent against timing attacks. However in JavaScript, constant-time execution is not guaranteed. These providers have made different choices towards addressing this goal.

### License

The project is licensed under the [BSD-3-Clause License](LICENSE.txt).
