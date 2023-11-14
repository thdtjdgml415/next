"use client";

import { signOut } from "next-auth/react";

export const ListMenu = () => {
  return (
    <div className="absolute w-28 h-[6.4rem] top-14 right-5 border-spacing-3 border-solid border-4">
      <ul className="w-full">
        <li className="p-[.7rem] border-solid border-b-4 hover:bg-sky-200">
          마이페이지
        </li>
        <li
          className="p-[.7rem]  hover:bg-sky-200"
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </li>
      </ul>
    </div>
  );
};
