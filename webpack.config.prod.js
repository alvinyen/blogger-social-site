var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.join(__dirname, './dist/'), // for real deploy bundling
        publicPath: '/dist',  // for dev only
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                include: path.join(__dirname, '/src')
            }
        ]
    }
}