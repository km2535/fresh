import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Write() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="p-20">
        <form action="/api/post/write" method="POST">
          <input name="title" placeholder="글제목" required />
          <input name="content" placeholder="글내용" required />
          <button type="submit">전송</button>
        </form>
      </div>
    );
  } else {
    return <div>로그인 하슈</div>;
  }
}
