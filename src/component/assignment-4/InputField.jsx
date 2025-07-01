"use client";
import { useState } from "react";

const InputField = () => {
  const [data, setData] = useState("");

  return (
    <div  className="container-center">

      <label>
        Enter here: 
        <input type="text" onChange={(e) => setData(e.target.value)} />
      </label>
      You Typed : {data}
    </div>
  );
};
export default InputField;