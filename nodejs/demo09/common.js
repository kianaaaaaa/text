
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

// function getFileMime (){
//     fs.red(()=>{
//
//     })
//
// }


module.exports = {
    getMime
}


