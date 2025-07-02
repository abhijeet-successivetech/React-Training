"use client";

import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users.");
      }

      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Unable to load users. Please try again.");
      setUsers(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button
          onClick={fetchUsers}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {users?.map((user) => (
        <li key={user.id}>
          <h2 >{user.name}</h2>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
