import { connectDB } from "@/util/database";

/**
 *
 * @param request GET
 * @param response 리스트 반환
 * @returns
 */
export default async function getList(request, response) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return response.status(200).json(result);
}
