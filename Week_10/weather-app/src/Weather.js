import React from 'react';
import useWeather from './useWeather';
import './Weather.css'; // Import the CSS file

const Weather = ({ city }) => {
  const weatherData = useWeather(city);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  if (!weatherData.main) {
    return <div>No weather data available for {city}.</div>;
  }

  return (
    <div className="weather-box"> {/* Apply the 'weather-box' class */}
      <h2>Weather in {city}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
