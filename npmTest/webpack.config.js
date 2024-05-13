const path = require('path');

module.exports = {
  mode: 'development', // または 'production'
  context: path.join(__dirname, "src"),
  entry: './index.js',

  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader", "webpack-dart-sass-glob"],
      },
    ],
  },
};
