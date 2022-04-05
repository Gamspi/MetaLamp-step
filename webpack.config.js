const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev


module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: './index.js',
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        open: true,
        port: 3000,
        hot: isDev,
        watchFiles:[path.resolve(__dirname,"src")]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },

    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.pug',
            filename: "index.html",
            minify: isProd
        }),
        new HtmlWebpackPugPlugin({}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    "css-loader",
                    "sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader" ]
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },

        ]
    }
}
