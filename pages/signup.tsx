import SignUpForm from "@/components/SignUp/SignUpForm";
import { gql, useMutation } from "@apollo/client";
import { Role } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextPageWithLayout } from "./_app";
import { auth } from "@/lib/auth";

const createUserMutation = gql`
  mutation Mutation(
    $name: String
    $email: String
    $role: Role
    $avatarUrl: String
  ) {
    createUser(
      firstName: $name
      email: $email
      role: $role
      avatarURL: $avatarUrl
    ) {
      email
      id
    }
  }
`;

const SignUpPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [createUser] = useMutation(createUserMutation);
  const [signUpErrors, setSignUpErrors] = useState<null | string[]>(null);
  const onSignUp = async (
    name: string,
    email: string,
    password: string,
    role: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await createUser({
        variables: {
          name,
          email,
          role: role,
          avatarUrl: null,
        },
      });
      setSignUpErrors(null);

      router.push("/");
    } catch (error) {
      setSignUpErrors([error.message]);
      console.log(error);
      console.log(error.networkError);
      console.log(error.graphQLErrors);
    }
  };
  return (
    <div>
      <SignUpForm
        onSignUp={onSignUp}
        loginPath={"/signin"}
        errors={signUpErrors}
      />
    </div>
  );
};

SignUpPage.getLayout = (page) => page;

export default SignUpPage;
