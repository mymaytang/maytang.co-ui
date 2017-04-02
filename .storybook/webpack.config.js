const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.less$/,
        loaders: ['style', 'css', 'less'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../../')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
