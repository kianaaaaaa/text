/*
*  webpack.config.js webpack的配置文件
*  作用: 来只是webpack干那些活 (当你运行webpack 指令是,会加载里面的配置)
*   [src]
* */

// resolve 用来拼接绝对路径的方法
const {resolve} = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    //    输出
    output: {
        //    输出文件名
        filename: "built.js",
        //    输出路径
        // __dirname nodejs的变量 代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
        //loader 路径
    module: {
        //loader 详细配置
        rules: [
            {
                test: /\.css$/, // 使用正则表达式匹配哪些文件
                // use 数组中的执行顺序是 从右到左,从下自上,依次执行
                use:[
                    'style-loader',
                    // 将css 文件变成common.jd模块加载在js中
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],

    },
    // plugins的配置
    plugins:[
        // 详细plugins的配置
        // html-webpack-plugins
        // 会默认创建一个空的html 自动引入打包管输出的所有资源(js/html)
        new HtmlwebpackPlugin ({
            // 复制./src/index.html 并自动引入打包输出的所有资源(js/css)
            template: "./src/index.html"
        })
    ],
    // 模式
    mode:'development'
    // mode:'production'
}
