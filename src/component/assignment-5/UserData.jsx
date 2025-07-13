"use client";
import React, { useState } from "react";
import { getUserData } from "../../app/assignment-5/question-6/page";

const UserData = ({ data }) => {
  const [loading, setLoading] = useState(false);
  
  const handleRetry = async () => {
    setLoading(true);
    await getUserData();
    setLoading(false)
  };

  if (!data || data.length===0) {
    return (
      <div className="container-center">
        <p style={{ color: "red" }}>Failed to load data. Please retry.</p>
        <button  onClick={handleRetry} disabled={loading}>
          {loading ? "Loading..." : "Retry"}
        </button>
      </div>
    );
  }
  else
{
  return (
    <div className="card">

      <p><strong>UserId:</strong> {data?.id}</p>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
    </div>
  );}
};

export default UserData;
