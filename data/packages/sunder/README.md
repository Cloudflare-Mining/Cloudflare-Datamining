🌄 Sunder
---

[![CI](https://github.com/gzuidhof/Sunder/workflows/CI/badge.svg)](https://github.com/sunderjs/Sunder/actions)
[![License](https://img.shields.io/github/license/sunderjs/sunder)](./LICENSE)
[![NPM badge](https://img.shields.io/npm/v/sunder)](https://www.npmjs.com/package/sunder)
[![Documentation](https://img.shields.io/badge/Read%20the-documentation-1abc9c.svg)](https://sunderjs.com/docs)

Sunder allows you to quickly build websites and APIs in a modern async structure on [Cloudflare Workers](https://workers.cloudflare.com). Think of Sunder as Express or Koa for serverless. 

Sunder is
* Fast
* Small
* Easy to test
* Typesafe

**The easiest way to get started with Sunder on Cloudflare Workers is to use the [template project](https://github.com/sunderjs/sunder-worker-template).**

## Installation
```bash
npm i --save sunder
# or
yarn add sunder
```

Read the documentation [**here**](https://sunderjs.com/docs) to get started.

## Example

```typescript
import {Sunder, Router, Context} from "sunder";

const app = new Sunder();
const router = new Router();

// Example route with a named parameter
router.get("/hello/:username", ({response, params}) => {
    response.body = `Hello ${params.username}`;
});
app.use(router.middleware);

export default {
    fetch(request, ctx, env) {
        return app.fetch(request, ctx, env);
    }
};
```

## Highlight feature: strict route parameters
![Strict routes gif](https://i.imgur.com/XeOyoxF.gif)

## Inspiration

The Sunder framework was inspired by Elixir's [plug](https://github.com/elixir-plug/plug), Node's [Koa](https://koajs.com/) framework, [tiny-request-router](https://www.npmjs.com/package/tiny-request-router) and [cfworker](https://github.com/cfworker/cfworker)'s web package.

Sunder is only a few hundred lines of code. It has little magic and doesn't impose too much structure.

## License
[MIT](./LICENSE)
