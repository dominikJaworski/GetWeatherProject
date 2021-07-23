import React, { useEffect, useState } from 'react';
import "../CSS/CurrentForecast.css"
import "../Components/WeatherIcon";
import {getCurrentDateandTime} from "../OtherFunctions.js";
import 'tachyons';
import WeatherIcon from '../Components/WeatherIcon';

const APIkey = '';

const CurrentForecast = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let location = props.location;

    useEffect(() => {
        const fn = async () => {
            try {
                const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`);

                setIsLoaded(true);
                setWeatherData(await result.json());
            }
            catch (error) {
                setIsLoaded(true);
                setError(error);
            }
        };
        fn(); //calling the function defined above
    }, [location]
    )

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (weatherData !== null){
        return (
            <div class="container">

                <div class="weather-side">
                    <div class="weather-gradient">

                    </div>
                    <div class="date-container">
                        {getCurrentDateandTime()}
                    </div>
                    <div class="weather-container">

                        <WeatherIcon description={weatherData.weather[0].description}></WeatherIcon>
                        <h1 class="weather-temp">{weatherData.main.temp}</h1>
                        <h3 class="weather-desc">{weatherData.weather[0].description} </h3>
                        
                    </div>
                </div>

                <div class="info-side">
                    <div class="today-info-container">
                        <div class="today-info">
                            <div class="humidity">
                                <span class="title">HUMIDITY</span>
                                <span class="value">{weatherData.main.humidity}</span>
                            </div>
                            <div class="humidity">
                                <span class="title">FEELS LIKE</span>
                                <span class="value">{weatherData.main.feels_like}</span>
                            </div>
                            <div class="wind">
                                <span class="title">WINDSPEED</span>
                                <span class="value">{weatherData.wind.speed}</span>
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