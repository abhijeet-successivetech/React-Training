import React from "react";

const withDataFetching = (Component, url) => {
  const WrappedComponent = async (props) => {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    return <Component {...props} data={data} />;
  };

  return WrappedComponent;
};

export default withDataFetching;
