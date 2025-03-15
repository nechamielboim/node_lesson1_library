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
const fs = require('fs');

function initBooks() {
    try {
        const jsonData = JSON.stringify(arrBook, null, 2);
        fs.writeFileSync('books.json', jsonData, 'utf8');
    } catch (err) {
        console.log("the error is: ", err);
    }
}


function printBook() {
    try {
        const data = fs.readFileSync('books.json', 'utf8');       
        const books = JSON.parse(data);
        for (const key in books) {
            const b = books[key];
            console.log(`${b.code} ${b.name} ${b.type} ${b.taked}\n`);
        }
    } catch (err) {
        console.log("the error is: ", err);
    }

}

function takeBook(c) {
    try {
        const data = fs.readFileSync('books.json', 'utf8');
        const books = JSON.parse(data);
        const book = books.find(b => b.code === c);
        if (book) {
            return book;
        } else {
            throw new Error("This code doesn't exist");
        }
    } catch (err) {
        console.log("The error is:", err);
    }
}


module.exports = {printBook,takeBook,initBooks}