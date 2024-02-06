const miniCssExtract = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        //em quais arquivos irá execucar o LOADER
        test: /\.css$/,
        //qual loader ira usar
        use: [miniCssExtract.loader, "css-loader"],
      },
    ],
  },
  plugins:[
    new miniCssExtract()
  ]
};
