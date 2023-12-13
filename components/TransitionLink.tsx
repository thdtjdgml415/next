"use client";

// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { animatePageOut } from "./animation/animations";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label?: string;
}) {
  const router: any = useRouter();

  const handleClick = () => {
    console.log("router", href, router);
    animatePageOut(href, router);
  };

  return (
    <>
      <button
        className="px-2.5 py-3 text-15 leading-20 text-currentColor rounded-8 border-0  bg-transparent text-left hover:text-neutral-100 cursor-pointer"
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
}
