const path = require('path');

module.exports = {
    mode: 'production',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};