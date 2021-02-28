const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: 'web',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        publicPath: 'xuni',
        filename: 'bundle.js',
    },
    devServer: {
        port: 8090,
        hot: true,
        contentBase: 'www',
    },
    mode: 'development',
};
