"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import DetailLink from "./detailLink";

export default function ListItem({ result }) {
  const [copyResult, setResult] = useState(result);
  const deleteHandler = (e) => {
    const id = e.target.id;
    fetch("/api/delete/deletePost", { method: "POST", body: id })
      .then(() => {
        //서서히 사라지는 클래스
        e.target.parentElement.classList.toggle("change");
      })
      .then(() =>
        setTimeout(() => {
          setResult(copyResult.filter((item) => item._id !== e.target.id));
        }, 1000)
      );
  };
  return (
    <div>
      {copyResult?.map((value) => (
        <div key={value._id} className="list-item">
          <Link href={`/detail/${value._id}`}>
            <h4>{value.title}</h4>
          </Link>
          <Link href={`/edit/${value._id}`}>✏️</Link>
          <span onClick={deleteHandler} id={value._id}>
            🦴
          </span>
          <p>{value.content}</p>
          <DetailLink id={value._id} />
        </div>
      ))}
    </div>
  );
}
