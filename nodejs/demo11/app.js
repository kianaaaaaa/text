const http = require('http');
const routes = require('./routes')
const url = require('url')


http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname.replace('/',"")
    console.log(pathname)
     if (pathname === ''){
         pathname = 'statics'
     }
    try {
        routes[pathname](req, res, 'static')

    }catch (e) {
        routes["error"](req, res, 'static')
    }



}).listen(9090)

console.log(`server running at http://127.0.0.1:9090`)
