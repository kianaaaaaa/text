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
