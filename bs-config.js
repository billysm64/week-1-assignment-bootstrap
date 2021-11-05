module.exports = {
  "port": 3000,
  "files": ["./**/*.{html,htm,css,js}"],
  "server": {
    "baseDir": ".",
    "middleware": {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({
        "index": './aboutus.html',
        "verbose": true
      })
    }
  }
}

// module.exports = {
//   server: {
//     middleware: {
//       // overrides the second middleware default with new settings
//       1: require('connect-history-api-fallback')({
//
//         verbose: true,
//       }),
//     },
//   },
// };
