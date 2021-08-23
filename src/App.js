import React, { useState, useEffect } from 'react';
//import SearchLocation from './Components/SearchLocation';
import HourlyForecast from './Components/HourlyForecast';
import CurrentForecast from './Components/CurrentForecast';
import BiweeklyForecast from './Components/BiweeklyForecast';
import 'tachyons';
import './App.css';

const APIkey = '62bb4e9ufjTQ8FAHXTOATywrD0m0fCgY';

const App = (props) => {
  const [searchField, setSearchField] = useState("Detroit");
  const [location, setLocation] = useState("Detroit");
  const [locationLat, setLat] = useState("");
  const [locationLong, setLong] = useState("");
  const [forecastType, setForecastType] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //set state
  useEffect(() => {
    const fetchGeocode = async () => {
      try {
        const result = await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${APIkey}&location=${location}`);

        const JSONresult = await result.json()
        setLat(JSONresult.results[0].locations[0].latLng.lat);
        setLong(JSONresult.results[0].locations[0].latLng.lng);
        setIsLoaded(true);
        //
      }
      catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    fetchGeocode();
  }, [location]);

  /////////////////setting events listeners
  const onSearchFieldChange = (event) => {
    setSearchField(event.target.value);
  }

  const onSearchFieldSubmit = (event) => {
    setLocation(searchField);
    //alert('new location will be :' + this.state.searchField);
    event.preventDefault();
  }

  const onCurrentForecastClick = () => {
    setForecastType(0);
  }

  const onHourlyForecast = () => {
    setForecastType(1);
  }

  const onBiweeklyForecast = () => {
    setForecastType(2);
  }

  /////////////////

  //insert condition render here
  const whichWeatherType = forecastType;
  let weatherType;
  // set type of weather forecast
  switch (whichWeatherType) {
    case 1:
      weatherType = <HourlyForecast latitude={locationLat} longitude={locationLong}></HourlyForecast>
      break;
    case 2:
      weatherType = <BiweeklyForecast latitude={locationLat} longitude={locationLong}></BiweeklyForecast>
      break;
    default:
      weatherType = <CurrentForecast latitude={locationLat} longitude={locationLong}></CurrentForecast>
  }

  if (!isLoaded) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div className='tc'>
        <h1 style={{ color: 'white' }}>Weather forecast</h1>
        {/* <SearchLocation searchField={this.onSearchFieldChange}>
      </SearchLocation> */}

        <form className='pa2' onSubmit={onSearchFieldSubmit}>
          <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Search Locations'
            onChange={onSearchFieldChange}
          />
          <input type="submit" value="Submit" className='ba tc pa2 white bg-blue hover-bg-light-blue br2 shadow-2'></input>
        </form>
        {/* <p>{searchField}</p>
        <p>{locationLat}, {locationLong}</p> */}
        <button
          className='current-forecast-button ba tc pa2 white bg-blue hover-bg-light-blue br2 shadow-2'
          onClick={() => onCurrentForecastClick(searchField)}>Current Forecast</button>

        <button
          className='current-forecast-button ba tc pa2 white bg-green hover-bg-light-green br2 shadow-2'
          onClick={() => onHourlyForecast()}>Hourly Forecast</button>

        <button
          className='current-forecast-button ba tc pa2 white bg-purple hover-bg-light-purple br2 shadow-2'
          onClick={() => onBiweeklyForecast()}>Biweekly Forecast</button>

        {weatherType}

      </div>
    );
  }

}

export default App;
