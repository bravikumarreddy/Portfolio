const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const portfinder = require('portfinder');

module.exports = async (env = {}) => {
  console.log(env);
  var config = {
    entry: ['react-hot-loader/patch', './src/index.js'],
    mode: 'production',

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'docs'),
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        favicon: './assets/favicon.gif',
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
    const requestedPort = Number(process.env.PORT) || 8085;
    const port = await portfinder.getPortPromise({ port: requestedPort });

    config.devServer = {
      contentBase: './docs',
      hot: true,
      port,
    };
    config.devtool = 'inline-source-map';
    config.mode = 'development';
  }
  return config;
};
