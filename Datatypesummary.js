// Primitive  Datatype
// Seven : Number,Bigint,string,boolean,null,symbols-->unique symbols,undefined
let num = 13
console.log(num);
let Bigint = 797886877979766n
console.log(Bigint);
let str = "aditya"
console.log(str);
let bool = false
console.log(bool);
let outTemp = null
console.log(outTemp);

let id = Symbol('1563')
console.log(id);
let accId = Symbol('1563')
console.log(accId);

console.log(id === accId );










// Non-Primitive  Datatypes
// Arrary,objects,functionn

let arr = ["aditya","raj","patel"]
console.log(arr);

let Myobject = {
    name :"aditya",
    age:23,
    city:"jaipur"
}
console.log(Myobject);



const Myfun = function () {
    console.log("hello world");
}
Myfun(); // This will log "hello world" to the console


