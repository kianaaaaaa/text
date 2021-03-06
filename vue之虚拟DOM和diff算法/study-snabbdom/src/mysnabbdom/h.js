import vnode from './vnode'

// 编写一个低配版本的h函数, 这个函数必须接受3个参数,缺一不可
// 相当于他的重载功能比较弱.
// 也就是说,调用的时候形态必须是下面三种之一
// 形态1 h('div',{},'文字')
// 形态2 h('div',{},[])
// 形态3 h('div',{},h())
export default function (sel, data, c) {
    // 检查参数的个数
    if (arguments.length !== 3) {
        throw new Error("对不起,h函数必须传入三个参数, 因为我们是最低配版本")
    }
    // 检查参数c的类型
    if (typeof c == 'string' || typeof c == 'number') {
        // 说明现在调用h函数是形态2
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        // 说明现在调用h函数是形态2
        let children = [];
        // 遍历c
        for (let i = 0; i < c.length; i++) {
            // 检查c[i] 必须是一个对象
            // console.log(typeof c[i] == 'object')
            // console.log(c[i].hasOwnProperty('sel'))
            if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel')))
                throw new Error("传入的数组中有想不是h函数")

            // 收集
            children.push(c[i])
        }
        // 循环结束了,就说明children收集完毕了
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
        // 说明现在调用h函数是形态3
        let children = [c];
        return vnode(sel, data, children, undefined, undefined)

    } else {
        throw new Error("传入的第三参数类型部队")

    }
}
