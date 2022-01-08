var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}
const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
    fallback: { "assert": require.resolve("assert/"), "stream": require.resolve("stream-browserify") , "process": require.resolve("process")  },

  },
  exclude: "C:\\Users\Jare\\react-dice-game\\node_moduleselliptic\\",
};
module.exports = {
  
  optimization: {
    minimize: false,
    nodeEnv: 'development',
    emitOnErrors: true,

  },
  devServer: {
    static: '/',
    hot: true
  },
  entry: {
    'react-dice-game': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.ts', '.tsx', ".d.ts"],
      fullySpecified: false,
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
      },
  
  },
  module: {
    rules: [
      webpack5esmInteropRule, 
      {
        test: /\.scss|sass$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
  resolve: {
    fullySpecified: false
  },
  exclude: "C:\\Users\Jare\\react-dice-game\\node_modules",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        resolve: {
          fullySpecified: false
        },
        exclude: "C:\\Users\Jare\\react-dice-game\\node_modules",
      },
      { 
        test: /\.ts|tsx$/,
        use: ['ts-loader'],
        resolve: {
          fullySpecified: false
        },
        exclude: "C:\\Users\Jare\\react-dice-game\\node_modules",
      },
      {
        test: /\.(js|jsx|js.map)$/,

//        test: /\.js|jsx|d.ts|js.map/,
        use: ['babel-loader'],
        resolve: {
          fullySpecified: false,
          fallback: { "assert": require.resolve("assert/"), "stream": require.resolve("stream-browserify"), "process": require.resolve("process")  },
        },
        resolve: {
          fullySpecified: false
        },
        exclude: "C:\\Users\Jare\\react-dice-game\\node_modules",
      }, {
        test: /\.svg$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ],
        resolve: {
          fullySpecified: false
        },
        exclude: "C:\\Users\Jare\\react-dice-game\\node_modules",
      }
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  plugins: [
    new MiniCssExtractPlugin({"filename": 'public/[name].bundle.css'}),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),

  ]
};
