import LoginBtn from "@/app/LoginBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { LoginImg } from "./LoginImg";
import TransitionLink from "../TransitionLink";

interface sessionProps {
  user: sessionUserProps;
}

interface sessionUserProps {
  email: string;
  image: string;
  name: string;
}

export default async function Header() {
  const session: sessionProps | null = await getServerSession(authOptions);

  console.log("[session]", session);
  return (
    <header className="fixed left-0 top-0 w-full select-none h-[60px] z-50  bg-[#F5F5F5]">
      <div className="max-w-[57rem] w-full h-full m-auto">
        <div className="flex mt-1.5 max-h-full justify-between">
          <div className="flex items-center mr-10 min-h-60">
            <p
              className="ml-12"
              style={{ fontFamily: "Noto Sans KR", fontWeight: "500" }}
            >
              S
            </p>
          </div>
          <ul className="flex items-center p-0 m-0">
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <TransitionLink href="/" label="home" />
            </li>
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <TransitionLink href="/list" label="list" />
            </li>
            <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
              <TransitionLink href="/write" label="write" />
            </li>
            {session == null ? (
              <li className="px-2 rounded-md hover:bg-blue-100 hover:text-blue-400">
                <LoginBtn />
              </li>
            ) : (
              <LoginImg session={session.user} />
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
