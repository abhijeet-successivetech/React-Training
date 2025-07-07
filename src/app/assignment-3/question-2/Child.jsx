"use client";
import React, { useContext } from "react";

import { AuthContext } from "@/component/assignment-3/AuthContext";
import { ThemeContext } from "@/context/ThemeContext";
const Child = () => {
  const { loggedIn, userName, handleAuth, handleLogout } =
    useContext(AuthContext);
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container-center">
      {loggedIn ? (
        <button className="button-primary" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="button-primary" onClick={handleAuth}>
          Login
        </button>
      )}
      <h1>
        {loggedIn ? `Welcome, ${userName}!` : "Please log in to change theme."}
      </h1>
      {loggedIn ? (
        <div>
          <h2
            style={{
              backgroundColor: dark ? "black" : "white",
              color: dark ? "white" : "black",
            }}
          >
            Current Theme: {dark ? `Dark` : "Light"}
          </h2>
          <button className=".button-primary" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Child;
