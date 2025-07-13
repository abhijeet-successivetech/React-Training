"use client";
import React from "react";
import withAuth from "@/hoc/withAuth";

const ProtectedComponent = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/assignment-5/question-14/login";
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h3>Protected Component</h3>
      <p>You are logged in and can see this content.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default withAuth(ProtectedComponent);
