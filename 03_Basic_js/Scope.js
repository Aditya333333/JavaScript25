

if (true) {
   
    var c =50                          // Avoid using var in JavaScript because it’s function-scoped, hoisted, and can cause bugs
}
// console.log(c);

if (true) {
    let a =100
    const b = 2000
    // console.log("local scope:",a);
    // console.log("Inside :",b);
}

let a = 600
const b = 300
// console.log("Global",a);
// console.log("Golbal",b);


//******************************************Nested-scope */
function one(num) {
    username = "aditya"
    function two(num) {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
one()


if (true) {
    username = "sita"
    if (username === "sita") {
        const website = "   youtube"
        // console.log(username + website);
        
    }
    
    
}
// console.log(username);


console.log(y(68));
function y(num) {
    return num+1
}


varY(67)
const varY = function y(num1) {
    return num1 +2
}
console.log(varY(98));