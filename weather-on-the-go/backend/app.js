const yargs = require('yargs');
const express = require('express');
const geocode = require('./geocode/google_dir');
const weather = require('./weather/weather-promises');


geocode.getWayPoints('Buffalo, NY', 'Chicago').then((res) => {
  console.log(res);
}, (errorMessage) => {
  console.log(errorMessage);
});

// const argv = yargs
//   .options({
//   a:{
//     demand: false,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })

// // const app = express();

// // app.use('/api/posts', (req, res, next) => {
// //   const posts = [
// //     {
// //       id: "23jhewdb3y",
// //       title: "First server-side post",
// //       content: "This is coming from the server"
// //     },
// //     {
// //       id: "weje83hrfe",
// //       title: "Second server-side post",
// //       content: "This is also coming from the server!"
// //     }
// //   ];
// //   res.status(200).json({
// //     message: 'Posts fecthed successfully!',
// //     posts: posts
// //   });
// // });

// // module.exports = app;
