<div align="center">
  <a href="https://chanfana.pages.dev/">
    <img src="https://raw.githubusercontent.com/cloudflare/chanfana/refs/heads/main/docs/public/assets/logo.png" width="500" height="auto" alt="chanfana"/>
  </a>
</div>


<p align="center">
    <em>OpenAPI 3 and 3.1 schema generator and validator for <a href="https://github.com/honojs/hono" target="_blank">Hono</a>, <a href="https://github.com/kwhitley/itty-router" target="_blank">itty-router</a> and more!</em>
</p>

<hr />

**Documentation**: <a href="https://chanfana.pages.dev/">chanfana.pages.dev</a>

**Source Code**: <a href="https://github.com/cloudflare/chanfana/">github.com/cloudflare/chanfana</a>

<hr />

[chanfana](https://github.com/cloudflare/chanfana) **(previously known as itty-router-openapi)** is a library that adds
OpenAPI schema generation and validation to any router (<a href="https://github.com/honojs/hono" target="_blank">
Hono</a>, <a href="https://github.com/kwhitley/itty-router" target="_blank">itty-router</a>, etc), meant to be a
powerful and lightweight
library for Cloudflare Workers but runs on any runtime supported by the base router.

The key features are:

- OpenAPI 3 and 3.1 schema generator and validator
- Fully written in typescript
- [Class-based endpoints](https://chanfana.pages.dev/user-guide/first-steps/)
- [Query](https://chanfana.pages.dev/user-guide/query-parameters/), [Path](https://chanfana.pages.dev/user-guide/path-parameters/), [Headers](https://chanfana.pages.dev/user-guide/header-parameters/) and [Body](https://chanfana.pages.dev/user-guide/request-body/) typescript inference
- Extend existing [Hono](https://chanfana.pages.dev/routers/hono/), [itty-router](https://chanfana.pages.dev/routers/itty-router/), etc application, without touching old routes
- CLI to extract the schema.json from your code (npx chanfana)

## Getting started

Get started with a template with this command:

```bash
npm create cloudflare@latest -- --type openapi
```

## Installation

```bash
npm i chanfana --save
```

## Command-Line Interface (CLI)

Chanfana provides a CLI tool to extract the OpenAPI schema from your Cloudflare Worker project. The `npx chanfana` command starts a local development server using `npx wrangler dev`, captures the server URL, fetches the OpenAPI schema from the `/openapi.json` endpoint, removes any paths marked with `x-ignore: true`, and writes the resulting schema to a file.

**Usage:**

```bash
npx chanfana [-o <path-to-output-schema.json>] [wrangler-options]
```

**Options:**
- `-o, --output <path>`: Specifies the output file path for the OpenAPI schema (optional, defaults to `./schema.json`).
- `[wrangler-options]`: Additional options passed to `npx wrangler dev` (e.g., `--port 8788`, `--env dev`).

**Example:**

To extract the schema and save it to `schema.json`:

```bash
npx chanfana
```

To use a custom output file and port:

```bash
npx chanfana -o custom_schema.json --port 8788
```

This will:
1. Run `npx wrangler dev` with any provided `wrangler` options in the current Worker project directory.
2. Wait for the server to start and capture the first URL from the "ready on" message (e.g., `http://0.0.0.0:8788`).
3. Fetch the OpenAPI schema from `<url>/openapi.json`.
4. Remove any paths in the schema where any method (e.g., `get`, `post`) has `x-ignore: true`.
5. Write the modified schema to `schema.json` (or the file specified with `-o`) in the current working directory.
6. Terminate the development server and exit.

**Notes:**
- Ensure your Worker project is configured correctly with a `wrangler.toml` file and exposes an `/openapi.json` endpoint.
- The output file path is relative to the current working directory. Parent directories must exist for nested paths (e.g., `output/schema.json`).
- If the schema fetch fails or the server doesn't start within 60 seconds, buffered output and error details are logged.
- The process is automatically cleaned up if interrupted (e.g., Ctrl+C) or if an error occurs.

## Minimal Hono Example

```ts
import { fromHono, OpenAPIRoute } from 'chanfana'
import { Hono } from 'hono'
import { z } from 'zod'

export type Env = {
    // Example bindings
    DB: D1Database
    BUCKET: R2Bucket
}
export type AppContext = Context<{ Bindings: Env }>

export class GetPageNumber extends OpenAPIRoute {
  schema = {
    request: {
      params: z.object({
        id: z.string().min(2).max(10),
      }),
      query: z.object({
        page: z.number().int().min(0).max(20),
      }),
    },
  }

  async handle(c: AppContext) {
    const data = await this.getValidatedData<typeof this.schema>()

    return c.json({
      id: data.params.id,
      page: data.query.page,
    })
  }
}

// Start a Hono app
const app = new Hono<{ Bindings: Env }>()

// Setup OpenAPI registry
const openapi = fromHono(app)

// Register OpenAPI endpoints (this will also register the routes in Hono)
openapi.get('/entry/:id', GetPageNumber)

// Export the Hono app
export default app
```

## Feedback and contributions

[chanfana](https://github.com/cloudflare/chanfana) aims to be at the core of new APIs built using
Workers and define a pattern to allow everyone to
have an OpenAPI-compliant schema without worrying about implementation details or reinventing the wheel.

chanfana is considered stable and production ready and is being used with
the [Radar 2.0 public API](https://developers.cloudflare.com/radar/) and many other Cloudflare products.

You can also talk to us in the [Cloudflare Community](https://community.cloudflare.com/) or
the [Radar Discord Channel](https://discord.com/channels/595317990191398933/1035553707116478495)
