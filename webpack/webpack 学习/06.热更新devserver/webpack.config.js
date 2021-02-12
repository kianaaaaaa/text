const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    target: 'web',
    output: {
        filename: "built.js",
        path: resolve(__dirname, 'build'),
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(JPG|PNG|jpeg)$/,
                // 下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    // 图片大小8kb 就会被base64 处理
                    // 有点: 减少请求数量
                    // 缺点: 图片提价会更大
                    limit: 8 * 1024,

                }
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片
                loader: 'html-loader',

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: 'development',
    // 开发服务器 devServer 用来自动化 编译
    // 启动devServer 指令为 npx webpack-dev-server
    devServer: {
        // 项目构建后路径
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
    },
}
