import { connectDB } from "@/util/database";
import backgroundImg from "../public/space.png";
import backgroundEarth from "../public/earth.png";
import Image from "next/image";
import BackGround from "@/components/backGround/BackGround";
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
    <main className="w-screen h-screen flex items-center">
      <div className="w-11/12 h-5/6 px-5 py-5 border-box mx-auto bg-slate-400">
        <div className="flex justify-around">
          <div className="w-1/12 border-box p-8 flex justify-center bg-violet-600">
            <Menu />
          </div>

          <div className="w-9/12 h-full bg-gray-100">
            <div className="h-1/4 bg-slate-100">
              <Slide />
            </div>
            <div className="h-1/4 bg-slate-300">dsadjosi</div>
            <div className="h-1/4 bg-slate-200">dsadjosi</div>
            <div className="h-1/4 bg-slate-400">dsadjosi</div>
          </div>
        </div>
      </div>
      {/* <div className="relative w-screen h-screen overflow-x-hidden overflow-y-scroll z-10">
        <BackGround />
        <div className="">
          <div className="absolute left-[5%] top-[40%] z-50">
            <GitIcon />
          </div>
          <div className="absolute left-[5%] top-[60%] z-50">
            <InstargramIcon />
          </div>
        </div>
        <div className="absolute left-[49.5%] top-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2">
          <Astronaut />
        </div>
        <div className="absolute left-[49.5%] top-[55%] z-20 transform -translate-x-1/2 -translate-y-1/2">
          <Earth />
        </div>
        <div className="absolute right-[10%] z-50 top-3/4 hover:opacity-75">
          <LeftScroll />
        </div>
        <div className="absolute left-[10%] z-50 top-3/4 hover:opacity-75">
          <RightEnter />
        </div>
      </div> */}
    </main>
  );
}
