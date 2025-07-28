"use client";
import React, { useState, useMemo, FC } from "react";

interface Employee {
  name: string;
  salary: number;
}

const EmployeeSalary: FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { name: "Raj", salary: 50000 },
    { name: "Shekhar", salary: 60000 },
    { name: "Jitesh", salary: 55000 },
  ]);

  const averageSalary = useMemo<string>(() => {
    console.log("Calculating average salary");
    const total = employees.reduce((sum: number, emp: Employee) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

  const updateSalaries = (): void => {
    const updatedEmployees = employees.map((emp: Employee): Employee => ({
      ...emp,
      salary: emp.salary + Math.floor(Math.random() * 10000),
    }));
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container-center">
      <h2>Employee Salaries</h2>

      <ul>
        {employees.map((emp: Employee, index: number) => (
          <li key={index}>
            <span>{emp.name}</span>
            <span>Rs {emp.salary.toLocaleString()}</span>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "1rem" }}>
        Average Salary: Rs {Number(averageSalary).toLocaleString()}
      </h3>

      <button className="button-primary" onClick={updateSalaries}>
        Update Salaries
      </button>
    </div>
  );
};

export default EmployeeSalary;
