const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  // настройка распознавания файлов
  resolve: {
    // расширения файлов
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  // начальные файлы
  entry: path.resolve(__dirname, 'src/index.js'),
  // выходные файлы и чанки
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build/[name].js',
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader'
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.pdf$/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          }
        ],
      },
    ]
  },
  // webpack плагины
  plugins: [
    // выделение css во внешний файл таблицы стилей
    new MiniCssExtractPlugin({
      filename: 'build/styles.css'
    }),
    // подготовка HTML файла с ресурсами
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    // копирование статических файлов из `src` в `dist`
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ]
    }),
  ],
  // настройки сервера разработки
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  // генерировать source map
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
  // webpack оптимизации
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all', // both : consider sync + async chunks for evaluation
          name: 'vendor', // имя чанк-файла
          test: /node_modules/, // test regular expression
        }
      }
    }
  },
};
