var apiKey = "dcae681b7023d997abdb633d1b521fe8";
var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=Richmond,us&APPID=${apiKey}`;
var weatherEl = document.querySelector(".weather");
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var uv = document.querySelector("#humidity");
var clouds = document.querySelector("#clouds");
var searchBar = document.querySelector('#searchBar');
var weatherData;

fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    weatherData = data;
    weather();
  });

console.log();

function weather() {
var tempF = Math.round(((weatherData.main.temp-273.15)*1.8)+32)

  // console.log(weatherData)
  city.textContent = weatherData.name;
  temp.textContent = `Temperature: ${tempF}℉`;

  wind.textContent = `Wind Speed: ${weatherData.wind.speed}mph`
  clouds.textContent = `${weatherData.weather[0].main}: ${weatherData.weather[0].description}`;
  humidity.textContent= `Humidity: ${weatherData.main.humidity}%`
}
