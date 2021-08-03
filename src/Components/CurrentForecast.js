import React, { useEffect, useState } from 'react';
import "../CSS/CurrentForecast.css"
import "../Components/WeatherIcon";
import { getCurrentDateandTime } from "../OtherFunctions.js";
import 'tachyons';
import WeatherIcon from '../Components/WeatherIcon';

const APIkey = '23628a9de895c8a73840ced8190e3c96';
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
                const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&exclude=minutely,hourly,daily,alerts&appid=${APIkey}`);

                setIsLoaded(true);
                setWeatherData(await result.json());
            }
            catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        };
        fn(); //calling the function defined above
    }, [locationLat, locationLong]
    )

    console.log("Latitude = ", locationLat, ", Longitude = ", locationLong, ", APIkey = ", APIkey);

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

/*
{weatherData !== null ? (
                    <li key={weatherData.sys.id}>
                        {weatherData.name}<br></br>
                        {weatherData.weather[0].description}<br></br>
                        {weatherData.main.temp}<br></br>
                        {weatherData.main.humidity}<br></br>
                    </li>
                ) : (
                    <></>
                )}
*/

export default CurrentForecast;