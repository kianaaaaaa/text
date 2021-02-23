import vnode from './vnode'
import createElement from "./createElement";


export default function (oldVnode, newVnode) {
    // 判断传入的第一个参数,是dom节点还是虚拟节点
    if (oldVnode.sel == '' || oldVnode.sel == undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)
    }


    // 判断oldVnoed 和newVnode 是不是同一个节点
    if(oldVnode.sel == newVnode.sel && oldVnode.sel == newVnode.sel){
        console.log('是同一个节点')
    }else{
        console.log('不是同一个节点,暴力插入新的, 删除旧的')

       let newVnodeElm = createElement(newVnode)
        // 插入老节点之
        if (oldVnode.elm.parentNode && newVnodeElm){
            oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)
        }
    }
}
