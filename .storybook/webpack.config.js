const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.less$/,
        loaders: ['style', 'css', 'less'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../../')
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loaders: ['file-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../ui')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
