const path = require('path');
const webpack = require('webpack');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    devtool:"eval-source-map",
    entry:{
        index: resolve('src/pages/index/index')
    },
    output: {
        filename: '[name].js',
        path: resolve('dist')
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    //webpack-dev-server本地服务器
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        port: "8080", //设置默认监听端口，如果省略，默认为”8080“
        inline: true//实时刷新
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    transformToRequire: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href'
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: [
                    resolve('src')
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: resolve('dist/static/img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: resolve('dist/media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: resolve('dist/fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
};