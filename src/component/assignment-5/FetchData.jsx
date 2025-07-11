"use client";

import React, { useState, useEffect } from "react";

const FetchData = ({ data }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <div>
      <h3>Fetched Data:</h3>
      {users.length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul>
          {users.map((item) => (
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
