import { ApolloClient, InMemoryCache } from "@apollo/client/core";

// Import the environment variable
const GRAPHQL_URI = `${import.meta.env.VITE_PUBLIC_GRAPHQL_URI}/graphql`;

if (!GRAPHQL_URI) {
  throw new Error("GraphQL URI is not defined in the environment variables.");
}



const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;


