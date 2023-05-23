import React from "react";
import { connectDB } from "@/util/datebase";
import { ObjectId } from "mongodb";
import Comment from "./comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {
  //out 사용 시 props을 사용하면 적용이 안됨
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.post) });

  if (result === null) {
    return notFound();
  }
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
      <Comment postId={props.params.post} />
    </div>
  );
}
