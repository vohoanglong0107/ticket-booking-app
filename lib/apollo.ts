import { ApolloClient, InMemoryCache } from "@apollo/client";

const dev = process.env.NODE_ENV !== "production";

const apolloClient = new ApolloClient({
  uri: `${
    dev
      ? "http://localhost:3000"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }/api/graphql`,
  cache: new InMemoryCache(),
});

export default apolloClient;
