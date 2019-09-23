const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.conf");
const webpackConfigDev = {
  mode: "development", // 通过 mode 声明开发环境
  output: {
    path: path.resolve(__dirname, "../dist"),
    // 打包多出口文件
    // 生成 a.bundle.[hash].js  b.bundle.[hash].js
    filename: "./js/[name].bundle.js",
    chunkFilename: "chunk[id].js?[chunkhash]"
  },
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    publicPath: "/",
    host: "127.0.0.1",
    port: "8080",
    overlay: true, // 浏览器页面上显示错误
    open: true, // 开启浏览器
    // stats: "errors-only", //stats: "errors-only"表示只打印错误：
    hot: true, // 开启热更新
    // 本地测试权限开关接口
    proxy: {
      "/yanghua_edu": {
        target: "http://94.191.125.82/yanghua_edu",
        changeOrigin: true,
        pathRewrite: {
          "^/yanghua_edu": ""
        }
      }
    }
  },
  plugins: [
    //热更新
    new webpack.HotModuleReplacementPlugin()
  ],
  // devtool: "source-map",  // 开启调试模式
  module: {
    rules: []
  }
};
module.exports = merge(webpackConfigBase, webpackConfigDev);
