import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        return {
          id: user.uid,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);
