import SignUpForm from "@/components/SignUp/SignUpForm";
import { useAuth } from "@/lib/auth";
import { gql, useMutation } from "@apollo/client";
import { Role } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { NextPageWithLayout } from "./_app";

const createUserMutation = gql`
  mutation Mutation(
    $name: String
    $email: String
    $role: Role
    $avatarUrl: String
  ) {
    createUser(name: $name, email: $email, role: $role, avatarURL: $avatarUrl) {
      email
      id
    }
  }
`;

const SignUpPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { signup } = useAuth();
  const [createUser, { data, loading, error }] =
    useMutation(createUserMutation);
  const [signUpErrors, setSignUpErrors] = useState<null | string[]>(null);
  const onSignUp = async (name: string, email: string, password: string) => {
    try {
      console.log(name, email, password);
      await signup(email, password);
      await createUser({
        variables: {
          name,
          email,
          role: Role.USER,
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
