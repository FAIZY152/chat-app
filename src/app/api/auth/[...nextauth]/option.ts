import { AuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export interface CustomUser {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}

export interface CustomSession {
  user?: CustomUser;
  expires?: string;
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("user", user);
      console.log("account", account);
      return true;
    },
    async session({
      session,
      user,
      token,
    }: {
      session: CustomSession;
      user: CustomUser;
      token: JWT;
    }) {
      if (!session.expires) {
        session.expires = new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 30
        ).toISOString(); // Default to 30 days
      }
      session.user = token.sub as CustomUser;
      return session as Session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token as JWT;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
