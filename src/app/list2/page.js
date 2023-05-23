import React from "react";
import { connectDB } from "@/util/datebase";
import ListItem from "./listItem";

// 페이지 캐싱, 원하는 시간 만큼 혹은 영구적으로 저장된 데이터를 사용함.
export const revalidate = 20;

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  let getResult = result.map((v) => ({ ...v, _id: v._id.toString() }));

  return (
    <div className="list-bg">
      <ListItem result={getResult} />
    </div>
  );
}
