
const url = require('url')

const api = 'http://www.baidu.com?name=张三&age=14'
const  template =  url.parse(api,true).query


console.log(template)
console.log(`姓名:${template.name} -- 年龄:${template.age}`)
