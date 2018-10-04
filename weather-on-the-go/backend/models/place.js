const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  src: {
    lat: Number,
    lng:  Number,
    temp: Number
  },
  dest: {
    lat: Number,
    lng:  Number,
    temp: Number
  },
  wayPoints: [{
    lat: Number,
    lng:  Number,
    temp: Number
  }]
});

module.exports = mongoose.model('Post', placeSchema);
