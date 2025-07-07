"use client";
import React, { useContext } from "react";

import { AuthContext } from "./AuthContext";
const AuthComponent = () => {
  const { loggedIn, userName, handleAuth, handleLogout } =
    useContext(AuthContext);

  return (
    <div className="container-center">
      {loggedIn ? (
        <button
          className="button-primary"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="button-primary" 
          onClick={handleAuth}
        >
          Login
        </button>
      )}
      <h1>{loggedIn ? `Welcome, ${userName}!` : "Please log in."}</h1>
    </div>
  );
};
export default AuthComponent;
