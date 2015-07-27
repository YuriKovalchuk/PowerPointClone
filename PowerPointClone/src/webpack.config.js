
module.exports = {
    entry: './app.ts',
    output: {
        filename: 'bundle.js',
        publicPath: '/bundle/'
    },
    resolve: {
        extensions: ['', '.ts', '.js' ]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts?sourceMap!ts-jsx' }
        ]
    },
};