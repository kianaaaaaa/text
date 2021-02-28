import Observer from './Observer'

export default function (value) {
    //如果value 不是对象, 什么都不做
    if (typeof value != 'object') {
        return
    }
    let ob;
    if (typeof value.__obj__ !== 'undefined') {
        ob = value.__obj__;
    } else {
        ob = new Observer(value)
    }
    return ob;
}
