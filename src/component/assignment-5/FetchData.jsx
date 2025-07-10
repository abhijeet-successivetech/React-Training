"use client";
import React from "react";

const FetchData = ({ data = [] }) => {
  return (
    <div>
      <h3>Fetched Data:</h3>
      {data.length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              ID: {item.id}, Name: {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FetchData;
