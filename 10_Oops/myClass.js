// ES6
class User {
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase}`
    }
}

const chai = new User("Aditya","adityaraj@gmail.com","123")
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeusername());



//Beind the scene

function User1(username,email,password) {
     this.username = username;
        this.email = email;
        this.password = password;
}
User1.prototype.changeusername = function () {
    return`${this.username.toUpperCase()}`
    
}

User1.prototype.encryptPassword = function () {
    return`${this.password}abc`
    
}


const tea = new User1("Aditya","adityaraj@gmail.com","123")
console.log(tea);
console.log(tea.encryptPassword());
console.log(tea.changeusername());

