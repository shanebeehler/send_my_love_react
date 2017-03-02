var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

// export var vars = {
//   GEOCODE_KEY: process.env.GEOCODE_KEY,
//   FB_APP_ID: process.env.FB_APP_ID
// }

module.exports = config;
