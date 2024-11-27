Honeycomb logger is a simple library that lets you extremely easily export runtime information from your [Cloudflare Workers](https://workers.cloudflare.com/) into [Honeycomb](https://honeycomb.io).
Honeycomb is an observability platform which allows you to query and graph across any (number of) dimension(s) you have in your data. So you can for example graph request duration for 200 response codes, for GET requests, to a particular URL, for a particular customer.

Or you can drill into an entire trace of a request that errored out, including all subrequests.

Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [AddEventListener configuration](#addeventlistener-configuration)
  - [Module syntax configuration](#module-syntax-configuration)
  - [Durable Object configuration](#durable-object-configuration)
- [Config](#config)
- [Adding logs and other data](#adding-logs-and-other-data)
- [Traces](#traces)
- [Dynamic Sampling](#dynamic-sampling)

### Prerequisites

This script does not yet work for scheduled workers. It supports Workers in both the `addEventListener` and module syntaxes, including Durable Objects. For more information on Durable Object support, see below.

### Getting started

Installation is done via the usual `npm install @cloudflare/workers-honeycomb-logger` or `yarn add @cloudflare/workers-honeycomb-logger`.

The next two things you need are a Honeycomb API key and a dataset name. You can pick any dataset name you like, Honeycomb will automatically create a new dataset if it sees a new name.

The next step depends on if you are using the `addEventListener` format or the new module format (required for Durable Objects)

⚠️ You also need to enable the `Automatically unpack nested JSON` setting in the dataset settings in https://ui.honeycomb.io to be able to query over all the data that is automatically included.

#### AddEventListener configuration

To configure the package, you need to wrap your listener with the honeycomb logger. So if your current code looks something like this:

```javascript
addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

function handleRequest(request) {
  //your worker code.
}
```

You can change that to:

```javascript
import { hc } from '@cloudflare/workers-honeycomb-logger'

const hc_config = {
  apiKey: '<api_key>',
  dataset: '<my-first-dataset>',
}
const listener = hc(hc_config, (event) => {
  event.respondWith(handleRequest(event.request))
})

addEventListener('fetch', listener)

function handleRequest(request) {
  //your worker code.
}
```

You are now good to go. Read through the config section to see what else you can configure.
If you run into any problems, here is a [full example of an addEventListener configured worker](https://github.com/cloudflare/workers-honeycomb-logger/blob/main/run/worker/src/index.js)

#### Module syntax configuration

If you are using the module syntax, the setup is slightly different. But you still have to wrap the worker.

If your code was something like this:

```javascript
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello world!', { status: 200 })
  },
}
```

You would change that to something like:

```javascript
const worker = {
  async fetch(request, env, ctx) {
    return new Response('Hello world!', { status: 200 })
  },
}

const config = {
  apiKey: '__HONEYCOMB_API_KEY__', // can also be provided by setting env var HONEYCOMB_API_KEY
  dataset: 'my-first-dataset', // can also be provided by setting env var HONEYCOMB_DATASET
}

export default wrapModule(config, worker)
```

You are now good to go. Read through the config section to see what else you can configure.
If you run into any problems, here is a [full example of a module syntax configured worker](https://github.com/cloudflare/workers-honeycomb-logger/blob/main/run/module-worker/src/index.mjs)

If you don't want to hardcode the API key manually, you can also set the environment variables `HONEYCOMB_API_KEY` and `HONEYCOMB_DATASET` and they will override whatever is inserted into `wrapModule`.

#### Durable Object configuration

If you are using Durable Objects, we support automatic distributed tracing across both your workers and your Durable Objects.
You need to wrap your Worker code with the [module system configuration](#module-syntax-configuration) above, and then wrap your durable object as well.

You can do it like this:

```javascript
import { Counter as counter_do } from './counter.mjs'

const worker = {
  async fetch(request, env) {
    // handleRequest
  },
}

const config = {
  apiKey: '__HONEYCOMB_API_KEY__', // can also be provided by setting env var HONEYCOMB_API_KEY
  dataset: 'my-first-dataset', // can also be provided by setting env var HONEYCOMB_DATASET
}

const Counter = wrapDurableObject(config, counter_do)
export default wrapModule(config, worker)
export { Counter }
```

If you run into any problems, here is a [full example of a durable object configured worker](https://github.com/cloudflare/workers-honeycomb-logger/blob/main/run/do-worker/src/index.mjs)

### Config

The config object can take a few extra parameters to add more detail to the events that are sent to Honeycomb or configure other aspects.

```typescript
interface Config {
  apiKey?: string //The honeycomb API Key, can be specified as env var HONEYCOMB_API_KEY
  dataset?: string //The name of the dataset, can be specified as env var HONEYCOMB_DATASET
  acceptTraceContext?: boolean //Do you want to accept automatic TraceContext information from clients? Defaults to 'false'
  data?: any //Any data you want to add to every request. Things like service name, version info etc.
  redactRequestHeaders?: string[] //Array of headers to redact. Will replace value with `REDACTED`. default is ['authorization', 'cookie', 'referer'].
  redactResponseHeaders?: string[] //Array of headers to redact. Will replace value with `REDACTED`. default is ['set-cookie'].
  sampleRates?: SampleRates | SampleRateFn //Either an object or function that configured sampling ([See below](#dynamic-sampling))
  sendTraceContext?: boolean | RegExp //set this to true to send a TraceContext with all fetch requests. With a Regex, we will check the URL against the regex first. Defaults to 'false'
  serviceName?: string //The serviceName you want to see in Honeycomb. Defaults to 'worker'
  debugLog?: boolean // console.log response info for Honeycomb requests. Defaults to false
}
```

NOTE: In previous versions there were methods for parsing request and responses, but this becomes an issue when reading the body of the request or the response, so it has been removed. If you want add any information you can do so with the `tracer.addData` method described below.

### Adding logs and other data

If you want to add any other data or logs to the current request, you can use the `tracer.addData(data: object)` and `tracer.log(message: string)` methods.
You can get a reference to the tracer either on the request object, or the second argument in the listener.

```typescript
async function handleRequest(request: TracerRequest) {
  request.tracer.log('handling request')
  const customer = parseCustomer(request)
  request.tracer.addData({customer: customer.name})
  return ...
}
```

### Traces

Honeycomb has a concept of a trace, which is a hierarchial representatation of multiple, related events. The Cloudflare Worker Honeycomb logger supports trace events for subrequests (outgoing HTTP fetch requests in your worker) like this:

<img width="1089" alt="Screenshot 2021-03-18 at 10 53 06 AM" src="https://user-images.githubusercontent.com/890386/111732941-ca13d200-88ca-11eb-94cb-a4f30a462788.png">

To be able to associate the a subrequest with the correct incoming request, you will have to use the fetch defined on the tracer described above. The method on the tracer delegates all arguments to the regular fetch method, so the `tracer.fetch` function is a drop-in replacement for all `fetch` function calls.

Example:

```typescript
async function handleRequest(request: Request) {
  return request.tracer.fetch('https://docs.honeycomb.io/api/events/')
}
```

If you want to enable automatic distributed traces from your client to your backend, you can enable the `acceptTrace` property to participate in the trace started by your client and `sendTraceContext` to automatically send through the [TraceContext](https://www.w3.org/TR/trace-context/#examples-of-http-traceparent-headers) to your backend.
This only works on the `fetch` methods that are defined on the `tracer` object and is compatible with any of the official Honeycomb beeline frameworks.
Remember that you do have to use the same `dataset` for all systems to be able to assemble your trace in Honeycomb.

### Dynamic Sampling

One of the challenges with storing all this information per request is that when you scale that up to past tens of millions of requests as month, it becomes more and more expensive. But at the same time you are almost certainly not very interested in the vast majority of the events. Which is why Honeycomb supports sampling. Sending only a portion of the events there. The problem with doing simple sampling (like sending only 1 in 10 requests for example), is that you lose a lot of events that happen rarely. So Honeycomb and this library support dynamic sampling.
The easiest sampling that you can configure is by response code. So you can configure to keep only 1 in 10 responses code 200s, and keep all 5xx.

The number is technically how many requests it is representative for. An easier way to remember is that a request has a 1/x chance to be sampled.

```typescript
export interface SampleRates {
  '1xx': number
  '2xx': number
  '3xx': number
  '4xx': number
  '5xx': number
  exception: number
}
```

In an example:

```typescript
const hc_config = {
  api_key: 'abcd',
  dataset: 'my-first-dataset',
  sampleRates: {
    '1xx': 20,
    '2xx': 10,
    '3xx': 5,
    '4xx': 2,
    '5xx': 1,
    exception: 1,
  },
}
```

This configures the library to only send 1 in 10 requests with a response code in the 200s, but keep all errors; both 500s and exceptions.

If you want more fine grained control over what is sampled, you can supply a function that takes the entire `data` object of the outer event.
This is the exact object that will be sent to Honeycomb, so you can see what values are available there.
This includes all information that you have added with `request.tracer.addData()`

Please note that the `Headers` for both request and response objects are converted into a `Record<string, string>`. So if you want to check the `content-type` headers in the response, you can do `data.response.headers['content-type']`.

Examples

```typescript
function sampleRates(data: any): number {
  if (data.request.url.contains('/healthcheck')) {
    return 0
  } else if (data.customer.plan === 'enterprise') {
    return 5
  } else if (data.response.ok === true) {
    return 20
  } else {
    return 1
  }
}
```

The one caveat with sampling and distributed tracing is that if you sample in both/all systems independently of one another, that it
becomes likely that you will get partial traces.
