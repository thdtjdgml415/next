"use client";

import { useState } from "react";
import { ListMenu } from "../atom/ListMenu";

export const LoginImg = ({ session }: { session: string }): JSX.Element => {
  const [isList, setIsList] = useState(false);

  const handleListMenu = () => {
    setIsList(!isList);
  };

  console.log(session);
  return (
    <>
      <button className="relative" onClick={handleListMenu}>
        <img
          className="border-solid border-2 rounded-full"
          src={`${session}`}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        {isList && <ListMenu />}
      </button>
    </>
  );
};
