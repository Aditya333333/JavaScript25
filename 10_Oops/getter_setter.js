class User {
    constructor(email, password) {
        this.email = email,
            this.password = password

    }
    get email(){
        return this._email
    }
    set email(value){
        this._email =value
    }
    get password() {
        return this._password 
    }
    set password(value) {
        this._password = value
    }
}

const getset = new User("Aditya@123", "234")
console.log(getset.password);
console.log(getset.email);

