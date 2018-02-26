const path = require('path');
module.exports = {
    entry: './src/examples/index2.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 3000
    }
};