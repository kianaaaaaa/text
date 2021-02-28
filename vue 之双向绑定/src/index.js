import observe from './observe'

var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 10,
    c: {
        d: {
            e: {
                f: 6666
            }
        }
    },
    // g: [22, 33, 44, 55]
};


observe(obj)
// obj.a.m  = 10
console.log(obj.c.d.e.f)
// defineReactive(obj, 'a', 10)
// defineReactive(obj, 'b', 3)
//
//
// console.log(obj.a)
