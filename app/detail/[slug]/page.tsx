import { connectDB } from "@/util/database";
import { ObjectId } from "bson";
import Comment from "./Comment";

interface CommentProps {
  _id: string;
  title: string;
  content: string;
  time: string;
}

export default async function detail(props) {
  let db = (await connectDB).db("forum");
  let result: CommentProps = await db.collection("post").findOne({
    _id: new ObjectId(props.params.slug),
  });

  console.log(props.params.slug);
  console.log("[detail]", result);
  return (
    <section className="w-full h-full">
      <div className="w-3/6 mx-auto mt-44 border-solid border-4">
        <div className="w-full border-solid border-b-4">
          <h5 className="text-2xl p-2">{result.title}</h5>
        </div>
        <p className="text-lg p-2 h-96 border-solid">{result.content}</p>
        <Comment item={result._id} />
      </div>
    </section>
  );
}
