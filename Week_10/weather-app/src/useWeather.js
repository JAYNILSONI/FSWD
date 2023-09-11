import { useState, useEffect } from 'react';

const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=india&appid=b5fe7bf360c7cce65110619bf0bdbba0&units=Metric';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=india&appid=b5fe7bf360c7cce65110619bf0bdbba0&units=Metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  return weatherData;
};

export default useWeather;
