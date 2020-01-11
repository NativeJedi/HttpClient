const path = require('path');
const distPath = path.join(__dirname, '/public');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: './src/js/index.js',
        api: './src/js/api.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: distPath
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: distPath,
        port: 8080,
        open: true,
    },
    plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
