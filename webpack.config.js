const Dotenv = require('dotenv-webpack')

module.exports = {
    node: {
      fs: "empty",
    },     
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
      new Dotenv({
        path: './.env',
        safe: false
      })
    ]
};
