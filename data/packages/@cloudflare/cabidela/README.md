<div align="center">
  <a href="https://cabidela.pages.dev/">
    <img src="https://raw.githubusercontent.com/cloudflare/cabidela/refs/heads/main/assets/cabidela.png" width="500" height="auto" alt="cabidela"/>
  </a>
</div>

<p align="center">
    <em>Small, fast, eval-less, <a href="https://developers.cloudflare.com/workers/">Cloudflare Workers</a> compatible, dynamic JSON Schema validator.</em>
</p>

<hr />

## What is

Cabidela is a small, fast, eval-less, Cloudflare Workers compatible, dynamic JSON Schema validator. It implements a large subset of <https://json-schema.org/draft/2020-12/json-schema-validation> that should cover most use-cases. But not all. See limitations below.

## How to use

Install the package:

```bash
npm install @cloudflare/cabidela --save
```

Import it:

```ts
import { Cabidela } from "@cloudflare/cabidela";
```

Use it:

```ts
let schema: any = {
  type: "object",
  properties: {
    prompt: {
      type: "string",
      minLength: 1,
      maxLength: 131072,
      description: "The input text prompt for the model to generate a response.",
    },
    num_steps: {
      type: "number",
      minimum: 0,
      maximum: 20,
      description: "Increases the likelihood of the model introducing new topics.",
    },
  },
  required: ["prompt"],
};

const cabidela = new Cabidela(schema);

cabidela.validate({
  prompt: "Tell me a joke",
  num_steps: 5,
});
```

Cabidela implements a [Exception-Driven Validation](https://json-schema.org/implementers/interfaces#exception-driven-validation) approach. If any condition in the schema is not met, we throw an error.

## API

### New instance

`const cabidela = new Cabidela(schema: any, options?: CabidelaOptions)`

Cabidela takes a JSON-Schema and optional configuration flags:

- `applyDefaults`: boolean - If true, the validator will apply default values to the input object. Default is false.
- `errorMessages`: boolean - If true, the validator will use custom `errorMessage` messages from the schema. Default is false.
- `fullErrors`: boolean - If true, the validator will be more verbose when throwing errors for complex schemas (example: anyOf, oneOf's), set to false for shorter exceptions. Default is true.
- `useMerge`: boolean - Set to true if you want to use the `$merge` keyword. Default is false. See below for more information.
- `subSchemas`: any[] - An optional array of sub-schemas that can be used with `$id` and `$ref`. See below for more information.

Returns a validation object.

You can change the schema at any time by calling `cabidela.setSchema(schema: any)`.

You can change the options at any time by calling `cabidela.setOptions(options: CabidelaOptions)`.

### Validate payload

Call `cabidela.validate(payload: any)` to validate your payload.

Returns truth if the payload is valid, throws an error otherwise.

```js
const payload = {
  messages: [
    { role: "system", content: "You're a helpful assistant" },
    { role: "user", content: "What is Cloudflare?" },
  ],
};

try {
  cabidela.validate(payload);
  console.log("Payload is valid");
} catch (e) {
  console.error(e);
}
```

## Modifying the payload

Some options, like `applyDefaults`, will modify the input object.

```js
const schema = {
  type: "object",
  properties: {
    prompt: {
      type: "string",
    },
    num_steps: {
      type: "number",
      default: 10,
    },
  },
};

const cabidela = new Cabidela(schema, { applyDefaults: true });

const payload = {
  prompt: "Tell me a joke",
});

cabidela.validate(payload);

console.log(payload);

// {
//   prompt: 'Tell me a joke',
//   num_steps: 10
// }

```

### oneOf defaults

Using `applyDefaults` with `oneOf` will one apply the default value of the sub-schema that matches the condition. For
example, using this schema:

```javascript
  {
    type: "object",
    oneOf: [
      {
        type: "object",
        properties: {
          sun: {
            type: "number",
            default: 9000,
          },
          moon: {
            type: "number",
            default: 9000,
          },
        },
        required: ["sun"],
      },
      {
        type: "object",
        properties: {
          sun: {
            type: "number",
            default: 9000,
          },
          moon: {
            type: "number",
            default: 9000,
          },
        },
        required: ["moon"],
      },
    ],
  };
```

- The payload `{ sun: 10}` will be modified to `{ sun: 10, moon: 9000 }`.
- The payload `{ moon: 10}` will be modified to `{ sun: 9000, moon: 10 }`.
- The payload `{ saturn: 10}` will throw an error because no condition is met.

### $id, $ref, $defs

The keywords [$id](https://json-schema.org/understanding-json-schema/structuring#id), [$ref](https://json-schema.org/understanding-json-schema/structuring#dollarref) and [$defs](https://json-schema.org/understanding-json-schema/structuring#defs) can be used to build and maintain complex schemas where the reusable parts are defined in separate schemas.

The following is the main schema and a `customer` sub-schema that defines the `contacts` and `address` properties.

```js
import { Cabidela } from "@cloudflare/cabidela";

const schema = {
  $id: "http://example.com/schemas/main",
  type: "object",
  properties: {
    name: { type: "string" },
    contacts: { $ref: "customer#/contacts" },
    address: { $ref: "customer#/address" },
    balance: { $ref: "$defs#/balance" },
  },
  required: ["name", "contacts", "address"],
  "$defs": {
    "balance": {
      type: "object",
      prope      properties: {
        currency: { type: "string" },
        amount: { type: "number" },
      },
    }
  }
};

const contactSchema = {
  $id: "http://example.com/schemas/customer",
  contacts: {
    type: "object",
    properties: {
      email: { type: "string" },
      phone: { type: "string" },
    },
    required: ["email", "phone"],
  },
  address: {
    type: "object",
    properties: {
      street: { type: "string" },
      city: { type: "string" },
      zip: { type: "string" },
      country: { type: "string" },
    },
    required: ["street", "city", "zip", "country"],
  },
};

const cabidela = new Cabidela(schema, { subSchemas: [contactSchema] });

cabidela.validate({
  name: "John",
  contacts: {
    email: "john@example.com",
    phone: "+123456789",
  },
  address: {
    street: "123 Main St",
    city: "San Francisco",
    zip: "94105",
    country: "USA",
  },
});
```

## Combined schemas and $merge

The standard way of combining and extending schemas is by using the [`allOf`](https://json-schema.org/understanding-json-schema/reference/combining#allOf) (AND), [`anyOf`](https://json-schema.org/understanding-json-schema/reference/combining#anyOf) (OR), [`oneOf`](https://json-schema.org/understanding-json-schema/reference/combining#oneOf) (XOR) and [`not`](https://json-schema.org/understanding-json-schema/reference/combining#not) keywords, all supported by this library.

Cabidela supports an additional keyword `$merge` (inspired by [Ajv](https://ajv.js.org/guide/combining-schemas.html#merge-and-patch-keywords)) that allows you to merge two objects. This is useful when you want to extend a schema with additional properties and `allOf`` is not enough.

Here's how it works:

```json
{
  "$merge": {
    "source": {
      "type": "object",
      "properties": { "p": { "type": "string" } },
      "additionalProperties": false
    },
    "with": {
      "properties": { "q": { "type": "number" } }
    }
  }
}
```

Resolves to:

```json
{
  "type": "object",
  "properties": {
    "p": {
      "type": "string" }
    },
    "q": {
      "type": "number"
    }
  },
  "additionalProperties": false
}
```

To use `$merge` set the `useMerge` flag to true when creating the instance.

```js
new Cabidela(schema, { useMerge: true });
```

You can combine `$merge` with `$id` and `$ref` keywords, which get resolved first, for even more flexibility.

## Custom errors

If the new instance options has the `errorMessages` flag set to true, you can use the property `errorMessage` in the schema to define custom error messages.

```js
const schema = {
  type: "object",
  properties: {
    prompt: {
      type: "string",
    },
  },
  required: ["prompt"],
  errorMessage: "prompt required",
};

const cabidela = new Cabidela(schema, { errorMessages: true });

const payload = {
  missing: "prompt",
});

cabidela.validate(payload);
// throws "Error: prompt required"
```

## Tests

The tests can be found [here](./tests/).

Cabidela uses [vitest](https://vitest.dev/) to test internal methods and compliance with the [JSON Schema specification](https://json-schema.org/). To run the tests type:

```bash
npm run test
```

You can also run the tests with [Ajv](https://ajv.js.org/), or both. This allows us to compare the results and double-check how we interpret the specification.

```bash
npm run test-ajv
npm run test-all
```

## Performance

JSON Schema validators like Ajv tend to follow this pattern:

1. Instantiate a validator.
2. Compile the schema.
3. Validate one or more payloads against the (compiled) schema.

All of these steps have a cost. Compiling the schema makes sense if you are going to validate multiple payloads in the same session. But in the case of a Workers application we typically want to validate with the HTTP request, one payload at a time, and then we discard the validator.

Cabidela skips the compilation step and validates the payload directly against the schema.

In our benchmarks, Cabidela is significantly faster than Ajv on all operations if you don't reuse the validator. Even when we skip the instantiation and compilation steps from Ajv, Cabidela still performs relatively well.

Here are some results:

```bash
  Cabidela - benchmarks/00-basic.bench.js > allOf, two properties
    1929.61x faster than Ajv

  Cabidela - benchmarks/00-basic.bench.js > allOf, two objects
    1351.41x faster than Ajv

  Cabidela - benchmarks/00-basic.bench.js > anyOf, two conditions
    227.48x faster than Ajv

  Cabidela - benchmarks/00-basic.bench.js > oneOf, two conditions
    224.49x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > Big array payload
    386.44x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > Big object payload
    6.08x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > Deep schema, deep payload
    59.75x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > allOf, two properties
   1701.95x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > allOf, two objects
    1307.04x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > anyOf, two conditions
    207.73x faster than Ajv

  Cabidela - benchmarks/80-big-ops.bench.js > oneOf, two conditions
    211.72x faster than Ajv
```

We use Vitest's [bench](https://vitest.dev/api/#bench) feature to run the benchmarks. You can find the benchmarks in the [benchmarks](./benchmarks/) folder and you can run them with:

```bash
npm run benchmark
```

## Current limitations

Cabidela supports most of JSON Schema specification, and should be useful for many applications, but it's not complete. **Currently** we do not support:

- Multiple (array of) types `{ "type": ["number", "string"] }`
- Pattern properties
- `dependentRequired`, `dependentSchemas`, `If-Then-Else`

yet.
