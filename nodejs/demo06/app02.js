// 判断服务器上有没有upload目录 没有就创建 有就不操作

const fs = require('fs');
const path = './upload'
fs.stat(path, (err, data) => {
    if (err) {
        mkdir(path)
        return
    }
    if (data.isDirectory()) {
        console.log('upload目录存在')
    }else{
        // 首先删除文件 在去执行创建目录
        fs.unlink(path,err=>{
            if  (!err){
                mkdir(path)
            }else {
                console.log('创建失败!')
            }
        })
    }
})

function mkdir(dir) {
    fs.mkdir(dir, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('目录创建成功!')
    })
}
