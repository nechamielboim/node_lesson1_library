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

module.exports = {printUser,takeUser,initUser}