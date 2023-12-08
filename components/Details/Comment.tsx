"use client";

import BaseButton from "@/components/atom/BaseButton";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

interface commentProps {
  author: string;
  content: string;
  image: string;
  parent: string;
  time: string;
  _id: string;
}

export default function Comment({ item }: { item: string }): JSX.Element {
  // const user = useAppSelector((state: any) => state?.user);
  // console.log(user);
  const [comment, setComment] = useState<string>("");
  const [commnetList, setCommnetList] = useState<commentProps[]>([]);

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
    })
      .then((result) => result.json())
      .then((data) => {
        setCommnetList((prevComments: any) => [...prevComments, data.save]);
      });
  };

  const send = () => {
    if (comment.length == 0) {
      alert("댓글을 작성해주세요");
      return;
    }
    submitComment();
    setComment(""); // comment 상태를 초기화합니다.
  };

  useEffect(() => {
    fetch(`/api/commentList?_id=${item}`, {
      method: "GET",
    })
      .then((response) => response.json()) // response를 json 형태로 파싱
      .then((data) => setCommnetList(data)) // 파싱된 데이터 처리
      .catch((error) => console.log("Error:", error)); // 에러 처리
  }, []);

  console.log("commnetList", commnetList);
  return (
    <>
      <div className="w-11/12 h-auto border-box border-solid border-y-[0.2rem] border-y-cyan-100 px-2 mx-auto mb-10">
        {commnetList.length > 0 ? (
          commnetList.map((el: any) => {
            return (
              <div
                className="flex border-box p-2 border-b-[0.1rem] border-b-cyan-100"
                key={uuidv4()}
              >
                <img
                  className="rounded-full mr-5 w-12 h-12"
                  src={el.image}
                  alt=""
                  width={50}
                  height={50}
                />

                <div className="">
                  <div className="text-xs font-semibold mb-1">{el?.author}</div>
                  <div className="text-xs mb-1">{el?.content}</div>
                  <div className="text-xs text-gray-400">{el?.time}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div>로딩중</div>
        )}
      </div>
      <div className="flex border-t-4">
        <textarea
          className="w-5/6 h-24 p-4 border-box resize-none"
          name=""
          id=""
          value={comment}
          onChange={(e) => {
            handleComment(e);
          }}
          placeholder="댓글을 작성해주세요....."
        ></textarea>
        <BaseButton
          className={"w-1/6 h-24 bg-cyan-300 text-white "}
          onClick={send}
        >
          댓글전송
        </BaseButton>
      </div>
    </>
  );
}
