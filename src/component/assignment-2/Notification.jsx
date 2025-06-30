"use client"
import React, { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!message) return; 
    const timer = setTimeout(() => {
      setMessage(""); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div>
      {message && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        >
          {message}
        </div>
      )}

      {" "}
      <button onClick={() => setMessage("This is a notification!")}>
        Show Notification
      </button>
    </div>
  );
};

export default Notification;
