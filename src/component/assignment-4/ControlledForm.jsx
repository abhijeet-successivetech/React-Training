"use client";

import { useState } from "react";

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    subjects: [], 
  });

  const [subjectInput, setSubjectInput] = useState(""); 

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSubjectHandler = () => {
    if (subjectInput && !formData.subjects.includes(subjectInput)) {
      setFormData((prev) => ({
        ...prev,
        subjects: [...prev.subjects, subjectInput],
      }));
      setSubjectInput("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("form submitted");
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

      <div style={{ display: "flex", gap: "1rem" }}>
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

      <div style={{ marginTop: "1rem" }}>
        <div>Subjects :</div>
        <ul>
          {formData.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      <button className="button-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
