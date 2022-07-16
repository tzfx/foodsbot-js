const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'node',
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            querystring: false,
            path: false,
            os: false
        }
    },
    output: {
        filename: 'bundle.js',
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'dist')
    }
};
