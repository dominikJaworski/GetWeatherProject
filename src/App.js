import React, { Component } from 'react';
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
      locationField: 'Detroit',
      forecastType: 0
    }

    this.onLocationChange = this.onLocationChange.bind(this);
  }

  //locationField will be the location being searched for weather
  // onSearchChange = (event) => {
  //   this.setState({ locationField: event.target.value }) //changes locationField prop of state to events arg
  // }

  onLocationChange = (event) => {
    //this.setState({ locationField: location.target.value })
    this.setState({locationField: event.target.value})
  }

  onCurrentForecastClick = (newLocation) => {
    this.setState({forecastType: 0})
  }

  onHourlyForecast = () => {
    this.setState({forecastType: 1})
  }

  onBiweeklyForecast = () => {
    this.setState({forecastType: 2})
  }

  

  render() {

    //insert condition render here
    const whichWeatherType = this.state.forecastType;
    let weatherType;

    switch(whichWeatherType){
      case 1:
        weatherType = <HourlyForecast location={this.state.locationField}></HourlyForecast>
        break;
      case 2:
        weatherType = <BiweeklyForecast location={this.state.locationField}></BiweeklyForecast>
        break;
      default:
        weatherType = <CurrentForecast location={this.state.locationField}></CurrentForecast>
    }
    
    return (
      <div className='tc'>
        <h1>Weather forecast</h1>
        <SearchLocation LocationField={this.onLocationChange}>
        </SearchLocation>
        <p>{this.state.locationField}</p>
        <button 
            className='current-forecast-button ba tc pa2 white bg-blue hover-bg-light-blue br2 shadow-2'
            onClick={() => this.onCurrentForecastClick(this.state.locationField)}>Current Forecast</button>
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
