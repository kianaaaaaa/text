

const http = require('http');
http.createServer((req, res) => {
    // req 获取客户端传过来的信息
    // res 给浏览器响应信息

    console.log(req.url); // 获取url

    // 设置响应头
    // 状态码是200 文件类型 html text 字符集 utf-8
    res.writeHead(200, { 'Content-type': "text/html;charset=utf-8" })
    res.write('你好 nodejs hello')
    res.end() // 结束响应
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');
