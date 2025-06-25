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
  <>
  <br />
  <p>Current Time: {time.toLocaleTimeString()}</p>
  
  </>
  );
};
export default Clock;
