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
    <div className="container-center" >
      <label>
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

      <div>
        <button className="button-primary" onClick={handleIncrement} style={{ padding: "0.5rem 1rem" }}>
          Increment
        </button>
        {" "}
        <button className="button-primary" onClick={handleDecrement} style={{ padding: "0.5rem 1rem" }}>
          Decrement
        </button>
      </div>

      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{count}</p>
    </div>
  );
};
export default CounterWithStep;
