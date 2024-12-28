
## Workers AI Types

This package contains extended TypeScript types for the Workers AI [catalog of models][models].

### Usage

Install the package inside your Cloudflare Workers project:

```sh
npm install @cloudflare/ai-types --save
```

Import the `AiModelTypes` interface in your Workers script:

```ts
import { AiModelTypes } from "@cloudflare/ai-types"
```

Assign the `AiModelsTypes` interface to your Workers AI binding:

```ts
const ai = env.AI as Ai<AiModelTypes>;
```

Your IDE will now provide autocompletion and type checking for the models you use, extending the base `ai.run(model: string, inputs: any)` types from `@cloudflare/workers-types`:

```ts
const res = await ai.run("@cf/openai/whisper", {
  "audio": [13,332,534,332]
});

const text = res.text
```

You'll notice that now you get model names autocompletion and your IDE will check the model inputs types according to the schema of the model selected in the first parameter of the `ai.run` method.

Check the Workers AI [developer documentation][devdocs] for more information.

If you have any questions, reach out on our [Discord channel][discord].

[discord]: https://discord.cloudflare.com/
[devdocs]: https://developers.cloudflare.com/workers-ai/
[models]: https://developers.cloudflare.com/workers-ai/models/
