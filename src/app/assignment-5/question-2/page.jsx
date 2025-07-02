import React, { Suspense } from "react";
import UsersList from "@/component/assignment-5/UserList";

export default function UsersPage() {
  return (
    <div className="flex">
      <p>Users from JSONPlaceholder</p>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
