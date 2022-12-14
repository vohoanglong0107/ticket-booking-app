import TitlebarImageList from "@/components/View/View-source";
import { gql } from "@apollo/client";
import { initializeApolloClient } from "@/lib/apollo";
import { NextPageWithLayout } from "./_app";
import { InferGetServerSidePropsType } from "next";

export const queryGames = gql`
  query Games {
    games {
      id
      title: name
    }
  }
`;

export const getServerSideProps = async () => {
  const apolloClient = initializeApolloClient();

  const { data } = await apolloClient.query({
    query: queryGames,
  });
  const { games } = data;
  console.log(games);

  return {
    props: { games },
  };
};

const Home: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ games }) => {
  return <TitlebarImageList games={games} />;
};
export default Home;
