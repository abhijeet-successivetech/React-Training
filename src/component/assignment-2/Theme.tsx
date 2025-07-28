"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import React from "react";

const Theme: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme must be used within a ThemeProvider");
  }

  const { dark, toggleTheme } = context;

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        width: "100%",
        height: "100%",
        color: dark ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}>button</button>
      <h1>hello</h1>
    </div>
  );
};

export default Theme;
