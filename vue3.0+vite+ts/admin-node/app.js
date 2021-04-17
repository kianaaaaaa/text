const express = require('express')
const router = require('./router');
const app = express()


app.use('/',router)


const server = app.listen(5000, function () {
    const {address, port} = server.address()
    console.log("启动成功 http://127.0.0.1:5000", address, port)
})
