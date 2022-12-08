import Link from "next/link";
import { NextPageWithLayout } from "./_app";
import GameRegisterForm from "@/components/GameRegister";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { InferGetServerSidePropsType } from "next";

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
  return {
    props: {
      email: session.user.email,
    },
  };
};

const CreateGamePage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ email }) => {
  const router = useRouter();
  const { data, error, loading } = useQuery(queryUserByEmail, {
    variables: { email },
  });
  // useEffect(() => {
  //   const checkRole = () => {
  //     if (data && data.user && "role" in data.user && data.user.role != "STORE_OWNER") router.push("/");
  //   };
  //   checkRole();
  // }, [data, router]);
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

  // const checkRole = () => {
  // };

  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;

  // checkRole();
  if (data && data.user && "role" in data.user) {
    if (data.user.role != "STORE_OWNER") {
      router.push("/");
      return <></>;
    }
  } else {
    router.push("/");
    return <></>;
  }

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
