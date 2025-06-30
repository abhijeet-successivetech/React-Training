"use client";
import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  function handleIncrement() {
    setState(state + 1);
  }

  function handleDecrement() {
    setState(state - 1);
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        marginInline: "auto",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#333",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Counter
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={handleDecrement}
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Decrement
        </button>

        <p style={{ fontSize: "1.5rem", color: "#333", margin: "0" }}>{state}</p>

        <button
          onClick={handleIncrement}
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
