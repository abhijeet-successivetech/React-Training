"use client";
import React, { useState } from "react";
import axios from "axios";

const UserData = ({ data: initialData }) => {
  const [data, setData] = useState(initialData?initialData:[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(!initialData);
  
  const handleRetry = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      console.log("response",response);
      
      setData(response?.data);
    } catch (err) {
      console.log("Client fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="container-center">
        <p style={{ color: "red" }}>Failed to load data. Please retry.</p>
        <button  onClick={handleRetry} disabled={loading}>
          {loading ? "Loading..." : "Retry"}
        </button>
      </div>
    );
  }

  return (
    <div className="card">

      <p><strong>UserId:</strong> {data?.id}</p>
      <p><strong>Name:</strong> {data?.name}</p>
      <p><strong>Email:</strong> {data?.email}</p>
    </div>
  );
};

export default UserData;
