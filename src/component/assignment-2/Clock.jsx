"use client";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(currentTime);
  }, []);

  return (
    <div className="container-center" >
      <p> Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};
export default Clock;
