import React, { useEffect, useState } from 'react';
import WeatherHour from './WeatherHour';
import "../CSS/HourlyForecast.css";
import { getCurrentDateandTime } from "../OtherFunctions.js";
import WeatherIcon from '../Components/WeatherIcon';

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
                const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&exclude=current,minutely,daily,alerts&units=metric&appid=${APIkey}`);
                
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
                <WeatherHour hour={weatherData.hourly[0]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[1]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[2]}></WeatherHour>
            </div>
        );
    }
    else {
        return <div> not found!</div>
    }

}

export default CurrentForecast;