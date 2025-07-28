"use client";
import React, { useState, useMemo, FC } from "react";

const StudentList: FC = () => {
  const initialStudents: string[] = useMemo(() => ["Alice", "Bob", "Charlie"], []);
  const [students, setStudents] = useState<string[]>(initialStudents);
  const [newStudent, setNewStudent] = useState<string>("");

  const addStudent = (): void => {
    if (newStudent.trim() === "") return;
    setStudents((prev) => [...prev, newStudent.trim()]);
    setNewStudent("");
  };

  return (
    <div className="container-center">
      <h2>Student List</h2>

      <ul>
        {students.map((student: string, index: number) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter new student name"
          value={newStudent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStudent(e.target.value)}
          style={{ flexGrow: 1, padding: "8px" }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
