# Cloudflare Worker Router

Cloudflare Workers Router is a lightweight Express-like router with middleware support Cloudflare Workers and Durable Objects. It began as a fork of [@tsndr/cloudflare-worker-router](https://github.com/tsndr/cloudflare-worker-router). The entire codebase has been converted to Typescript and a couple features have been added.

- Websocket support, for Cloudflare's `Response` object
- `router.use()`, for express-like global middleware
- Separate Cors middleware

## Usage

`npm install cloudflare-worker-router`

```typescript
import { Router, RouterRequest, RouterResponse } from 'cloudflare-worker-router-typescript'

const router = new Router()

interface Env {
    FOO_OBJ: DurableObjectNamespace
}

router.get('/echo/:foo/:bar', async (req: RouterRequest<Env>, res: RouterResponse) => {
    console.log(req.env!.FOO_OBJ)
    res.status = 200
    res.body = { id: req.params }
})

export default {
    async fetch(req: Request, env: Env, ctx: ExecutionContext) {
        return router.handle(req, env, ctx)
    }
}
```