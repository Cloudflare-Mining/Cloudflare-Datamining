### `import {Agent} from "@cloudflare/agents"`

A place to run ALL your AI agents, in realtime, on the edge.

An `Agent` is a container for your agents. Built on Cloudflare's Durable Objects, it gives a stateful environment that can respond to inputs like emails, websockets, http requests, media streams, delays, crons, or even arbitrary function calls, and run long running processes and code. The Cloudflare network will quickly start and run these containers for you across a planetary network of edge data centers. You can combine agents with LLMs, workers, databases, and other services to build complex agentic workflows.

### examples

- [Building effective AI agents with Cloudflare](#): A deep dive into implementing the major 5 LLM agent patterns with `@cloudflare/agents`.
- [Humans in the loop, forever](#): A look at running AI agents that can interact with humans and run for years.
- [Adding agents to an existing application/stack](#): A guide to adding agents to an existing application/stack.
- (more soon)

### get started

You can make a brand new project with `npm create cloudflare@latest --template agents` which will generate a full stack project for building your and deploying your agents.

Alternately, run `npm install @cloudflare/agents` to install the package and follow the usage instructions below.

### usage

1. Make an agent by extending the `Agent` class:

```ts
import { Agent } from "@cloudflare/agents";
import openai from "openai";

export class MyEmailAgent extends Agent<Env> {
  async run(props) {
    // ... run your agentic workflow in here
    // use ai sdk, langchain, direct calls to openai, anthropic, etc.
    // combine with KV, D1, R2, vectorize, etc.
    const llm = openai("gpt-4o");
    const result = await llm.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: "Hello, world!" }],
    });
    return result.choices[0].message.content;
  }
}
```

2. Configure `wrangler.json` to use the agent:

```jsonc
{
  // ...
  "agents": [
    {
      "binding": "MyEmailAgent",
      "class_name": "MyEmailAgent"
      // you can also use an id param, like my-email-agent-:id@example.com
    }
  ]
}
```

You can then use the agent in a worker:

```ts
// get a handle on a brand new agent
const id = env.MyEmailAgent.newUniqueId();
const agent = env.MyEmailAgent.get(id);
// you can save the id to a database and use it to retrieve the agent later

// run the agent
agent.run(props);

// you can also create/get a named agent
const agent = getAgentByName(env.MyEmailAgent, "my-email-agent");
```

You could also route a request/websocket to `/agents/:namespace/:id`, or an email `agent-:namespace-:id@example.com` to get a handle on an agent.

```ts
import { routeAgentRequest, routeAgentEmail } from "@cloudflare/agents";

export default {
  async fetch(request, env, ctx) {
    return routeAgentRequest(request, env); // /agents/my-email-agent/agent-007 gets routed to onRequest/onConnect
  },
  async email(email, env, ctx) {
    return routeAgentEmail(email, env); // agent-my-email-agent-007@example.com gets routed to onEmail
  },
};
```

### connect your email to an agent

[TODO]

### connect your chat system to an agent

[TODO]

### lifecycle events

`@cloudflare/agents` has several dx improvements on top of Durable Objects,like lifecycle handlers for http requests, websockets, and alarms and a single boolean config for enabling/disabling hibernation.

- `onStart()`: Called when the server starts for the first time or after waking up from hibernation. You can use this to load data from storage and perform other initialization, such as retrieving data or configuration from other services or databases.

- `onConnect(connection, context)` - Called when a new websocket connection is established. You can use this to set up any connection-specific state or perform other initialization. Receives a reference to the connecting `Connection`, and a `ConnectionContext` that provides information about the initial connection request.

- `onMessage(connection, message)` - Called when a message is received on a connection.

- `onClose(connection, code, reason, wasClean)` - Called when a connection is closed by a client. By the time `onClose` is called, the connection is already closed and can no longer receive messages.

- `onError(connection, error)` - Called when an error occurs on a connection.

- `onRequest(request): Response` - Called when a request is made to the server. This is useful for handling HTTP requests in addition to WebSocket connections.

- `onEmail(email)` - Called when an email is received.

- `onAlarm()` - Called when an alarm is triggered. You can set an alarm by calling `this.ctx.storage.setAlarm(Date)`. Read more about Durable Objects alarms [here](https://developers.cloudflare.com/durable-objects/api/alarms/).

All these methods can be optionally `async`:

### additional methods

- `getConnectionTags(connection, context): string[]` - You can set additional metadata on connections by returning them from `getConnectionTags()`, and then filter connections based on the tag with `this.getConnections`.

- `broadcast(message, exclude = [])` - Send a message to all websocket connections, optionally excluding connection ids listed in the second array parameter.

- `getConnections(tags = [])` - Get all currently connected WebSocket connections, optionally filtered by tags set by `getConnectionTags()`. Returns an iterable list of `Connection`.

- `getConnection(id)` - Get a connection by its ID.

We also include the client for connecting to agents inside `@cloudflare/agents/client`, as well as a react hook for connecting to agents inside `@cloudflare/agents/react`.

### scheduling (coming soon)

An `Agent` can schedule tasks to be run in the future by calling `this.schedule(when, callback, data)`, where `when` can be a delay, a Date, or a cron string; `callback` the function name to call, and `data` is an object of data to pass to the function.

```ts
// schedule a task to run in 10 seconds
this.schedule(Date.now() + 10000, "myTask", { message: "hello" });

// schedule a task to run at a specific date
this.schedule(new Date("2025-01-01"), "myTask", { message: "hello" });

// schedule a task to run every 10 seconds
this.schedule("*/10 * * * *", "myTask", { message: "hello" });

// schedule a task to run every 10 seconds, but only on mondays
this.schedule("0 0 * * 1", "myTask", { message: "hello" });
```

### pause/resume

An `Agent` will shut down (hibernate) if it's idle for a few seconds, and wake up when it receives a message or a scheduled event. This means you can run agentic workflows that takes days/months/years without worrying about paying for running servers. To preserve state when agents go to sleep, you can use the inbuilt sqlite database to save data and pick it up again on wake up (available on `this.sql` inside an Agent)

```ts
// save data to the database
this.sql`INSERT INTO data (message) VALUES (${message})`;

// get data from the database
const data = this.sql`SELECT * FROM data`.all();
```

### how is this different from durable objects?

[TODO]

### read more

- [ai agents are local first clients](https://www.joshwcomeau.com/ai/local-first/)
- [full stack ai agents](https://sunilpai.dev/posts/full-stack-ai-agents/)
- [reliable ux for ai chat with cloudflare agents](https://sunilpai.dev/posts/reliable-ux-for-ai-chat-with-durable-objects/)
- [a task tracking system for ai agents](https://sunilpai.dev/posts/ai-agents-need-tracking/)
- [the next evolution of serverless is stateful](https://sunilpai.dev/posts/the-future-of-serverless/)
