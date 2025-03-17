const path = require('path');
const {merge} = require('webpack-merge');
const { getBaseConfig } = require('./webpack.base.js');


module.exports = merge(getBaseConfig(true), {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        hot: true,
        open: false,
        port: 8080,
        static: {
            directory: path.resolve(__dirname, '../public'),
        },
        historyApiFallback: true,
        proxy: [
            {
                '/api': {
                    target: 'http://localhost:3000',
                    pathRewrite: { '^/api': '' },
                }
            }
        ]
    }
})