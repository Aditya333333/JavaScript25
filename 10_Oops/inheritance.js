class User {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(`USERNAME is a ${this.username}`);

    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password

    }
    Addcourse(){
       console.log(`A new course was add by ${this.username}`);
        
    }
}

const chai = new Teacher("Patel","patel@gmail.com","345")
console.log(chai);
chai.Addcourse()
