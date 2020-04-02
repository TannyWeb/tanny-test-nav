const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common,  {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/template.html",
            chunks: ["main", "vendor"]
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/pages/contact.html",
            chunks: ["contact", "vendor"],
        }),
    ],
    module : {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  "style-loader", //3. Inject styles into DOM
                  "css-loader", //2. Turns css into commonjs
                  "sass-loader" //1. Turns sass into css
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
        ]
    }
});