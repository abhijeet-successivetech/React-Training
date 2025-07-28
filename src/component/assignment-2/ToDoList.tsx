"use client";
import React, { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const handleAddTodo = (): void => {
    if (task.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      task: task.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleCompletion = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container-center">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className="button-primary" onClick={handleAddTodo}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompletion(todo.id)}
            />
            <p style={{ marginLeft: 8 }}>{todo.task}</p>
            <button
              className="button-primary"
              onClick={() => handleDelete(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
