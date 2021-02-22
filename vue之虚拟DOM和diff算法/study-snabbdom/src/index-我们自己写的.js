import h from '../src/mysnabbdom/h'


const nodes = h('div', {}, [
    h('p', {}, '哈哈'),
    h('p', {}, '嘻嘻'),
    h('p', {}, '呵呵'),
    h('p', {}, '啾啾'),
    h('p', {}, h('span', {}, 'A')),
    h('p', {}, [
        h('span', {}, 'A'),
        h('span', {}, 'B'),
        h('span', {}, 'C'),
    ]),
])

const myVonde = h('ul', {}, [
    h('li', {}, '西瓜'),
    h('li', {}, '苹果'),
    h('li', {}, [
        h('div', {}, [
            h('p', {}, '嘻嘻'),
            h('p', {}, '哈哈'),
            h('p', {}, '啾啾'),
        ])
    ])
])
console.log(myVonde)
