# Netacea Cloudflare

![Netacea Header](https://assets.ntcacdn.net/header.jpg)

[![npm](https://img.shields.io/npm/v/@netacea/cloudflare.svg)](https://www.npmjs.com/package/@netacea/cloudflare) &nbsp;
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

`@netacea/cloudflare` is a package designed to add [Netacea](https://netacea.com) functionality to [Cloudflare workers](https://workers.cloudflare.com/).

## Installation

### 🤠 __Wrangler__

We strongly recommend installing and using [Wrangler](https://developers.cloudflare.com/workers/wrangler/) to manage your Cloudflare workers. Wrangler is a CLI tool designed to make previewing and deploying Cloudflare workers seamless.

Installation instructions can be found [here](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

Check whether Wrangler is installed by using
`wrangler --help`

#### 🌻 Starting fresh

When using SSH for git, you will need to create a `.gitconfig` file and include the following lines
```
  [url "ssh://git@github.com/"]
  insteadOf = https://github.com
```
otherwise Wrangler will fail to clone the project when using `wrangler generate`. 

After installing Wrangler, you can pull the Netacea worker template by running the following:

```bash
wrangler generate netacea-cloudflare-worker https://github.com/netacea/cloudflare-worker-template-typescript
cd netacea-cloudflare-worker
npm i
npm i @netacea/cloudflare@latest
npm run test
```

The tests should pass (if they don't, please open an issue [here](https://github.com/Netacea/cloudflare-worker-template-typescript/issues)).

Follow the `README.md` in the [cloudflare-worker-template-typescript](https://github.com/Netacea/cloudflare-worker-template-typescript) repository to get this deployed.

#### ✍ Existing JavaScript worker

Run the following command to install the Netacea worker

```bash
npm i @netacea/cloudflare
```

Import the worker

```javascript
// CommonJS:
const NetaceaCloudflare = require('@netacea/cloudflare').default
// ES modules:
import NetaceaCloudflare from '@netacea/cloudflare'
```

Then declare a variable for the worker.

```javascript
const worker = new NetaceaCloudflare({
  apiKey: 'your-api-key',
  secretKey: 'your-secret-key'
})
```

It's best security practice to **not** commit your `apiKey` and `secretKey` to any repository.

Finally in your request handler, call `worker.run(event, originRequest)` where `originRequest` is a function that will return a response.
Below are two examples of workers written in JavaScript and TypeScript:

JavaScript:
```javascript
const NetaceaCloudflare = require('@netacea/cloudflare').default

const worker = new NetaceaCloudflare({
  apiKey: 'your-api-key',
  secretKey: 'your-secret-key'
})

async function handleRequestWithNetacea(event) {
  const response = await worker.run(event, originRequest)
  event.waitUntil(worker.ingest(event.request, response))
  return response
}

async function originRequest(request) {
  // Implement custom pre-fetch logic here
  const response = await fetch(request)
  // Implement custom post-fetch logic here
  return response
}

module.exports = {
  handleRequestWithNetacea
}
```

TypeScript:
```typescript
import NetaceaCloudflare from '@netacea/cloudflare'

const worker = new NetaceaCloudflare({
  apiKey: 'your-api-key',
  secretKey: 'your-secret-key'
})

export async function handleRequestWithNetacea(event: FetchEvent): Promise<Response> {
  const response = await worker.run(event, originRequest)
  event.waitUntil(worker.ingest(event.request, response))
  return response
}

async function originRequest(request: Request): Promise<Response> {
  // Implement custom pre-fetch logic here
  const response = await fetch(request)
  // Implement custom post-fetch logic here
  return response
}
```

## ⬆ Updating

Updating the Netacea Cloudflare package can be done with the following command:

```bash
npm i @netacea/cloudflare@latest
```
