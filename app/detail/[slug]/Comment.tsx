"use client";

import BaseButton from "@/components/atom/BaseButton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CommentProps {
  _id: object;
  title: string;
  content: string;
  time: string;
}

export default function Comment() {
  const [comment, setComment] = useState<string>("");

  const params = useSearchParams();
  console.log("comment Param", params);
  const handleComment = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  // useEffect(() => {
  //   const data = {
  //     content: comment,
  //     parent: result._id,
  //   };
  // }, [comment]);
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
          className={"w-1/6 h-24 bg-cyan-300 text-white h-10"}
          onClick={() => {
            fetch("/comment", {
              method: "POST",
            });
          }}
        >
          댓글전송
        </BaseButton>
      </div>
    </>
  );
}
