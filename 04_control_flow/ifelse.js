// <,>,<=,>=,!=,==,===,!== (learn more than..)

//differnce of  ==  and ===
let a = 1
let b = "1"
// console.log(a == b);    //only value check
// console.log(a === b);    //both check of value and datatypes


let score = 200
if (score = 150) {
    console.log("Execution sucessfuly");
    
}
// 200 <= 150
if (score <= 150) {
    console.log("Execution sucessfuly");
    
}
// 200 >= 150
if (score >= 150) {
    console.log("Execution sucessfuly");
    
}



let scores= 1000


if (scores > 2000) {
    console.log("less than 2000");
    
}if (scores > 5000) {
    console.log("more than 5000")
}else{
    console.log( "more  1000");
    
}


// and ---> &&  
// or ----> ||
let loginedIn = true
let  upi = true

if (loginedIn && upi ) {
    console.log("welcome to shopping"); 
}

let EmailIdgoogle = true
let SignINfacebook = false

if (EmailIdgoogle || SignINfacebook) {
    console.log("allow to access this website");
    
}


