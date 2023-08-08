import React from 'react'
import './WeatherDetails.css'
const WeatherDetails = (props) => {

    const getWindDirection = ()=>{
        let deg = props.weathData.wind.deg;
        let dir = "";
        if( 0 < deg < 90){
            dir = 'N-E';
        }
        else if(90 < deg < 180){
            dir = 'N-W';
        }
        else if(90 < deg < 180){
            dir = 'S-W';
        }
        else{
            dir = "S-E"
        }

        return dir;
    }

  return (
    <>
        <div className="details-section">
            <div className="details-container">
                <div className="details-box">
                    <div className="details-item-pair">
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" color='#7181E9' viewBox="0 0 32 32"><path fill="currentColor" d="M26 12a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.898 3.898 0 0 1 26 12zm0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a1.98 1.98 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30zM16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7.002 7.002 0 0 0 16 12z"/></svg>
                            </div>
                            <div className="details-info">
                                <p>Humidity</p>
                                <p>{props.weathData.main.humidity}%</p>
                            </div>
                        </div>
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#7181e9" d="M13 12c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m-3 0L7 9v2H3v2h4v2l3-3m4 0l3 3v-2h4v-2h-4V9l-3 3m6.5-8.5l-1.08 1.08C21.32 6.5 22.5 9.11 22.5 12c0 2.9-1.18 5.5-3.08 7.42l1.08 1.08c2.16-2.19 3.5-5.19 3.5-8.5s-1.34-6.31-3.5-8.5M5.69 9C6.81 6.64 9.22 5 12 5s5.19 1.64 6.32 4h2.18c-1.26-3.5-4.58-6-8.5-6S4.76 5.5 3.5 9h2.19M4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12s1.34 6.31 3.5 8.5l1.08-1.08C2.68 17.5 1.5 14.9 1.5 12c0-2.89 1.18-5.5 3.08-7.42M18.32 15c-1.13 2.36-3.53 4-6.32 4s-5.19-1.64-6.31-4H3.5c1.26 3.5 4.58 6 8.5 6s7.24-2.5 8.5-6h-2.18Z"/></svg>
                            </div>
                            <div className="details-info">
                                <p>Pressure</p>
                                <p>{props.weathData.main.pressure} hPa</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-item-pair">
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#7181e9" d="M20 14h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m0 6h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33M7 2L3 6h3v5h2V6h3m6-4l-4 4h3v5h2V6h3"/></svg>
                            </div>
                            <div className="details-info">
                                <p>Sea Level</p>
                                <p>{props.weathData.main.sea_level} hPa</p>
                            </div>
                        </div>
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><g transform="translate(0 24) scale(1 -1)"><path fill="#7181e9" d="M20 14h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m0 6h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33M7 2L3 6h3v5h2V6h3m6-4l-4 4h3v5h2V6h3"/></g></svg>
                            </div>
                            <div className="details-info">
                                <p>Ground Level</p>
                                <p>{props.weathData.main.grnd_level} hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-box">
                    <div className="details-item-pair">
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><g transform="translate(0 24) scale(1 -1)"><path fill="#7181e9" fill-rule="evenodd" d="M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0V5.5Zm8 2a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0v-.5Zm-11 6.5a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></g></svg>
                            </div>
                            <div className="details-info">
                                <p>Wind Speed</p>
                                <p>{props.weathData.wind.speed} m/s</p>
                            </div>
                        </div>
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48"><g fill="none" stroke="#7181e9" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m20 8l4-4m0 0l4 4m-4-4v12m-4 24l4 4m0 0l4-4m-4 4V32m16-12l4 4m0 0l-4 4m4-4H32M8 20l-4 4m0 0l4 4m-4-4h12"/><circle cx="24" cy="24" r="2"/></g></svg>
                            </div>
                            <div className="details-info">
                                <p>Wind Direction</p>
                                <p>{props.weathData.wind.deg}° {getWindDirection()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="details-item-pair">
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512"><path fill="#7181e9" d="M164.672 15.316c-4.24-.02-8.52-.008-12.848.032c356.973 34.267 149.668 296.606-133.02 225.675v29.272c208.715 52.028 406.9-83.077 335.225-186.316c74.252 54.5 10.927 228.767-217.44 261.272c80.052-17.795 151.75-58.013 188.793-112.78v-.003c-76.777 75.27-199.896 99.73-306.61 83.514v38.547l.03.003v29.983c103.604 17.95 230.47-10.83 317.05-98.192c-64.335 91.95-198.984 149.52-317.05 142.64v62.942C398.408 491.783 590.073 234.433 449.346 98c90.898 155.644-119.865 338.862-308.12 339.258C392.92 399.278 523.24 116.29 322.532 33.352c-43.685-11.26-96.104-17.76-157.86-18.036z"/></svg>
                            </div>
                            <div className="details-info">
                                <p>Wind Gust</p>
                                <p>{props.weathData.wind.gust} m/s</p>
                            </div>
                        </div>
                        <div className="details-item">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 512 512"><path fill="#7181e9" d="M441.6 57.64s-16.6 16.6-33.1 41.37c-11.4 17.19-23.1 38.39-29.2 61.39l-41.3-9.2l-4 17.6l41.9 9.3c-.6 4.6-.9 9.2-.9 13.9c0 35 18.6 54.4 34.6 70.4l.9.9l-72.5-16.1l-4 17.6l96.2 21.4c5.4 8.8 8.8 19.2 8.8 33.8c0 14.5-3.7 29.4-9.4 43.6L338 343.2l-4 17.6l87.9 19.5c-4.2 8.1-8.8 15.7-13.4 22.7c-15.5 23.2-30.9 38.6-30.9 38.6l12.8 12.8s16.6-16.6 33.1-41.4c5.7-8.6 11.5-18.3 16.6-28.6l37.9 8.4l4-17.6l-34.5-7.7c5.7-15 9.5-31 9.5-47.5c0-11.1-1.9-20.6-4.9-29l25.9 5.8l4-17.6l-41.4-9.2c-5.7-7.7-12.1-14.3-18.2-20.4c-16-16-29.4-28.6-29.4-57.6c0-3.3.2-6.6.6-10l84.4 18.8l4-17.6l-85-18.9c5.5-20 15.9-39.4 26.5-55.3c15.5-23.24 30.9-38.64 30.9-38.64l-12.8-12.72zM256 121c-45.5 0-104.7 19.5-151.5 46.8c-23.36 13.6-43.7 29.2-57.84 44.8C32.52 228.1 25 243.4 25 256c0 12.6 7.52 27.9 21.66 43.4c14.14 15.6 34.48 31.2 57.84 44.8c46.8 27.3 106 46.8 151.5 46.8c1.5 0 4.2-1.3 7.9-7.8c3.8-6.6 7.4-17.2 10.3-30.2c5.8-25.9 8.8-61.5 8.8-97s-3-71.1-8.8-97c-2.9-13-6.5-23.6-10.3-30.2c-3.7-6.5-6.4-7.8-7.9-7.8z"/></svg>
                            </div>
                            <div className="details-info">
                                <p>Visibility</p>
                                <p>{props.weathData.visibility / 1000} Km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherDetails