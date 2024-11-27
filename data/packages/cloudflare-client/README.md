# Cloudflare API Client

[![NPM Version](https://img.shields.io/npm/v/cloudflare-client?style=flat-square)](https://www.npmjs.com/package/cloudflare-client)
[![NPM Downloads](https://img.shields.io/npm/dm/cloudflare-client?style=flat-square)](https://www.npmjs.com/package/cloudflare-client)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square)](http://www.typescriptlang.org/)
[![Donate](https://img.shields.io/badge/dynamic/json?color=%23ff424d&label=Patreon&style=flat-square&query=data.attributes.patron_count&suffix=%20patrons&url=https%3A%2F%2Fwww.patreon.com%2Fapi%2Fcampaigns%2F233228)](http://patreon.com/koistya)
[![Discord](https://img.shields.io/discord/643523529131950086?label=Chat&style=flat-square)](https://discord.gg/bSsv7XM)

Lightweight universal HTTP client for [Cloudflare API](https://api.cloudflare.com/)
based on [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
that works in Node.js, browser, and CF Workers environment. Optimized for a good
developer experience and minimal code with zero dependencies supporting tree-shaking.

## Getting Started

```bash
# Install using NPM
$ npm install cloudflare-client --save

# Install using Yarn
$ yarn add cloudflare-client
```

Once the library is installed, you can cherry pick and configure individual
Cloudflare API endpoints that you need. If you bundle your code (e.g. with
Rollup), only the selected modules will be included into the application bundle.

```ts
import * as Cloudflare from "cloudflare-client";

// EXAMPLE 1:
//   Initialize an HTTP client for managing Cloudflare DNS
//   records using API token for authentication
const dnsRecords = Cloudflare.dnsRecords({
  zoneId: "<CLOUDFLARE_ZONE_ID>",
  accessToken: "<CLOUDFLARE_API_TOKEN>",
});

// EXAMPLE 2:
//   Initialize an HTTP client for managing Cloudflare Workers
//   KV store using API key and email for authentication
const kv = Cloudflare.kv({
  accountId: "<CLOUDFLARE_ZONE_ID>",
  authKey: "<CLOUDFLARE_AUTH_KEY>",
  authEmail: "<CLOUDFLARE_AUTH_EMAIL>",
});
```

## User

```ts
// Initialize an HTTP client for the `user` API endpoint
// using an API token for authentication
const user = Cloudflare.user({ accessToken: "xxx" });

// Fetch the currently logged in / authenticated user details
// https://api.cloudflare.com/#user-user-details
const userDetails = await user.get();
// => {
//   id: "7c5dae5552338874e5053f2534d2767a",
//   email: "user@example.com",
//   ...
// }
```

## User Tokens

```ts
// Initialize an HTTP client for the `userTokens` API endpoint
// using an API token for authentication
const userTokens = Cloudflare.userTokens({ accessToken: "xxx" });

// Verify the user's token
// https://api.cloudflare.com/#user-api-tokens-verify-token
const token = await userTokens.verify();
// => {
//   id: "ed17574386854bf78a67040be0a770b0",
//   status: "active"
// }
```

```ts
// Initialize an HTTP client for the `userTokens` API endpoint
// using an auth key and email
const userTokens = Cloudflare.userTokens({ authKey: "xxx", authEmail: "xxx" });

// Get token details
// https://api.cloudflare.com/#user-api-tokens-token-details
const token = await userTokens.get("ed17574386854bf78a67040be0a770b0");
// => {
//   id: "ed17574386854bf78a67040be0a770b0",
//   name: "My Token",
//   status: "active",
//   policies: [...],
//   ...
// }
```

## DNS Records

```ts
// Initialize an HTTP client for managing DNS records
// within the target zone using API token for authentication
const dnsRecords = Cloudflare.dnsRecords({ zoneId: "xxx", accessToken: "xxx" });
```

```ts
// Find all DNS records of type "A"
const records = await dnsRecords.find({ type: "A" }).all();

// Find the first DNS record with the specified name
const record = await dnsRecords.find({ type: "A", name: "test" }).first();
// => {
//  id: "372e67954025e0ba6aaa6d586b9e0b59",
//  type: "A",
//  name: "test.example.com",
//  content: "192.0.2.1",
//  ...
// }
```

```ts
// Fetch the list of DNS records and iterate through the result set using `for await`
const records = await dnsRecords.find({ type: "A" });

for await (const record of records) {
  console.log(record);
}
```

```ts
// Get a specific DNS record by its ID
// https://api.cloudflare.com/#dns-records-for-a-zone-dns-record-details
const record = await dnsRecords.get("372e67954025e0ba6aaa6d586b9e0b59");

// Create a new DNS record
// https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record
const record = await dnsRecords.create({
  type: "A",
  name: "test.example.com",
  content: "192.0.2.1",
  proxied: true,
});

// Replace DNS record
// https://api.cloudflare.com/#dns-records-for-a-zone-update-dns-record
const record = await dnsRecords.replace("372e67954025e0ba6aaa6d586b9e0b59", {
  type: "A",
  name: "test.example.com",
  content: "192.0.2.1",
  proxied: true,
});

// Update DNS record
// https://api.cloudflare.com/#dns-records-for-a-zone-patch-dns-record
const record = await dnsRecords.update("372e67954025e0ba6aaa6d586b9e0b59", {
  proxied: false,
});

// Delete DNS record
// https://api.cloudflare.com/#dns-records-for-a-zone-delete-dns-record
await dnsRecords.delete("372e67954025e0ba6aaa6d586b9e0b59");
```

## Workers KV

```ts
// Initialize an HTTP client for managing CF Workers KV store
const kv = Cloudflare.kv({
  accountId: "xxx",
  authKey: "xxx",
  authEmail: "xxx",
});
```

#### KV Namespaces

```ts
// Fetch the list of all KV namespaces
// https://api.cloudflare.com/#workers-kv-namespace-list-namespaces
const namespaces = await kv.find().all();

// Create a new namespace named "Example"
// https://api.cloudflare.com/#workers-kv-namespace-create-a-namespace
const ns = await kv.create("Example");
// => {
//   id: "0f2ac74b498b48028cb68387c421e279",
//   title: "Example",
//   supports_url_encoding: true
// }

// Update/rename a namespace
// https://api.cloudflare.com/#workers-kv-namespace-rename-a-namespace
await kv.update("0f2ac74b498b48028cb68387c421e279", "New Name");

// Delete a namespace
// https://api.cloudflare.com/#workers-kv-namespace-remove-a-namespace
await kv.delete("0f2ac74b498b48028cb68387c421e279");
```

#### Key-Value Pairs

```ts
// Initialize the API endpoint client for managing key-value pairs
const ns = kv.namespace("0f2ac74b498b48028cb68387c421e279");

// Fetch the list of all the keys
const keys = await ns.keys().all();

// Fetch the list of all the keys prefixed "example"
const keys = await ns.keys({ prefix: "example" }).all();

// Create or update a key-value pair in Cloudflare KV store
// using JSON encoding by default (`JSON.stringify(value)`).
await ns.set("key", { some: "value" });

// Read key-pair value from Cloudflare KV store
const value = await ns.get("key");
// => {
//  some: "name"
// }

// Delete a key-pair
await ns.delete("key");
```

```ts
// Save a key-value pair as plain text (as opposed to JSON-serialized)
await ns.set("όνομα", "José", { encode: false });

// Read a key-value pair as plain text
const value = await ns.get("όνομα", { decode: false });
// => "José"
```

## Source Code

For more information and usage examples check out the source code / tests:

- **[`user.ts`](./src/user.ts)** ([tests](./src/user.test.ts))
- **[`userTokens.ts`](./src/userTokens.ts)** ([tests](./src/userTokens.test.ts))
- **[`dnsRecords.ts`](./src/dnsRecords.ts)** ([tests](./src/dnsRecords.test.ts))
- **[`customHostnames.ts`](./src/customHostnames.ts)** ([tests](./src/customHostnames.test.ts))
- **[`kv.ts`](./src/kv.ts)** ([tests](./src/kv.test.ts))

## Backers 💰

<a href="https://reactstarter.com/b/1"><img src="https://reactstarter.com/b/1.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/2"><img src="https://reactstarter.com/b/2.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/3"><img src="https://reactstarter.com/b/3.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/4"><img src="https://reactstarter.com/b/4.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/5"><img src="https://reactstarter.com/b/5.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/6"><img src="https://reactstarter.com/b/6.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/7"><img src="https://reactstarter.com/b/7.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/b/8"><img src="https://reactstarter.com/b/8.png" height="60" /></a>

## Related Projects

- [Cloudflare Workers Starter Kit](https://github.com/kriasoft/cloudflare-starter-kit) — TypeScript project template for Cloudflare Workers
- [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — front-end template for React and Relay using Jamstack architecture
- [GraphQL API and Relay Starter Kit](https://github.com/kriasoft/graphql-starter) — monorepo template, pre-configured with GraphQL API, React, and Relay

## How to Contribute

You're very welcome to [create a PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
or send me a message on [Discord](https://discord.gg/bSsv7XM).

```bash
$ git clone https://github.com/kriasoft/cloudflare-client.git
$ cd ./cloudflare-client
$ yarn install
$ yarn test
```

**NOTE**: In order to run unit tests locally you will need Node.js `v16.15` or newer and Cloudflare API token.

## License

Copyright © 2022-present Kriasoft. This source code is licensed under the MIT license found in the
[LICENSE](https://github.com/kriasoft/cloudflare-client/blob/main/LICENSE) file.

---

<sup>Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya), [blog](https://medium.com/@koistya))
and [contributors](https://github.com/kriasoft/cloudflare-client/graphs/contributors).</sup>
