const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

const plugins = [
  new HtmlWebpackPlugin({
    template: "src/index.html",
  }),
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new MiniCssExtractPlugin({
    linkType: "text/css",
    filename: devMode ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    ignoreOrder: false,
  }),
];
if (!devMode) {
  // enable in production only
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  //context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./src/scripts/main.js",
    // app: "./src/mount-app.js",
    //scroll: "/src/scripts/scroll.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext][query]",
    publicPath: "./",
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  // optimization: {
  //   moduleIds: "deterministic",
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
