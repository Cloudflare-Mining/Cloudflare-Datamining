# workers-jwt

[`@sagi.io/workers-jwt`](https://www.npmjs.com/package/@sagi.io/workers-jwt) helps you
generate a `JWT` on Cloudflare Workers with the WebCrypto API. Helper function for GCP Service Accounts included.

⭐ We use it at **[OpenSay](https://opensay.co/s=workers-jwt)** to efficiently access Google's REST APIs with 1 round trip.

[![CircleCI](https://circleci.com/gh/sagi/workers-jwt.svg?style=svg)](https://circleci.com/gh/sagi/workers-jwt)
[![Coverage Status](https://coveralls.io/repos/github/sagi/workers-jwt/badge.svg?branch=master)](https://coveralls.io/github/sagi/workers-jwt?branch=master)
[![MIT License](https://img.shields.io/npm/l/@sagi.io/workers-jwt.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![version](https://img.shields.io/npm/v/@sagi.io/workers-jwt.svg?style=flat-square)](http://npm.im/@sagi.io/workers-jwt)

## Installation

~~~
$ npm i @sagi.io/workers-jwt
~~~

## API

We currently expose two methods: `getToken` for general purpose `JWT` generation
and `getTokenFromGCPServiceAccount` for `JWT` generation using a `GCP` service account.

### **`getToken({ ... })`**

Function definition:

```js
const getToken = async ({
  privateKeyPEM,
  payload,
  alg = 'RS256',
  cryptoImpl = null,
  headerAdditions = {},
}) => { ... }
```

Where:

  - **`privateKeyPEM`** is the private key `string` in `PEM` format.
  - **`payload`** is the `JSON` payload to be signed, i.e. the `{ aud, iat, exp, iss, sub, scope, ... }`.
  - **`alg`** is the signing algorithm as defined in [`RFC7518`](https://tools.ietf.org/html/rfc7518#section-3.1), currently only `RS256` and `ES256` are supported.
  - **`cryptoImpl`** is a `WebCrypto` `API` implementation. Cloudflare Workers support `WebCrypto` out of the box. For `Node.js` you can use [`require('crypto').webcrypto`](https://github.com/PeculiarVentures/node-webcrypto-ossl) - see examples below and in the tests.
  - **`headerAdditions`** is an object with keys and string values to be added to the header of the `JWT`.

### **`getTokenFromGCPServiceAccount({ ... })`**

Function definition:

```js
const getTokenFromGCPServiceAccount = async ({
  serviceAccountJSON,
  aud,
  alg = 'RS256',
  cryptoImpl = null,
  expiredAfter = 3600,
  headerAdditions = {},
  payloadAdditions = {}
}) => { ... }
```

Where:

  - **`serviceAccountJSON`** is the service account `JSON` object .
  - **`aud`** is the audience field in the `JWT`'s payload. e.g. `https://www.googleapis.com/oauth2/v4/token`'.
  - **`expiredAfter`** - the duration of the token's validity. Defaults to 1 hour - 3600 seconds.
  - **`payloadAdditions`** is an object with keys and string values to be added to the payload of the `JWT`. Example - `{ scope: 'https://www.googleapis.com/auth/chat.bot' }`.
  - **`alg`**, **`cryptoImpl`**, **`headerAdditions`** are defined as above.


## Example

Suppose you'd like to use `Firestore`'s REST API. The first step is to generate
a service account with the "Cloud Datastore User" role. Please download the
service account and store its contents in the `SERVICE_ACCOUNT_JSON_STR` environment
variable.

The `aud` is defined by GCP's [service definitions](https://github.com/googleapis/googleapis/tree/master/google)
and is simply the following concatenated string: `'https://' + SERVICE_NAME + '/' + API__NAME`.
More info [here](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#jwt-auth).

For `Firestore` the `aud` is `https://firestore.googleapis.com/google.firestore.v1.Firestore`.

## Cloudflare Workers Usage

Cloudflare Workers expose the `crypto` global for the `Web Crypto API`.

~~~js
const { getTokenFromGCPServiceAccount } = require('@sagi.io/workers-jwt')

const serviceAccountJSON = await ENVIRONMENT.get('SERVICE_ACCOUNT_JSON','json')
const aud = `https://firestore.googleapis.com/google.firestore.v1.Firestore`

const token = await getTokenFromGCPServiceAccount({ serviceAccountJSON, aud} )

const headers = { Authorization: `Bearer ${token}` }

const projectId = 'example-project'
const collection = 'exampleCol'
const document = 'exampleDoc'

const docUrl =
  `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`
  + `/${collection}/${document}`

const response = await fetch(docUrl, { headers })

const documentObj =  await response.json()
~~~

## Node Usage (version <=14)

We use the `node-webcrypto-ossl` package to imitate the `Web Crypto API` in Node.

~~~js
const { Crytpo }= require('node-webcrypto-ossl');
const cryptoImpl  = new Crypto();
const { getTokenFromGCPServiceAccount } = require('@sagi.io/workers-jwt')

const serviceAccountJSON = { ... }
const aud = `https://firestore.googleapis.com/google.firestore.v1.Firestore`

const token = await getTokenFromGCPServiceAccount({ serviceAccountJSON, aud, cryptoImpl } )

<... SAME AS CLOUDFLARE WORKERS ...>
~~~


## Node Usage (version 15+)

Node 15 introduces the [Web Crypto API](https://nodejs.org/api/webcrypto.html).  When using NextJS, you may need to pass in the native Node `webcrypto` lib to get both SSR and webpack to work during dev mode.

~~~js
const { getTokenFromGCPServiceAccount } = require('@sagi.io/workers-jwt')

const serviceAccountJSON = { ... }
const aud = 'https://firestore.googleapis.com/google.firestore.v1.Firestore';

const token = await getTokenFromGCPServiceAccount({
  serviceAccountJSON,
  aud,
  cryptoImpl: globalThis.crypto || require('crypto').webcrypto,
});

<... SAME AS CLOUDFLARE WORKERS ...>
~~~
