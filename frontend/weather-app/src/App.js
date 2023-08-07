import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location..."
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
