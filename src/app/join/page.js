"use client";
import React from "react";

export default function Join() {
  // const change_handler = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="flex justify-center h-screen items-center flex-col">
      <div className="text-3xl	font-mono	">회원가입</div>
      <form action="/api/join/new" method="POST">
        <input
          className={" w-96	border-2 border-neutral-400	text-slate-700	"}
          // onChange={change_handler}
          type="text"
          name="name"
          placeholder="이름"
        />
        <input
          className={" w-96	border-2 border-neutral-400	text-slate-700	"}
          // onChange={change_handler}
          type="text"
          name="email"
          placeholder="이메일"
        />
        <input
          className={" w-96	border-2 border-neutral-400	"}
          type="password"
          name="password"
          placeholder="비밀번호"
        />
        <div className="text-right	">
          <button className="bg-slate-300	" type="submit">
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
