const axios = require('axios');

var getWeatherInfo = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '&key=AIzaSyAPrWXmgiHZfesvXuvtc3NsuGj0GbuvOsw';

    axios.get(geocodeUrl).then((response) => {
      if(response.data.status === 'ZERO_RESULTS') {
        throw new Error ('Unable to find that address');
      }
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      var weatherUrl = 'https://api.forecast.io/forecast/83320cbc01784674946bb11881aebe27/' + lat +',' + lng;
      // console.log(response.data.results[0].formatted_address);
      return axios.get(weatherUrl);
    }).then((response) => {
      var temperature = response.data.currently.temperature;
      var apparentTemperature = response.data.currently.apparentTemperature;
      resolve(temperature);
      // console.log('It is currently ' + temperature + '. It feels like ' + apparentTemperature);
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
