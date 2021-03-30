const  http = require('http');
const fs = require('fs');
const com = require('./common') // 处理content-Type 来加载css js 文件
const  path = require('path')

http.createServer((req,res)=>{

    //1. 获取域名后面的地址
    console.log(req.url)
    // 跳转默认index 页面
    let passName = req.url === '/' ? '/index.html' : req.url
    // 获取后缀名
    let extname = path.extname(passName)

    // 2. 通过fs模块读取文件
    if (passName !== '/favicon.ico'){
        fs.readFile('./static'+ passName,(error,data)=>{
            if (error){
                // 没有文件时返回404
                res.writeHead(404,{'Content-Type':`text/html;charset=utf-8`})
                res.end('这个页面不存在')
                return
            }
            res.writeHead(200,{'Content-Type':`${com(extname)};charset=utf-8`})

            res.end(data) // 读取文件
        })
    }

}).listen(9090)

console.log(`server running at http://127.0.0.1:9090`)
