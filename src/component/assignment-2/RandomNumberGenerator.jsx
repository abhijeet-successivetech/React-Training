"use client";
import { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandom = () => {
    setRandomNumber(Math.ceil(Math.random() * 100));
  };

  return (
    <div
    className="container-center"
    >
      <label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        The number is: {randomNumber}
      </label>
      <button
        onClick={generateRandom}
        style={{
          padding: "0.5rem 1rem",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Generate Random
      </button>
    </div>
  );
};

export default RandomNumberGenerator;
