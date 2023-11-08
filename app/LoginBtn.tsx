"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0 cursor-pointer bg-transparent text-left"
      onClick={() => signIn()}
    >
      로그인
    </button>
  );
}
