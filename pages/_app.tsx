import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Layout from "@/components/Layout";
import apolloClient from "../lib/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
