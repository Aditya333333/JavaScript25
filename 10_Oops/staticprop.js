class User {
    constructor(username) {
        this.username = username
        
    }
logme(){
    return `Username : ${this.username}`
}
 static createId(){
    return `333`
}
}
const ad = new User("Aditya")
console.log(ad.logme());

// console.log(ad.createId());  // static not to share function or properties 


class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email = email
        
    }

}
const iphone = new Teacher("iphone","i@gmail.com")
console.log(iphone);

console.log(iphone.logme());
console.log(iphone.createId());

