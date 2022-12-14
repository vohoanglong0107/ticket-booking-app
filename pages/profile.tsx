import { NextPageWithLayout } from "./_app";
import UserProfileView from "../components/UserProfile/UserProfileView";
import { gql } from "@apollo/client";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { InferGetServerSidePropsType } from "next";
import { initializeApolloClient } from "@/lib/apollo";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const onEdit = () => {
    router.push("/edit-profile");
  };
  return (
    <UserProfileView
      email={user.email}
      firstName={user.firstName}
      lastName={user.lastName}
      address={user.address}
      onEdit={onEdit}
    ></UserProfileView>
  );
};

export default Profile;
