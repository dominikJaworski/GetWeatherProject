import React, { useEffect, useState } from 'react';
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
                const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&exclude=current,hourly,minutely,alerts&units=metric&appid=${APIkey}`);
                
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
            <div>daily forecast</div>
        );
    }
    else {
        return <div> not found!</div>
    }

}

/*
<div className="container">
                /* <WeatherHour hour={weatherData.daily[0]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[1]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[2]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[3]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[4]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[5]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[6]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[7]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[8]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[9]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[10]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[11]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[12]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[13]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[14]}></WeatherHour>
                <WeatherHour hour={weatherData.daily[15]}></WeatherHour>
                </div>
*/

export default CurrentForecast;