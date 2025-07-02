import React, { Suspense } from "react";
import UsersList from "@/component/assignment-5/UserList";

export default function UsersPage() {
  return (
    <div className="flex">
      <p className="question">Q2. Extend your Next.js component that fetches data from a public API (https://jsonplaceholder.typicode.com/users) using server-side rendering (SSR) with the App Router to handle errors gracefully. If the fetch request fails during SSR, display a user-friendly error message on the page. Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.</p>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
