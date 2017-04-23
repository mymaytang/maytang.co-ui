const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcFolder = path.join(__dirname, 'ui')
const components = fs.readdirSync(srcFolder)

const files = [];
const entries = {};
components.forEach(component => {
  const name = component.split('.');
  const file = path.join(srcFolder, component)
  const fStat = fs.statSync(file)

  if(fStat.isFile()) {
    const f = `./ui/${name[0]}.${name[1]}`
    files.push(f);
    entries[name[0]] = f;
  } else if(fStat.isDirectory()) {
    const p = `./ui/${name[0]}/index.js`
    files.push(p);
    entries[name[0]] = p;
  }
});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve('./lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals: {
      // Use external version of React
      "styled-components": "styled-components",
      "react": "react",
      "react-dom": "react-dom",
      "window.react": "window"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'ui'),
        query: {
          presets: [/*'es2015',*/'stage-0', 'react']
        }
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'ui'),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'css-loader!less-loader!postcss-loader'
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, 'ui')
      }
    ]
  },
  resolve: {
    modules: [
        'ui',
        'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "maytang.co-ui.css",
      disable: false,
      allChunks: true
    })
  ]
}
