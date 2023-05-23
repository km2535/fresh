import { connectDB } from "@/util/datebase";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const client = await connectDB;
  console.log(req.body);
  try {
    const db = client.db("forum");
    // let result = await db
    //   .collection("join")
    //   .findOne({ email: req.body.email }, { email: 1 });

    // if (result === null) {
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    await db.collection("join").insertOne(req.body);
    res.redirect(302, "/");
    // }
  } catch (error) {
    console.error("응답 오류");
  }
}
