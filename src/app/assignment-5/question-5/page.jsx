import axios from "axios";
const getUserData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};
const ServerSideApi = async () => {
  const data = await getUserData();
  return (
    <div className="container-center">
      <p className="question">
        Q5. Create a Next.js component that fetches data from a public API (like
        JSONPlaceholder) using Axios and displays the results on the page. Use
        the App Router conventions and perform the data fetching on the server
        side.
      </p>
      <h1>User Details</h1>
      {data.map((item, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            margin: "0.5rem",
          }}
          key={item.id}
        >
          <p>UserId : {item?.id}</p>
          <p>Name : {item?.name}</p>
          <p>Email : {item?.email}</p>
        </div>
      ))}
    </div>
  );
};
export default ServerSideApi;
