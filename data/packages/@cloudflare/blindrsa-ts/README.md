[![NPM](https://img.shields.io/npm/v/@cloudflare/blindrsa-ts?style=plastic)](https://www.npmjs.com/package/@cloudflare/blindrsa-ts) [![NPM](https://img.shields.io/npm/l/@cloudflare/blindrsa-ts?style=plastic)](LICENSE.txt)

[![NPM](https://nodei.co/npm/@cloudflare/blindrsa-ts.png)](https://www.npmjs.com/package/@cloudflare/blindrsa-ts)

# blindrsa-ts: A TypeScript Library for the RSA Blind Signature Protocol

**Specification:** Library is compliant with the [RFC-9474](https://www.rfc-editor.org/info/rfc9474) document by IETF/IRTF and matches the provided [tests vectors](https://www.rfc-editor.org/rfc/rfc9474.html#appendix-A).


### Protocol

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

### Usage

#### Variants Supported

This package supports the four variants specified in [RFC9474](https://www.rfc-editor.org/info/rfc9474). Consult [Section 5](https://www.rfc-editor.org/rfc/rfc9474.html#section-5) of the document for the proper usage of each variant in an application.

```ts
import { RSABSSA } from "@cloudflare/blindrsa-ts"
const variants = [
    RSABSSA.SHA384.PSS.Randomized,
    RSABSSA.SHA384.PSSZero.Randomized,
    RSABSSA.SHA384.PSS.Deterministic,
    RSABSSA.SHA384.PSSZero.Deterministic,
]
```


#### Setup

Once a Blind-RSA variant was chosen, start by generating the server's keypair. Both the key length and the public exponent can be specified.

```ts
const suite = RSABSSA.SHA384.PSS.Randomized();
const { privateKey, publicKey } = await suite.generateKey({
    publicExponent: Uint8Array.from([1, 0, 1]),
    modulusLength: 2048,
});
```

Server distributes its public key to clients.

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
|-----------------|----------------------|
| Installing      | `$ npm ci`           |
| Building        | `$ npm run build`    |
| Unit Tests      | `$ npm run test`     |
| Examples        | `$ npm run examples` |
| Benchmarking    | `$ npm run bench`    |
| Code Linting    | `$ npm run lint`     |
| Code Formatting | `$ npm run format`   |


**Dependencies**

This project uses the Stanford Javascript Crypto Library [sjcl](https://github.com/bitwiseshiftleft/sjcl). Use the following command to configure the library.

```sh
 $ make -f sjcl.Makefile
```

### License

The project is licensed under the [Apache-2.0 License](LICENSE.txt).
