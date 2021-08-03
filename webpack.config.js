const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }




    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
     new VueLoaderPlugin(),
     new CopyWebpackPlugin([{
       from: path.resolve(__dirname, 'src/public'),
       to: path.resolve(__dirname, 'dist'),
       ignores:['index.html']
     }])
  ],


  mode: 'development',

  devServer: {
    open: true,
    quiet: true,
    port: 9000
  },

  devtool: 'cheap-module-eval-source-map',

  resolve:{
    extensions: [".js", ".json", ".vue"], // 配置可以省略的文件后缀
    alias: {
      '@':path.resolve(__dirname,'src') // 配置@作为src目录绝对路径别名
    }
  }



};