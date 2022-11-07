import { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import { ApolloProvider } from "@apollo/client";
import Layout from "@/components/Layout";
import apolloClient from "../lib/apollo";
import "../components/Navbar/Navbar.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
