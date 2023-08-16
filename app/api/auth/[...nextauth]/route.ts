import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import dbConnect from "@/utils/mongodb";
import User from "@/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      async profile(profile, tokens) {
        // Create or find the user in your database based on GitHub profile data
        await dbConnect();
        const existingUser = await User.findOne({ githubId: profile.id });

        if (existingUser) {
          return {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
          };
        }

        // If the user doesn't exist, create a new user
        const newUser = new User({
          githubId: profile.id,
          name: profile.name || profile.login,
          email: profile.email || null, // Make sure to handle email access scope
          // Other user fields as needed
        });

        await newUser.save();

        return {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        };
      },
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
