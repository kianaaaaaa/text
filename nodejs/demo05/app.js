



const fs = require('fs')

// 1.fs.stat  检测是文件还是目录

/*
fs.stat('./html',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(`是文件:${data.isFile()}`) // false
    console.log(`是目录:${data.isDirectory()}`) // true
})
*/
/*
fs.stat('./package.json',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(`是文件:${data.isFile()}`) // true
    console.log(`是目录:${data.isDirectory()}`) // false
})
*/

// 2. fs.mkdir  创建目录
/*
* path              将创建的目录路径
* mode              目录权限 默认777
* callback          回调,传递异常参数err
* */
/*fs.mkdir('./css',(err)=>{
    if (err){
        console.log(err)
        return;
    }
    console.log('创建成功')

})*/
// 3. fs.writeFile 写入文件
/*
*
* */
/* fs.writeFile('./html/index.html','你好nodejs hh',(err)=>{
     if (err){
         console.log(err)
         return;
     }
     console.log('创建写入文件成功!')
 })*/

// 4
/*
 fs.appendFile('./css/base.css','body{color:red}',(err) => {

     if (err) {
         console.log(err)
         return;
     }
     console.log('appendFile 写入成功!')
 })
*/

// 5.fs.readFile 读取文件
/*fs.readFile('./html/index.html','utf-8',((err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data)
}))*/
// 6.fs.readdir 读取目录
/*    fs.readdir('./html',(err,data)=>{
        if (err) {
            console.log(err)
            return;
        }
        console.log(data)
    })*/

// 7.fs.rename 重命名  功能1. 表示重命名 2.  移动文件
/*
fs.rename('./css/aaa.css','./css/index.css',(err,data)=>{
    if (err) {
        console.log(err)
        return;
    }
    console.log(data)
})
*/
// 移动文件
/*
fs.rename('./css/index.css','./html/index.css',(err)=>{
    if (err) {
        console.log(err)
        return;
    }
    console.log('移动文件成功')
})
*/

// 8. fs.rmdir 删除目录

fs.rmdir('./aaa',(err)=>{
    if (err) {
        console.log(err)
        return;
    }
    console.log('删除成功')
})

// 9. fs.unlink 删除文件

fs.unlink('./aaa/index.html',(err)=>{
    if (err) {
        console.log(err)
        return;
    }
    console.log('删除成功')
})
