import React from "react";


const withDataFetching = (Component, fetchFn) => {
  const WrappedComponent = async (props) => {
    const data = await fetchFn();
    return <Component {...props} data={data} />;
  };

  return WrappedComponent;
};

export default withDataFetching;
