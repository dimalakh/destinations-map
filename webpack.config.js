module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js"
    },
    module:{
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
    }
};
