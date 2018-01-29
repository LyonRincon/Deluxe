const cssLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        ignore: '/node_modules/',
    },
};

module.exports = {
    context: __dirname,
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },   
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {  
                        "presets": [
                            ["env", {
                            "targets": { node: "6" }, // specify targets here
                            }],
                            "stage-0",
                            "react",
                            "es2015"
                        ],                         
                        "plugins": [
                            'transform-decorators-legacy',
                            'transform-react-jsx',
                        ], 
                    }
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  cssLoader,
                ],
            },
            {
                test: /\.styl$/,
                use: [
                  'style-loader',
                  cssLoader,
                  'stylus-loader',
                ],
            },
        ],
    },
};