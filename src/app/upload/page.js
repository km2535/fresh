"use client";
import { imgUploader } from "@/util/imgUploader";
import React, { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState("");
  const [filepreview, setFilepreview] = useState("");
  const changeHandler = (e) => {
    setFile(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setFilepreview(reader.result);
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", file);
    fetch("/api/upload/new", { method: "POST", body: formData }).then(
      (data) => data.json().then((url) => console.log(url)) //url를 mongodb에 저장하면 됨.
    );
  };
  return (
    <form method="POST" onSubmit={submitHandler}>
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={changeHandler}
      />
      {filepreview && <img src={filepreview}></img>}
      <button type="submit">전송</button>
    </form>
  );
}
