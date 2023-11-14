/**
 *
 * @param request 유저들의 요청 정보
 * @param response 유저들에게 응답 하는 값
 * @returns
 */

import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { connectDB } from "@/util/database";

interface sessionProps {
  user: sessionUserProps;
}

interface sessionUserProps {
  email: string;
  image: string;
  name: string;
}

export default async function postComment(request, response) {
  const session: sessionProps | null = await getServerSession(
    request,
    response,
    authOptions
  );
  const commentData = JSON.parse(request.body);
  console.log("{session}", session);
  console.log("commentData", commentData);
  if (session !== null) {
    const save = {
      content: commentData.content,
      parent: new ObjectId(commentData._id),
      author: session?.user.email,
    };
    console.log("[postComment]", save);
    let db = (await connectDB).db("forum");
    let result = await db.collection("comment").insertOne(save);
    response.status(200).json("저장완료");
  }
}
