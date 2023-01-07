# util-api

Handy utilities to help interact with the v4 API.

Lightweight. Asynchronous. In TypeScript.

## Installation

```sh
$ npm install @cloudflare/util-api
```

## Usage

Assuming your node service/worker is behind api-gateway:
```js
import { apiGateway } from '@cloudflare/util-api';

async function handleRequest(request: Request) {
  try {
    const decodedJWT = await apiGateway.authenticateRequest(request);

    console.log(decodedJWT.user.email);
  } catch (e) {
    // Authentication failed
  }
}
```

If you only have a Bearer token: 
```js
import { apiGateway } from '@cloudflare/util-api';

async function handleBearer(bearer: string) {
  try {
    const decodedJWT = await apiGateway.authenticateBearer(bearer);

    console.log(decodedJWT.user.email);
  } catch (e) {
    // Authentication failed
  }
}
```

If you only have a JWT: 
```js
import { apiGateway } from '@cloudflare/util-api';

async function handleJWT(jwt: string) {
  try {
    const decodedJWT = await apiGateway.authenticateJWT(jwt);

    console.log(decodedJWT.user.email);
  } catch (e) {
    // Authentication failed
  }
}
```