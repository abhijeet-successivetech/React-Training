"use client";
import React, { useState } from "react";
import axios from "axios";

const UserData = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(!initialData);

  const handleRetry = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      setData(response.data);
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
        <button className="button-primary" onClick={handleRetry} disabled={loading}>
          {loading ? "Loading..." : "Retry"}
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <p><strong>UserId:</strong> {data?.userId}</p>
      <p><strong>Title:</strong> {data?.title}</p>
      <p><strong>Body:</strong> {data?.body}</p>
    </div>
  );
};

export default UserData;
