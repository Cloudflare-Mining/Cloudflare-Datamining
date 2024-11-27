# Cloudworker Router V4

The router V4 is an update to make it behave more like koa-router with a the more familiar `async (ctx, next)` syntax.

The new version accepts passing an array of middlewares in each route, just like the koa-router does. This change is breaking as it's no longer possible to pass the options to path-to-regexp as a third option.

To make it more flexible it also supports adding RegExp support to the routing in addition to the path-to-regexp strings.

The router is based on [path-to-regexp](https://github.com/pillarjs/path-to-regexp) for the path matching, which is used by many other routers as well.

The goal is to make a battery included, opinionated typescript router for cloudflare workers.

- Express style routing with router.get, router.post ..
- Named URL parameters
- Multiple route middlewares
- Responds to OPTIONS requests with allowed methods
- HEAD request served automagically
- ES7 async/await support

## Installation

```bash
npm install cloudworker-router --save
```

## Basic Usage

The router handlers simply returns Response objects for basic handlers.

Basic example with GET request

```js
const Router = require('cloudworker-router');

const router = new Router();

router.get('/', async (ctx) => {
  return new Response('Hello World');
});

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return router.handle(request, env, ctx);
  },
};
```

The router exposes get, post, patch and del methods as shorthands for the most common use cases. For examples of their usage, see the example folder. HEAD requests are handled automatically by the router.

For more examples on usage and deployment see the examples folder in the project.

### Defining paths

The paths are translated to regular expressions for matching. Query strings are not considred when matching requests.

Named router paramteres are captured and added to `ctx.params` :

```js
router.get('/hello/:name', async (ctx) => {
  return new Response('Hello ' + ctx.params.name);
});

router.get('/:wildcard*', async (ctx) => {
  return new Response(ctx.params.wildcard; // Will return the whole path
});
```

### Middlewares

The middlewares are implemented by calling next, just like in koa-router.

The can be added by calling router.use:

```js
router.use(async (ctx, next) => {
  // Maybe store the request start timestamp
  const start = new Date();

  try {
    return await next();
  } catch (err) {
    // handle an error
    return new Response(error.message, {
      status: 500,
    });
  }
});
```

It is also posisble to pass a middlewared when defining a route:

```js
async function middleware(ctx, next) {
  console.log('do something clever');

  await next();
}

router.get('/test', middleware, async (ctx) => {
  return new Response('Hello');
});
```

### Context

The context encapsulates the request and the response object.

A new context instance are created for each request.

An example of a context object created for a request:

```js
{
  request: Request,
  event: ExecutionContext
  state: {},
  query: {
    foo: "bar"
  },
  params: {}
  env: {}
}
```

### Env

The Router is a generic class that makes it possible to get strictly typed env.

It supports the Cloudflare services that are passed as env variables, such as Fetcher and KVStorage.

```js
const Router = require('cloudworker-router');

interface MyEnv {
  test: string;
  KV_NAMESPACE: KVNamespace;
  DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
  A_FETCHER: Fetcher;
  A_FETCHER: Queue;
}
const router = new Router<MyEnv>();

router.get('/', async (ctx) => {
  return new Response(ctx.env.test);
});

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return router.handle(reuquest, env, ctx);
  },
};
```

### Bodyparser

There is a basic body parser bundled in the router as this is used in most applications. It handles `application/json` and `application/x-www-form-urlencoded` content types.

To add the body parser to the router:

```js
import { Router, bodyparser } from 'cloudworker-router';

const router = new Router();

router.use(bodyparser);
```

### Allow headers

The router can match OPTIONS requests against the registered routes to respond with the correct allowed headers.

To enable handling of OPTIONS requests calls allowHeaders after all other routes:

```js
const router = new Router();

router.get('/', async (ctx) => {
  ctx.status = 200;
});

router.use(router.allowMethods());
```
