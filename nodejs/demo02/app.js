
// 引入http模块
var http = require('http');
/*
    request    获取浏览器穿过来的url
    response    给浏览器响应信息
*/
http.createServer(function (request, response) {
    // 设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // 结束响应
    response.end('Hello World');
}).listen(8089); // 端口

console.log('Server running at http://127.0.0.1:8081/');
