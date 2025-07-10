"use client";

import React from "react";

export const Button = ({ variant, label, onClick }) => {
  const getBackground = () => {
    if (variant === "Primary") return "blue";
    if (variant === "Secondary") return "gray";
    return "red"; // Danger or default
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: getBackground(),
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
      }}
    >
      {label}
    </button>
  );
};
