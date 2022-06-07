import WEATHER_API_KEY from './key.js';
import fetch from "node-fetch";

const callAPI=  function getWeather(cityName) {

   
    fetch('http://api.openweathermap.org//data/2.5/weather?q=' +cityName+ '&appid=' + WEATHER_API_KEY.WEATHER_API_KEY)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
      console.log('Error');
    });
  }


  callAPI('Vancouver');
  

 
