"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    router.push("/assignment-5/question-14/"); 
  };

  return (
    <div className="container-center">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
