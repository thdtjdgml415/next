"use client";

import BaseButton from "@/components/atom/BaseButton";
// import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

export default function Comment({ item }: { item: string }): JSX.Element {
  // const user = useAppSelector((state: any) => state?.user);
  // console.log(user);
  const [comment, setComment] = useState<string>("");

  const handleComment = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  const submitComment = () => {
    fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        _id: item,
        content: comment,
      }),
    });
  };

  useEffect(() => {
    fetch(`/api/commentList?_id=${item}`, {
      method: "GET",
    });
  }, []);

  return (
    <>
      <div className="w-11/12 h-10 border-box border-solid border-y-2 px-2 mx-auto mb-10">
        댓글 보여줄 부분
      </div>
      <div className="flex border-t-4">
        <textarea
          className="w-5/6 h-24 p-4 border-box resize-none"
          name=""
          id=""
          onChange={(e) => {
            handleComment(e);
          }}
          placeholder="댓글을 작성해주세요....."
        ></textarea>
        <BaseButton
          className={"w-1/6 h-24 bg-cyan-300 text-white "}
          onClick={() => submitComment()}
        >
          댓글전송
        </BaseButton>
      </div>
    </>
  );
}
