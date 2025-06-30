"use client";
import useClipboard from "@/hooks/useClipboard";
import React, { useState } from "react";

const CopyClipboard = () => {
  const [text, setText] = useState("");
  const { copied, copy } = useClipboard();

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      <h2 style={{ margin: 0 }}>Copy to Clipboard</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <input
          type="text"
          value={text}
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "0.5rem",
            flexGrow: 1,
            minWidth: "200px",
            maxWidth: "300px",
          }}
        />
        <button
          onClick={() => copy(text)}
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            minWidth: "80px",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};
export default CopyClipboard;
