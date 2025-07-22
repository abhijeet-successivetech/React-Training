"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
      <div>
      <h2>Count: {count}</h2>
      <div className="container-center" style={{display:"flex", flexDirection:"column",  gap:"2rem"}} >
      <button className="button-primary" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="button-primary" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
    </div>
  );
}