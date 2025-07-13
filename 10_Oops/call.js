function setusername(username) {
    this.username = username;
   
    
}
function creatuser(username,email,password) {
    setusername.call(this,username)  //this is setusername function can used 
    this.email = email;
    this.password = password;
    
}
const user = new creatuser("Aditya", "adityaraj171102@gmail.com","457")
console.log(user);
