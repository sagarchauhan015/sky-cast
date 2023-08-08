import React from 'react'
import './Temperature.css'

const Temperature = (props) => {
  const dataTime = new Date(props.weatherData.dt).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' });
  const sunriseTime = new Date(props.weatherData.sys.sunrise).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(props.weatherData.sys.sunset).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' });
  
  return (
    <>
        <div className="temp-section">
            <div className="temp-container">
                <div className="temp-city">
                    <p>{props.weatherData.name}</p>
                    <p>Weather condition : {props.weatherData.weather[0].main}</p>
                </div>
                <div className="temp-deg">
                    <div className="temp-deg-left">
                        <p>{Math.trunc(props.tempData.temp)}°</p>
                        <p><span>Feels Like</span> : {props.tempData.temp}°C</p>
                        <p><span>Low</span> : {props.tempData.temp_min}°C  <span>High</span> : {props.tempData.temp_max}°C</p>
                    </div>
                    <div className="temp-deg-right">
                        <p>Latitude : "{props.weatherData.coord.lat}"</p>
                        <p>Longitude : "{props.weatherData.coord.lon}"</p>
                        <p>{dataTime}</p>
                        <p><span>Sunrise </span> : {sunriseTime} <span>Sunset </span> : {sunsetTime}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Temperature