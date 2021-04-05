const express = require('express');
const path = require('path');
const app = express()

app.use((req, res, next) => {
    console.log(new Date()) // 路由中间键
    next();
});
app.use(express.static(path.join(__dirname, 'static')));

app.get('/',(req,res) =>{
    res.send('首页')
})
app.get('/admin/add',(req,res)=> {
    res.send({
        name:'里边',
        sex:'男'
    })
})
app.get('/login',(req,res)=> {
    let query = req.query
    console.log(query)
    res.send('登录')
})

app.post('/doling', (req, res) => {
    console.log(res)
    res.send('执行登录')
});
app.get('/login/:id', (req, res) => {
    console.log(res)
    res.send('执行登录')
});

app.use((req, res, next) => {
  res.status(404).send("404")
});
app.listen(3000)
console.log('http://localhost:3000')
