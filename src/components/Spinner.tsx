"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Spinner() {
  return (
    <>
      <div className={"w-screen h-screen flex justify-center mt-12"}>
        <AiOutlineLoading3Quarters className={"animate-spin"} size={70} />
      </div>
    </>
  );
}
