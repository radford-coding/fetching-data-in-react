import { useState, useEffect } from 'react'
import './App.css'
import * as weatherService from './services/weatherService.js';
import WeatherSearch from './components/WeatherSearch/WeatherSearch.jsx';
import WeatherDetails from './components/WeatherDetails/WeatherDetails.jsx';

const App = () => {

  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    setWeather({
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    });
  };

  useEffect(() => {

    // Define a fetch function:
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };
    fetchDefaultData();

  }, []);
  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;