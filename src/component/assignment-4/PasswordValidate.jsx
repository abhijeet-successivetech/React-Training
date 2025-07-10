"use client";
import { useState } from "react";

const PasswordValidate = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (( password.length >= 8 ) &&
      ["*", "&", "!", "@", "#"].some((op) => password.includes(op))) {

      console.log(`${userName} logged in successfully`);

    } else {
      alert("Enter valid password");
    }
  };
  return (
    <div className="container-center">
    <form onSubmit={submitHandler}>
      <label htmlFor="">
        {" "}
        UserName: 
        <input
          required
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        {" "}
        Password: 
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        {" "}
        Confirm Password: 
        <input
          required
          type="password"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </label>{" "}
      <button  disabled={password !== confPassword} type="submit">
        Submit
      </button>
    </form>
    </div>
  );
};
export default PasswordValidate;