/*
* 读取流
* */

// 以流的方式读取数据

const fs = require('fs');
let  readStream = fs.createReadStream('./data/input.txt')
let str = ''
let num = 0
readStream.on('data',res=>{
    str += res
    num++
})
readStream.on('end',()=>{
    console.log(str)
    console.log(num)
})


