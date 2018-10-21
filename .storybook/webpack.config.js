const path = require('path');
const webpack = require('../node_modules/@storybook/core/node_modules/webpack');

const getClientEnvironment = require('react-scripts/config/env');
const env = getClientEnvironment('');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(svg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  plugins: [new webpack.DefinePlugin(env.stringified)]
};
