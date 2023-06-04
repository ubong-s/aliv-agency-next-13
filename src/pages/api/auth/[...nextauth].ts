import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { sanityWriteClient } from "@/sanity/lib/sanity.client";

export const authOptions: NextAuthOptions = {
  adapter: SanityAdapter(sanityWriteClient()),
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    SanityCredentials(sanityWriteClient()),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
