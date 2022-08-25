import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/vitasmirnova/web3-rsvp",
  cache: new InMemoryCache(),
});

export default client;