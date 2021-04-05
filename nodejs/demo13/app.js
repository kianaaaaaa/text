const http = require('http');
const app = require('./router/index');

http.createServer(app).listen(9090)


app.get('/',function(req,res){
    res.send("首页")
})
app.get('/admin',function(req,res){
    res.send("用户")
})
app.post('/login',function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.end(req.body)
})

console.log(`server running at http://127.0.0.1:9090`)
