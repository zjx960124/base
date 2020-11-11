const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const constant = require('./config/config'); // ���뻷�������ļ�
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports =  {
  mode: 'development', // ����ģʽ
  entry: './src/main.js', // ����ļ�
  output: {
    filename: "index.js", // ����ļ���
    path: __dirname + '/public' // ����ļ���
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {/*��js����jsx�ļ�ת���es5*/
        test: /\.jsx?$/,// �������ƥ���׺��Ϊjs����jsx���ļ�
        exclude: /node_modules/,//�ų�����ļ���
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
            loader: 'style-loader',  // ��style ������html��ҳ����
          }
          ,{
            loader: 'css-loader' // ����css�ļ�
          }
          ,{
            loader: 'sass-loader', // ��scss/sass������css
            options: {
              implementation: require('dart-sass')
            }
          }
          // ,{
          //   loader: 'postcss-loader', // ʵ���Զ����css3ǰ׺
          //   options: {
          //     plugins: [
          //       require("autoprefixer") /*�Զ����ǰ׺*/
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
      filename: 'index.html', // �������ļ�����Ĭ����index.html
      template: path.resolve(__dirname, 'index.html') // ���뱻������ļ�ģ��
    })
    ,new VueLoaderPlugin()
    ,new webpack.DefinePlugin({ // ����ȫ�ֱ���
      CONSTANT: JSON.stringify(constant)
    })
  ]
}
