"use strict"

const fs = require("fs")
const paths = require("./paths")

const host = process.env.HOST || "0.0.0.0"
const port = parseInt(process.env.PORT, 10) || 3000

module.exports = function (proxy, allowedHost) {
  return {
    // 启用 gzip 压缩
    compress: true,
    // 指定主机
    host,
    // 指定端口
    port,
    // 代理设置
    proxy,
    // 允许的主机
    allowedHosts: allowedHost ? [allowedHost] : "all",
    // 静态文件设置
    static: {
      directory: paths.appPublic,
      publicPath: ["/"],
      watch: true,
    },
    // 开发中间件设置
    devMiddleware: {
      publicPath: "/",
    },
    // 客户端设置
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: "error",
    },
    // 历史 API 回退
    historyApiFallback: {
      disableDotRule: true,
    },
    // 设置退出信号
    setupExitSignals: true,
    // 热模块替换
    hot: "only",
    // 设置中间件
    setupMiddlewares: (middlewares, devServer) => {
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(devServer.app)
      }
      return middlewares
    },
    // 服务器设置
    server: {
      type: process.env.HTTPS === "true" ? "https" : "http",
    },
  }
}
