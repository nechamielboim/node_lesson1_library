const {takeBook,printBook,initBooks} = require('./books')
const {printUser,takeUser,initUser} = require('./users')
//initBooks()
try {
    initUser()
} catch (error) {
    console.log(error);
}
printBook()
printUser()
const args = process.argv.slice(2);
console.log(takeBook(args[0]));
console.log(takeUser(args[1]));
const  book = takeBook(111)
const user={}
try {
    user = takeUser(1234567)
} catch (error) {
    console.log(error);
}
 if(book.taked){
     console.log("the book is taked");
    console.log();
  }
  if(user.take){
     console.log("the user taked other book");
      console.log();
  }
  if(book.type != user.type ){
     console.log("the book's type doesnt match to the user's type");
     console.log();
 }
  if(book.type == user.type && !book.taked && !user.take){
     console.log("The loan was completed successfully.");
  }


