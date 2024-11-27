# Open Telemetry SDK for Cloudflare Workers

A WIP library for adding tracing (and soon, logging) to Cloudflare Workers.

## Installation

```shell
npm i opentelemetry-sdk-workers
```

## Usage

A basic implementation looks like this:

```typescript
/* Required to patch missing performance API in Cloudflare Workers. */
import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";

export interface Env {
	OTLP_ENDPOINT: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			service: "worker",
            /* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT
		});
		return sdk.sendResponse(new Response("Hello World!"));
	},
};
```

This SDK does not automatically track fetch requests. In order to fetch, you must do so via the `fetch` method exposed by the trace sdk.

```typescript
export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			/* This is the service.name */
			service: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT
		});

		try {
			const response = await sdk.fetch("https://httpbin.org/headers/");
			return sdk.sendResponse(response);
		} catch (ex) {
			sdk.captureException(ex);
		}
	},
};
```

## Logging

This library exposes a basic logger based on [maraisr/diary](https://github.com/maraisr/diary) via `sdk.log`. By default, however, this logger only logs out to console. To enable support logging exports, you'll need to explicitly add the log exporter:

```typescript
export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			/* This is the service.name */
			service: "worker",
			/* The OTLP/HTTP JSON Endpoint to send traces */
			endpoint: env.OTLP_ENDPOINT,
			logExporter: new OTLPJsonLogExporter({
				url: env.OTLP_ENDPOINT
			}),
		});

		try {
			sdk.log.info("Test Log!");

			const response = await sdk.fetch("https://httpbin.org/headers/");
			return sdk.sendResponse(response);
		} catch (ex) {
			sdk.captureException(ex);
		}
	},
};
```

### OTLP/HTTP Protobuf Support

By default this library uses OTLP/HTTP JSON both for size and simplicity reasons. However, this may not be supported by an import or you might the encoded format. If so, you can import and use the protobuf exporter like so:

```typescript
import "opentelemetry-sdk-workers/performance";
import { WorkersSDK } from "opentelemetry-sdk-workers";
/** The proto exporter is packaged seperately due to it's size */
import { OTLPProtoTraceExporter } from "opentelemetry-sdk-workers/exporters/OTLPProtoTraceExporter";

export interface Env {
	OTLP_ENDPOINT: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const sdk = new WorkersSDK(request, ctx, {
			service: "sample-worker",
			traceExporter: new OTLPProtoTraceExporter({
				url: env.OTLP_ENDPOINT
			})
		});

		const url = new URL(request.url);
		const response = await sdk.fetch(`https://httpbin.org${url.pathname}`);
		return sdk.res(response);
	},
};

```
