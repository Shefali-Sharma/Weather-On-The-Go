const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
  a:{
    demand: false,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '&key=AIzaSyAPrWXmgiHZfesvXuvtc3NsuGj0GbuvOsw';

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error ('Unable to find that address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = 'https://api.forecast.io/forecast/83320cbc01784674946bb11881aebe27/' + lat +',' + lng;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log('It is currently ' + temperature + '. It feels like ' + apparentTemperature);
}).catch((e) => {
  if(e.code === 'ENOTFOUND' || e.code === 'ECONNREFUSED') {
    console.log ('Unable to connect to API servers');
  }
  else {
    console.log(e.message);
  }
});
