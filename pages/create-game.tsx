import Link from "next/link";
import { NextPageWithLayout } from "./_app";
import GameRegisterForm from "@/components/GameRegister";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { InferGetServerSidePropsType } from "next";
import apolloClient from "@/lib/apollo";
import { Role } from "@prisma/client";

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
      description
      location
      name
      price
      remaining_slot
    }
  }
`;

const queryUserByEmail = gql`
  query Query($email: String) {
    user(email: $email) {
      role
    }
  }
`;

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
      },
      props: {},
    };
  }

  const { data } = await apolloClient.query({
    query: queryUserByEmail,
    variables: { email: session.user.email },
  });
  const { user } = data;

  if (user.role !== Role.STORE_OWNER)
    return {
      redirect: {
        destination: "/",
      },
      props: {},
    };

  return {
    props: {},
  };
};

const CreateGamePage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = () => {
  const router = useRouter();
  const [createGame] = useMutation(createGameMutation);

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
      alert("Create game successfully");
      router.reload();
    } catch (error) {
      setCreateGameErrors([error.message]);
      console.log(error);
      console.log(error.networkError);
      console.log(error.graphQLErrors);
    }
  };

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
