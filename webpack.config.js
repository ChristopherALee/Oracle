var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
