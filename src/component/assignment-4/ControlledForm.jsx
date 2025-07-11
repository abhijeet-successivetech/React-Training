"use client";

import { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    subjects: [], 
  });

  const [subjectInput, setSubjectInput] = useState(""); 
  const [subjectsList, setSubjectsList] = useState([]); 

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSubjectHandler = () => {
    if (subjectInput && !subjectsList.includes(subjectInput)) {
      setSubjectsList((prev) => [...prev, subjectInput]);
      setSubjectInput("");
    }
  };

  const checkboxChangeHandler = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        if (!prev.subjects.includes(value)) {
          return {
            ...prev,
            subjects: [...prev.subjects, value],
          };
        }
      } else {
        return {
          ...prev,
          subjects: prev.subjects.filter((subject) => subject !== value),
        };
      }
      return prev;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted. Check console for data.");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name :{" "}
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={formData.name}
        />
      </label>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div>Gender : </div>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={changeHandler}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={changeHandler}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={changeHandler}
          />
          Other
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <div>Add Subject:</div>
        <input
          type="text"
          value={subjectInput}
          onChange={(e) => setSubjectInput(e.target.value)}
        />
        <button type="button" onClick={addSubjectHandler}>
          Add
        </button>
      </div>

      {subjectsList.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <div>Select Subjects:</div>
          {subjectsList.map((subject, index) => (
            <label key={index} style={{ display: "block" }}>
              <input
                type="checkbox"
                value={subject}
                checked={formData.subjects.includes(subject)}
                onChange={checkboxChangeHandler}
              />
              {subject}
            </label>
          ))}
        </div>
      )}

      <div style={{ marginTop: "1rem" }}>
        <div>Selected Subjects :</div>
        <ul>
          {formData.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      <button className="button-primary" type="submit" style={{ marginTop: "1rem" }}>
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
