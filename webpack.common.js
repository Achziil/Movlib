const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
   },
   mode: "production",
   module: {
      rules: [
         /* style and css loader */
         {
            test: /\.css$/,
            use: [
               {
                  loader: "style-loader",
               },
               {
                  loader: "css-loader",
               },
            ],
         },
         /* babel loader */
         {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [
               {
                  loader: "babel-loader",
                  options: {
                     presets: ["@babel/preset-env"],
                  },
               },
            ],
         },
      ],
   },
   /* plugin */
   plugins: [
      /* HTML Webpack Plugin */
      new HtmlWebpackPlugin({
         template: "./src/template.html",
         filename: "index.html",
      }),
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new HtmlMinimizerPlugin({
            parallel: true,
         }),
      ],
   },
};
