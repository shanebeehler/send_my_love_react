var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV":     JSON.stringify("production"),
      "FB_APP_ID":    process.env.FB_APP_ID,
      "GEOCODE_KEY":  process.env.GEOCODE_KEY
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

module.exports = config;
