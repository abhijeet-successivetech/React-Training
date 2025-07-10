"use client";
import { Box, Button, TextField, Alert } from "@mui/material";
import { useState } from "react";

const SimpleFormValidation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorSummary, setErrorSummary] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const errors = [];

    if (userName.trim().length < 2) {
      errors.push("Username must be at least 2 characters long.");
    }

    if (
      password.length < 8 ||
      !["*", "&", "!", "@", "#"].some((op) => password.includes(op))
    ) {
      errors.push(
        "Password must be at least 8 characters and include one of *, &, !, @, #."
      );
    }

    if (password !== confPassword) {
      errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
      setErrorSummary(errors);
      return;
    }

    setErrorSummary([]);
    console.log(`${userName} logged in successfully`);
    alert("Form submitted successfully");
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap="1rem"
      maxWidth="400px"
      margin="auto"
      mt="50px"
      onSubmit={submitHandler}
    >
      {errorSummary.length > 0 && (
        <Alert severity="error">
          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {errorSummary.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <TextField
        label="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        label="Confirm Password"
        type="password"
        value={confPassword}
        onChange={(e) => setConfPassword(e.target.value)}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default SimpleFormValidation;
