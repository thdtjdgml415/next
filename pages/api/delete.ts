/**
 *
 * @param request 유저들의 요청 정보
 * @param response 유저들에게 응답 하는 값
 * @returns
 */

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function postDelete(request, response) {
  console.log("[postDelete]", request.body);
  if (request.method === "DELETE") {
    const data = JSON.parse(request.body);

    console.log("[deleteItem]", data.item);
    let db = (await connectDB).db("forum");
    const deleteItem = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(data.item) });

    console.log("삭제결과", deleteItem);
    return response.status(200).json("처리완료");
  }
}
