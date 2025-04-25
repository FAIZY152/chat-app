import NextAuth from "next-auth/next";
import { authOptions } from "./option";

const NextAuthProvider = NextAuth(authOptions);

export { NextAuthProvider as GET, NextAuthProvider as POST };
