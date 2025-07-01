"use client";
import { Box, Button, TextField, Alert } from "@mui/material";
import { useState } from "react";

const SubmitValidation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [isUserNameWrong, setIsUserNameWrong] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorSummary, setErrorSummary] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

   
    setIsUserNameWrong(false);
    setIsPasswordWrong(false);
    setPasswordMatch(true);
    setErrorSummary([]);

    const errors = [];

   
    if (userName.trim().length < 2) {
      setIsUserNameWrong(true);
      errors.push("Username must be at least 2 characters long.");
    }

   
    if (
      password.length < 8 ||
      !["*", "&", "!", "@", "#"].some((op) => password.includes(op))
    ) {
      setIsPasswordWrong(true);
      errors.push(
        "Password must be at least 8 characters and include one of *, &, !, @, #."
      );
    }

   
    if (password !== confPassword) {
      setPasswordMatch(false);
      errors.push("Passwords do not match.");
    }

    
    if (errors.length > 0) {
      setErrorSummary(errors);
      return;
    }

   
    console.log(`${userName} logged in successfully`);
    alert("Form submitted successfully");
  };

  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      onSubmit={submitHandler}
      maxWidth={"400px"}
      margin={"auto"}
      mt={"50px"}
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
        label="Name"
        variant="outlined"
        value={userName}
        error={isUserNameWrong}
        helperText={isUserNameWrong ? "Enter a valid username" : ""}
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        variant="standard"
        error={isPasswordWrong}
        value={password}
        helperText={
          isPasswordWrong
            ? "Min. 8 characters (include *, &, !, @, #)"
            : ""
        }
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        label="Confirm Password"
        variant="standard"
        type="password"
        error={!passwordMatch}
        value={confPassword}
        helperText={!passwordMatch ? "Passwords do not match" : ""}
        onChange={(e) => setConfPassword(e.target.value)}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default SubmitValidation;
