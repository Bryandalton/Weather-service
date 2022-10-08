var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dcae681b7023d997abdb633d1b521fe8';
var apikey = 'dcae681b7023d997abdb633d1b521fe8';
var weatherEl = document.querySelector('.weather ')



fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    }); 