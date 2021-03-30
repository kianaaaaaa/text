/*
const fs = require('fs');
const path = './wwwroot'
let  dirArr = []
fs.readdir(path, (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    for (let i= 0;i<data.length; i++ )  {
        fs.stat(path + '/' + data[i], (error, stats) => {
            if (stats.isDirectory()) {
                dirArr.push(data[i])
            }
        })

    }

})
*/
const fs = require('fs');
function  isDir(path){
    return new Promise(resolve => {
        fs.stat(path, (error, stats) => {
            if (error){
                console.log(error)
                return
            }
             resolve(stats.isDirectory())
        })
    })
}

let mian = new Promise(resolve => {
    const path = './wwwroot'
    let  dirArr = []
    fs.readdir(path, async (err, data) => {
        if (err){
            console.log(err)
            return
        }
        for (let item of data){
            if (await isDir(path+'/'+item)){
                dirArr.push(item)
            }
        }
        resolve (dirArr)
    })

})

mian.then(res=>{
    console.log(res)
})

