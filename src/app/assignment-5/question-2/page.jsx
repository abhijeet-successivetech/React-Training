import UserWithRetry from "../../../component/assignment-5/UserWithRetry";

export const getUserData = async () => {
  try {
    const response = await fetch (
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Error getting in response");
    }
    return response.json();
  } catch (error) {
    console.log("Server fetch error:", error);
  }
};

export default async function Page() {
  try {
    const data = await getUserData();

    return (
      <div className="container-center">
        <p className="question">
          Q2.  Extend your Next.js component that fetches data from a public API (https://jsonplaceholder.typicode.com/users) using server-side rendering (SSR) with the App Router to handle errors gracefully. If the fetch request fails during SSR, display a user-friendly error message on the page. Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.
        </p>
        <UserWithRetry data={data} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
