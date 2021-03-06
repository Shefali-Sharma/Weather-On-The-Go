const geocode = require('./geocode/google_dir');
const weather = require('./weather/weather-promises');

var getSingleWeather = async(lat, lng) => {
  let res = await weather.getWeatherInfo(lat, lng);
  var place = {
    lat: lat,
    lng: lng,
    temp: res
  };
  return place;
};

var getAllWeather = async (wayPointsList) => {
  let output = [];
  for (const element of wayPointsList){
    let response = await weather.getWeatherInfo(element.lat, element.lng);
    var place = {
      lat: element.lat,
      lng: element.lng,
      temp: response
    };
    output.push(place);
  }
  return output;
};

// var getLocationData = async (sourceLoc, destinationLoc) => {
//   var res = await geocode.getWayPoints(sourceLoc, destinationLoc);
//   console.log(res);

//   return res;
// }

var getWeatherRouteInfo = async (sourceLoc, destinationLoc) => {
  var res = await geocode.getWayPoints(sourceLoc, destinationLoc);
  var outS = await getSingleWeather(res.startLoc.lat, res.startLoc.lng);
  var outE = await getSingleWeather(res.endLoc.lat, res.endLoc.lng);
  var weather = await getAllWeather(res.wayPoints);

  var finalRes = {
    start: outS,
    end: outE,
    wayPoints: weather
  }
  return finalRes;
};

module.exports.getWeatherRouteInfo = getWeatherRouteInfo;
