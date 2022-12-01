import SignIn from "@/components/SignIn";
import { unstable_getServerSession } from "next-auth/next";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "./_app";
import { signIn } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};

const SignInPage: NextPageWithLayout = () => {
  const router = useRouter();

  const onSignIn = async (email: string, password: string) => {
    const { ok, error } = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (error) {
      console.log(error);
    }
    if (ok) {
      router.push("/");
    }
  };

  const onSignUp = () => {
    router.push("/signup");
  };

  return (
    <section className="gradient-form flex h-full justify-center bg-gray-200 md:h-screen">
      <div className="container h-full w-full py-12 px-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
          <SignIn onSignIn={onSignIn} onSignUp={onSignUp} />
        </div>
      </div>
    </section>
  );
};

SignInPage.getLayout = (page) => page;

export default SignInPage;
