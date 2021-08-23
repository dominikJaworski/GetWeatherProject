import React, { useEffect, useState } from 'react';
import "../CSS/CurrentForecast.scss"
import "./WeatherIcon";
import { getCurrentDateandTime } from "../OtherFunctions.js";
import 'tachyons';
import WeatherIcon from './WeatherIcon';

const APIkey = '';
//const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`)

const CurrentForecast = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let locationLat = props.latitude;
    let locationLong = props.longitude;

    useEffect(() => {
        const fn = async () => {
            try {
                const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${APIkey}`);
                
                setWeatherData(await result.json());
                setIsLoaded(true);
            }
            catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        };
        fn(); //calling the function defined above
    }, [locationLat, locationLong]
    )

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (weatherData !== null) 
        if (weatherData.cod === "404") {
            return <div>data for that location not available</div>
        }
        else {
        return (
            <div className="container">

                <div className="weather-side">
                    
                    <div className="weather-gradient">

                    </div>
                    <div className="date-container">
                        {getCurrentDateandTime()}
                    </div>
                    <div className="weather-container">

                        <WeatherIcon description={weatherData.current.weather[0].description}></WeatherIcon>
                        <h1 className="weather-temp">{weatherData.current.temp}</h1>
                        <h3 className="weather-desc">{weatherData.current.weather[0].description}</h3>

                    </div>
                </div>

                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="humidity">
                                <span className="title">HUMIDITY</span>
                                <span className="value">{weatherData.current.humidity}</span>
                            </div>
                            <div className="humidity">
                                <span className="title">FEELS LIKE</span>
                                <span className="value">{weatherData.current.feels_like}</span>
                            </div>
                            <div className="wind">
                                <span className="title">WINDSPEED</span>
                                <span className="value">{weatherData.current.wind_speed}</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
    else {
        return <div> not found!</div>
    }

}

export default CurrentForecast;