
module.exports = {
    entry: {index:'./src/index.js',
            vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ]
    }
};

