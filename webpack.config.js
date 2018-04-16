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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
