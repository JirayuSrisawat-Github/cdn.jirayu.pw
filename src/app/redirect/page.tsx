"use client";

import { useState, useEffect } from "react";

import Spinner from "@/components/Spinner";

export default function Redirect() {
  useEffect(() => {
    let url: string =
      window.location.href.split("?url=")[1] || "https://jirayu.pw";
    window.location.href = url;
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
}
