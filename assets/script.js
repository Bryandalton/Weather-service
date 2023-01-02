var apiKey = "dcae681b7023d997abdb633d1b521fe8";
var weatherEl = document.querySelector(".weather");
var city = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var clouds = document.querySelector("#clouds");
var searchBtn = document.querySelector("#searchBtn");
var searchInput = document.querySelector("#searchInput");
var cityButtons = document.querySelector(".cityButton");
var forecastSection = document.querySelector(".forecast");
var weatherData;

function fetchWeather(local = "Richmond") {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${local},us&APPID=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      weatherData = data;
      weather();
    });
}

function fetchForecast(local = "Richmond") {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${local}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.list.length; i += 8) {
        const forcastI = data.list[i];
        const card = document.createElement("div");
        const date = document.createElement("p");
        const temp = document.createElement("p");
        const hum = document.createElement("p");
        const wind = document.createElement("p");

        forecastSection.appendChild(card);
        card.appendChild(date);
        card.appendChild(temp);
        card.appendChild(hum);
        card.appendChild(wind);
        date.textContent = new Date(forcastI.dt_txt).toDateString("MM/DD/YYYY");
        temp.textContent = `temp: ${Math.round(
          (forcastI.main.temp - 273.15) * 1.8 + 32
        )}℉`;
        hum.textContent = `Humidity: ${forcastI.main.humidity}%`;
        wind.textContent = `Wind: ${forcastI.wind.speed}mph`;
      }
    });

  new Date("MM/DD/YYYY");
}
fetchForecast();
function weather() {
  var tempF = Math.round((weatherData.main.temp - 273.15) * 1.8 + 32);

  // console.log(weatherData)
  city.textContent = weatherData.name;
  temp.textContent = `Temperature: ${tempF}℉`;

  wind.textContent = `Wind Speed: ${weatherData.wind.speed}mph`;
  clouds.textContent = `${weatherData.weather[0].main}: ${weatherData.weather[0].description}`;
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
}

fetchWeather();

function clearForecast() {
  while (forecastSection.firstChild) {
    forecastSection.removeChild(forecastSection.lastChild);
  }
}

cityButtons.addEventListener("click", (event) => {
  local = event.target.value;
  fetchWeather(local);
  clearForecast();
  fetchForecast(local);
  console.log(local);
});

searchBtn.addEventListener("click", () => {
  local = searchInput.value.trim();
  console.log(searchInput.value);
  fetchWeather(local);
  clearForecast();
  fetchForecast(local);
});
