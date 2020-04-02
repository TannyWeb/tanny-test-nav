const path = require("path");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    vendor: "./src/js/vendor.js",
    contact: "./src/js/contact.js",
  },
  plugins: [

  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },

    ]
  }
};