"use client";
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { name: "", email: "" };
    let valid = true;

    if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
      setErrors({ name: "", email: "" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6">Simple Validation Form</Typography>

      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        variant="outlined"
        fullWidth
      />

      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        variant="outlined"
        fullWidth
      />

      {(errors.name || errors.email) && (
        <Alert severity="error">Please fix the above errors</Alert>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};
export default FormValidation;
