import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import  h  from './mysnabbdom/h' // 用于创建vnode的辅助函数

const patch = init([ // 带有选定模块的初始化补丁功能
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
])
const btn = document.getElementById('btn')
const container =  document.getElementById('container')


const Vnode = h('ul',{},[
    h('li', {},'A'),
    h('li', {},'B'),
    h('li', {},'D'),
])

patch(container,Vnode)

const Vnode2 = h('ul',{},[
    h('li', {},'A'),
    h('li', {},'B'),
    h('li', {},'D'),
    h('li', {},'C'),
    h('li', {},'E'),
])


btn.onclick = function() {
    console.log(1)
    patch(Vnode,Vnode2)
}
