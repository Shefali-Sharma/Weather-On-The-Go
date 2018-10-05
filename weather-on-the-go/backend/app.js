const express = require('express');
const weather = require('./weatherRouteInfo');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Place = require('./models/place');

const app = express();

mongoose.connect("mongodb+srv://shefali9222:o18Hk5Ow6mxiqTAA@cluster0-lqt5b.mongodb.net/weather-route?retryWrites=true")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

var weatherData = (src, dest) => {
  return new Promise((resolve, reject) => {
    weather.getWeatherRouteInfo(src, dest).then((response) => {
      // console.log(resolve);
      resolve(response);
    }, (errorMessage) => {
      reject(errorMessage);
    });
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, Patch, Delete, OPTIONS"
  );
  next();
});

app.post("/api/startEnd", (req, res, next) => {

  // console.log(req.body);

  var src = req.body["source"];
  var dest = req.body["destination"];

  weatherData(src, dest).then((item) => {

    const place = new Place({
      src: item.start,
      dest: item.end,
      wayPoints: item.wayPoints
    });

    place.save();

    console.log(place);
    res.status(200).json({
      src: item.start,
      dest: item.end,
      wayPoints: item.wayPoints
    });
  });
})

module.exports = app;
