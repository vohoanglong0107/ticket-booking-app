import { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import { ApolloProvider } from "@apollo/client";
import Layout from "@/components/Layout";
import apolloClient from "../lib/apollo";
import "../components/Navbar/Navbar.css";
import ListItem from "@/components/ListItem";
import TitlebarImageList from "@/components/View/View-source";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Navbar />
        <TitlebarImageList />
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
