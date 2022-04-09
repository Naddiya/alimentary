const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, 'src', 'index.js'),
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true,
        port: 5000,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /doc/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader',
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
};

