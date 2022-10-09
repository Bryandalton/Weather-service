var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dcae681b7023d997abdb633d1b521fe8';
var apikey = 'dcae681b7023d997abdb633d1b521fe8';
var weatherEl = document.querySelector('.weather')
var city = document.querySelector('#city');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var uv = document.querySelector('#humidity')
var weatherData;

fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      weatherData = data;
    });

console.log(weatherData)

function weather (weatherData) {
  console.log(weatherData)
  city.textContent = weatherData.name;

}
weather()