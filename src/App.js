import React, { Component, useState } from 'react';
import SearchLocation from './Components/SearchLocation';
import HourlyForecast from './Components/HourlyForecast';
import CurrentForecast from './Components/CurrentForecast';
import BiweeklyForecast from './Components/BiweeklyForecast';
import 'tachyons';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchField: '',
      forecastType: 0,
      location: 'detroit'
    }

    this.onSearchFieldChange = this.onSearchFieldChange.bind(this);
    this.onSearchFieldSubmit = this.onSearchFieldSubmit.bind(this);
  }

  //searchField will be the location being searched for weather
  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value }) //changes searchField prop of state to events arg
  // }

  onSearchFieldChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  onSearchFieldSubmit = (event) => {
    this.setState({ location: this.state.searchField });
    //alert('new location will be :' + this.state.searchField);
    event.preventDefault();
  }

  onCurrentForecastClick = () => {
    this.setState({ forecastType: 0 })
  }

  onHourlyForecast = () => {
    this.setState({ forecastType: 1 })
  }

  onBiweeklyForecast = () => {
    this.setState({ forecastType: 2 })
  }

  render() {

    //insert condition render here
    const whichWeatherType = this.state.forecastType;
    let weatherType;

    switch (whichWeatherType) {
      case 1:
        weatherType = <HourlyForecast location={this.state.location}></HourlyForecast>
        break;
      case 2:
        weatherType = <BiweeklyForecast location={this.state.location}></BiweeklyForecast>
        break;
      default:
        weatherType = <CurrentForecast location={this.state.location}></CurrentForecast>
    }

    return (
      <div className='tc'>
        <h1 color="white">Weather forecast</h1>
        {/* <SearchLocation searchField={this.onSearchFieldChange}>
        </SearchLocation> */}

        <form className='pa2' onSubmit={this.onSearchFieldSubmit}>
          <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Search Locations'
            onChange={this.onSearchFieldChange}
          />
          <input type="submit" value="Submit"></input>
        </form>
        <p>{this.state.searchField}</p>
        <button
          className='current-forecast-button ba tc pa2 white bg-blue hover-bg-light-blue br2 shadow-2'
          onClick={() => this.onCurrentForecastClick(this.state.searchField)}>Current Forecast</button>

        <button
          className='current-forecast-button ba tc pa2 white bg-green hover-bg-light-green br2 shadow-2'
          onClick={() => this.onHourlyForecast()}>Hourly Forecast</button>
          
        <button
          className='current-forecast-button ba tc pa2 white bg-purple hover-bg-light-purple br2 shadow-2'
          onClick={() => this.onBiweeklyForecast()}>Biweekly Forecast</button>

        {weatherType}

      </div>
    );
  }
}

export default App;
