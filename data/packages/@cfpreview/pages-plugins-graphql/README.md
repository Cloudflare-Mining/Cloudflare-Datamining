## Pages Plugins

# GraphQL

This GraphQL plugin creates a GraphQL server which can respond to `application/json` and `application/graphql` `POST` requests. It responds with [the GraphQL Playground](https://github.com/graphql/graphql-playground) for `GET` requests.

## Installation

```sh
npm install --save @cfpreview/pages-plugins-graphql
```

## Usage

```typescript
// ./functions/graphql.ts

import graphQLPlugin from "@cfpreview/pages-plugins-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "Hello, world!";
        },
      },
    },
  }),
});

export const onRequest: PagesFunction = graphQLPlugin({
  schema,
});
```

This plugin only exposes a single route, so wherever it is mounted is wherever it will be available. In the above example, because it is mounted in `./functions/graphql.ts` the server will be available on `/graphql` of the app.
