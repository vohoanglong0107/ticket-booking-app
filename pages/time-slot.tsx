import { NextPageWithLayout } from "./_app";
import TicketFormBooking from "../components/TicketForm/TicketFormBooking";
import { gql, useMutation, useQuery } from "@apollo/client";
const queryTimeSlotByGameId = gql`
  query TimeSlotByGameId($gameId: String) {
    timeSlotByGameId(game_id: $gameId) {
      id
      startTime
      endTime
      game_id
    }
  }
`;

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

const TimeSlot = () => {
  const id = "1";
  const { data, error, loading } = useQuery(queryGameByGameId, {
    variables: {
      gameId: id,
    },
  });

  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;
  console.log("dsadsad" + JSON.stringify(data));

  return (
    <TicketFormBooking
      img={data.game.location}
      gameName={data.game.name}
      description={data.game.description}
      timeSlots={data.game.timeSlots}
    ></TicketFormBooking>
  );
};

export default TimeSlot;
