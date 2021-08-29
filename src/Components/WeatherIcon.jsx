import React from 'react';
import "../CSS/CurrentForecast.scss";
import 'tachyons';


const WeatherIcon = ({description}) => {
    return (
        <img src="/icons/sunny.png" alt={description} width="56" height="56"></img>
    )
}

export default WeatherIcon
