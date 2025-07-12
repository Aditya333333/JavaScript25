let hero = ["thor","spiderman"]

let HeroPower = {
    thor : "hammar",
    spiderman :"sling",

    getspidermanPower :function () {
        console.log(`spiderman power is ${this.spiderman}`);
        
        
    }
}

Object.prototype.Aditya = function () {
    console.log(`Aditya is a present in all objects`);
    
}
Array.prototype.hyAditya = function () {
    console.log(`Aditya say hello`);
      
}

// HeroPower.Aditya()
// hero.Aditya()
// hero.hyAditya()
// HeroPower.hyAditya()

const User ={
    username:'aditya',
    email:'adityaraj171102@gmail.com'
}

const Teacher = {
    makeVideo :true
}
const TeacherSupport = {
        isAvaiable :false
}
const TASupport ={
    makeAssignment:"js Assignment",
    fullTime:true,
 __proto__:TeacherSupport 
}
Teacher.__proto__ = User


//modern syntax
Object.setPrototypeOf(TeacherSupport,Teacher)


let anotherName = "chaiwithcode   "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);  

}
anotherName.trueLength()
"Aditya".trueLength()
"coldCoffee".trueLength()