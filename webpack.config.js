 var path = require('path')
 var webpack = require('webpack')

 var config = {
     entry: './src/entry/main', //入口文件
     output: {
         path: path.join(__dirname, "/dist"), //输出文件路径
         filename: 'bundle.js', //输出文件名称
         publicPath: '/assets/' //静态资源访问路径
     },
     //加载器
     module: {
         loaders: [{
             test: /\.css$/,
             loader: "style!css",
         }, {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loaders: [
                 'react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
             ]
         }, {
             test: /\.js?$/,
             exclude: /(node_modules|bower_components)/,
             loaders: [
                 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
             ]
         }, {
             test: /\.less$/,
             loader: 'style!css!less'
         }, {
             test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
             loader: 'url',
             query: {
                 limit: 10000
             }
         }]
     },

     //插件
     plugins: [
         new webpack.optimize.OccurrenceOrderPlugin(),
         new webpack.DefinePlugin({
             'process.env.NODE_ENV': '"production"'
         })
     ]
 }


 module.exports = config;
