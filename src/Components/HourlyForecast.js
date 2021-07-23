import React from 'react';
import 'tachyons';

const APIkey = '';
//think about translating city location to lat and lon for hourly and biweekly

const HourlyForecast = (props) => {
    let location = props.location;

    // const fn = async () => {
    //         try {
    //             const result = await fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?q=${location}&appid=${APIkey}`);

    //             setIsLoaded(true);
    //             setWeatherData(await result.json());
    //         }
    //         catch (error) {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     };
    // fn();

    return(
        <div>hourly</div>
    )

}

export default HourlyForecast;