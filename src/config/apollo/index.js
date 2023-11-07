import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://smashing-griffon-67.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "vheaKVHVci5MZ9byyFucvguSTs0CCAXMPl1oWYOAl4NhBrgNoeRWLb9OYduRhG11",
  },
});

export default client;
