import React, { useEffect, useState } from 'react';
import 'tachyons';
import WeatherDay from './WeatherDay';

const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
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
                const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=42.332916&lon=-83.047853&exclude=current,hourly,minutely,alerts&units=metric&appid=${APIkey}`);
                
                setWeatherData(await result.json());
                console.log("1. latitude: ", locationLat, " longitude: ", locationLong);
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
    
    if(weatherData !== null){
        console.log("2. latitude: ", locationLat, " longitude: ", locationLong);
        console.log("biweeklyforecast test: ", weatherData);
    }
    

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (weatherData !== null) 
        if (weatherData.cod === "404") {
            return (
                <div>Biweekly forecast not found</div>
            )
        }
        else {
            
        return (            
            <div className="Biweekly-container">
                {weatherData.daily.map((day) => (<WeatherDay key={day.dt} day={day}></WeatherDay>))}
            </div>
        );
    }
    else {
        return (
            <div> not found!</div>
        )
    }

}


export default CurrentForecast;
