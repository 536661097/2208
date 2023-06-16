const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 根目录
  publicPath:'/',
  // 打包输出文件的文件夹名称
  outputDir:'dists',
  // 用来存放静态资源的 js css image
  assetsDir:'assets',
  // 保存代码的时候都格式化代码
  lintOnSave:true,
  // 配置所有服务器代理配置
  devServer:{
    // ip localhost=0.0.0.0    127.0.0.1
    host:'0.0.0.0',
    // 端口号
    port:'9999',
    // 是否开启https
    https:false,

    proxy:{
      "/api":{
        // 是否需要开启跨域
        changeOrigin:true,
        // 跨域的地址
        target:"url",
        // 路径重写
        patgRewrite:{
          "^/api":''
        }
      },
      "/apis":{
        // 是否需要开启跨域
        changeOrigin:true,
        // 跨域的地址
        target:"url",
        // 路径重写
        patgRewrite:{
          "^/api":''
        }
      },
    }
  }
})
