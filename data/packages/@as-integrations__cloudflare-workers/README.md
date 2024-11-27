# @as-integrations/cloudflare-workers

[![NPM version](https://img.shields.io/npm/v/@as-integrations/cloudflare-workers.svg)](https://www.npmjs.com/package/@as-integrations/cloudflare-workers)

An integration to use Cloudflare Workers as a hosting service with Apollo Server.

## Quickstart

- Read the step-by-step tutorial: https://viblo.asia/p/y37Ldv3y4ov
- Checkout the repository template: https://github.com/kimyvgy/worker-apollo-server-template
- Live demo: https://worker-apollo-server.ds101.workers.dev

## Install

```bash
npm add @apollo/server @as-integrations/cloudflare-workers graphql
```

## Usage

You must enable Node.js compatibility feature by adding the following flag in the file `wrangler.toml`:

```toml
node_compat = true  # add this
```

```typescript
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateCloudflareWorkersHandler } from '@as-integrations/cloudflare-workers';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

const typeDefs = `#graphql
  type Query {
    example: String!
  }
`;

const resolvers = {
  Query: {
    example: () => {
      return 'Hello universe!';
    },
  }
}

interface Context {
  token: string
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

export interface Env {
  // ...
}

export default {
  fetch: startServerAndCreateCloudflareWorkersHandler<Env, Context>(server, {
    context: async ({ env, request, ctx }) => {
      return { token: 'secret' };
    },
  }),
};
```
