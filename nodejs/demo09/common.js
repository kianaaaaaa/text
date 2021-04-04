
const  fs = require('fs');

function getMime(extname){
    switch(extname){
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        default:
            return 'text/html';
    }
}

function getFileMime (extname){
    return new Promise((resolve, reject) =>{
        fs.readFile('./mime/mime.json',(err, data)=>{
          err&&reject(err);
            let mime = JSON.parse(data.toString())
            resolve(mime[extname])
        })
    })

}


module.exports = {
    getMime,
    getFileMime
}


