const User = {
    _email :"ad@123",
    _password:"456",
    get email(){
        return this._email
    },
    set email(value){
        this.email = value
    }
}
console.log(User.email)

//factory function
const tea = Object.create(User)
console.log(tea.email);

