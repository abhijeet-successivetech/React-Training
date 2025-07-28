"use client";
import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(currentTime);
  }, []);

  return (
    <div className="container-center">
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
