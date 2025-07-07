"use client";

import React from "react";

export const Button = ({ buttonType, onClick }) => {
  const getBackground = () => {
    if (buttonType === "Primary") return "blue";
    if (buttonType === "Secondary") return "gray";
    return "red";
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
      {buttonType}
    </button>
  );
};
