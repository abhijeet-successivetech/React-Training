"use client";
import React, { useState } from "react";
import { getUserData } from "@/app/assignment-5/question-3/page";
import { CircularProgress, Stack } from "@mui/material";

const GetUserData = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const handleRetry = async () => {
    setLoading(true);
    await getUserData();
    setLoading(false);
  };

  if (!data) {
    return (
      <>
        {loading ? (
          <Stack spacing={2} direction="row" alignItems="center">
            <CircularProgress size="3rem" />
          </Stack>
        ) : (
          <div className="container-center">
            <p style={{ color: "red" }}>Failed to load data. Please retry.</p>
            <button onClick={handleRetry}>Retry</button>
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="card">
        <p>
          <strong>UserId:</strong> {data?.id}
        </p>
        <p>
          <strong>Name:</strong> {data?.name}
        </p>
        <p>
          <strong>Email:</strong> {data?.email}
        </p>
      </div>
    );
  }
};

export default GetUserData;
