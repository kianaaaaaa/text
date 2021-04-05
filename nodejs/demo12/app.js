const http = require('http');
const app = require('./router/index');

http.createServer(app).listen(9090)


app.get('/',function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end('首页')
})
app.get('/admin',function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });;
    res.end('后台')
})
app.get('/login',function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end('登录')
})

console.log(`server running at http://127.0.0.1:9090`)
