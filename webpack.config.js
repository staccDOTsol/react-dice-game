var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
  devServer: {
    static: '/',
    hot: true
  },
  entry: {
    'react-dice-game': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.scss|sass$/,
  use: ['style-loader', 'css-loader', 'sass-loader']

      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']

      },
      { 
        test: /\.ts|tsx$/,
        use: ['ts-loader']
      },
      {
        test: /\.js|jsx$/,
        use: ['babel-loader']
      }, {
        test: /\.svg$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new MiniCssExtractPlugin({"filename": '[name].bundle.css'}),
    new webpack.HotModuleReplacementPlugin()
  ]
};
