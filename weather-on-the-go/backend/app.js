const express = require('express');
const weather = require('./weatherRouteInfo');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, Patch, Delete, OPTIONS"
  );
  next();
});

var weatherData = () => {
  return new Promise((resolve, reject) => {
    weather.getWeatherRouteInfo('Buffalo, NY', 'Chicago').then((response) => {
      // console.log(resolve);
      resolve(response);
    }, (errorMessage) => {
      reject(errorMessage);
    });
  });
}

app.use('/api/wayPoints', (req, res, next) => {
  weatherData().then((item) => {
    res.status(200).json({
      message: 'Posts fecthed successfully!',
      src: item.start,
      dest: item.end,
      wayPoints: item.wayPoints
    });
    // console.log(item);
  });
  console.log('Here');
});

module.exports = app;
