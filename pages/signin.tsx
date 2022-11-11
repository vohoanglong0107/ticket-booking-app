import SignIn from "@/components/SignIn";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";

const SignInPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { login } = useAuth();

  const onSignIn = async (email: string, password: string) => {
    try {
      console.log("Signing in...");
      await login(email, password);
      console.log("Signed in successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
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
