import TicketFormBooking from "@/components/TicketForm/TicketFormBooking";
import { gql } from "@apollo/client";
import { itemData } from "@/utils/sample-data";
import { InferGetServerSidePropsType } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextPageWithLayout } from "@/pages/_app";
import { unstable_getServerSession } from "next-auth";
import { initializeApolloClient } from "@/lib/apollo";

const queryGameByGameId = gql`
  query Games($gameId: String) {
    game(game_id: $gameId) {
      description
      id
      name
      price
      remaining_slot
      location
      timeSlots {
        id
        endTime
        game_id
        startTime
      }
    }
  }
`;

export const getServerSideProps = async ({ req, res, query }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
      props: {},
    };
  }
  const { gameId } = query;
  const apolloClient = initializeApolloClient();
  const { data } = await apolloClient.query({
    query: queryGameByGameId,
    variables: { gameId },
  });
  const { game } = data;
  return {
    props: {
      game,
    },
  };
};

const GameInfo: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ game }) => {
  const randomImage = itemData[Math.floor(Math.random() * itemData.length)].img;

  return (
    <TicketFormBooking
      img={randomImage}
      gameName={game.name}
      description={game.description}
      timeSlots={game.timeSlots}
    ></TicketFormBooking>
  );
};

export default GameInfo;
