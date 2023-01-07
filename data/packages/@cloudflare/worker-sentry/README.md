# @cloudflare/worker-sentry

> Sentry over Access for Worker

## Installation

```bash
npm install -D @cloudflare/worker-sentry
```

## Example

```js
import { initSentry } from "@cloudflare/worker-sentry";

addEventListener("fetch", (event) => {
  const sentry = initSentry(event);
  event.respondWith(handleRequest(event, sentry));
});

async function handleRequest(request, sentry) {
  try {
    console.log("Got request", request);
    const response = await fetch(request);
    console.log("Got response", response);
    return response;
  } catch (e) {
    sentry.captureException(e);
    return new Response("internal error", { status: 500 });
  }
}
```

## Additional `toucan-js` options

The API: `initSentry(event, additionalOptions = {})` allows any options to be passed directly to `toucan-js`. For instance to specify the `environement` the worker is running in.

## Usage with wrangler

```toml
name = "sentry-test"
type = "webpack"
account_id = "your account_id"
workers_dev = true

[vars]
SENTRY_DSN = "Sentry DSN"
SENTRY_CLIENT_ID = "Access client ID"
SENTRY_CLIENT_SECRET = "Access client secret"
```
