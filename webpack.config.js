const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const PORT = 9000;

module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
