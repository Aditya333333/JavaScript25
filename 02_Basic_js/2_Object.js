//signleteral object
//const o = new Object()
const MyObject = {}
MyObject.Email = "adityaraj@gmail.com"
MyObject.age = 23
MyObject.Islogin = false
MyObject.city = "jaipur"

// console.log(MyObject);

// console.log(MyObject.Email);



// object inside the function
let object = {
    Id:21,
    fullname:{
      Username:{
        first:"aditya",
        last:"raj"
      }
    }
}
// console.log(object);
// console.log(object.fullname.Username.first);

 


// two object to add one object
let object1 ={1:"aditya",2:18,3:'raj'}
let object2 ={1:"aditya",2:18,3:'raj'}
let object3 = Object.assign(object1,object2)
// console.log(object3);
//spread
 let object4 = {...object1,...object2}
//  console.log(object4);
 
const my = [
   {
    id:1,
    age:23
   },
   {
    id:1,
    age:23
   },
   {
    id:1,
    age:23
   },
]
// console.log(my[1].id)

// console.log(MyObject);
// very important of object beacause using mostly database
// console.log(Object.keys(MyObject));                //convert object into array
// console.log(Object.values(MyObject));
// console.log(Object.entries(MyObject));
// console.log(MyObject.hasOwnProperty('Email'));

const course = {
   coursename :"javascript",
   price : 999,
  learn :"aditya"
}
console.log(course.learn);

const {learn} =  course
console.log(learn);

const {learn :Insector } = course
console.log(Insector);


// object in Json 
// {
//   "name":"aditya",
//   "age":23
//   "bol" = false
// }


// array of json
// [
//   {},
//   {},
// ]










