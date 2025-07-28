"use client";
import useClipboard from "@/hooks/useClipboard";
import React, { useState, ChangeEvent, FC } from "react";

const CopyClipboard: FC = () => {
  const [text, setText] = useState<string>("");
  const { copied, copy } = useClipboard();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

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
          onChange={handleChange}
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
