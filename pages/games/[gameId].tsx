import GameInfoViewer from "@/components/Game/GameInfoViewer";
import { gql, useMutation } from "@apollo/client";
import { itemData } from "@/utils/sample-data";
import { InferGetServerSidePropsType } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextPageWithLayout } from "@/pages/_app";
import { unstable_getServerSession } from "next-auth";
import { initializeApolloClient } from "@/lib/apollo";

const queryGameAndUser = gql`
  query Query($gameId: String, $email: String) {
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
    user(email: $email) {
      id
      firstName
      lastName
      email
      avatarURL
      role
      address
    }
  }
`;

const bookingMutation = gql`
  mutation Booking(
    $numberOfParticipants: Int
    $userId: String
    $bookingGameId: String
    $timeSlotId: String
  ) {
    booking(
      number_of_participants: $numberOfParticipants
      user_id: $userId
      game_id: $bookingGameId
      time_slot_id: $timeSlotId
    ) {
      number_of_participants
      id
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
    query: queryGameAndUser,
    variables: { gameId, email: session.user.email },
  });
  const { game, user } = data;
  return {
    props: {
      game,
      user,
    },
  };
};

const GameInfo: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ game, user }) => {
  const [booking] = useMutation(bookingMutation);
  const randomImage = itemData[Math.floor(Math.random() * itemData.length)].img;
  const onBooking = (timeSlotId: string, numberOfParticipants: number) => {
    booking({
      variables: {
        numberOfParticipants,
        timeSlotId,
        userId: user.id,
        bookingGameId: game.id,
      },
    });
  };

  return (
    <GameInfoViewer
      img={randomImage}
      gameName={game.name}
      description={game.description}
      timeSlots={game.timeSlots}
      price={game.price}
      onBooking={onBooking}
    ></GameInfoViewer>
  );
};

export default GameInfo;
