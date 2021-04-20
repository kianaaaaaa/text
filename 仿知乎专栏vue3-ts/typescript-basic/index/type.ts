let str = 'str'
/*
* 联合类型
* */
let numberOrString: number | string

function getLabel(input: string | number) {
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}
