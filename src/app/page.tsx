"use client";

import Spinner from "@/components/Spinner";

import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://jirayu.pw";
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
}
