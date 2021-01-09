var path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    resolve: { extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "var",
        library: "local_amplify"
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },
        ]
    },
    plugins: [],
    optimization: {
        minimize: true,
    }
};