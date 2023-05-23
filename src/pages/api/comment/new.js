import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/datebase";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const client = await connectDB;
  const data = JSON.parse(req.body);
  // console.log(data);
  if (session) {
    data.author = session.user.email;
    try {
      const db = client.db("forum");
      await db.collection("comment").insertOne(data);
      res.send("댓글 완료");
    } catch (error) {
      console.error("응답 오류");
    }
  } else {
    res.redirect(302, "/list");
  }
}
