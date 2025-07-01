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
    <div className="container-center">
      <h2>Counter</h2>

      <div>
        <button className="button-primary" onClick={handleDecrement}>
          Decrement
        </button>

        <p style={{ fontSize: "1.5rem", color: "#333", margin: "0" }}>
          {state}
        </p>

        <button className="button-primary" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
