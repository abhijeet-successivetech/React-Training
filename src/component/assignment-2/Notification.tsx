"use client";
import React, { useState, useEffect } from "react";

const Notification: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="container-center">
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

      <button
        className="button-primary"
        onClick={() => setMessage("This is a notification!")}
      >
        Show Notification
      </button>
    </div>
  );
};

export default Notification;
