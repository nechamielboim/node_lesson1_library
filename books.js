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

const xlsx = require('xlsx');
function writeXlsx2(){
    const worksheet = xlsx.utils.json_to_sheet(arrBook);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "books");
    xlsx.writeFile(workbook, "books.xlsx");
}
function readUsersFromFile2() {
    const workbook = xlsx.readFile('books.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const books = xlsx.utils.sheet_to_json(sheet);
    return books;
}
function findUserById2(id) { 
    flag = false
    const books = readUsersFromFile2();
    for (const b of books) {
        if(b.code == id )
        {
            flag = true
            console.log(b.name); 
        }
  
    }
    if(!flag){
        console.log("not found"); 
    }
}
module.exports = {printBook,takeBook,initBooks,writeXlsx2,findUserById2}