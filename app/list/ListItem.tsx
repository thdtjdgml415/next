"use client";

import BaseButton from "@/components/atom/BaseButton";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import { useGetUsersQuery, useGetDeleteQuery } from "@/redux/services/userApi";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface listProps {
  _id: string;
  title: string;
  content: string;
  time: string;
}

export default function ListItem() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery([]);

  const handleDelete = (event: React.ChangeEvent<HTMLButtonElement>) => {
    console.log("[delete]", event);
    const itemData: string = (event.target as HTMLButtonElement).value;
    const buttonParentDiv: any = (event.target as HTMLButtonElement).closest(
      ".item_list"
    ); // 혹은 parentNode를 사용하여 요소를 찾을 수 있음

    // let session = getServerSession(authOptions);

    fetch("/api/delete", {
      method: "DELETE",
      body: JSON.stringify({
        item: itemData,
        // author: session,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        if (event !== null && buttonParentDiv !== null) {
          buttonParentDiv.style.opacity = "0";
          setTimeout(() => {
            buttonParentDiv.style.display = "none";
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <div>loading.....</div>;
  }

  return data?.map((item: any) => {
    return (
      <div
        key={item._id}
        className="item_list bg-white rounded-lg p-5 mb-1 shadow-md flex justify-between align-center transition ease-in-out delay-150 opacity-100"
      >
        <div>
          <Link prefetch={false} href={`/detail/${item._id}`}>
            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
            <p className="font-medium mb-2">{item.content}</p>
            <time>{item.time}</time>
          </Link>
        </div>
        <div className="text-right">
          <BaseButton
            value={item._id}
            children="❌"
            className="text-right w-4 ml-8"
            onClick={handleDelete}
          />

          <Link href={`/edit/${item._id}`}>
            <div
              className={
                "bg-sky-200 w-14 h-10 mt-5 rounded-lg leading-10 text-center"
              }
            >
              ✍️
            </div>
          </Link>
        </div>
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      </div>
    );
  });
}
