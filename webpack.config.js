var path= require('path')

module.exports = {
    entry: "./js/script.js",
    output: {
        path: './js',
        filename: "client.js"
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: "jade" },
            {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }
          }
        ]
    }
};
