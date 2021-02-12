/*
* hmtL: hot module replacement 热模块替换
* 作用:一个模块发生变化,只会重新打包这个模块,提升构建速度
*   1.样式文件:可以使用hmr功能:因为style-loader内部实现了~
*   2.js文件:默认不能使用hmr功能
*   3.html文件:默认不能使用hmr功能,同时会导致问题
* 解决:
* */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* css压缩 */
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

// 设置nodejs 变量环境
// process.env.NODE_ENV = "production";


/*
* tree shaking 去除无用代码
*   在package.json 中配置
* 'sideEffects : false 所有代码都没有副作用 (都可以进行tree shaking)
*   sideEffects:["*.css","*.sess"]  选择性
 * */
module.exports = {
    // webpack配置
    entry: './src/js/index.js', // 入口起点
    output: { // 输出
        // publicPath: './',
        filename: 'js/[name][contenthash:10].js', // 输出文件名
        path: resolve(__dirname, 'build'), // __dirname是nodejs的变量，代表当前文件的目录绝对路径
    },
    target: 'web',
    module: { // 文件处理
        rules: [
            // {
            //     /*
            //     * 语法检查: eslint-loader eslint
            //     * 注意: 只检查自己写的原码,第三方库不用检查,
            //     * 设置检查规则:
            //     *   package.json中eslintConfig中设置~
            //     *
            //     *   "eslintConfig": {
            //     *      "extends": "airbnb-base"
            //     *    }
            //     *
            //     *   airbnb --> eslint-config-airbnb-base eslint-plugin-import
            //     * */
            //     test:/\.js$/,
            //     exclude: /node_modules/, // 排除依赖
            //     loader:'eslint-loader',
            //     options: {
            //         // 自动修复eslint 错误
            //         fix:true
            //     }
            // }
            {
                //oneOf 调高打包速度, 只能有一个文件的处理loader
                oneOf: [
                    /*
                   * css兼容处理: postcss-loader--> postcss-loader postcss-preset-env
                   * 帮postcss 找到 package.json中browserslist里面的配置,通过配置加载制动的css兼容样式                    *
                   *
                   * 在package.JSON 写入以下代码
                     "browserslist": {
                              //开发环境==>设置node环境变量:process.env.NODE_ENV
                           "development": [
                             "last 1 chrome version",
                             "last 1 firefox version",
                             "last 1 safari version"
                           ],
                           * //生产环境, 默认是生产环境==>
                           "production": [
                             ">0.1%",
                             "not dead",
                             "not op_mini all"
                           ]
                         }

                   * */
                    {
                        // 处理样式资源
                        test: /\.(scss|sass|css)$/,
                        use: [
                            /*
                            thread-loader
                            * 开启多线程打包.
                            * 启动大概为600ms,进行通信开销,
                            * 只有工作消耗时间比较长,才需要进程打包
                            *   注意:只有在项目过大时使用..
                            * */
                            // 'thread-loader',

                            // 此处解决 背景图 404问题
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    esModule: false,
                                    publicPath: '../',
                                },
                            },
                            // 'style-loader', // 创建style标签,将样式放入
                            'css-loader', // 将css文件整合到js中
                            {
                                loader: 'postcss-loader',
                                ident: 'postcss',
                                options: {
                                    // 设置输出路径
                                    postcssOptions: {
                                        plugins: [['postcss-preset-env', {}]],

                                    },

                                },
                            },
                            'sass-loader', // sass文件转换为css 注意先后顺序
                        ],
                    },
                    {
                        test: /\.html$/,
                        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                        loader: 'html-loader',
                    },
                    {
                        // 处理图片资源
                        test: /\.(jpg|bmp|png|jpeg|gif|tiff)$/i,
                        // 下载 url-loader file-loader
                        loader: 'url-loader',
                        options: {
                            // 图片大小8kb 就会被base64 处理
                            // 有点: 减少请求数量
                            // 缺点: 图片提价会更大
                            limit: 64 * 1024,
                            name: '[hash:10].[ext]',
                            esModule: false,
                            outputPath: 'imgs',
                            cacheDirectory:true

                        },
                    },

                    {
                        /*
                                * js 兼容处理 : babel-loader @babel/core @babel/preset-env
                                * 问题:
                                *  1.只能转换基础语法,如promise不能转换
                                *  2. 全部js兼容处理 ==> @babel/polyfill [问题=>增加代码体积]
                                *       需要在js页面中引入 @babel/polyfill库 --> import '@babel/polyfill'
                                *
                                * 推荐:
                                *  3.按需加载做兼容处理: 按需加载 ==> core-js
                                * */
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        options: {
                            // 预设:只是babel做怎么样处理
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        // 按需加载
                                        useBuiltIns: 'usage',
                                        // 指定core-js 版本
                                        corejs: {
                                            version: 3,
                                        },
                                        // 指定浏兼容览器版本
                                        targets: {
                                            chrome: '60',
                                            firefox: '60',
                                            ie: '9',
                                            safari: '10',
                                            edge: '17',
                                        },
                                    },
                                ],
                            ],
                            // 起开babel缓存
                            // 第二次构建时会读取之前的缓存
                            cacheDirectory:true
                        },
                    },
                ]
            }
        ],

    },
    plugins: [
        // html-webpack-plugin：默认会创建一个空的html文件，自动引入打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件提取并重新定向
            filename: 'css/[name][contenthash:10].css',
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin(),
    ],

    optimization: {
        splitChunks: {chunks: "all"}
    },


    // [development 开发模式| production 生产环境 -->生产环境下会自动压缩js代码]
    mode: 'development',
    // 开发服务器 devServer 用来自动化 编译
    // 启动devServer 指令为 webpack serve
    devServer: {
        // 项目构建后路径
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
        // 开启hmr功能
        hot: true,
    },
    /*
    * 可以将node_modules 中的代码单独打包出来
    * */
    //错误 反馈
    devtool: 'source-map',

    externals: {
        // 拒绝jquery打包
        jquery:"jQuery"
    }
};
