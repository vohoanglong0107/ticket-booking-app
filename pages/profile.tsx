import { NextPageWithLayout } from "./_app";
import UserProfileForm from "../components/UserProfile/UserProfileForm";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Role } from "@prisma/client";
import { CatchingPokemon } from "@mui/icons-material";

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
      name
      email
      avatarURL
      role
    }
  }
`;

const Profile: NextPageWithLayout = () => {
  const updatene = () => {};
  const { data, error, loading } = useQuery(queryUserByEmail, {
    variables: "test@gmail.com",
  });
  const [editUser] = useMutation(editUserProfile);
  const submit = (firstName, lastName, address, email) => {
    console.log(firstName, lastName, address, email);
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

  return <UserProfileForm onClick={submit}></UserProfileForm>;
};

export default Profile;
