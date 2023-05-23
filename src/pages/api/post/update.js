import { connectDB } from "@/util/datebase";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // console.log(req.body.id);
  const id = new ObjectId(req.body.id);
  const client = await connectDB;
  try {
    const db = client.db("forum");
    await db
      .collection("post")
      .updateOne(
        { _id: id },
        { $set: { title: req.body.title, content: req.body.content } }
      );
    res.redirect(302, "/list");
  } catch (error) {
    console.error("응답 오류");
  }
}
