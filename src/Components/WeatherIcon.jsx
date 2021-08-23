import React from 'react';
import "../CSS/CurrentForecast.scss";
import 'tachyons';


const WeatherIcon = (props) => {
    let description = props.description;

    return (
        <img src={require("../Icons/sunny.png")} alt="" width="56" height="56"></img>
    )
}

export default WeatherIcon