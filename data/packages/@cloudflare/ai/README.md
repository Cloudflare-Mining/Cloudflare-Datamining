# Workers AI SDK

This package has been deprecated in favor of a new native AI binding, read [more here](https://developers.cloudflare.com/workers-ai/configuration/bindings/).

You can use the new native binding just by calling the `.run()` directly in the binding like this:

```
const answer = env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
    prompt: "What is the origin of the phrase 'Hello, World'"
});
```
