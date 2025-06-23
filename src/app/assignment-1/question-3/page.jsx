
import Weather from "@/component/assignment-1/Weather";

const getWeather = () => {
  return (
    <>
    <div>
      <p className="question">
        Q2.Create a functional component named Weather that accepts a prop called temperature (a number). <br />
        Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C. <br />
        Import and render the Weather component in the App component with different temperature values. <br />



      </p>
    </div>
    <div>
      <h2>Weather Report</h2>
       <br />
      <Weather temperature={5} />
      <Weather temperature={22} />
      <Weather temperature={30} />
    </div>
    </>
  );
};

export default getWeather;
