

// 在es6 之前获取异步里面的数据
/*
function  getData(callbak){

 setTimeout(()=>{
     let name = '张三'
     callbak(name)
 })
}

getData(function (aaa){
    console.log(aaa)
})
*/


let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let name = '张三'
        resolve(name)
    })
})
p.then(res=>{
    console.log(res)
})
