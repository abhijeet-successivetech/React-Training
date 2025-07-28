"use client";
import React, { useState, useCallback, FC } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const TaskList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const handleComplete = useCallback((taskId: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div className="container-center">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
                marginRight: "10px",
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
