const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const htmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },

    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({ 
                fallback:'style-loader',
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }),
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },{ 
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }]
        }]
    }
}

plugins: [
    new ExtractTextPlugin({filename:'app.bundle.css'}),
    new htmlWebPlugin(),
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['dist'] }
    })   
]