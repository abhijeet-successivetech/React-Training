import GetUserData from "@/component/assignment-5/GetUserData";

export const getUserData = async () => {
  try {
    const response = await fetch(
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
export default async function UsersPageServer() {
  const data = await getUserData();

  return (
    <div className="flex">
      <p className="question">
        Q3. Enhance your Next.js component that fetches data from a public API
        by adding a loading indicator, such as a spinner. This indicator should
        be visible while the data is being fetched and hidden once the data has
        loaded successfully. Ensure the loading state is properly managed on the
        client side, especially when implementing retry functionality. Use the
        native fetch function and integrate this loading feedback seamlessly
        with the error handling and data display in your component.
      </p>
      <GetUserData data={data}/>
    </div>
  );
}
