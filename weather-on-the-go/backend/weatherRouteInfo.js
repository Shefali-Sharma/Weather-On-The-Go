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
    let response = await weather.getWeatherInfo(element.start.lat, element.start.lng);
    var place = {
      lat: element.start.lat,
      lng: element.start.lng,
      temp: response
    };
    output.push(place);
  }
  return output;
};


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
  // console.log(weather);
  return finalRes;
};


getWeatherRouteInfo('Buffalo, NY', 'Chicago').then((response) => {
  console.log(response);
}, (errorMessage) => {
  console.log(errorMessage);
});
