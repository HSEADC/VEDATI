const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    library: './src/scripts/library.js',
    articles: './src/scripts/articles.js',
    tests: './src/scripts/tests.js',
    cardpages: './src/scripts/cardpages.js',
    cardlibrary: './src/scripts/cardlibrary.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
        ],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: 'body',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/article/article.html',
      filename: './article/article.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index', 'articles'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library.html',
      filename: './library.html',
      chunks: ['index', 'library', 'cardlibrary'],
    }),
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index', 'tests'],
    }),
    new HtmlWebpackPlugin({
      template: './src/error.html',
      filename: './error.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card1.html',
      filename: './library/card1.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card2.html',
      filename: './library/card2.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card3.html',
      filename: './library/card3.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card4.html',
      filename: './library/card4.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card5.html',
      filename: './library/card5.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card6.html',
      filename: './library/card6.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card7.html',
      filename: './library/card7.html',
      chunks: ['index', 'cardpages'],
    }),

    new HtmlWebpackPlugin({
      template: './src/library/card8.html',
      filename: './library/card8.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card9.html',
      filename: './library/card9.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card10.html',
      filename: './library/card10.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card11.html',
      filename: './library/card11.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card12.html',
      filename: './library/card12.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card13.html',
      filename: './library/card13.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card14.html',
      filename: './library/card14.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card15.html',
      filename: './library/card15.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card16.html',
      filename: './library/card16.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card17.html',
      filename: './library/card17.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card18.html',
      filename: './library/card18.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card19.html',
      filename: './library/card19.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card20.html',
      filename: './library/card20.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card21.html',
      filename: './library/card21.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card22.html',
      filename: './library/card22.html',
      chunks: ['index', 'cardpages'],
    }),
    new HtmlWebpackPlugin({
      template: './src/library/card23.html',
      filename: './library/card23.html',
      chunks: ['index', 'cardpages'],
    }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
}
