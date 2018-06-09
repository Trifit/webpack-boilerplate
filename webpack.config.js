const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./dist/index.html",
    filename: "./index.html"
  });

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
            })
        }]
    }
};

plugins: [
    new ExtractTextPlugin({filename:'app.bundle.css'}),
    htmlPlugin
]