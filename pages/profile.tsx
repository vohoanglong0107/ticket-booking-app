import { NextPageWithLayout } from "./_app";
import UserProfileForm from "../components/UserProfile/UserProfileForm";
import { gql, useMutation } from "@apollo/client";
import { Role } from "@prisma/client";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { InferGetServerSidePropsType } from "next";
import { initializeApolloClient } from "@/lib/apollo";

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
  const apolloClient = initializeApolloClient();
  const { data } = await apolloClient.query({
    query: queryUserByEmail,
    variables: { email: session.user.email },
  });
  const { user } = data;
  return {
    props: {
      user,
    },
  };
};

const Profile: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ user }) => {
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
  return (
    <UserProfileForm
      email={user.email}
      firstName={user.firstName}
      lastName={user.lastName}
      address={user.address}
      onClick={submit}
    ></UserProfileForm>
  );
};

export default Profile;
