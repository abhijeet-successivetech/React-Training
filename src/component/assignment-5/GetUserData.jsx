"use client";

import React, { useState } from "react";
import CircularSize from "../../app/assignment-5/loading";

const GetUserData = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(!initialData);

  const handleRetry = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch data");
      const newData = await res.json();
      setData(newData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="container-center">
        {loading ? (
          <CircularSize />
        ) : (
          <>
            <p style={{ color: "pink" }}>Please Retry</p>
            <button className="button-primary" onClick={handleRetry}>
              Retry
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="container-center">
      <h1 className="question">User Data</h1>
      <div className="flex" style={{ gap: "1rem" }}>
        {data?.map((item) => (
          <div className="card" key={item.id}>
            <p><strong>User ID:</strong> {item?.id}</p>
            <p><strong>Name:</strong> {item?.name}</p>
            <p><strong>Username:</strong> {item?.username}</p>
            <p><strong>Address:</strong> {item?.address?.street}</p>
            <p><strong>Phone:</strong> {item?.phone}</p>
            <p><strong>Company:</strong> {item?.company?.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default GetUserData;
