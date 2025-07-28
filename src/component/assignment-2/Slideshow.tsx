"use client";
import React, { useState, useEffect } from "react";

const Slideshow: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [delay, setDelay] = useState<number>(2); // in seconds

  const data: { url: string }[] = Array.from({ length: 10 }, (_, i) => ({
    url: `/assets/pic${i + 1}.jpg`,
  }));

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, delay * 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, delay]);

  const togglePlay = (): void => setIsPlaying((prev) => !prev);

  const handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value > 0) {
      setDelay(value);
    }
  };

  return (
    <div className="container-center">
      <img
        src={data[currentIndex].url}
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "6px",
          objectFit: "cover",
        }}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button
        className="button-primary"
        onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "lightgrey",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        placeholder="in secs"
        type="number"
        min="1"
        value={delay}
        onChange={handleDelayChange}
      />
    </div>
  );
};

export default Slideshow;
