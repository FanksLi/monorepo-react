const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MINICssExtractPlugin = require('mini-css-extract-plugin');

function getBaseConfig(isDev) {

    return {
        // 文件入口
        entry: './src/index.tsx',
        // 输出
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'static/js/[name].[fullhash:8].js',
            publicPath: '/'
        },

        // resolve
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, '../src'),
                '@assets': path.resolve(__dirname, '../src/assets'),
                '@components': path.resolve(__dirname, '../src/components'),
                '@hooks': path.resolve(__dirname, '../src/hooks'),
            }
        },

        // loader
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    oneOf: [
                        { // 匹配module.css和css或者是.css和.less文件
                            test: /\.module\.(css|less)$/,
                            use: [
                                isDev ? 'style-loader' : MINICssExtractPlugin.loader,
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: {
                                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]'
                                        }
                                    }
                                },
                                'postcss-loader',
                                'less-loader'
                            ]
                        },
                        {
                            test: /\.css$/,
                            use: [
                                isDev ? 'style-loader' : MINICssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader',
                            ]
                        },
                        {
                            test: /\.less$/,
                            use: [
                                isDev ? 'style-loader' : MINICssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader',
                                'less-loader'
                           ]
                        }
                    ]
                }
            ]

        },
        plugins: [
            new MINICssExtractPlugin({
                filename: isDev ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
            }),
            new HTMLPlugin({
                template: path.resolve(__dirname, '../public/index.html'),

            })
        ]
    };

}

module.exports = {
    getBaseConfig,
}