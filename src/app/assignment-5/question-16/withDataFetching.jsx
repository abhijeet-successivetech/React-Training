const withDataFetching = (Component) => (props) => {
  return <Component {...props} />;
};

export default withDataFetching;
