const path = require('path'),
      ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './code/main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};