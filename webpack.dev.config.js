const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    mode: 'development', // none, development, production 
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset', // automatically select either source or inline based on the size
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kilobytes
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader', 'css-loader' // MiniCssExtractPlugin.loader to style-loader
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader' // MiniCssExtractPlugin.loader to style-loader
                ]
            }, 
            {
                test: /\/js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        // new TerserPlugin(), // no need to minify for development
        // new MiniCssExtractPlugin({
        //     filename: 'style.[contenthash].css'
        // }), // no need to extract css into a single css file for development
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*', // delete all files in the current directory (dist from output)
        //         path.join(process.cwd(), 'build/**/*') 
        //     ]
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello World',
            template: 'src/index.hbs',
            description: 'Some description'
            // filename: 'subfolder/custom_filename.html',
        })
    ]
};