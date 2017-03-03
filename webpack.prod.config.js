var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV":     JSON.stringify("production"),
      "FB_APP_ID":    JSON.stringify(process.env.FB_APP_ID),
      "GEOCODE_KEY":  JSON.stringify(process.env.GEOCODE_KEY)
    }
  })
);

config.plugins.push(
  new.webpack.EnvironmentPlugin([
    'FB_APP_ID'
  ])
);

config.plugins.EnvironmentPlugin({})

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
