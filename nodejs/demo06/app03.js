
// cnpm i mkdirp --save

// 创建目录
let mkdirp = require('mkdirp');
mkdirp('./upload/img').then((made)=>{
    if (made){
        console.log('创建成功,目录为:'+made)
    }
})
