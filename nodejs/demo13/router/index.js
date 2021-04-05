const url = require('url')

 function change (res){
     res.send = (data) =>{
         res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
         res.end('首页')
     }
 }
let server = () => {
    let G = {};
    G._get = {};
    G._post = {};
    let app = function (req, res) {
        change(res)
        let pathname = url.parse(req.url).pathname
        let method = req.method.toLocaleLowerCase()
        if (G['_'+ method][pathname]) {
            if (method === 'get') {
                G._get[pathname](req, res)
            } else if (method === 'post') {
                let postData = ''
                req.on('data', (chunk) => {
                    postData += chunk
                })
                req.on('end', () =>{
                    console.log(postData)
                    req.body = JSON.stringify(postData)
                    G._post[pathname](req, res)

                })
            }
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
            res.end('资源不存在');
        }


    }
    app.get = (str, fn) => {
        G._get[str] = fn
    }
    app.post = (str, fn) => {
        G._post[str] = fn
    }
    return app
}


module.exports = server()



