import WEATHER_API_KEY from './key.js';
//import fetch from "node-fetch";
//fetch = require("node-fetch");
//WEATHER_API_KEY= require ( "./key.js");

window.onload = function triggerPage() {
  callLatandLon("Vancouver");

}


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
//callLatandLon('Vancouver');




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


const drawMainSectionInfo = function () {
  let divMainSection = document.createElement('div');
  divMainSection.className = 'main-section';

  let divSelectFavoriteCities = document.createElement('div');
  divSelectFavoriteCities.className = 'select-favorite-cities';

  let selectFavoriteCities = document.createElement('Select');
  selectFavoriteCities.id = 'filter-select';

  let optionFilter = document.createElement('option');
  optionFilter.value = 'favorite-cities';
  optionFilter.label = 'Favorite Cities';

  let divSearchBarCities = document.createElement('div');
  divSearchBarCities.className = 'search-bar-cities';

  let inputSearchBarCities = document.createElement('input');
  inputSearchBarCities.id = 'search-input';
  inputSearchBarCities.placeholder = 'Enter City Name';

  let sectionToBody = document.getElementById("in-flex");

  sectionToBody.appendChild(divMainSection);
  divMainSection.appendChild(divSelectFavoriteCities);
  divSelectFavoriteCities.appendChild(selectFavoriteCities);
  selectFavoriteCities.appendChild(optionFilter);
  divMainSection.appendChild(divSearchBarCities);
  divSearchBarCities.appendChild(inputSearchBarCities);

}

const drawCurrentWeather = function (d) {

  const currentTemp = d.current.temp;
  const feelsLike = d.current.feels_like;
  const timeZone = d.timezone;
  const uvi = d.current.uvi;
  const humidity = d.current.humidity;

  let h3CurrentWeather = document.createElement('h3');
  h3CurrentWeather.id = 'h3-current-weather';
  h3CurrentWeather.textContent = "Current Weather";

  let divInFlexCurrentWeather = document.createElement('div');
  divInFlexCurrentWeather.className = 'in-flex-current-weather';

  let h1CityName = document.createElement('h1');
  h1CityName.id = 'h1-city-name';
  h1CityName.textContent = "City Name";

  let labelNameCity = document.createElement('label');
  labelNameCity.className = 'label-cities';
  labelNameCity.textContent = timeZone;

  let divWeatherInfo = document.createElement('div');
  divWeatherInfo.className = 'weather-info';

  let h3WeatherInfo = document.createElement('h3');
  h3WeatherInfo.id = 'h3-weather-info';
  h3WeatherInfo.textContent = "Weather Information";

  let pCurrentTemp = document.createElement('p');
  pCurrentTemp.id = 'p-current-temp';
  pCurrentTemp.textContent = "Current Temperature: ";

  let labelCurrentTemp = document.createElement('label');
  labelCurrentTemp.id = 'label-current-temp';
  labelCurrentTemp.textContent = currentTemp + "°";

  let pFeelsLike = document.createElement('p');
  pFeelsLike.id = 'p-feels-like';
  pFeelsLike.textContent = "Feels like: ";

  let labelFeelsLike = document.createElement('label');
  labelFeelsLike.id = 'label-feels-like';
  labelFeelsLike.textContent = feelsLike + "°";

  let pUvi = document.createElement('p');
  pUvi.id = 'p-uvi';
  pUvi.textContent = "uvi: ";

  let labelUvi = document.createElement('label');
  labelUvi.id = 'label-uvi';
  labelUvi.textContent = uvi + "°";

  let pHumidity = document.createElement('p');
  pHumidity.id = 'p-humidity';
  pHumidity.textContent = "Humidity: ";

  let labelHumidity = document.createElement('label');
  labelHumidity.id = 'label-humidity';
  labelHumidity.textContent = humidity + "°";


  let sectionToBody = document.getElementById("in-flex");

  sectionToBody.appendChild(h3CurrentWeather);
  sectionToBody.appendChild(divInFlexCurrentWeather);
  divInFlexCurrentWeather.appendChild(h1CityName);
  divInFlexCurrentWeather.appendChild(labelNameCity);
  divInFlexCurrentWeather.appendChild(divWeatherInfo);
  divWeatherInfo.appendChild(h3WeatherInfo);
  divWeatherInfo.appendChild(pCurrentTemp);
  pCurrentTemp.appendChild(labelCurrentTemp);
  pCurrentTemp.appendChild(pFeelsLike);
  pFeelsLike.appendChild(labelFeelsLike);
  pFeelsLike.appendChild(pUvi);
  pUvi.appendChild(labelUvi);
  pUvi.appendChild(pHumidity);
  pHumidity.appendChild(labelHumidity);

}

// here we draw all the jsonResponse into our webPage (dinamically or by DOM)
function drawWeather(d) {

  console.log(d)
  drawMainSectionInfo();
  drawCurrentWeather(d);
  drawhourlyForecast(d);
  return d;
}

const drawhourlyForecast = function (d) {
  console.log('HOURLY');
  console.log(d.hourly[0].dt);
  console.log(d.hourly[1].dt);
  console.log(d.hourly[2].dt);
  console.log(d.hourly.length);


  const d1 = new Date(d.hourly[0].dt * 1000);
  const d2 = new Date(d.hourly[3].dt * 1000);
  const d3 = new Date(d.hourly[6].dt * 1000);
  const d4 = new Date(d.hourly[9].dt * 1000);
  const d5 = new Date(d.hourly[12].dt * 1000);
  const d6 = new Date(d.hourly[15].dt * 1000);
  const d7 = new Date(d.hourly[18].dt * 1000);
  const d8 = new Date(d.hourly[21].dt * 1000);


  //to get the proper tome zone (vancouver time )
  // d1.setHours(d1.getHours() - 7);
  // d2.setHours(d1.getHours() - 7);
  // d3.setHours(d1.getHours() - 7);

  console.log(d1.toUTCString());
  console.log(d2.toUTCString());
  console.log(d3.toUTCString());
  console.log(d4.toUTCString());
  console.log(d5.toUTCString());
  console.log(d6.toUTCString());
  console.log(d7.toUTCString());
  console.log(d8.toUTCString());
  //console.log(m); 

  //var date = new Date(d * 1000);

}


