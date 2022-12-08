import { useRouter } from "next/router";
import TicketFormBooking from "@/components/TicketForm/TicketFormBooking";
import { gql, useQuery } from "@apollo/client";

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

const GameInfo = () => {
  const router = useRouter();
  const { gameId } = router.query;
  const { data, error, loading } = useQuery(queryGameByGameId, {
    variables: {
      gameId,
    },
  });

  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;

  return (
    <TicketFormBooking
      img={data.game.location}
      gameName={data.game.name}
      description={data.game.description}
      timeSlots={data.game.timeSlots}
    ></TicketFormBooking>
  );
};

export default GameInfo;
