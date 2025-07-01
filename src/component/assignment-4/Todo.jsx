"use client";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const AddTask = () => {
    const newTodo = {
      id: Date.now,
      task: task,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div className="container-center">
      <label htmlFor="">
        {" "}
        Enter tasks :{" "}
        <input type="text" onChange={(e) => setTask(e.target.value)} />{" "}
        <button onClick={AddTask}>Add Task</button>
        <br />
        <ul>
          {todos && todos?.map((todo,index) => <li key={index}>{todo.task}</li>)}
        </ul>
      </label>
    </div>
  );
};
export default Todo;