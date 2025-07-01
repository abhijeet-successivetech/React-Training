"use client";
import useClipboard from "@/hooks/useClipboard";
import React, { useState } from "react";

const CopyClipboard = () => {
  const [text, setText] = useState("");
  const { copied, copy } = useClipboard();

  return (
    <div className="container-center">
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
          className="button-primary"
          onClick={() => copy(text)}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};
export default CopyClipboard;
