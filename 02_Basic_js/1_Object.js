
// object literals
const Mysym = "key1"

const MyObject = {
  name : "aditya",
  age : 23,
  Email : "adityaraja171102@gmail.com",
  city :"jaipur",
  Mysy : " not a symbols key1",
   [Mysym] : "  symbols key1",
  
}
console.log(MyObject);

// console.log(MyObject.Mysym);            //can't allowed key 
// console.log(MyObject[Mysym]);           // it's alloed for key

// console.log(MyObject.Email)
// console.log(MyObject["Email"]);             //special condition using **Symbols Datatypes**

// change the variable
MyObject.Email = "rahulpatel@gmail.com"
console.log(MyObject.Email);
//Object.freeze(MyObject)                              //can't change value of object 


// MyObject.Email = "Neha@gmail.com"
// console.log(MyObject.Email);

// function
 MyObject.greeting = function () {
    // console.log("i am function")
    console.log(`i am aditya ${this.Email} and ${this.city}`)

    
}
MyObject.greeting()







