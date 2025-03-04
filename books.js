class Book{
    code
    name
    type 
    taked
    constructor(code,name,type,taked){
        this.code = code 
        this.name = name
        this.type = type
        this.taked = taked
    }
}

const arrBook = [new Book(111,"aaa","metach",true),new Book(222,"bbb","drama",false),new Book(333,"ccc","regesh",false)]
function printBook(){
    for (const b of arrBook) {
        console.log(b.code +" "+b.name+" "+b.type+" "+b.taked);
        console.log();
    }
}
function takeBook(c){
    let flag = false
    for (const b of arrBook) {
        if(b.code == c)
        {
            flag = true
            return b
        }
    }
    if(!flag){
        throw new Error("this code doesnt exist")
    }
}

module.exports = {printBook,takeBook}