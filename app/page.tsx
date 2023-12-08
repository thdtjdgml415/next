import { connectDB } from "@/util/database";
import backgroundImg from "../public/space.png";
import backgroundEarth from "../public/earth.png";
import Image from "next/image";
import BackGround from "@/components/backGround/BackGround";

export default async function Home() {
  return (
    <main className="w-screen h-screen ">
      <div className="w-screen h-screen overflow-hidden">
        <BackGround />
      </div>

      <section></section>
    </main>
  );
}
