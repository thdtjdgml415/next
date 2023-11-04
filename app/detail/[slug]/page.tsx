import { connectDB } from "@/util/database";
import { ObjectId } from "bson";

export default async function detail(props) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.slug),
  });
  console.log("[detail]", result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h5>{result.title}</h5>
      <p>{result.content}</p>
    </div>
  );
}
