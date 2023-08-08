import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Temperature from './components/Temperature/Temperature';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';


const API_URL = 'http://localhost:3000/weather';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch user's current location on page load
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const response = await axios.get(API_URL, {
              params: {
                lat: latitude,
                lon: longitude,
              },
            });
            console.log(response.data);
            setWeatherData(response.data);
          } catch (error) {
            console.error('Error fetching weather data in react:', error);
            setWeatherData(null);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          setWeatherData(null);
        }
      );
    } else {
      console.error('Geolocation is not available in your browser');
      setWeatherData(null);
    }
  }, []);


  const handleSearch = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: location,
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <Header location = {location} onChange = {(e) => setLocation(e.target.value)} onClick={handleSearch} />
      {weatherData && (<Temperature tempData = {weatherData.main} weatherData = {weatherData} />)}
      {weatherData && (<WeatherDetails weathData = {weatherData} />)}
    </div>
  );
}

export default App;
