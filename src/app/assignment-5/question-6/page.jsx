import axios from "axios";
import UserData from "./UserData";

const getUserData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return response.data;
  } catch (error) {
    console.log("Server fetch error:", error);
    return null;
  }
};

export default async function Page() {
  const data = await getUserData();

  return (
    <div className="container-center">
      <p className="question">
        Q6.  Modify your previous Next.js Server Component that fetches data with Axios to include error handling. If the request fails, display an error message and provide a retry button so the user can attempt fetching the data again. Implement the retry logic in a Client Component to handle user interaction.
      </p>
      <UserData data={data} />
    </div>
  );
}
