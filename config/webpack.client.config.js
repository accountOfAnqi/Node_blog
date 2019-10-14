/**
 * 客户端webpack 配置
 * @author yudioll
 */

const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const base = require('./webpack.base.config')

module.exports = merge(base, {
    entry: {
        client: path.resolve(__dirname, '../src/entry-client.js')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new VueSSRClientPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.client.html'),
            filename: 'index.client.html'
        })
    ]
})