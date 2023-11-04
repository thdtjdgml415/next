import BaseButton from "@/components/atom/BaseButton";
import BaseInput from "@/components/atom/BaseInput";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function edit(props) {
  console.log("edit", props);
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({
    _id: new ObjectId(props.params.slug),
  });

  console.log("[edit]", result);
  return (
    <div className="w-full h-full text-center">
      <h4 className="mt-40 mb-20 text-lg font-bold antialiased ">수정페이지</h4>
      <form action="/api/edit" method="POST">
        <BaseInput name="_id" type="hidden" value={result._id.toString()} />
        <BaseInput
          className="border-solid border-4 m-auto mb-10"
          name="title"
          type="text"
          placeholder="제목"
          value={result.title}
        />
        <BaseInput
          className="border-solid border-4 m-auto mb-10"
          name="content"
          type="text"
          placeholder="내용"
          value={result.content}
        />
        <BaseButton
          className={"border-solid border-4 "}
          type="submit"
          children="수정완료"
        />
      </form>
    </div>
  );
}
