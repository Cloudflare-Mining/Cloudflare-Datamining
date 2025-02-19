### 🧠 `@cloudflare/agents` βeta!

A place to run ALL your AI agents.

Built on Cloudflare's Durable Objects, `@cloudflare/agents` gives a stateful environment that can respond to inputs like emails, websockets, http requests, media streams, delays and crons, or even arbitrary function calls, and run long running processes and code. The Cloudflare network will quickly start and run these containers for you across a planetary network of computers. You can combine agents with LLMs, workers, databases, and other services to build complex agentic workflows.

### examples

- [Building effective AI agents with Cloudflare](/guides/anthropic-patterns/README.md): A deep dive into implementing the major 5 LLM agent patterns with `@cloudflare/agents`.

Coming soon -

- [Humans in the loop, forever](#): A look at running AI agents that can interact with humans and run for years.
- [Adding agents to an existing application/stack](#): A guide to adding agents to an existing application/stack.
- (and more soon)

### get started

Make a new full stack project:

```sh
npm create cloudflare@latest -- --template agents
```

Or install the package in your wrangler project and follow the usage instructions below.

```sh
npm install @cloudflare/agents
```

### usage

1. Make an agent by extending the `Agent` class:

```ts
import { Agent } from "@cloudflare/agents";
import openai from "openai";

export class MyEmailAgent extends Agent {
  async onRequest(request) {
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
  // or define your own methods
  async run(props) {
    // ...
  }
}
```

2. Configure `wrangler.json` to use the agent:

```jsonc
{
  // ...
  "durable_objects": {
    "bindings": [
      {
        "binding": "MyEmailAgent",
        "class_name": "MyEmailAgent"
        // you can also use an id param, like my-email-agent-:id@example.com
      }
    ]
  }
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

### http/websockets

Every agent can respond to http and websocket requests. You can use this to build chatbots, trigger workflows, and more.

- `onConnect(connection, context)` - Called when a new websocket connection is established. You can use this to set up any connection-specific state or perform other initialization. Receives a reference to the connecting `Connection`, and a `ConnectionContext` that provides information about the initial connection request.

- `onMessage(connection, message)` - Called when a message is received on a connection.

- `onClose(connection, code, reason, wasClean)` - Called when a connection is closed by a client. By the time `onClose` is called, the connection is already closed and can no longer receive messages.

- `onError(connection, error)` - Called when an error occurs on a connection.

- `onRequest(request): Response` - Called when a request is made to the server. This is useful for handling HTTP requests in addition to WebSocket connections.

### email (coming soon)

Cloudflare Agents can receive and send emails. After setting up your project to recieve emails ([instructions here](https://developers.cloudflare.com/email-routing/email-workers/enable-email-workers/)), you can route an email to your agent's `onEmail` method, run some code, and then optionally reply to the email.

### scheduling

An `Agent` can schedule tasks to be run in the future by calling `this.schedule(when, callback, data)`, where `when` can be a delay, a Date, or a cron string; `callback` the function name to call, and `data` is an object of data to pass to the function.

```ts
// schedule a task to run in 10 seconds
this.schedule(10, "myTask", { message: "hello" });

// schedule a task to run at a specific date
this.schedule(new Date("2025-01-01"), "myTask", { message: "hello" });

// schedule a task to run every 10 seconds
this.schedule("*/10 * * * *", "myTask", { message: "hello" });

// schedule a task to run every 10 seconds, but only on mondays
this.schedule("0 0 * * 1", "myTask", { message: "hello" });

// cancel a scheduled task
this.cancelSchedule(taskId);
```

### pause/resume

An `Agent` will shut down (hibernate) if it's idle for a few seconds, and wake up when it receives a message or a scheduled event. This means you can run agentic workflows that takes days/months/years without worrying about paying for running servers. To preserve state when agents go to sleep, you can use the inbuilt sqlite database to save data and pick it up again on wake up (available on `this.sql` inside an Agent)

```ts
// save data to the database
this.ctx.storage.sql.exec("INSERT INTO data (message) VALUES (${message})");

// get data from the database
const data = this.ctx.storage.sql.exec("SELECT * FROM data").all();
```

### persistence

Each agent comes with an inbuilt sqlite database for persisting state. You can access it with `this.ctx.storage.sql` inside an agent. [Learn more about it here.](https://developers.cloudflare.com/durable-objects/get-started/tutorial-with-sql-api/)

(coming soon) In addition, `this.state` is a key value store that is persisted across agent restarts.

### memory (coming soon)

The Cloudflare platform has a number of storage solutions for differing usecases: KV for key value storage, D1 for relational storage, R2 for object storage, and more. In particular, [vectorize](https://developers.cloudflare.com/vectorize/) is a vector database that makes building RAG systems easier.

In addition to that... (coming soon)

### workflows

While it's extremely easy to run long running code inside a durable object, we also recommend using Cloudflare Workflows for building more complex workflows. This goves features like retries, sleeping, and evet triggers out of the box. Learn more about workflows [here](https://developers.cloudflare.com/workflows/).

```ts
import { WorkflowEntrypoint, Agent } from "@cloudflare/agents";

export class MyWorkflow extends WorkflowEntrypoint {
  async run(props) {
    // ...
  }
}

export class MyAgent extends Agent {
  async run(props) {
    this.env.MyWorkflow.create(props);
  }
}
```

### evals (coming soon)

### observability (coming soon)

### develop and test locally

Cloudflare Agents can be developed and tested locally with `wrangler dev` or `vite dev`, and deployed with `wrangler deploy`. This means that it can be included in your existing Workers project and/or codebase.

### bring your own X

You can use any of the included solutions, or bring your own services. Have your own vector database/rag service? Maybe you want to use resend for emails? It all works great in the connectivity cloud!

### python agents (coming soon)

### self hosting (coming soon)

### how is this different from durable objects?

### read more

- [Build agents on Cloudflare](https://developers.cloudflare.com/agents/)
- [A list of reasons why you should be using Cloudflare Workers for building your AI agent infrastructure/product/personal assistant](https://sunilpai.dev/posts/cloudflare-workers-for-ai-agents/)
- [ai agents are local first clients](https://www.joshwcomeau.com/ai/local-first/)
- [full stack ai agents](https://sunilpai.dev/posts/full-stack-ai-agents/)
- [reliable ux for ai chat with cloudflare agents](https://sunilpai.dev/posts/reliable-ux-for-ai-chat-with-durable-objects/)
- [a task tracking system for ai agents](https://sunilpai.dev/posts/ai-agents-need-tracking/)
- [the next evolution of serverless is stateful](https://sunilpai.dev/posts/the-future-of-serverless/)
