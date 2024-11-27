# fastify-edge

An experimental **lightweight worker version** of [Fastify](https://fastify.io).

Currently [**Cloudflare Workers**](https://workers.cloudflare.com/) and [**Bun**](https://bun.sh/) are supported.

## Install

```js
npm i fastify-edge --save
````

## Usage: Bun

```js
import FastifyEdge from 'fastify-edge/bun'

const app = FastifyEdge();

app.get('/', (_, reply) => {
  reply.send('Hello World')
})

export default app;
```

See [`examples/bun`](https://github.com/galvez/fastify-edge/tree/main/examples/bun).

## Usage: Cloudflare Workers

```js
import FastifyEdge from 'fastify-edge'

const app = FastifyEdge()

app.get('/', (_, reply) => {
  reply.send('Hello World')
})
```

See [`examples/cloudflare`](https://github.com/galvez/fastify-edge/tree/main/examples/cloudflare) with [`miniflare`](https://github.com/cloudflare/miniflare).

## Advanced Example

```js
app.addHook('onSend', (req, reply, payload) => {
  if (req.url === '/') {
    return `${payload} World!`
  }
})

app.get('/redirect', (_, reply) => {
  reply.redirect('/')
})

app.get('/route-hook', {
  onRequest (_, reply) {
    reply.send('<b>Content from onRequest hook</b>')
  },
  handler (_, reply) {
    reply.type('text/html')
  }
})
```

## Supported APIs

### Server

- `app.addHook(hook, function)`
- `app.route(settings)`
- `app.get(path, handlerOrSettings)`
- `app.post(path, handlerOrSettings)`
- `app.put(path, handlerOrSettings)`
- `app.delete(path, handlerOrSettings)`
- `app.options(path, handlerOrSettings)`

### Request

<table>
<tr>
<td width="33%">
  
`req.url`

</td>
<td>
  
Returns the request URL path (`URL.pathname` + `URL.search`).

</td>
</tr>
<tr>
<td width="33%">
  
`req.origin`

</td>
<td>
  
Returns the request URL origin (e.g., `http://localhost:3000`).

</td>
</tr>
</tr>
<tr>
<td width="33%">
  
`req.hostname`

</td>
<td>
  
Returns the request URL hostname (e.g., `localhost`).

</td>
</tr>
<tr>
<td width="33%">
  
`req.protocol`

</td>
<td>
  
Returns the request URL protocol (e.g., `http` or `https`).

</td>
</tr>
<tr>
<td>
  
`req.query`

</td>
<td>
  
Maps to the `fetch` request URL's `searchParams` object through a `Proxy`.

</td>
</tr>
<tr>
<td>

`req.body`

</td>
<td>

The consumed body following the parsing pattern from [this example](https://developers.cloudflare.com/workers/examples/read-post/).

</td>
</tr>
<tr>
<td>

`req.params`

</td>
<td>
  
The parsed route params from the internal Radix-tree router, **[radix3](https://github.com/unjs/radix3)**.
  
</td>
</tr>
<tr>
<td>

`req.headers`

</td>
<td>

Maps to the `fetch` request `headers` object through a `Proxy`.

</td>
</tr>
<tr>
<td>

`req.raw`

</td>
<td>

The raw `fetch` request object.

</td>
</tr>
</table>


### Reply

<table>
<tr>
<td width="33%">

`reply.code(code)`

</td>
<td>

Sets the `fetch` response `status` property.

</td>
</tr>
<tr>
<td>

`reply.header(key, value)`

</td>
<td>
  
Adds an individual header to the `fetch` response `headers` object.
  
</td>
</tr>
<tr>
<td>

`reply.headers(object)`

</td>
<td>

Adds multiple headers to the `fetch` response `headers` object.

</td>
</tr>
<tr>
<td>

`reply.getHeader(key)`

</td>
<td>

Retrieves an individual header from `fetch` response `headers` object.

</td>
</tr>
<tr>
<td>

`reply.getHeaders()`

</td>
<td>

Retrieves all headers from `fetch` response `headers` object.

</td>
</tr>
<tr>
<td>

`reply.removeHeader(key)`

</td>
<td>

Remove an individual header from `fetch` response `headers` object.

</td>
</tr>
<tr>
<td>

`reply.hasHeader(header)`

</td>
<td>

Asserts presence of an individual header in the `fetch` response `headers` object.

</td>
</tr>
<tr>
<td>

`reply.redirect(code, dest)`<br>
`reply.redirect(dest)`

</td>
<td>

Sets the `status` and redirect location for the `fetch` response object.<br>
Defaults to the HTTP **302 Found** response code.

</td>
</tr>
<tr>
<td>

`reply.type(contentType)`

</td>
<td>

Sets the `content-type` header for the `fetch` response object.

</td>
</tr>
<tr>
<td>

`reply.send(data)`

</td>
<td>

Sets the `body` for the `fetch` response object.<br>

Can be a **string**, an **object**, a **buffer** or a **stream**.

Objects are automatically serialized as JSON.

</td>
</tr>
</table>

## Supported hooks

The original Fastify 
[`onRequest`](https://www.fastify.io/docs/latest/Reference/Hooks/#onrequest),
[`onSend`](https://www.fastify.io/docs/latest/Reference/Hooks/#onsend) and 
[`onResponse`](https://www.fastify.io/docs/latest/Reference/Hooks/#onresponse) are supported.

Diverging from Fastify, they're all treated as **async functions**.

They can be set at the **global** and **route** levels.

## Limitations

- No support for `preHandler`, `preParsing` and `preValdation` hooks.
- No support for Fastify's plugin system (yet).
- No support for Fastify's logging and validation facilities.
- Still heavily experimental, more equivalent APIs coming soon.
