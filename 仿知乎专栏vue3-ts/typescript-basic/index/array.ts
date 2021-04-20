let arrOfNumber: number[] = [1, 2, 3]

arrOfNumber.push(3)

function test(){
    console.log(arguments)
}
let user:[string, number,boolean?] = ['viking',3]

user.push(true)


interface Person {
    readonly id:number;
    name:string;
    age?:number
}

let viking :Person ={
    id: 1,
    name : 'viking',
    age :20
}
// viking.id = '957'
