import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import { ApolloProvider } from "@apollo/client";
import Layout from "@/components/Layout";
import apolloClient from "../lib/apollo";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface PageProps {
  session?: Session;
}

type AppPropsWithLayout = AppProps<PageProps> & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </SessionProvider>
  );
}
