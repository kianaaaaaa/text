// 真正的创建节点 将vnode创建为dom,
export default function createElement(vnode) {
    let domNode = document.createElement(vnode.sel)
    console.log('目的是把虚拟节点', vnode,'真正变为dom')
    // 有子节点还是有文本?
    if (vnode.text != '' && vnode.children == undefined || vnode.children.length == 0) {
        // 他内部是文字
        domNode.innerText = vnode.text;
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        // 他内布是子节点,就要递归创建节点
        console.log(1)
        for (let i = 0; i < vnode.children.length; i ++){
            // 得到当前每一个children
            let ch =  vnode.children[i];
            // 创建出他的DOM,一旦调用,createElement意味着:创建出了DOM了,并且他的elm属性指向了创建出的DOM,
            // 但是还没有上数,是一个孤儿节点
            console.log(ch)
            let chDOM =  createElement(ch)
            //上数
            domNode.appendChild(chDOM);
        }
    }
    // 补充elm 属性
    vnode.elm = domNode;
    // 返回elm elm 属性时一个纯dom对象
    return vnode.elm
}
