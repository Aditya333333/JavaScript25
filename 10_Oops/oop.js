const user = {
    username:'aditya',
    age :23,
    signin:true,
    
    getuserId: function () {
    //    console.log("Got user details");
    // console.log(`username: ${this.username}`);
    // console.log(this);
    
        
    }
}
console.log(user.username);
// console.log(user.getuserId());
console.log(this);

function users(username,loginCount,loginIN) {
    this.username = username,
    this.loginCount = loginCount,
    this.loginIN = loginIN

    return this
}
const userOne = new users("Aditya",12,true) //new is Constructor function 
const userTwo = new users("Rahul",11,false)
console.log(userOne);
console.log(userTwo);






