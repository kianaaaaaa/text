const fs = require('fs');
const path = require('path');

function getFileMime(extname) {
    try {
        let data = fs.readFileSync('./mime/mime.json')
        if (data) {
            let mime = JSON.parse(data.toString())
            return mime[extname]
        }
    } catch (error) {
        console.log(error)
    }
}

let app = {
    statics:(req, res, staticPth)=>{
        let passName = req.url === '/' ? '/index.html' : req.url
        let extname = path.extname(passName)
        // 2. 通过fs模块读取文件
        if (passName !== '/favicon.ico') {
            try {
                let data = fs.readFileSync('./' + staticPth + passName)
                if (data) {
                    let mime = getFileMime(extname)
                    res.writeHead(200, {'Content-Type': `${mime};charset=utf-8`})
                    res.end(data) // 读取文件
                    return false
                }
            } catch (e) {
                console.log(e)
                return true
            }
        }
    },
    login:(req, res)=>{
        res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
        res.end('登录')
    },
    admin:(req, res)=>{
        res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
        res.end('后台')
    },
    register:(req, res)=>{
        res.writeHead(200, {'Content-Type': `text/html;charset=utf-8`})
        res.end('注册')
    },
    error:(req, res)=>{
        res.writeHead(404, {'Content-Type': `text/html;charset=utf-8`})
        res.end('报错')
    },
}


module.exports = app

