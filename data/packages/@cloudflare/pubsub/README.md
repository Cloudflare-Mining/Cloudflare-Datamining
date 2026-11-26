# pubsub

A set of useful helper methods for writing functions to handle [Cloudflare Pub/Sub](https://developers.cloudflare.com/pub-sub/) messages. This includes:

- A `isValidBrokerRequest` helper for [authenticating incoming on-publish webhooks](https://developers.cloudflare.com/pub-sub/learning/integrate-workers/)
- A `PubSubMessage` type with the fields sent from the Broker to your Worker for use with TypeScript-based Workers and/or for type-aware editors.

## Installation

Use `npm` to install:

```sh
npm install @cloudflare/pubsub
```

## Example

The following example shows how to use `isValidBrokerRequest` in a Worker to validate incoming on-publish webhooks from a Pub/Sub broker.

You can use [`wrangler`](https://github.com/cloudflare/wrangler2) to bundle your code for deployment to [Cloudflare Workers](https://developers.cloudflare.com/workers).

```ts
import { isValidBrokerRequest, PubSubMessage } from "@cloudflare/pubsub"

async function pubsub(
    messages: Array<PubSubMessage>,
    env: any,
    ctx: ExecutionContext
): Promise<Array<PubSubMessage>> {

    // Messages may be batched at higher throughputs, so we should loop over
    // the incoming messages and process them as needed.
    let messagesToKeep: Array<PubSubMessage>
    for (let msg of messages) {
        console.log(msg);
        // Drop debug messages sent by our clients to reduce the load on our
        // subscribers.
        if (!msg.topic.startsWith("debug") {
            messagesToKeep.push(msg)
        }
    }

    return messagesToKeep;
}

const worker = {
    async fetch(req: Request, env: any, ctx: ExecutionContext) {
        // Critical: you must validate the incoming request is from your Broker
        // In the future, Workers will be able to do this on your behalf for Workers
        // in the same account as your Pub/Sub Broker.
        if (await isValidBrokerRequest(req)) {
            // Parse the PubSub message
            let incomingMessages: Array<PubSubMessage> = await req.json();

            // Pass the messages to our pubsub handler, and capture the returned
            // message.
            let outgoingMessages = await pubsub(incomingMessages, env, ctx);

            // Re-serialize the messages and return a HTTP 200.
            // The Content-Type is optional, but must either by
            // "application/octet-stream" or left empty.
            return new Response(JSON.stringify(outgoingMessages), { status: 200 });
        }

        return new Response("not a valid Broker request", { status: 403 });
    },
};

export default worker;
```

You can use `wranger publish` to publish this directly: the latest `wrangler` supports TypeScript natively.

## License

BSD 3-Clause licensed. Copyright Cloudflare, Inc. 2022.
