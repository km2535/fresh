"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Comment({ postId }) {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState({ postId: postId });
  const input_ref = useRef();
  const changeHandler = (e) => {
    setComment((prev) => ({ ...prev, comment: e.target.value }));
  };
  const submitHandler = () => {
    fetch("/api/comment/new", {
      method: "POST",
      body: JSON.stringify(comment),
    })
      .then(() => commnet_list())
      .then(() => (input_ref.current.value = ""));
  };
  const commnet_list = () => {
    fetch("/api/comment/list", { method: "POST", body: postId }).then((data) =>
      data.json().then((data) => setCommentList(data))
    );
  };
  useEffect(() => {
    commnet_list();
  }, []);
  // console.log(postId);
  return (
    <div>
      <div>댓글</div>
      {commentList.map((item) => (
        <div key={item._id}>{item.comment}</div>
      ))}
      <input onChange={changeHandler} ref={input_ref} />
      <button onClick={submitHandler}>댓글달기</button>
    </div>
  );
}
