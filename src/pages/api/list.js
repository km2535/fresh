import { connectDB } from "@/util/datebase";

export default async function handler(req, res) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  if (res.status(200)) {
    res.status(200).json(result);
  } else {
    throw console.error("응답 오류");
  }
}
