var http = require('http');

function fromApi(api) {
    return "http://wwww.baidu.com" + api
}


http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': "text/html;charset=utf-8" })


    const api = fromApi('/s?rtt=1&bsst=1&cl=2&tn=news&ie=utf-8&word=cao')
    response.write(api + "<br>")

    response.end('响应结束') // 结束响应
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');