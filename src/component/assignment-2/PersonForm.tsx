"use client";
import React, { useState, ChangeEvent, FC } from "react";

type FormState = {
  firstname: string;
  lastname: string;
  age: string;
};

const PersonForm: FC = () => {
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    age: "",
  });

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <div className="container-center">
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
