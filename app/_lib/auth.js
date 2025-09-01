import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = authConfig;
