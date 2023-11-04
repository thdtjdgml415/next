import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

/**
 *
 * @param request 유저들의 요청 정보
 * @param response 유저들에게 응답 하는 값
 * @returns
 */

export default async function postEdit(request, response) {
  const data = {
    _id: request.body._id,
    title: request.body.title,
    content: request.body.content,
  };
  if (request.method === "POST") {
    let db = (await connectDB).db("forum");
    let modify = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: data });
    console.log("[modify]", modify);
    if ((request.body.title && request.body.content) === "") {
      return response.status(400).json("빈칸 없이 입력해주십시오.");
    }
    return response.status(200).redirect(302, "/list");
  }
}
