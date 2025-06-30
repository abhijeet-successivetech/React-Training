"use client";
import React, { useState, useMemo } from "react";

const StudentList = () => {
  const initialStudents = useMemo(() => ["Alice", "Bob", "Charlie"], []);
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState("");

  const addStudent = () => {
    if (newStudent.trim() === "") return;
    setStudents((prev) => [...prev, newStudent.trim()]);
    setNewStudent("");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Student List</h2>

      <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
        {students.map((student, index) => (
          <li key={index} style={{ marginBottom: "0.25rem" }}>
            {student}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter new student name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          style={{ flexGrow: 1, padding: "8px" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") addStudent();
          }}
        />
        <button
          onClick={addStudent}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add Student
        </button>
      </div>
    </div>
  );
};
export default StudentList;
