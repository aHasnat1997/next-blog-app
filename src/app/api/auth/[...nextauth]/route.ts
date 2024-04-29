import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { db } from "@/lib/db";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn(props) {
      // console.log(props);
      const { user } = props;

      const existingUser = await db.user.findFirst({
        where: {
          email: user.email!,
        },
      });
      if (!existingUser) {
        await db.user.create({
          data: {
            email: user.email!,
            name: user.name!,
            image: user.image,
            rest: JSON.stringify({ props })
          }
        })
      };
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    // async session({ session, token, user }) {
    //   return session
    // },
    // async jwt({ token, user, account, profile }) {
    //   return token
    // }
  }
})

export { handler as GET, handler as POST };