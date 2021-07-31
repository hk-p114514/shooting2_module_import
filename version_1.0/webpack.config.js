const path = require("path");
const Obfuscator = require("webpack-obfuscator");

module.exports = {
  entry: path.resolve(__dirname, "src/main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./dist/public",
    hot: true,
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new Obfuscator(
      {
        rotateUnicode: true,
      },
      []
    ),
  ],
};
