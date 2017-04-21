var path = require('path');
console.log(__dirname) ;

module.exports = {
    devtool : 'source-map' , 
    entry : ['babel-polyfill','./src/main.js'], 
    output : {
        path : path.join(__dirname, './dist/') , // for real deploy bundling
        publicPath:  '/dist' ,  // for dev only
        filename : 'bundle.js'
    } ,
    module : {
        loaders : [
            { 
                test : /\.(js|jsx)$/ ,
                loader : 'babel-loader' ,
                include : path.join(__dirname,'/src')
            } ,
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