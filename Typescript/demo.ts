interface age {
    name: string,
    say: () => {}
}

interface nn {
    name: string,
    anion: () => {}
}
const obj = {
    name:'王五',
    anion:()=>{
        console.log('啊啊啊')
    }
}
function ask(anime: age | nn) {
    if (anime.name === "李四") {
        (anime as age).say()
    } else {
        (anime as nn).anion()
    }
}

console.log('123')
