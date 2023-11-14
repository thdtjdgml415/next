import { connectDB } from "@/util/database";

export default async function commentList(request, response) {
  console.log("commentListrequest", request);
  const _id = request.query._id;
  console.log("[commentListrequest]", _id);
  let db = (await connectDB).db("forum");
  let result = await db.collection("comment").find().toArray();
}
