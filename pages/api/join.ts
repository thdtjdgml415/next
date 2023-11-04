import { connectDB } from "@/util/database";

export default async function postJoin(request, response) {
  if (request.method === "POST") {
    console.log(request.body);
    let db = (await connectDB).db("forum");
    if (
      (request.body.email && request.body.password && request.body.number) ===
      ""
    ) {
      return response.status(400).json("빈칸 없이 입력해주십시오.");
    }
    let result = await db.collection("join").insertOne(request.body);
    return response.status(200).redirect(302, "/");
  }
}
