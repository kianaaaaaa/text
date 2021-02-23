import h from '../src/mysnabbdom/h'
import patch from "../src/mysnabbdom/patch.js";


const btn = document.getElementById('btn')
const container = document.getElementById('container')


// const nodes = h('div', {}, [
//     h('p', {}, '哈哈'),
//     h('p', {}, '嘻嘻'),
//     h('p', {}, '呵呵'),
//     h('p', {}, '啾啾'),
//     h('p', {}, h('span', {}, 'A')),
//     h('p', {}, [
//         h('span', {}, 'A'),
//         h('span', {}, 'B'),
//         h('span', {}, 'C'),
//     ]),
// ])
//

// const myVonde1 = h('ul', {}, [
//     h('li', {}, '西瓜'),
//     h('li', {}, '苹果'),
//     h('li', {}, [
//         h('div', {}, [
//             h('p', {}, '嘻嘻'),
//             h('p', {}, '哈哈'),
//             h('p', {}, '啾啾'),
//         ])
//     ])
// ])


const nodes = h('ul', {}, [
    h('p', {}, '哈哈'),
    h('p', {}, '嘻嘻'),
    h('p', {}, '呵呵'),
    h('p', {}, '啾啾'),
    h('div',{},[
        h('ol',{},[
            h('li', {}, '木木哒'),
            h('li', {}, '哦啦哦啦'),
            h('li', {}, '木大木大'),

        ])
    ])
    ]
)

patch(container, nodes)
