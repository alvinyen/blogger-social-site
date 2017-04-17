var path = require('path');
console.log(__dirname) ;

module.exports = {
    devtool : 'source-map' , 
    entry : './client/src/main.js'  , 
    devServer: {
       inline: true
    },
    output : {
        path : path.join(__dirname, './client/dist/') , // for real deploy bundling
        publicPath:  '/client/dist' ,  // for dev only
        filename : 'bundle.js'
    } ,
    module : {
        loaders : [
            { 
                test : /\.(js|jsx)$/ ,
                loader : 'babel-loader' ,
                include : path.join(__dirname,'client/src')
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