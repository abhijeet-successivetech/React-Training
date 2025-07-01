"use client";
import { useEffect, useState } from "react";

const DropDown = () => {
  const [optionValue, setOptionValue] = useState("");
  const assignmentArray = [
    "Assignment-1",
    "Assignment-2",
    "Assignment-3",
  ];

  return (
    <div className="container-center">
      <select 
        onChange={(e) => {
          setOptionValue(e.target.value);
        }}
      >
        Assignments
        <option value="">select assignments</option>
        {assignmentArray.map((assignment, index) => (
          <option key={index} value={assignment}>
            {assignment}
          </option>
        ))}
      </select>
      {optionValue && <p>The assignment is {optionValue}</p>}
    </div>
  );
};
export default DropDown;