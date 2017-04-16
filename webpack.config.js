var path = require('path');
console.log(__dirname) ;

module.exports = {
    devtool : 'source-map' , 
// source map功能，讓run time出錯的時候不用再追蹤所有檔案打包在一起的bundle.js，而可以確切的知道哪個檔案 (ex：index.js)的哪一行出錯 
    entry : [ 'babel-polyfill', './client/src/main.js' ] , 
// babel-polyfill的設定主要是為了讓整個專案能夠使用ES7的async await語法
// 陣列中的第二個元素則代表此專案的程式進入點
    output : {
        path : path.join(__dirname, 'client/dist/js') , 
//////////* 運行webpack打包出來的bundle.js所對應的存放資料夾 *//////////
// 運行webpack打包出來的靜態檔案 (ex：檔名hash過的圖片)所對應的存放資料夾
        filename : 'bundle.js'
    } ,
    module : {
        loaders : [
            { 
//  使用babel必須設定babel loader，test的value設定在這個專案中只要讀到js的檔案就用babel來做parse (轉成瀏覽器認識的es5)
                test : /\.(js|jsx)$/ ,
                loader : 'babel-loader' ,
                include : path.join(__dirname,'client/src')
            } ,
            { 
// 一般來說，在react專案中要使用css都要添加style-loader及css-loader，css-loader主要讓webpack能夠load進.css檔案 (webpack只認識js檔，其他類型的檔案都要透過設定loader來讓webpack能夠識別)，style-loader則讓webpack能夠處理css語法的轉譯
// test的value則設定在專案中只要看到.css檔案都用style-loader及css-loader來處理 (轉成瀏覽器認識的es5)
                test : /\.css$/ ,
                loaders : [
                    'style-loader' ,
                    'css-loader'
                ]
            } ,
            { 
// test的value則設定在專案中只要看到.scss檔案都用style-loader、css-loader及sass-loader來處理。
// style-loader及css-loader的功能同上，sass-loader則讓webpack能夠轉譯sass的語法 (轉成瀏覽器認識的es5)
                test : /\.scss$/ ,
                loaders : [
                    'style-loader' ,
                    'css-loader' ,
                    'sass-loader'
                ]
            } ,
            {  
// 設定file-loader，讓webpack能夠處理專案中的圖片檔
// test的value則設定在專案中只要看到.jpg、.jpeg或png等圖片檔都用file-loader來處理。
                test : /\.(jpe?g|png)$/ ,
                loader : 'file-loader'
            }
        ]
    }
}