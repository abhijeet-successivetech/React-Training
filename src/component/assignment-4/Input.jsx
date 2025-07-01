"use client";
import { useState } from "react";

const Input = () => {
  const [data, setData] = useState("");

  return (
    <>
      <label>
        Enter here: 
        <input type="text" onChange={(e) => setData(e.target.value)} />
      </label>
      You Typed : {data}
    </>
  );
};
export default Input;