import React from 'react';
//import WeatherIcon from './WeatherIcon';
import "../CSS/WeatherHourly.scss";
import { format } from 'date-fns';
import formatNumber from 'format-number';

const WeatherHour = (props) => {
    const hourData = props.hour;
    const date = new Date(hourData.dt * 1000);

    const day = format(date, 'L/d');
    const time = format(date, 'h a');

    const formatter = formatNumber({ round: 1 });
    const temp = formatter(hourData.temp);
    const feelsLike = formatter(hourData.feels_like);

    return(
        <div className="hourly-card">
            <div className="hourly-when">
                <div className="hourly-hour">{time}</div>
                <div className="hourly-day">{day}</div>
            </div>
            <div className="hourly-temp">{temp}&deg;</div>
            <div className="hourly-feels-like">
                <div className="temp">{feelsLike}&deg;</div>
                <div className="description">feels like</div>
            </div>
            <div className="hourly-description">{hourData.weather[0].description}</div>
            <div className="hourly-precipitation">{hourData.pop}%</div>
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
