const path = require("path")
const mode = process.env.NODE_ENV
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssEP = require("mini-css-extract-plugin")

console.log(mode)
module.exports = {
    mode: mode,
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
        filename: `[name].[hash].js`,
        path: path.resolve(__dirname, "dist"),

    },
    devServer: {
        open: true,
        port: 3000,
        watchFiles:'./src'
    },
    devtool: (mode === "development") ? "source-map" : "eval",

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
    ,
    plugins: [

        new HtmlWebpackPlugin(
            {
                template: "./src/index.pug"
            }
        ),
        new MiniCssEP({
            filename: "styles/[name].[hash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"

            },
            {
                test: /\.(sc|c)ss/,
                use: [
                    (mode === "development") ? "style-loader" : MiniCssEP.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader'],
                exclude: /(node_modules|bowercomponents)/,

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    }
}
