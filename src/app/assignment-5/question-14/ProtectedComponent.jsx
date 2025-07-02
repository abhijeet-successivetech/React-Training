"use client";
import React from "react";
import withAuth  from "./withAuth";

const ProtectedComponent = (props) => {
  const { loggedIn, handleAuth, handleLogout } = props;
  return (
    <div>
      {loggedIn ? (
        <button className="button-primary" onClick={handleLogout}>logout</button>
      ) : (
        <button className="button-primary" onClick={handleAuth}>login</button>
      )}
    </div>
  );
};

export default withAuth(ProtectedComponent);