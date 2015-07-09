var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        main: './js/DialogApp.js'
    },
    output: {
        path: path.join(__dirname, '/js/build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['','.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}