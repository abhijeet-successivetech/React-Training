"use client";
import { useState } from "react";

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setStep(value);
  };

  const handleIncrement = () => setCount((prev) => prev + step);
  const handleDecrement = () => setCount((prev) => prev - step);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        margin: "0 auto",
      }}
    >
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span>Enter the step:</span>
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          style={{
            padding: "0.5rem",
            marginTop: "0.5rem",
            width: "100px",
            textAlign: "center",
          }}
        />
      </label>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button onClick={handleIncrement} style={{ padding: "0.5rem 1rem" }}>
          Increment
        </button>
        <button onClick={handleDecrement} style={{ padding: "0.5rem 1rem" }}>
          Decrement
        </button>
      </div>

      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{count}</p>
    </div>
  );
};
export default CounterWithStep;
