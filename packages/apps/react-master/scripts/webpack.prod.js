const path = require('path');
const {merge} = require('webpack-merge');
const { getBaseConfig } = require('./webpack.base.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(getBaseConfig(false), {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: { // 缓存组
                vendor: { // 定义一个缓存组
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors', // 缓存组名
                    chunks: 'all', // 匹配块的类型
                },
            },
        },
        minimizer: [
            new TerserPlugin({
                parallel: true, // 启用多线程
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                    mangle: true, // 混淆变量名
                    format: {
                        comments: false, // 移除注释
                    },
                },

            }),
            new CssMinimizerPlugin({
                parallel: true, // 启用多线程
                minimizerOptions: {
                    preset: [
                        'default', // 默认配置
                        {
                            discardComments: { // 移除注释
                                removeAll: true,
                            },
                            discardUnused: true, // 移除未使用的样式规则
                            colormin: true, // 优化颜色
                        },
                    ],
                },
            }),
        ],
      
    },
});