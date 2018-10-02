const geocode = require('./geocode/google_dir');
const weather = require('./weather/weather-promises');


geocode.getWayPoints('Buffalo, NY', 'Chicago').then((res) => {
  console.log(res.wayPoints);
  weather.getWeatherInfo(res.endLoc.lat, res.endLoc.lng).then((response) => {
    console.log(response);
  }, (errorMessage) => {
      console.log(errorMessage);
  });
}, (errorMessage) => {
  console.log(errorMessage);
});
