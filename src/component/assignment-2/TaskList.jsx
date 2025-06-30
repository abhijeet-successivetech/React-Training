"use client";
import { useState, useCallback } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const handleComplete = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Task List</h2>
      <ul style={{ paddingLeft: "1.2rem" }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.text}
            </span>
            {!task.completed && (
              <button
                onClick={() => handleComplete(task.id)}
                style={{
                  padding: "0.3rem 0.6rem",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  backgroundColor: "#28a745",
                  border: "none",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
