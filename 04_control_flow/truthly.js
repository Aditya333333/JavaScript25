
let Email = "aditya@gmail.com"

if (Email) {
    console.log("Got a access email");
    
}else{
    console.log("not access the email");
    
}
//falsly value
// false, 0, -0, Bigint 0n,null,undefined,"",NaN

// truthly value
// "false", "0" ," ",[],{}, function(){}

// Array
let arrEmail = []

if (arrEmail.length === 0) {
    console.log(" array is empty");
    
}else{
    console.log("not array is empty");
    
}
//object

const Myobject = {}

if (Object.keys(Myobject).length ===0 ) {
    console.log("object is empty");
    
}else{
    console.log("not object is empty");
    
}

// nullish coalescing operation (??) null undefined

let val1;
// val1  = 5 ?? 10
// val1  = null ?? 40
// val1 = undefined ?? 55
// val1  = null ?? undefined               // undefined
val1 = null ?? 10 ?? 40 
console.log(val1);

//Terniary operation

// condition ? true : false

const val =100
val <= 90 ? console.log("less the 90") : console.log("more than 100");

