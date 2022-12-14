const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    context:__dirname,
    entry:'./index.js',
    devServer: {
        historyApiFallback: true
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename:'index.html'
        })
    ]
};