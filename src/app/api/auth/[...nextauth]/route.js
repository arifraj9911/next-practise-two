import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: `CSFeyk4+waDm/r/tvSYaNDuZvz+ccU0GFd+aOqSKkic=`,
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const db = await connectDB();
          const currentUser = await db.collection("users").findOne({ email });
          console.log(currentUser);
          // const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: "754663363845-1mr06t3fpou780ftnotvaod1nmtr93q5.apps.googleusercontent.com",
      clientSecret: "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"
    }),
    GitHubProvider({
      clientId: "Ov23likAiRKu4J6VH3br",
      clientSecret: "c844b5fbbcc47fee21067c9ec58373ce582cda67"
    })
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: "Arif",
    email: "karif9514@gmail.com",
    password: "password",
    type: "admin",
    image: "https://i.ibb.co/3pbYLVz/p-H-Upload-11zon.jpg",
  },
  {
    id: 2,
    name: "Raj",
    email: "arif.raj9911@gmail.com",
    password: "password",
    type: "moderator",
    image: "https://i.ibb.co/3pbYLVz/p-H-Upload-11zon.jpg",
  },
];

export { handler as GET, handler as POST };
