const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, 'js')
  },
  plugins: [
    new UglifyJsPlugin()
  ],
};