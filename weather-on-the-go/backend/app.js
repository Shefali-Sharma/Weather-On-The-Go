const express = require('express');
const weather = require('./weatherRouteInfo');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const latlng = require('./geocode/google_latlng');
const Place = require('./models/place');

const app = express();

mongoose.connect("mongodb+srv://shefali9222:o18Hk5Ow6mxiqTAA@cluster0-lqt5b.mongodb.net/weather-route-data1?retryWrites=true")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

var latlngData = (src, dest) => {
  return new Promise((resolve, reject) => {
    latlng.getLatLngInfo(src, dest).then((response) => {
      resolve(response);
    }, (errorMessage) => {
      reject(errorMessage);
    });
  });
}

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
  var src = req.body["source"];
  var dest = req.body["destination"];

  latlngData(src, dest).then((latlngdata) => {
    Place.find()
    .where('src.lat').equals(latlngdata.startLoc.lat)
    .where('src.lng').equals(latlngdata.startLoc.lng)
    .where('dest.lat').equals(latlngdata.endLoc.lat)
    .where('dest.lng').equals(latlngdata.endLoc.lng).then((docs) => {
      // console.log(typeof docs);
      // var itemObject = docs.toObject();
      // console.log(docs[0].src);
      // console.log(docs["dest"]);
      // console.log(docs.wayPoints);
      if(docs.length){
        res.status(200).json({
          src: docs[0].src,
          dest: docs[0].dest,
          wayPoints: docs[0].wayPoints
        });
      }
      else{
        weatherData(src, dest).then((item) => {
          console.log('Sending res');
          const place = new Place({
            src: item.start,
            dest: item.end,
            wayPoints: item.wayPoints
          });
          place.save();
          res.status(200).json({
            src: item.start,
            dest: item.end,
            wayPoints: item.wayPoints
          });
        });
      }
    });
  });

});

module.exports = app;
