"use client";
import { useState, useEffect } from "react";

const Slideshow = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(2000);
  const data = Array.from({ length: 10 }, (_, i) => ({
    url: `/assets/pic${i + 1}.jpg`,
  }));

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, delay * 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, delay]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

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
          border: "1px",
          borderRadius: "4px",
        }}
        placeholder="in secs"
        type="text"
        onChange={(e) => setDelay(e.target.value)}
      />
    </div>
  );
};
export default Slideshow;