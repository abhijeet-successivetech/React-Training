import withDataFetching from "./withDataFetching";

const FetchData = ({ data = [] }) => {
  return (
    <>
      {data.length === 0 ? (
        <p>No data found</p>
      ) : (
        data.map((item) => (
          <p key={item?.id}>UserName : {item?.name}</p>
        ))
      )}
    </>
  );
};
export default withDataFetching(FetchData);
