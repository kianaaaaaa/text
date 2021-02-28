class jQuery {
    constructor(select) {
        const result = document.querySelectorAll(select);
        const length = result.length;
        for (let i = 0; i < length; i++) {
            this[i] = result[i];
        }
        this.length = length;
    }
    get(index){
        return this[index]
    }
    ech(fn){
       for (let i = 0; i < this.length; i++){
           const element = this[i];
           fn(element)
       }
    }
    on(type,fn){
        return this.ech(elem =>{
            elem.addEventListener(type,fn,false);
        })
    }
}
