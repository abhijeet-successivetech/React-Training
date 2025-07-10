"use client";
import React from "react";
import { getUserData } from "../../app/assignment-5/question-2/page";

const UserWithRetry = ({ data }) => {

  const handleRetry = async () => {
    await getUserData();
  };
  console.log(data);
  
  if (!data) {
    return (
      <div className="container-center">
        <p style={{ color: "red" }}>Failed to load data. Please retry.</p>
        <button  onClick={handleRetry}>
          Retry
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

export default UserWithRetry;