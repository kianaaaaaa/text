import observe from './observe'


export default function (data, key, val) {
    console.log('我是defineReactive', key)
    if (arguments.length === 2) {
        val = data[key];
    }
    let childOb = observe(val)
    Object.defineProperty(data, key, {
        // 可枚举
        enumerable: true,
        // 可以被配置,比如可以被delete
        configurable: true,
        // getter
        get() {
            console.log('你试图访问obj的' + key + '属性')
            return val
        },
        //  setter
        set(newValue) {
            console.log('你试图改变obj的' + key + '属性', newValue)
            if (val === newValue) {
                return
            }
            val = newValue;
            // 当设置了新值，这个新值也要被observe
            childOb = observe(newValue);
            // dep.notify()
        }
    })
}
