# dynamic-workflows

Run a different [Cloudflare Workflow](https://developers.cloudflare.com/workflows/) implementation per tenant, from a single dispatcher worker.

A Workflow is normally bound to one static `class_name` at deploy time. If you're building a platform on top of [Dynamic Workers](https://developers.cloudflare.com/dynamic-workers/) where each customer ships their own code, that's a problem: you only get one `WorkflowEntrypoint`, but you need it to route into N tenant workers.

This library is the glue. The dispatcher hands each tenant a *wrapped* `Workflow` binding that quietly tags every `create()` with a tenant id; the dispatcher's single `WorkflowEntrypoint` reads that tag back out at run time and forwards `run(event, step)` into the right tenant.

```
┌──────────── Dispatcher Worker ────────────┐          ┌──── Tenant's dynamic worker ────┐
│                                           │          │                                 │
│  env.WORKFLOWS (real Workflow binding)    │          │  env.WORKFLOWS (wrapped!)       │
│                                           │          │                                 │
│                                           │          │  ── env.WORKFLOWS.create({      │
│                                           │          │        params: { ... }          │
│                                           │          │      })                         │
│                                           │          │         │                       │
│  ┌──── wrapWorkflowBinding ──────────┐    │  tags    │         │                       │
│  │ injects { __dispatcherMetadata,   │◀───┼──────────┼─────────┘                       │
│  │   params } into create(...)       │    │          │                                 │
│  └────────────────┬──────────────────┘    │          └─────────────────────────────────┘
│                   │                       │
│                   ▼                       │
│            Workflows engine               │
│                   │                       │
│                   │ run(event, step)      │
│                   ▼                       │
│  ┌── createDynamicWorkflowEntrypoint ──┐  │          ┌──── Tenant's dynamic worker ────┐
│  │ pulls metadata off event.payload    │  │          │                                 │
│  │ loadRunner({metadata, env, ctx})    │──┼─────────▶│  class TenantWorkflow           │
│  │ forwards run(innerEvent, step)      │  │          │    extends WorkflowEntrypoint { │
│  └─────────────────────────────────────┘  │          │      run(event, step) { … }     │
└───────────────────────────────────────────┘          │    }                            │
                                                       └─────────────────────────────────┘
```

You stay in charge of *how* tenant code is loaded — Worker Loader, service bindings, whatever — this library only carries the tenant id between the two halves of the dance.

## Install

```bash
npm install dynamic-workflows
```

## Use it

The dispatcher needs three things: re-export `DynamicWorkflowBinding`, hand each tenant a wrapped binding, and register a `WorkflowEntrypoint` that knows how to load tenant code.

```typescript
// dispatcher/src/index.ts
import {
  createDynamicWorkflowEntrypoint,
  DynamicWorkflowBinding,
  wrapWorkflowBinding,
  type WorkflowRunner,
} from 'dynamic-workflows';

// Required: re-exporting puts the class on `cloudflare:workers` exports,
// which is how `wrapWorkflowBinding` builds per-tenant RPC stubs.
export { DynamicWorkflowBinding };

interface Env {
  WORKFLOWS: Workflow;
  LOADER: WorkerLoader;
}

function loadTenant(env: Env, tenantId: string) {
  return env.LOADER.get(tenantId, async () => ({
    compatibilityDate: '2026-01-01',
    mainModule: 'index.js',
    modules: { 'index.js': await fetchTenantCode(tenantId) },
    env: {
      // The tenant uses this exactly like a real Workflow binding;
      // every create() is tagged with { tenantId } automatically.
      WORKFLOWS: wrapWorkflowBinding({ tenantId }),
    },
    globalOutbound: null,
  }));
}

// Register this as `class_name` in wrangler.jsonc.
export const DynamicWorkflow = createDynamicWorkflowEntrypoint<Env>(
  async ({ env, metadata }) => {
    const stub = loadTenant(env, metadata.tenantId as string);
    return stub.getEntrypoint('TenantWorkflow') as unknown as WorkflowRunner;
  }
);

export default {
  fetch(request: Request, env: Env) {
    const tenantId = request.headers.get('x-tenant-id')!;
    return loadTenant(env, tenantId).getEntrypoint().fetch(request);
  },
};
```

```jsonc
// dispatcher/wrangler.jsonc
{
  "name": "my-dispatcher",
  "main": "src/index.ts",
  "compatibility_date": "2026-01-01",
  "worker_loaders": [{ "binding": "LOADER" }],
  "workflows": [
    {
      "name": "dynamic-workflow",
      "binding": "WORKFLOWS",
      "class_name": "DynamicWorkflow"
    }
  ]
}
```

The tenant's code is plain Workflows — they don't know they're being dispatched:

```typescript
// tenant code, loaded at runtime by the dispatcher
import { WorkflowEntrypoint } from 'cloudflare:workers';

export class TenantWorkflow extends WorkflowEntrypoint {
  async run(event, step) {
    return step.do('greet', async () => `Hello, ${event.payload.name}!`);
  }
}

export default {
  async fetch(request, env) {
    const instance = await env.WORKFLOWS.create({ params: await request.json() });
    // `instance` is an RPC stub — `.id` is an RpcPromise, so await it.
    return Response.json({ id: await instance.id });
  },
};
```

That's it. Workflow IDs, status, retries, hibernation — everything else works the way it normally does.

## API

### `wrapWorkflowBinding(metadata, options?): Workflow`

Returns a `Workflow`-shaped RPC stub. Every `create()` / `createBatch()` call through it tags the instance's params with `metadata`. Pass it to a Dynamic Worker as a binding.

`metadata` is any JSON-serialisable object — typically `{ tenantId }`, but routing hints, region, plan tier etc. all work. `options.bindingName` defaults to `'WORKFLOWS'`; override it if your dispatcher's binding has a different name.

Throws if you forgot to re-export `DynamicWorkflowBinding`.

### `createDynamicWorkflowEntrypoint<Env>(loadRunner): typeof WorkflowEntrypoint`

Returns a `WorkflowEntrypoint` subclass. Register it as the `class_name` of your `[[workflows]]` binding.

`loadRunner({ metadata, env, ctx })` runs once per `run()` call and must return something with a `run(event, step)` method. In practice you return `stub.getEntrypoint('YourWorkflowClass')` from a Worker Loader stub.

### `DynamicWorkflowBinding`

The `WorkerEntrypoint` class behind `wrapWorkflowBinding`'s stubs. **Re-export it from your dispatcher's main module** — Cloudflare populates `cloudflare:workers` exports from your top-level exports, and `wrapWorkflowBinding` looks the class up there.

### `dispatchWorkflow(context, event, step, loadRunner)`

The lower-level primitive that `createDynamicWorkflowEntrypoint` is built on. Use it directly if you need to subclass `WorkflowEntrypoint` yourself (e.g. to wrap `run` in custom logging).

### `MissingDispatcherMetadataError`

Thrown from `run()` when the event payload isn't a dispatcher envelope — i.e. the workflow was created against the raw binding instead of a wrapped one.

## Things to know

- **Bindings cross RPC, so they have to be RPC stubs.** That's why `DynamicWorkflowBinding` is a `WorkerEntrypoint`: a plain `{ create, get }` object isn't structured-clonable, and the real `Workflow` binding can't be serialised either.
- **Workflows persists `event.payload`.** That payload is the dispatcher envelope, metadata included. Don't put secrets in metadata, and treat it as routing hints, not authorization — tenant code can read it back via `instance.status()`.
- **`WorkflowInstance` is an RPC stub on the tenant side.** Property reads return `RpcPromise`s, so `await instance.id`. Method calls (`status()`, `pause()`, …) work normally.
- **The envelope shape is internal.** `wrapWorkflowBinding` and `createDynamicWorkflowEntrypoint` are guaranteed to be compatible with each other; don't parse the persisted payload yourself.

## License

MIT
