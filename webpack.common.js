const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        cart: './src/Cart/cart.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks:['index'],
        }),
        new HTMLWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html',
            chunks: ['cart'],
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
};
