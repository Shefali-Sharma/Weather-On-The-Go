const express = require('express');
const weather = require('./weatherRouteInfo');
const bodyParser = require('body-parser');

const app = express();

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
  // var temp = {
  //   src: string,
  //   dest: string
  // };

  // temp = req.body;
  // console.log(temp);
  console.log(req.body);
  var src = req.body["source"];
  var dest = req.body["source"];
  // console.log(place);
  // source: source, destination: destination
  // res.locals.source = src;
  // res.locals.destination = dest;

  weatherData(src, dest).then((item) => {
    res.status(200).json({
      src: item.start,
      dest: item.end,
      wayPoints: item.wayPoints
    });
    // console.log(item);
  });
})

// app.use (req, res, next) {
//   console.log(res.locals.source);

//   console.log('Here');
// };

module.exports = app;
