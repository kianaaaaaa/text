//引入
import '../css/index.scss';
import '../css/demo.css';
//在按需加载下 需要注释 import '@babel/polyfill'
// import '@babel/polyfill'

import print from './print'


//执行
const add = (x, y) => x + y;
// 下一行忽略eslint 所有规则
// eslint-disable-next-line
console.log(add(1, 5));
const promise =  new Promise((resolve) => {
        setTimeout( () =>{
            console.log("定时器走完了!")
            resolve()
        },1000)
})

if(module.hot){
    // 一旦module.hot 为true,说明开启了hmr功能. --> 让HMR功能代码生效
    module.hot.accept('./print.js',function (){
        // 方法会监听 print.js 文件的变化,一旦发生变化,其他模块不会重新打包
        print()
    })
}


document.getElementById('lazy').onclick = function (){
    // 懒加载~
    // webpackPrefetch 预加载 : 会在使用之前 加载js
    import(/* webpackChunkName:'lazy',webpackPrefetch:true*/'./lazy').then(({asd}) =>{
        asd()
    })

}


console.log(promise)
console.log("index.js加载完成了!")
