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
                            exclude: /node_modules/,
                            use: [
                                isDev ? 'style-loader' : MINICssExtractPlugin.loader,
                                'css-loader',
                                'postcss-loader',
                            ]
                        },
                        {
                            test: /\.css$/,
                            include: /node_modules/, // 包含 node_modules 中的全局 CSS
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
                },
                // 图片
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    type: 'asset',
                    parser: { // 默认情况下，如果生成的文件小于这个值（以字节为单位），则 asset/resource 类型的模块将使用 base64 编码，否则将使用 asset/inline 类型。
                        dataUrlCondition: { 
                            maxSize: 10 * 1024 // 10kb
                        }
                    },
                    generator: { // 生成文件名
                        filename: 'static/images/[name].[hash:8][ext]'
                    }
                },
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