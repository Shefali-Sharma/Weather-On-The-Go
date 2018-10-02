const axios = require('axios');

var getWeatherInfo = (lat, lng) => {
  return new Promise((resolve, reject) => {
    var weatherUrl = 'https://api.forecast.io/forecast/83320cbc01784674946bb11881aebe27/' + lat +',' + lng;
    axios.get(weatherUrl).then((response) => {
      var temperature = response.data.currently.temperature;
      resolve(temperature);
    }).catch((e) => {
      if(e.code === 'ENOTFOUND' || e.code === 'ECONNREFUSED') {
        reject ('Unable to connect to API servers');
      }
      else {
        reject (e.message);
      }
    });
  });
};

module.exports.getWeatherInfo = getWeatherInfo;
