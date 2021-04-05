const url = require('url')

let G = {};

let app = function (req, res){
    let pathname = url.parse(req.url).pathname
    if (G[pathname]){
        G[pathname](req,res)
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end('资源不存在');
    }

}
app.get = (str , fn)=>{
    G[str] = fn
}

module.exports =  app



