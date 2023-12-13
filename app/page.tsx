"use client";

import Image from "next/image";
// import GitIcon from "@/components/Icon/gitIcon";
import GitIcon from "@/components/Icon/GitIcon";
import face from "@/public/face.png";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

export default function Home() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  {
    /* <TransitionLink href="/about" label="About ->" /> */
  }
  return (
    // {/* <main className="bg-neutral-100 text-black w-screen h-screen flex justify-center "> */}
    <main className="w-screen h-screen bg-[#F7F2F2] text-black  flex flex-col items-center justify-center gap-[50px]">
      <div className="max-w-7xl w-[1200px] h-screen bg-[#F7F2F2] grid grid-cols-4 grid-rows-4 gap-4 border-box p-4 rounded-2xl border-x-4">
        <div className="bg-[#AF989F] rounded-3xl border-box px-10 pt-12 col-span-2">
          <Image
            src={face}
            width={50}
            height={50}
            alt="프로필"
            className="mb-10"
          />
          <p className="text-base">
            I am a <em>developer</em> based in South Korea and I have a keen
            interest in UI/UX. I would love to connect and work together. It
            would be great to build a strong professional relationship.
          </p>
        </div>
        <div className="bg-[#fff] rounded-3xl flex justify-center items-center">
          <GitIcon />
        </div>
        <div className="bg-[#F4DE00] rounded-3xl">3</div>
        <div className="bg-slate-100 row-span-2 rounded-3xl">4</div>
        <div className="bg-slate-100">5</div>
        <div className="w-full h-full bg-[#FFFBD6] col-span-2 rounded-3xl">
          {/* <Image
            src={blueOcean}
            className="w-full h-full rounded-3xl"
            alt="블루바다"
          /> */}
        </div>
        {/* <div className="bg-slate-100">7</div> */}
        {/* <div className="bg-slate-100">8</div> */}
        <div className="bg-[#F4DE00] rounded-3xl">9</div>
        {/* <div className="bg-slate-100">10</div>
        <div className="bg-slate-100">11</div> */}
        <div className="bg-[#E7B1AA] row-span-2 rounded-3xl">12</div>
        <div className="bg-[#E7B1AA] col-span-2 rounded-3xl">13</div>
        {/* <div className="bg-slate-100">14</div> */}
        <div className="bg-slate-100 rounded-3xl">15</div>
        {/* <div className="bg-slate-100">16</div> */}
      </div>
    </main>
  );
}
