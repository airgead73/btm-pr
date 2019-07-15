const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: "./admin/src/index.js",
      output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "main.js"
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(css|scss)$/,
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
              "css-loader",
              "sass-loader"
            ]
          },
          // {
          //   test: /\.css$/,
          //   use: ['style-loader', 'css-loader']
          // },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]"
                //context: 'app/src',
                //publicPath: '/'
              }
            }
          }
        ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "./admin/src/index.html",
          filename: "index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        }),
        new CopyWebpackPlugin([{ from: "admin/src/images", to: "./images" }]),
        new webpack.ProvidePlugin({
          $:'jquery',
          jQuery:'jquery'
        })
      ]
    }
  ]);
};
