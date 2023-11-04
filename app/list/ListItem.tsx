"use client";

import BaseButton from "@/components/atom/BaseButton";

import { useGetUsersQuery, useGetDeleteQuery } from "@/redux/services/userApi";
import Link from "next/link";

interface listProps {
  _id: string;
  title: string;
  content: string;
  time: string;
}

export default function ListItem() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery([]);

  console.log("[counter]", data);

  const handleDelete = (event: React.ChangeEvent<HTMLButtonElement>) => {
    console.log("[delete]", event.target.value);
    const itemData: string = (event.target as HTMLButtonElement).value;
    const buttonParentDiv: any = (event.target as HTMLButtonElement).closest(
      ".item_list"
    ); // 혹은 parentNode를 사용하여 요소를 찾을 수 있음
    console.log("buttonParentDiv", buttonParentDiv);

    fetch("/api/delete", {
      method: "DELETE",
      body: JSON.stringify({
        item: itemData,
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
    console.log("[item]", item);
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
      </div>
    );
  });
}
