# AI Gateway SDK

A lightweight TypeScript SDK to Cloudflare's AI Gateway for unified access to multiple AI providers (OpenAI, Google AI Studio, and more).  
Supports text generation (with optional streaming), structured output via Zod, and custom tool integration.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)

---

## Features

- **Multi‐provider** support: OpenAI, Google AI Studio, etc.
- **Streaming** responses for low‐latency consumption.
- **Structured outputs** using [Zod](https://github.com/colinhacks/zod).
- **Custom tool** integration (function calling) for external data/actions.

---

## Installation

```bash
npm install @cloudflare/ai-gateway
# or
yarn add @cloudflare/ai-gateway
```

## Getting Started

Instantiate the AIGateway with your account details and API keys:

```ts
import { AIGateway } from "@cloudflare/ai-gateway";

const gateway = new AIGateway({
  gatewayName: "<YOUR_GATEWAY_NAME>",
  accountId: "<YOUR_ACCOUNT_ID>",
  apiKey: "<YOUR_AIG_CF_TOKEN>"
});
```

### Basic Usage

Generate a one‐off text completion:

```ts
const { output } = await gateway.generateText({
  modelName: "openai/gpt-4.1",
  userPrompt: "Hello, how are you?",
  metadata: {
    eu: true,
  },
});
console.log("Output:", output);
```

### Streaming Responses

Receive partial results as they arrive:

```ts
const { output } = await gateway.generateText({
  modelName: "google-ai-studio/gemini-2.5-flash-preview-04-17",
  userPrompt:
    "Write a 500 word essay on the importance of AI in modern society.",
  stream: true,
});

for await (const chunk of output) {
  console.log("Chunk:", chunk);
}
```

### Structured Output (Zod)

Enforce a JSON schema on the model’s response:

```ts
import z from "zod";

const { output } = await gateway.generateText({
  modelName: "openai/gpt-4.1",
  schema: z.object({
    answer: z.string(),
  }),
  userPrompt: "Hello, how are you?",
});

// `output.answer` is guaranteed to be a string by Zod
console.log("Answer:", output.answer);
```

### Streaming Structured Output

Combine streaming with schema validation:

```ts
const { output } = await gateway.generateText({
  modelName: "openai/gpt-4.1",
  schema: z.object({
    answer: z.string(),
    details: z.object({
      length: z.number(),
      language: z.string(),
    }),
  }),
  stream: true,
  userPrompt:
    "Hello, how are you? What is the length of your response and what language is it in?",
});

output.details.length.then((length) => {
  console.log("Length:", length);
});
output.details.language.then((language) => {
  console.log("Language:", language);
});
output.answer.then((answer) => {
  console.log("Answer:", answer);
});
```

### Custom Tools

Define and register external “tools” (functions) that the model can call:


```ts
import { createTool } from "@cloudflare/ai-gateway";
import z from "zod"; //v3

const weatherTool = createTool({
  name: "getWeather",
  description: "Get the current weather for a given city",
  parameters: z.object({
    city: z.string().describe("The city to fetch weather for"),
  }),
  function: async ({ city }) => {
    // Your implementation here (API call, database lookup, etc.)
    return { city, temperature: 22, condition: "Sunny" };
  },
});

const { output } = await gateway.generateText({
  modelName: "google-ai-studio/gemini-2.5-flash-preview-04-17",
  tools: [weatherTool],
  userPrompt: "Hello, what is the weather in Bangalore?",
});

console.log("Weather:", output);
```

## Limitations

### Streaming
- The SDK runs on the assumption that content chunks always stream in before tool chunks or tool_chunks before content, if either of the chunks come in intertwined then the previous stream chunk is dropped


## API Reference

### `new AIGateway(config: GatewayConfig)`

Creates a new AI gateway client.

```ts
new AIGateway({
  gatewayName: string,
  accountId: string,
  apiKey: string,
});
````

| Property       | Type                    | Description                                  |
| -------------- | ----------------------- | -------------------------------------------- |
| `gatewayName`  | `string`                | Your unique gateway identifier.              |
| `accountId`    | `string`                | Your account ID.                             |
| `apiKey`       | `string`                | A CF token with AI Gateway run scope.        |

---

### `gateway.generateText(options: GenerateTextOptions)`

Generate text (optionally streaming or schema-validated).

```ts
gateway.generateText({
  modelName: string,
  userPrompt: string,
  schema?: ZodSchema<T>,
  stream?: boolean,
  tools?: ReturnType<typeof createTool>[],
  metadata?: Record<string, any>,
}): Promise<GenerateTextResult<T>>
```

| Option       | Type                              | Description                                                                               |
| ------------ | --------------------------------- | ----------------------------------------------------------------------------------------- |
| `modelName`  | `string`                          | Identifier of the provider/model (e.g. `"openai/gpt-4.1"`, `"google-ai-studio/gemini-…"`) |
| `userPrompt` | `string`                          | The text prompt or user query.                                                            |
| `schema?`    | `ZodSchema<T>`                    | Optional Zod schema to validate and type the JSON response.                               |
| `stream?`    | `boolean`                         | If `true`, returns an async iterable of text chunks or field Promises.                    |
| `tools?`     | `ReturnType<typeof createTool>[]` | Array of function-calling tools for the model to invoke.                                  |
| `metadata?`  | `Record<string, any>`             | Provider-specific metadata (e.g. region flags).                                           |

**Returns:**

* **Text**:

  ```ts
  { output: string | AsyncIterable<string> }
  ```
* **Structured Output**:

  ```ts
  { output: T | { [K in keyof T]: Promise<T[K]> } }
  ```

---

### `createTool(config: ToolConfig)`

Define a custom function-calling tool.

```ts
createTool({
  name: string,
  description: string,
  parameters: ZodSchema<object>,
  function: (args: any) => Promise<any>,
});
```

| Property      | Type                     | Description                                                         |
| ------------- | ------------------------ | ------------------------------------------------------------------- |
| `name`        | `string`                 | Unique tool identifier.                                             |
| `description` | `string`                 | Human-readable description for the model.                           |
| `parameters`  | `ZodSchema<object>`      | Zod schema defining the tool’s input parameters.                    |
| `function`    | `(args) => Promise<any>` | Implementation that receives validated inputs and returns a result. |


