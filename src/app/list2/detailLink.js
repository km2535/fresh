"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function DetailLink(props) {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/detail/" + props.id);
      }}
    >
      버튼
    </button>
  );
}
