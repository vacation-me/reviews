const path = require('path');

module.exports = {
    entry: './client/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client')
    },
    module : {
        rules : [
            {
              test : /\.jsx?/,
              loader : 'babel-loader',      
              exclude: /node_modules/,
              query: {
                presets: ['react', 'env']
              }
            },
            {
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            }
        ]
    }
};