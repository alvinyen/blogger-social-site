var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.join(__dirname, './public/dist/'), // for real deploy bundling
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
                loaders: ['babel-loader'],
                include: path.join(__dirname, '/src')
            },
            { 
                test : /\.css$/ ,
                loaders : [
                    'style-loader' ,
                    'css-loader'
                ]
            } ,
            { 
                test : /\.scss$/ ,
                loaders : [
                    'style-loader' ,
                    'css-loader' ,
                    'autoprefixer-loader',
                    'sass-loader'
                ]
            } ,
            {  
                test : /\.(jpe?g|png)$/ ,
                loader : 'file-loader'
            }
        ]
    }
}