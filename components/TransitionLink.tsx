"use client";

// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { animatePageOut } from "./animation/animations";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router: any = useRouter();

  const handleClick = () => {
    console.log("router", href, router);
    animatePageOut(href, router);
  };

  return (
    <button
      className="border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
