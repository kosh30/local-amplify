var path = require('path');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "var",
        library: "local_amplify"
    },
    plugins: [
        new EsmWebpackPlugin()
    ],
    optimization: {
        minimize: true,
    }
};