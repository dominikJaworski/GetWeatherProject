import React, { useEffect, useState } from 'react';
import WeatherHour from './WeatherHourly';
import "../CSS/HourlyForecast.scss";

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
            <div className="hourly--container">
                <WeatherHour hour={weatherData.hourly[0]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[1]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[2]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[3]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[4]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[5]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[6]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[7]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[8]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[9]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[10]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[11]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[12]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[13]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[14]}></WeatherHour>
                <WeatherHour hour={weatherData.hourly[15]}></WeatherHour>
                
            </div>
        );
    }
    else {
        return <div> not found!</div>
    }

}

export default CurrentForecast;
