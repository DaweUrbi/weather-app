import WEATHER_API_KEY from './key.js';
import fetch from "node-fetch";


  const callLatandLon = function getLatAndLon(cityName){

    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ cityName+'&limit=1&appid='+ WEATHER_API_KEY.WEATHER_API_KEY)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      callAPI1(data[0].lat, data[0].lon);
    })
    .catch(function() {
      // catch any errors
      console.log('Error');
    });

  }


  //callAPI('Vancouver');
  callLatandLon('Vancouver');
  


 
  const callAPI1 = function getWeatherFull(lat,lon){
    console.log('lat='+lat);
    console.log('lon='+lon);

   
     fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=metric&exclude=minutely,alerts&appid='+ WEATHER_API_KEY.WEATHER_API_KEY)  
     .then(function(resp) { return resp.json() }) // Convert data to json
     .then(function(data) {
       //console.log(data);
       console.log('CURRENT');
       console.log(data.current);
       console.log('HOURLY');
       console.log(data.hourly);
       console.log('DAILY');
       console.log(data.daily);
     })
     .catch(function() {
       // catch any errors
       console.log('Error');
     });
 
   }