import { connectDB } from "@/util/datebase";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const client = await connectDB;
  if (session) {
    req.body.author = session.user.email;
    try {
      const db = client.db("forum");
      await db.collection("post").insertOne(req.body);
      res.redirect(302, "/list");
    } catch (error) {
      console.error("응답 오류");
    }
  } else {
    res.redirect(302, "/list");
  }
}
