import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import dbConnect from "@/utils/mongodb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await dbConnect();

        try {
          const user = await User.findOne({ email: credentials?.email });

          if (!user) throw new Error("User not found");

          const isPasswordCorrect = await bcrypt.compare(
            credentials!.password,
            user.password
          );

          if (!isPasswordCorrect) throw new Error("Incorrect password");

          return user;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/auth",
  },
});

export { handler as GET, handler as POST };
