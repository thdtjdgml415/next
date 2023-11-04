/**
 *
 * @param response POST
 * @param request 쓰기완료
 */

import { connectDB } from "@/util/database";

export default async function Write(request, response) {
  let a = new Date();
  const year = a.getFullYear().toString().padStart(4, "0");
  const month = (a.getMonth() + 1).toString().padStart(2, "0");
  const day = a.getDate().toString().padStart(2, "0");

  let time = `${year}.${month}.${day}`;
  if (request.method == "POST") {
    console.log(request.body);
    if ((request.body.content && request.body.title) === "") {
      return response.status(400).json("빈칸이 존재합니다.");
    }
    let db = (await connectDB).db("forum");
    const dataToInsert = {
      ...request.body, // 기존 request body 데이터 유지
      time: time, // 'time' 키에 time 변수 값 추가
    };
    let result = await db.collection("post").insertOne(dataToInsert);
    console.log("[list]", result);
    return response.status(200).redirect(302, "/list");
  }
}
