  var path = require('path');
  var config = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: "http://localhost:8080/",
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel'
      },

      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
    },
    //
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=[path][name].[ext]"
    }
    // {
    //     test: /\.(jpg|png)$/,
    //     loader: 'url-loader',
    //   }
  ]
    }
  };

  module.exports = config;
