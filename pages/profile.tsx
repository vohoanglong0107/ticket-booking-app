import { NextPageWithLayout } from "./_app";
import UserProfileForm from "../components/UserProfile/UserProfileForm";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Role } from "@prisma/client";
import { Session, unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const editUserProfile = gql`
  mutation Mutation(
    $userId: String
    $firstName: String
    $lastName: String
    $address: String
    $avatarUrl: String
    $email: String
    $role: Role
  ) {
    user(
      id: $userId
      firstName: $firstName
      lastName: $lastName
      address: $address
      avatarURL: $avatarUrl
      email: $email
      role: $role
    ) {
      id
      email
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

const Profile: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ email }) => {
  const { data, error, loading } = useQuery(queryUserByEmail, {
    variables: { email },
  });
  const [editUser] = useMutation(editUserProfile);
  const submit = (
    firstName: string,
    lastName: string,
    address: string,
    email: string
  ) => {
    editUser({
      variables: {
        firstName,
        lastName,
        address,
        email,
        role: Role.USER,
        avatarUrl: null,
      },
    });
  };

  if (loading) return <p>loading</p>;

  if (error) return <p>error</p>;

  return (
    <UserProfileForm
      email={data.user.email}
      firstName={data.user.firstName}
      lastName={data.user.lastName}
      address={data.user.address}
      onClick={submit}
    ></UserProfileForm>
  );
};

export default Profile;
