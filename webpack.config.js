var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    vendorPath = path.resolve(__dirname, './src/js/vendor');

// https://github.com/webpack/css-loader/issues/145#issuecomment-150605536
var Promise = require('es6-promise').polyfill();

module.exports = {
    entry: {
        vendor: [
            "jquery",
            "bootstrap"
        ],
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // pathinfo: true,
        publicPath: '/dist/',
        filename: 'build.js',
        sourceMapFilename: '[file]-[id].map'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    resolve: {
        alias: {
            bootstrap: vendorPath + '/bootstrap.min.js',
		    vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            },
            /*
            {
                test: /\.css$/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            */
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    cacheDirectory: './src/cache'
                    // plugins: ['transform-runtime']
                },
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url',
                query: {
                    limit: 1000,
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=1000&minetype=application/font-woff&name=fonts/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            }
        ]
    },
    // extract css from components into a single css file
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            // include <style lang="less">
            less: ExtractTextPlugin.extract("css!less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$':             "jquery",
            'jQuery':        "jquery",
            'window.jQuery': "jquery"
        }),
        // new ExtractTextPlugin("style.css")
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: "libs.js"
        })
    ],
    build: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'static'
    }
}

if (process.env.NODE_ENV === 'production') {

  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true,
          warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()

    // create the index.html
    // new HtmlWebpackPlugin()

  ]);

} else {

  // dev env only

  module.exports.devtool = '#source-map';
  //  devtool: '#eval-source-map',

  module.exports.devServer = {
        historyApiFallback: true,
        noInfo: true
  };

}
