import { connectDB } from "@/util/database";
import backgroundImg from "../public/space.png";
import backgroundEarth from "../public/earth.png";
import Image from "next/image";
import BackGround from "@/components/backGround/BackGround";
import TransitionLink from "@/components/TransitionLink";
import Earth from "@/components/backGround/Earth";
import LeftScroll from "@/components/backGround/LeftScroll";
import RightEnter from "@/components/backGround/RightEnter";
import Astronaut from "@/components/backGround/Astronaut";
// import GitIcon from "@/components/Icon/gitIcon";
import InstargramIcon from "@/components/Icon/InstargramIcon";
import Menu from "@/components/Menu/Menu";
import Slide from "@/components/Slide/Slide";

export default async function Home() {
  return (
    <main className="bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]">
      <h1 className="text-5xl">HOME PAGE</h1>
      <TransitionLink href="/about" label="About ->" />
    </main>
  );
}
