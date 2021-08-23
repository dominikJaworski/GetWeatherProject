import React from 'react';
//import WeatherIcon from './WeatherIcon';
import { getDayOfWeek } from "../OtherFunctions.js";
import "../CSS/WeatherDaily.scss";
import { format } from 'date-fns';
import formatNumber from 'format-number';

const WeatherDay = (props) => {
    const dayData = props.day;
    console.log("Biweekly test:", dayData);
    const date = new Date(dayData.dt * 1000);

    const day = format(date, 'L/d');
    
    const formatter = formatNumber({ round: 1 });
    const maxtemp = formatter(dayData.temp.max);
    const mintemp = formatter(dayData.temp.min);

    return(
        <div className="daily-card">
            <div className="dayData-when">
                <div className="dayData-dayOfWeek">{getDayOfWeek(day)}</div>
                <div className="dayData-date">{day}</div>
            </div>
            <div className="dayData-temp">
                <div className="max-temp">{maxtemp}&deg;</div>
                <div className="min-temp">{mintemp}&deg;</div>
            </div>
            
            <div className="dayData-description">{dayData.weather[0].description}</div>
            <div className="dayData-precipitation">{dayData.pop}%</div>
        </div>
    );
}

export default WeatherDay
