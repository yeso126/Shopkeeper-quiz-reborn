var path = require('path');
module.exports = {
  context: __dirname + '/src',
  entry: './app.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/public',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query:
      {
        presets:['react','es2015']
      }

    }]
  },

}
