const map = require('google_directions');
var params = {
  origin: 'Buffalo',
  destination: 'Chicago',
  key: 'AIzaSyAPrWXmgiHZfesvXuvtc3NsuGj0GbuvOsw'
}

map.getDirections(params, function (err, data) {
  if (err) {
      console.log(err);
      return 1;
  }

  var endLoc = {
    lat: data.routes[0].legs[0].end_location.lat,
    lng: data.routes[0].legs[0].end_location.lng
  };
  var startLoc = {
    lat: data.routes[0].legs[0].start_location.lat,
    lng: data.routes[0].legs[0].start_location.lng
  };

  var wayPoints = [];
  data.routes[0].legs[0].steps.forEach(element => {
    var pointEnd = {
      lat: element.end_location.lat,
      lng: element.end_location.lng
    };
    var pointStart = {
      lat: element.start_location.lat,
      lng: element.start_location.lng
    };
    var point = {
      end: pointEnd,
      start: pointStart
    };
    wayPoints.push(point);
  });

  var res = {
    endLoc: endLoc,
    startLoc: startLoc,
    wayPoints: wayPoints
  };
  // console.log('Data:');
  // console.log(res);
  // console.log(wayPoints);
  // console.log(endLoc);
  // console.log(startLoc);
  return res;
});

module.exports.getDirections = map.getDirections;
