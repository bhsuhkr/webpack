const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
    },
    mode: 'production', // none, development, production 
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000 // 3 kb
        }
    },
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test:/\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*', // delete all files in the current directory (dist from output)
        //         path.join(process.cwd(), 'build/**/*') 
        //     ]
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'Hello world',
            minify: false // true by default for production
            // filename: 'subfolder/custom_filename.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            title: 'Kiwi Image',
            template: 'src/page-template.hbs',
            description: 'Kiwi',
            minify: false // true by default for production
            // filename: 'subfolder/custom_filename.html',
        })
    ]
};