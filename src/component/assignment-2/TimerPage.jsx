"use client";
import useTimer from "@/hooks/useTimer";

export default function TimerPage() {
  const { seconds, isRunning, start, pause, reset } = useTimer(10);

  return (
    <div className="container-center">

      <h1>Countdown Timer</h1>
      <h2 style={{ fontSize: 48, margin: "20px 0" }}>{seconds}s</h2>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={start}
          disabled={isRunning}
          style={{
            marginRight: 10,
            padding: "8px 16px",
            cursor: isRunning ? "not-allowed" : "pointer",
          }}
        >
          Start
        </button>
        <button
          onClick={pause}
          style={{ marginRight: 10, padding: "8px 16px", cursor: "pointer" }}
        >
          Pause
        </button>
        <button
          onClick={reset}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>

      <p style={{ marginTop: 20, color: "gray" }}>
        {isRunning ? "Running..." : "Stopped or finished."}
      </p>
    </div>
  );
}
