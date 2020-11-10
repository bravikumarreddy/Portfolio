const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log(env);
  var config = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    mode: 'development',

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['react-hot-loader/babel'],
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
  };
  if (env.development) {
    config.devServer = {
      contentBase: './dist',
      hot: true,
    };
    config.devtool = 'inline-source-map';
    config.mode = 'production';
  }
  return config;
};
