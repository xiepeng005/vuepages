const path = require('path');
const webpack = require('webpack');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
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
                include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
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