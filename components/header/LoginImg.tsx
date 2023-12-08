"use client";

import { useEffect, useState } from "react";
import { ListMenu } from "../atom/ListMenu";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/sessionSlice";

interface sessionUserProps {
  email: string;
  image: string;
  name: string;
}

export const LoginImg = ({
  session,
}: {
  session: sessionUserProps;
}): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser.setUser(session));
  }, [setUser]);

  console.log("user", session);

  const [isList, setIsList] = useState<Boolean>(false);

  const handleListMenu = () => {
    setIsList(!isList);
  };

  return (
    <>
      <button className="relative" onClick={handleListMenu}>
        <img
          className="border-solid border-2 rounded-full"
          src={`${session.image}`}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        {isList && <ListMenu />}
      </button>
    </>
  );
};
