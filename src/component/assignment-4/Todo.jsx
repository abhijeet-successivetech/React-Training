"use client";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    const newTodo = {
      id: Date.now(),
      task: task,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTask("")
  };
  return (
    <div className="container-center">
      <label htmlFor="">
        {" "}
        Enter tasks :{" "}
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />{" "}
        <button onClick={addTask}>Add Task</button>
        <br />
        <ul>
          {todos && todos?.map((todo,index) => <li key={index}>{todo.task}</li>)}
        </ul>
      </label>
    </div>
  );
};
export default Todo;