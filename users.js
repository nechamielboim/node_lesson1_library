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

function printUser(){
    for (const u of arrUser) {
        console.log(u.tz +" "+u.name+" "+u.type+" "+u.take);
        console.log();
    }
} 

function takeUser(c){
    let flag = false
    for (const u of arrUser) {
        if(u.tz == c)
        {
            flag = true
            return u
        }
    }
    if(!flag){
        throw new Error("this user doesnt exist")
    }
}

module.exports = {printUser,takeUser}