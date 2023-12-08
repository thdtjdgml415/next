import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function commentList(request, response) {
  console.log("commentListrequest", request);
  if (request.method === "GET") {
    const _id = request.query._id;
    console.log("[commentListrequest]", _id);
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("comment")
      .find({ parent: new ObjectId(_id) })
      .toArray();
    console.log("[commentListresponse]", result);
    response.status(200).json(result);
  }
}
