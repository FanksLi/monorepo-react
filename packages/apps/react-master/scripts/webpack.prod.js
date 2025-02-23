const path = require('path');
const {merge} = require('webpack-merge');
const { getBaseConfig } = require('./webpack.base.js');

module.exports = merge(getBaseConfig(false), {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
});