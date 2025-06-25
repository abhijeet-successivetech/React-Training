"use client"
import { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <>
    <label>
      Enter message here: 
      <input 
      type = "text"
      value = {message}
      onChange  ={handleChange}
      />
    </label>
    <br />

    <div> </div>
    </>
  );
};
export default Notification;