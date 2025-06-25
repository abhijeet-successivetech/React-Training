"use client"
import { useState } from "react";

const CounterWithStep = () =>{
  const [count,setCount] = useState(0);
  const [step,setStep] = useState(1);

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  }
  const Increment = () => {
    setCount(count + step);
  }
  const Decrement = () => {
    setCount(count - step);
  }
  return (
    <>
    <br />
    <label>
      Enter the steps
      <input 
      type = "text"
      value = {step}
      onChange={handleStepChange}
      />
    </label>
    <br />
    <button onClick={Increment}>  Increment</button><br />
    <p> {count}</p>
    <button onClick={Decrement}> Decrement</button>
    </>
  );
};

export default CounterWithStep;