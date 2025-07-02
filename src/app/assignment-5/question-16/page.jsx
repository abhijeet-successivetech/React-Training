import FetchData from "./FetchData";

const FetchDataPage = () => {
  return (
    <div className="container-center">
      <p className="question">
        Q16. Create a higher-order component (HOC) named withDataFetching where
        the data fetching happens in a Server Component using SSR. The fetched
        data should then be passed as props to a Client Component wrapped by the
        HOC, which displays the data.
      </p>
      <FetchData />
    </div>
  );
};
export default FetchDataPage;