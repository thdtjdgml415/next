import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";
import { Suspense } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { useGetUsersQuery } from "@/redux/services/userApi";

export default async function List() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-4/5 max-w-2xl">
        <h2 className="text-center font-bold antialiased text-4xl mt-20 mb-10">
          List
        </h2>
        <div className="list-bg">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
