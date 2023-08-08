import React from 'react'
import './Temperature.css'
// import Sunnyday from './assets/sunnyday.png';

const Temperature = (props) => {
  return (
    <>
        <div className="temp-section">
            <div className="temp-container">
                <div className="temp-city">
                    <p>{props.weatherData.name}</p>
                    <p>{props.tempData.temp}</p>
                </div>
                <div className="temp-deg">
                    <div className="temp-deg-left">
                        <p>{props.tempData.temp}°</p>
                        <p><span>Feels Like</span> : {props.tempData.temp}°C</p>
                        <p><span>Low</span> : {props.tempData.temp_min}°C  <span>High</span> : {props.tempData.temp_max}°C</p>
                    </div>
                    <div className="temp-deg-right">
                        <p>Latitude : "{props.weatherData.coord.lat}"</p>
                        <p>Longitude : "{props.weatherData.coord.lon}"</p>
                        <p>07:15 pm</p>
                        <p><span>Sunrise </span> : {props.weatherData.sys.lat} <span>Sunset </span> : 42314434</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Temperature