const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        site: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins : [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            title: 'Production',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.png$/i,
                type: 'asset/resource',
            },
        ],
    },
}