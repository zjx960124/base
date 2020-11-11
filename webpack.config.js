const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const constant = require('./config/config'); // 引入环境常量文件
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports =  {
  mode: 'development', // 开发模式
  entry: './src/main.js', // 入口文件
  output: {
    filename: "index.js", // 输出文件名
    path: __dirname + '/public' // 输出文件夹
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {/*将js或者jsx文件转码成es5*/
        test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
        exclude: /node_modules/,//排除这个文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',  // 将style 解析到html的页面上
          }
          ,{
            loader: 'css-loader' // 解析css文件
          }
          ,{
            loader: 'sass-loader', // 将scss/sass解析成css
            options: {
              implementation: require('dart-sass')
            }
          }
          // ,{
          //   loader: 'postcss-loader', // 实现自动添加css3前缀
          //   options: {
          //     plugins: [
          //       require("autoprefixer") /*自动添加前缀*/
          //     ]
          //   }
          // }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins:[
    new HtmlWebpackplugin({
      filename: 'index.html', // 打包后的文件名，默认是index.html
      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
    })
    ,new VueLoaderPlugin()
    ,new webpack.DefinePlugin({ // 定义全局变量
      CONSTANT: JSON.stringify(constant)
    })
  ]
}
