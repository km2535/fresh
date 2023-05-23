import React from "react";
import { connectDB } from "@/util/datebase";
import ListItem from "./listItem";

// 해당 페이지에 대한 랜더링 방식을 결정함.
export const dynamic = "force-dynamic";
// export const static_page = "force-static";

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
