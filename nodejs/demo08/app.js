
/*
* 管道流
* 主要用于复制
* */

const fs = require('fs');
const readStream = fs.createReadStream('./favicon.ico');
const writeStream = fs.createWriteStream('./data/favicon.ico');


readStream.pipe(writeStream)
