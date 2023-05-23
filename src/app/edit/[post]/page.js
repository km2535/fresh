import React from "react";
import { connectDB } from "@/util/datebase";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  //out 사용 시 props을 사용하면 적용이 안됨
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.post) });
  const id = props.params.post;
  // console.log(props.params.post);
  return (
    <div className="p-20">
      <form action="/api/post/update" method="POST">
        <input type="hidden" name="id" defaultValue={id}></input>
        <input name="title" defaultValue={result?.title} required />
        <input name="content" defaultValue={result?.content} required />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
