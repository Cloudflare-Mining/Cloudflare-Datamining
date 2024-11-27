# util-mock-graphql

Mock-ready Apollo GraphQL client for mocking queries that don't exist yet.

Prototype faster, now, today.

## Usage

Learn how to write your mock `resolvers` and `typeDefs` in [this article](https://www.apollographql.com/docs/react/development-testing/client-schema-mocking/)

```
import gql from 'graphql-tag';
import { MockApolloClient } from @cloudflare/util-mock-graphql
import { ApolloProvider } from 'react-apollo';

const typeDefs = gql`
  extend type Rocket {
    description: String!
  }
`;

const resolvers = {
  Rocket: {
    description: () => "A boilerplate standard space rocket"
  }
};

const mockClient = new MockApolloClient({ typeDefs, resolvers })

const GET_ROCKET_DETAILS = gql`
  query RocketDetails($rocketId: ID!) {
    rocket(id: $rocketId) {
      type
      description @client
    }
  }
`;

function RocketDetailsComponent({ rocketId }) {
  const { data } = useQuery(GET_ROCKET_DETAILS, { variables: { rocketId } });
  return (
    <div>
      <p>Rocket Type: {data.rocket.type}</p>
      <p>Description: {data.rocket.description}</p>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={ mockClient }>
      <RocketDetailsComponent rocketId={ 123 }>
    </ApolloProvider>
  )
}


```
