const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        mode: isProduction ? "production" : "development",
        devtool: isDevelopment && "cheap-module-source-map",
        entry: "./src/main.tsx",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "assets/js/[name].[contenthash:8].js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"]
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                }

            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                // Add other aliases if needed
            },
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        plugins: [
            isProduction &&
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(
                    isProduction ? "production" : "development"
                )
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "src/index.html"),
                inject: true
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "src/assets", to: "assets" }
                ],
            }),
            new Dotenv({
                path: ".env.local"
            }),
        ].filter(Boolean),
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                })
            ],
            splitChunks: {
                chunks: "all",
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, chunks, cacheGroupKey) {
                            const packageName = module.context.match(
                                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                            )[1];
                            return `${cacheGroupKey}.${packageName.replace("@", "")}`;
                        }
                    },
                    common: {
                        minChunks: 2,
                        priority: -10
                    }
                }
            },
            runtimeChunk: "single"
        },
        devServer: {
            compress: true,
            historyApiFallback: true,
            open: true,
        }
    };
};