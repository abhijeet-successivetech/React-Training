"use client"
import { useState } from "react";
const Counter = () => {
  const [state,setState] = useState(0);

  function Increment(){
    setState(state+1);
  }
  function Decrement(){
    setState(state-1);
  }

  return (
    <>
    <button onClick={Decrement}>Decrement </button>
    <p>{state}</p>
    <button onClick={Increment}>Increment </button>
    
    </>
  )
};

export default Counter;