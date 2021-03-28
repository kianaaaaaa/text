
// 引入http模块
const http = require('http');
const url = require('url');
/*
    request    获取浏览器穿过来的url
    response    给浏览器响应信息
*/
http.createServer(function (request, response) {
    // 设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 结束响应

    if (request.url !== '/favicon.ico') {
        const user = url.parse(request.url, true).query
        console.log(user)
        console.log(`姓名:${user.name} -- 年龄:${user.age}`)
    }


    response.end('Hello World 1111111');
}).listen(8089); // 端口

console.log('Server running at http://127.0.0.1:8089/');
