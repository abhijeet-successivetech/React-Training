"use client";
import { useState } from "react";

const PersonForm = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "1rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <label style={{ display: "flex", flexDirection: "column" }}>
        First Name:
        <input
          type="text"
          value={form.firstname}
          onChange={handleChange("firstname")}
          style={{ padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column" }}>
        Last Name:
        <input
          type="text"
          value={form.lastname}
          onChange={handleChange("lastname")}
          style={{ padding: "0.5rem", marginTop: "0.25rem" }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column" }}>
        Age:
        <input
          type="number"
          value={form.age}
          onChange={handleChange("age")}
          style={{ padding: "0.5rem", marginTop: "0.25rem" }}
          min="0"
        />
      </label>

      <div
        style={{
          borderTop: "1px solid #ccc",
          paddingTop: "1rem",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        <div>
          <strong>First Name:</strong> {form.firstname || "-"}
        </div>
        <div>
          <strong>Last Name:</strong> {form.lastname || "-"}
        </div>
        <div>
          <strong>Age:</strong> {form.age || "-"}
        </div>
      </div>
    </div>
  );
};

export default PersonForm;
