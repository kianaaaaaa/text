import {def} from './utils'
import defineReactive from "./defineReactive";
export default class Observer {
    constructor(value) {
        def(value, '__obj__', this, false)
        console.log('我是Observer 构造器', value)
        this.walk(value)
    }
    walk(value) {
        for (let k in value) {
            defineReactive(value , k);
        }
    }
}
