const map = require('google_directions');

var getLatLng = (sourceLoc, destinationLoc) => {
  return new Promise((resolve, reject) => {
    var params = {
      origin: sourceLoc,
      destination: destinationLoc,
      key: 'AIzaSyAPrWXmgiHZfesvXuvtc3NsuGj0GbuvOsw'
    }

    map.getDirections(params, function (err, data) {
      if (err) {
        reject(err);
    }
    else{
      var endLoc = {
        lat: data.routes[0].legs[0].end_location.lat,
        lng: data.routes[0].legs[0].end_location.lng
      };
      var startLoc = {
        lat: data.routes[0].legs[0].start_location.lat,
        lng: data.routes[0].legs[0].start_location.lng
      };
      var res = {
        endLoc: endLoc,
        startLoc: startLoc
      };
      resolve(res);
    }
    });
  });
};

var getLatLngInfo = async (sourceLoc, destinationLoc) => {
  // var res = await geocode.getWayPoints(sourceLoc, destinationLoc);
  var finalRes = await getLatLng(sourceLoc, destinationLoc);
  return finalRes;
};

module.exports.getLatLngInfo = getLatLngInfo;
