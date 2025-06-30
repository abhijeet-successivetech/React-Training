"use client";
import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "Raj", salary: 50000 },
    { name: "Shekhar", salary: 60000 },
    { name: "Jitesh", salary: 55000 },
  ]);

  const averageSalary = useMemo(() => {
    console.log("Calculating average salary");
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

  const updateSalaries = () => {
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      salary: emp.salary + Math.floor(Math.random() * 10000),
    }));
    setEmployees(updatedEmployees);
  };

  return (
    <div
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h2>Employee Salaries</h2>

      <ul style={{ listStyleType: "none", padding: 0, width: "100%" }}>
        {employees.map((emp, index) => (
          <li
            key={index}
            style={{
              padding: "0.5rem",
              display: "flex",
              fontSize: "1rem",
            }}
          >
            <span>{emp.name}</span>
            <span>Rs {emp.salary.toLocaleString()}</span>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "1rem" }}>
        Average Salary: Rs {Number(averageSalary).toLocaleString()}
      </h3>

      <button
        onClick={updateSalaries}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
        }}
      >
        Update Salaries
      </button>
    </div>
  );
};
export default EmployeeSalary;
