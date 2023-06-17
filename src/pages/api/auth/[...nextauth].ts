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
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user._id = token.sub as string;

      return session;
    },
  },
};

export default NextAuth(authOptions);
