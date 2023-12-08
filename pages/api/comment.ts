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
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth는 0부터 시작하므로 1을 더해줍니다.
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log("현재시간", date);
  if (session !== null) {
    const save = {
      content: commentData.content,
      parent: new ObjectId(commentData._id),
      author: session?.user.email,
      time: formatted,
      image: session.user.image,
    };

    console.log("[postComment]", save);

    let db = (await connectDB).db("forum");
    // const commentLists = await db
    //   .collection("comment")
    //   .find({ parent: new ObjectId(commentData._id) })
    //   .toArray();

    let result = await db.collection("comment").insertOne(save);
    response.status(200).json({ save });
  }
}
