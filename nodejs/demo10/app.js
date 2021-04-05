const http = require('http');
const routes = require('./routes')
const url = require('url')


http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname
    if (pathname === '/login') {
        res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
        res.end('登录')
    } else if (pathname === '/register') {
        res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
        res.end('注册')
    } else if (pathname === '/admin') {
        res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
        res.end('后台')
    } else {
        if (routes(req, res, 'static')) {
            res.writeHead(404, {'Content-Type': `text/html;charset=utf-8`})
            res.end('页面不存在')
        }
    }

}).listen(9090)

console.log(`server running at http://127.0.0.1:9090`)
