[![NPM](https://img.shields.io/npm/v/@cloudflare/blindrsa-ts?style=plastic)](https://www.npmjs.com/package/@cloudflare/blindrsa-ts) [![NPM](https://img.shields.io/npm/l/@cloudflare/blindrsa-ts?style=plastic)](LICENSE.txt)

[![NPM](https://nodei.co/npm/@cloudflare/blindrsa-ts.png)](https://www.npmjs.com/package/@cloudflare/blindrsa-ts)

# blindrsa-ts: A TypeScript Library for Blind and Partially-Blind RSA Signature Protocols

**Specification:** Library is compliant with the [RFC-9474](https://www.rfc-editor.org/info/rfc9474) document by IETF/IRTF, with [Partially Blind RSA Signatures Draft 02](https://datatracker.ietf.org/doc/html/draft-amjad-cfrg-partially-blind-rsa-02), and matches the provided [tests vectors](https://www.rfc-editor.org/rfc/rfc9474.html#appendix-A), [resp](https://datatracker.ietf.org/doc/html/draft-amjad-cfrg-partially-blind-rsa-02#name-test-vectors).

## Blind RSA Signature Protocol

The RSA Blind Signature Protocol is a two-party protocol between a Client and Server where they interact to compute

`sig = Sign(sk, input_msg)`

where `input_msg = Prepare(msg)` is a prepared version of the private message `msg` provided by the Client, and `sk` is the private signing key provided by the Server.

```js
 Client(pk, msg)                      Server(sk, pk)
-----------------------------------------------------
input_msg = Prepare(msg)
blinded_msg, inv = Blind(pk, input_msg)
                      blinded_msg
                      ---------->
               blind_sig = BlindSign(sk, blinded_msg)
                       blind_sig
                      <----------
sig = Finalize(pk, input_msg, blind_sig, inv)
```

## Partially-Blind RSA Signature Protocol

One possible generalization of the protocol above is Partially-Blind Signatures, in which an additional `info` string can be provided, allowing public metadata to be shared.

```js
 Client(pk, msg, info)          Server(sk, pk, info)
-------------------------------------------------------
input_msg = Prepare(msg)
blind_msg, inv = Blind(pk, input_msg, info)
                      blind_msg
                      ---------->
          blind_sig = BlindSign(sk, blind_msg, info)
                       blind_sig
                      <----------
sig = Finalize(pk, input_msg, info, blind_sig, inv)
```

### Usage

#### Variants Supported

This package supports the four variants specified in [RFC9474](https://www.rfc-editor.org/info/rfc9474). Consult [Section 5](https://www.rfc-editor.org/rfc/rfc9474.html#section-5) of the document for the proper usage of each variant in an application.

```ts
import { RSABSSA } from '@cloudflare/blindrsa-ts';
const variants = [
    RSABSSA.SHA384.PSS.Randomized,
    RSABSSA.SHA384.PSSZero.Randomized,
    RSABSSA.SHA384.PSS.Deterministic,
    RSABSSA.SHA384.PSSZero.Deterministic,
];
```

In addition, it supports the four variants specified in [Partially Blind RSA Signatures Draft 02](https://datatracker.ietf.org/doc/html/draft-amjad-cfrg-partially-blind-rsa-02). Consult [Section 6](https://datatracker.ietf.org/doc/html/draft-amjad-cfrg-partially-blind-rsa-02#name-rsapbssa-variants) of the document for the proper usage of each variant in an application.

```ts
import { RSAPBSSA } from '@cloudflare/blindrsa-ts';
const variants = [
    RSAPBSSA.SHA384.PSS.Randomized,
    RSAPBSSA.SHA384.PSSZero.Randomized,
    RSAPBSSA.SHA384.PSS.Deterministic,
    RSAPBSSA.SHA384.PSSZero.Deterministic,
];
```

#### Platform specific configuration

**Optimizations**

By default, this library uses the [WebCrypto API](https://w3c.github.io/webcrypto/). Certain platforms, such as [Cloudflare Workers](https://github.com/cloudflare/workerd/blob/6b63c701e263a311c2a3ce64e2aeada69afc32a1/src/workerd/api/crypto-impl-asymmetric.c%2B%2B#L827-L868), have implemented native operation. These can be enabled by passing `{ supportRSARAW: true }` when retrieving a suite.
At the time of writing, this dedicated optimization is done only for the `BlindSign` operation. Key type does not have to be modified, and will be set to `RSA-RAW` by the library for the time of the operation.

**Partially Blind RSA verification**

This library does not support Partially Blind RSA signature verification in browser. This is due to [`crypto.subtle`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/subtle) implementations not allowing large public exponents required by Partially Blind RSA. You can follow bugs for [Chromium](https://issues.chromium.org/issues/340178598) and [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1896444).

#### Setup

Once a Blind-RSA variant was chosen, start by generating the server's key pair. Both the key length and the public exponent can be specified.

```ts
const suite = RSABSSA.SHA384.PSS.Randomized();
const { privateKey, publicKey } = await suite.generateKey({
    publicExponent: Uint8Array.from([1, 0, 1]),
    modulusLength: 2048,
});
```

Server distributes its public key to clients.

#### Partially Blind RSA Signatures consideration

Partially Blind RSA Signatures requires Client and Server to have a public byte array `info` shared out-of-band. Where applicable, this byte array has to be provided as a parameter. Please refer to the example provided in [examples/partially_blindrsa.ts](./examples/partially_blindrsa.ts) to see usage.

#### Step 1

The client prepares arbitrary input to be blindly-signed by the server. The `blind` method generates a blinded message and an inverse object that later will be used during the finalization step.

```ts
const msgString = 'Alice and Bob';
const message = new TextEncoder().encode(msgString);
const preparedMsg = suite.prepare(message);
const { blindedMsg, inv } = await suite.blind(publicKey, preparedMsg);
```

The client sends only the blinded message to the server.

#### Step 2

Once the server received the blinded message, it responds to the client with a blind signature.

```ts
const blindSignature = await suite.blindSign(privateKey, blindedMsg);
```

The server sends the blinded signature to the client.

#### Step 3

The client produces the final signature using blinded signature received from the server together with the inverse object generated at the first step.

```ts
const signature = await suite.finalize(publicKey, preparedMsg, blindSignature, inv);
```

Thus, the client obtains a pair `(preparedMsg, signature)` which can be verified for validity.

#### Step 4

Anyone with access to the server's public key can verify the signature on top of the `preparedMsg`.

```ts
const isValid = await suite.verify(publicKey, signature, preparedMsg); // true
```

### Development

| Task            | NPM scripts          |
| --------------- | -------------------- |
| Installing      | `$ npm ci`           |
| Building        | `$ npm run build`    |
| Unit Tests      | `$ npm run test`     |
| Examples        | `$ npm run examples` |
| Code Linting    | `$ npm run lint`     |
| Code Formatting | `$ npm run format`   |

#### Dependencies

This project uses the Stanford JavaScript Crypto Library [sjcl](https://github.com/bitwiseshiftleft/sjcl). Use the following command to configure the library.

```sh
make -f sjcl.Makefile
```

### License

The project is licensed under the [Apache-2.0 License](LICENSE.txt).
