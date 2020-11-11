const merge = require('webpack-merge');
const webpakConfig = require('../webpack.config');

module.exports = merge(webpakConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',// ָ�������ߴ��ģʽ
  devServer: { //node���ط�����
    host: '127.0.0.1',
    port: 8010
  },
  module : {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: [
          //       require("autoprefixer") /*�Զ����ǰ׺*/
          //     ]
          //   }
          // }
        ]
      },
    ]
  },
})
