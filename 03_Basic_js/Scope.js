

if (true) {
   
    var c =50                          // Avoid using var in JavaScript because it’s function-scoped, hoisted, and can cause bugs
}
// console.log(c);

if (true) {
    let a =100
    const b = 2000
    console.log("local scope:",a);
    console.log("Inside :",b);
}

let a = 600
const b = 300
console.log("Global",a);
console.log("Golbal",b);

