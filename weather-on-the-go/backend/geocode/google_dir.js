const map = require('google_directions');

var getWayPoints = (sourceLoc, destinationLoc) => {
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

        var wayPoints = [];
        i = 0;
        for (const element of data.routes[0].legs[0].steps){
          if(i%3 == 0){
            var pointStart = {
              lat: element.start_location.lat,
              lng: element.start_location.lng
            };
            wayPoints.push(pointStart);
          }
          i = i + 1;
        }
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
        // return res;
        // return res;
        // module.exports.res = res;
        resolve(res);
      }
    });
  });

};



module.exports.getWayPoints = getWayPoints;
