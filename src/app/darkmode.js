"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Darkmode({ mode }) {
  const route = useRouter();
  const modeHandler = () => {
    if (document.cookie !== "") {
      if (
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("theme"))
          .split("=")[1] === "light"
      ) {
        document.cookie = "theme=dark; max-age=3600";
        route.refresh();
      } else {
        document.cookie = "theme=light; max-age=3600";
        route.refresh();
      }
    } else {
      document.cookie = "theme=dark; max-age=3600";
    }
    // document.cookie = "theme1=dark; max-age=3600";
  };
  return <span onClick={modeHandler}>{mode === "light" ? "🔆" : "🌙"}</span>;
}
