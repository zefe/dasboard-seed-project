const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(c|d|t)sv$/,
                use: ["dsv-loader"]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                query: {
                    interpolate: 'require'
                }
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            hash:true,
            template: './public/index.html',
            title: 'Relativity6',
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};