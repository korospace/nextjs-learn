import { LoginWithGoogle, login } from "@/lib/firebase/services";
import { LoginReq, UserDocument } from "@/lib/model/types";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const loginCheck = await login({ email, password });

        if (loginCheck.status === true) {
          return loginCheck.data;
        } else {
          throw new Error(loginCheck.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENTID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENTSECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.full_name = user.full_name;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const data: any = {
          email: user?.email,
          full_name: user?.name,
          type: "google",
        };

        await LoginWithGoogle(data, (result: { data: any }) => {
          token.email = result.data.email;
          token.full_name = result.data.full_name;
          token.role = result.data.role;
        });
      }

      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("full_name" in token) {
        session.user.full_name = token.full_name;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
