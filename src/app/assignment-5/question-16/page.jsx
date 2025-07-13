import withDataFetching from "@/hoc/withDataFetching";
import FetchData from "@/component/assignment-5/FetchData";

const url = "https://jsonplaceholder.typicode.com/users";


const FetchDataWithHOC = withDataFetching(FetchData, url);

const FetchDataPage = () => {
  return (
    <div className="container-center">
      <p className="question">
        Q16. Create a higher-order component (HOC) named withDataFetching where
        the data fetching happens in a Server Component using SSR. The fetched
        data should then be passed as props to a Client Component wrapped by the
        HOC, which displays the data.
      </p>
      <FetchDataWithHOC />
    </div>
  );
};

export default FetchDataPage;
