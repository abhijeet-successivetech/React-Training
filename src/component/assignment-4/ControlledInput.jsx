"use client";
import React, { useState } from "react";

const Message = () => {
  return (
    <div>
      <p style={{ fontSize: "1.2rem", color: "#333" }}>
        This is the messege!!
      </p>
    </div>
  );
};

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function handleCheck() {
    if (inputValue === "show") {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }

  return (
    <div className="container-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value..."
        />

      <button className="button-primary"
        onClick={handleCheck}>
        Check
      </button>

      {showMessage && <Message />}
    </div>
  );
};
export default ControlledInput;
