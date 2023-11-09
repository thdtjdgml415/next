import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "6ce32efd3742b7e6db8f",
      clientSecret: "eed65842fa22d711208fbf7b8a758f78835c3e18",
    }),
    // process.env.NAVER_CLIENT_ID: Wo7dk9D9wRD34KtTdPMk
    // process.env.NAVER_CLIENT_SECRET: HIEpCwJkWw
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
  secret: "thdtjdgml415",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
