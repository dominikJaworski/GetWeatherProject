import React, { useEffect, useState } from 'react';
import WeatherIcon from './WeatherIcon';
import "../CSS/HourlyForecast.css";

const WeatherHour = (props) => {
    const hourData = props.hour;
    let time = hourData.dt;

    return(
        <div className="weather-hourly-card">
            <div className="hourly-date">{hourData.dt}</div>
            <div className="hourly-time">{hourData.dt}</div>
            <div className="hourly-temp">{hourData.temp}</div>
            <div className="hourly-feels-like">{hourData.feels_like}</div>
            <div className="hourly-description">{hourData.weather[0].description}</div>
            <div className="hourly-precipitation">{hourData.pop}</div>
            <div className="hourly-humidity">{hourData.humidity}</div>
        </div>
    );

    // useEffect(() => {
    //     const fn = async () => {
    //         try {

    //         } catch (error) {
    //             setIsLoaded(true);
    //             setError(error);
    //         }

    //     };
    //     fn();

    // }, []
    // );

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else if ( !== null) 
    //     if (weatherData.cod === "404") {
    //         return <div>data for that location not available</div>
    //     }
    //     else {
    //     return (
    //         <div className="container">

                
    //         </div>
    //     );
    // }
    // else {
    //     return <div> not found!</div>
    // }
}

export default WeatherHour