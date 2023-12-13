import { connectDB } from "@/util/database";
import backgroundImg from "../public/space.png";
import backgroundEarth from "../public/earth.png";
import Image from "next/image";
import BackGround from "@/components/backGround/BackGround";
import TransitionLink from "@/components/TransitionLink";

export default async function Home() {
  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">HOME PAGE</h1>
      <TransitionLink href="/about" label="About ->" />
    </main>
  );
}
