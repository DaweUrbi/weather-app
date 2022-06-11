import WEATHER_API_KEY from './key.js';
import fetch from "node-fetch";


const callLatandLon = function getLatAndLon(cityName) {

  fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=' + WEATHER_API_KEY.WEATHER_API_KEY)
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {
      //console.log(data);
      //console.log(data);
      callAPI1(data[0].lat, data[0].lon);


    })
    .catch(function () {
      // catch any errors
      console.log('Error1');
    });

}

//callAPI('Vancouver');
callLatandLon('Vancouver');




const callAPI1 = function getWeatherFull(lat, lon) {
  console.log('lat=' + lat);
  console.log('lon=' + lon);


  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=metric&exclude=minutely,alerts&appid=' + WEATHER_API_KEY.WEATHER_API_KEY)
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {

      drawWeather(data);
      //console.log(data);
      //  console.log('CURRENT');
      //  console.log(data.current);
      //  console.log('HOURLY');
      //  console.log(data.hourly);
      //  console.log('DAILY');
      //  console.log(data.daily);


    })
    .catch(function () {
      // catch any errors
      console.log('Error2');
    });



}

const currentWeather = function () {
  let newSection = document.createElement('section');
  newSection.className = 'in-flex';

  let divMainSection = document.createElement('div');
  divMainSection.className = 'main-section';

  let divSelectFavoriteCities = document.createElement('div');
  divSelectFavoriteCities.className = 'select-favorite-cities';

  let newSelect = document.createElement('Select');
  newSelect.id = 'filter-select';

  let optionFilter = document.createElement('option');
  optionFilter.value = 'favorite-cities';
  optionFilter.label = 'Favorite Cities';

  let divSearchBarCities = document.createElement('div');
  divSearchBarCities.className = 'search-bar-cities';

  let newInput = document.createElement('input');
  newInput.id = 'search-input';
  newInput.placeholder = 'Enter City Name';

  //! Add H3 <h3 id="current-weather-h3">Current Weather</h3>

  let divInFlexCurrentWeather = document.createElement('div');
  divInFlexCurrentWeather.className = 'in-flex-current-weather';

  //! <h1>City Name</h1> 

  let newLabel = document.createElement('label');
  newLabel.className = 'label-cities';

  let divWeatherInfo = document.createElement('div');
  divWeatherInfo.className = 'weather-info';

  


}

// here we draw all the jsonResponse into our webPage (dinamically or by DOM)
function drawWeather(d) {

  console.log(d)

  return d;
}



