class User{
    tz
    name
    type
    take
    constructor(tz,name,type,take){
        this.tz = tz 
        this.name = name
        this.type = type
        this.take = take
    }
}
const arrUser = [new User(1234567,"nnn","regesh",false),new User(7654321,"hhh","drama",false),new User(1237654,"sss","metach",true)]

const user = new User(1234567,"nnn","regesh",false)
const { log } = require('console')
const fs = require('fs')
async function initUser() {
    try {
        const jsonData = JSON.stringify(arrUser, null, 2);
        await fs.promises.writeFile('user.json', jsonData, 'utf8');
    } catch (err) {
        console.log("The error is:", err);
    }
}
function printUser() {
    fs.readFile('user.json', 'utf8', (err, data) => {
        if (err) {
            console.log("The error is:", err);
            return;
        }
        const users = JSON.parse(data);       
        users.forEach(user => {
            console.log(`${user.tz} ${user.name} ${user.type} ${user.take}\n`);
        });
    });
}

async function takeUser(c) {
    try {
        const data = await fs.promises.readFile('user.json', 'utf8');
        const users = JSON.parse(data);
        const user = users.find(u => u.tz === c);
        if (user) {
            return user;
        } else {
            throw new Error("This code doesn't exist");
        }
    } catch (err) {
        console.log("The error is:", err);
    }
}
const xlsx = require('xlsx');
function writeXlsx(){
    const worksheet = xlsx.utils.json_to_sheet(arrUser);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "users");
    xlsx.writeFile(workbook, "users.xlsx");
}
function readUsersFromFile() {
    const workbook = xlsx.readFile('users.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const users = xlsx.utils.sheet_to_json(sheet);
    return users;
}
function findUserById(id) { 
    flag = false
    const users = readUsersFromFile();
    for (const u of users) {
        if(u.tz == id )
        {
            flag = true
            console.log(u.name); 
        }
  
    }
    if(!flag){
        console.log("not found"); 
    }
}
module.exports = {printUser,takeUser,initUser,writeXlsx,findUserById}