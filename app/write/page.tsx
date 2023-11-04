import BaseInput from "@/components/atom/BaseInput";

export default function Write() {
  return (
    <div className="w-full h-full text-center">
      <h4 className="text-lg font-bold antialiased leading-5 mt-40 mb-20">
        글작성
      </h4>
      <div className="write_form">
        <form name="write" action="/api/write" method="POST">
          <BaseInput
            className="border-solid border-4 m-auto mb-10"
            name="title"
            type="text"
            placeholder="글제목"
          />
          <BaseInput
            className="border-solid border-4 m-auto mb-10"
            name="content"
            type="text"
            placeholder="글 내용"
          />
          <button type="submit">버튼</button>
        </form>
      </div>
    </div>
  );
}
