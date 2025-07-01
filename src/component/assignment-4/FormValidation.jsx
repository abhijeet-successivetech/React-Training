"use client";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const FormValidation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [isUserNameWrong,setIsUserNameWrong]=useState(false);
  const [passwordMatch,setPasswordMatch]=useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsUserNameWrong(false);
    setIsPasswordWrong(false);
    setPasswordMatch(true);
    if(userName.trim().length<2){
      setIsUserNameWrong(true);
      return;
    }
    if (
      password.length < 8 ||
      !["*", "&", "!", "@", "#"].some((op) => password.includes(op))
    ) {

      setIsPasswordWrong(true);
      return;
    }

    if(password!==confPassword){
      setPasswordMatch(false);
      return;
    }
    console.log(`${userName} logged in successfully`);
  };
  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      onSubmit={submitHandler}
    >
      <TextField
        label="Name"
        varient="outlined"
        value={userName}
        error={isUserNameWrong}
        helperText={!userName ? "Enter username" : ""}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        varient="standard"
        error={isPasswordWrong}
        value={password}
        helperText={
          (password.length < 8 ||
            !["*", "&", "!", "@", "#"].some((op) => password.includes(op))) &&
          "Min. 8 characters (include *,&,!,@,#)"
        }
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        varient="standard"
        type="password"
        error={!passwordMatch}
        value={confPassword}
        helperText={password != confPassword && "Password do not match"}
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <Button
       
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};
export default FormValidation;
