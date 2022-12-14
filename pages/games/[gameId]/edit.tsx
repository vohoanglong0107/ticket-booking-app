import GameEditForm, { OnGameEdit } from "@/components/Game/GameEditForm";
import { gql, useMutation } from "@apollo/client";
import { itemData } from "@/utils/sample-data";
import { InferGetServerSidePropsType } from "next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextPageWithLayout } from "@/pages/_app";
import { unstable_getServerSession } from "next-auth";
import { initializeApolloClient } from "@/lib/apollo";
import { useRouter } from "next/router";

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

const editGameMutation = gql`
  mutation Mutation(
    $gameId: String
    $timeSlots: [TimeSlotUpsertType]
    $description: String
    $price: Float
    $name: String
  ) {
    updateGame(
      id: $gameId
      timeSlots: $timeSlots
      description: $description
      price: $price
      name: $name
    ) {
      timeSlots {
        id
        startTime
        endTime
      }
      description
      price
      name
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
  // https://github.com/apollographql/apollo-client/issues/1564#issuecomment-346592860
  return {
    props: {
      game: {
        ...game,
        timeSlots: game.timeSlots.map((timeSlot) => ({
          id: timeSlot.id,
          startTime: timeSlot.startTime,
          endTime: timeSlot.endTime,
          game_id: timeSlot.game_id,
        })),
      },
    },
  };
};

const GameEdit: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ game }) => {
  const randomImage = itemData[Math.floor(Math.random() * itemData.length)].img;
  const [editGame] = useMutation(editGameMutation);
  const router = useRouter();
  const onEdit: OnGameEdit = (img, name, description, price, timeSlots) => {
    const timeSlotsWithGameId = timeSlots.map((timeSlot) => {
      if (timeSlot.id === undefined)
        return {
          ...timeSlot,
          game_id: game.id,
        };
      return timeSlot;
    });
    editGame({
      variables: {
        gameId: game.id,
        name,
        description,
        price,
        timeSlots: timeSlotsWithGameId,
      },
    })
      .then(() => router.push(`/games/${game.id}`))
      .catch((e) => console.log(e));
  };

  return (
    <GameEditForm
      img={randomImage}
      gameName={game.name}
      description={game.description}
      timeSlots={game.timeSlots}
      price={game.price}
      onEdit={onEdit}
    ></GameEditForm>
  );
};

export default GameEdit;
