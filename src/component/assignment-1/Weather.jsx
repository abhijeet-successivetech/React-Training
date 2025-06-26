const Weather = ({ temperature }) => {
  if (temperature > 25) {
    return <div>It's sunny today!</div>;
  } else if (temperature < 10) {
    return <div>It's cold today!</div>;
  } else {
    return <div>Temperature is moderate today!!!</div>;
  }
}
export default Weather;
