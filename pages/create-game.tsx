import Link from "next/link";
import GameRegisterForm from "@/components/GameRegister";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const createGameMutation = gql`
  mutation Mutation(
    $name: String
    $description: String
    $location: String
    $price: Float
    $remaining_slot: Int
  ) {
    game(
      name: $name
      description: $description
      location: $location
      price: $price
      remaining_slot: $remaining_slot
    ) {
      id
      description
      location
      name
      price
      remaining_slot
    }
  }
`;

const CreateGamePage = () => {
  const router = useRouter();
  const [createGame, { data, loading, error }] =
    useMutation(createGameMutation);

  const [createGameErrors, setCreateGameErrors] = useState<null | string[]>(
    null
  );
  const onCreateGame = async (
    name: string,
    description: string,
    location: string,
    price: number,
    remaining_slot: number
  ) => {
    try {
      console.log(name, description, location, price, remaining_slot);
      if (!name) throw Error("Game name is required");
      await createGame({
        variables: {
          name,
          description,
          location,
          price,
          remaining_slot,
        },
      });
      setCreateGameErrors(null);
    } catch (error) {
      setCreateGameErrors([error.message]);
      console.log(error);
      console.log(error.networkError);
      console.log(error.graphQLErrors);
    }
  };

  useEffect(() => {
    if (data) router.push(`/games/${data.game.id}`);
  }, [data, loading, error, router]);

  return (
    <section>
      <Link href="/">
        <GameRegisterForm
          onCreateGame={onCreateGame}
          errors={createGameErrors}
        />
      </Link>
    </section>
  );
};

export default CreateGamePage;
