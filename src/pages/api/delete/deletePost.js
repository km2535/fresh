import { connectDB } from "@/util/datebase";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const client = await connectDB;

  try {
    const db = client.db("forum");
    if (session) {
      let result = await db.collection("post").deleteOne({
        _id: new ObjectId(req.body),
        author: session?.user.email,
      });
      result?.deletedCount > 0
        ? res.status(200).send({ message: true })
        : res.status(200).json({ message: false });
    } else {
      res.status(200).json({ message: false });
    }
  } catch (error) {
    console.error(error);
  }
}
