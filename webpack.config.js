const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', // environment: use 'development' if necessary. // use 'development' if necessary. Production mode will make the output files minified/uglified. Development mode, will not.
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'), // main source file
    },
    output: {
        filename: '[name].js', // '[name]-[contenthash].js', // will inherit the name from the entry
        path: path.resolve(__dirname, 'dist'),
        clean: true, // delete exess files every issues of build command
    },
    devtool: 'source-map', // filename.map.js files use for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true, // open browser
        hot: false, // hot reload
        liveReload: true, // live reload
        compress: true, // enable gzip compression
        historyApiFallback: true, // enable browser history fallback
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Odin Weather', // Title that will reflect of HTML file
            filename: 'index.html', // dist/index.html
            template: 'src/template.html', // src/template.html
            favicon: 'src/assets/images/favicon.png', // favicon
        }),
    ],
    module: {
        rules: [
            {
                // HTML LOADER THAT CAN FETCH IMG IN ITS FILE
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                // IMAGE LOADERS
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                // CSS LOADERS WITH MODULES
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1, // applies CSS modules on @imported resources
                            modules: true, // enable CSS modules
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                // CSS LOADERS ONLY
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/,
            },
            {
                // BABEL LOADERS
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
