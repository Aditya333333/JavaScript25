let Arr = [1,2,3,4,5]
// console.log(Arr);
let Arr1 = [ 1,4,5,true,"aditya"] 
// console.log(Arr1);

// another type to write code to array
let MyArr = new Array(1,3,5,"raj",true)
// console.log(MyArr);
// console.log( typeof MyArr.toString());

//array Method
let MyArr2 = [0,4,5,7,8]
//  console.log(MyArr2);                       //[ 0, 4, 5, 7, 8 ]
//  MyArr2.push(9)
//  console.log(MyArr2)                        //[ 0, 4, 5, 7, 8, 9 ]
//   MyArr2.pop()
//  console.log(MyArr2)                        //[ 0, 4, 5, 7, 8 ]
//  MyArr2.unshift(9)
//  console.log(MyArr2)                        //[ 9, 0, 4, 5, 7, 8 ]
//  MyArr2.shift()
//  console.log(MyArr2);                           //[ 4, 5, 7, 8 ]
// console.log(MyArr2.slice(1,4));                         //[ 5, 7, 8 ]
// console.log(MyArr2.splice(2,3))                         //[ 7, 8 ]

// Array convert into string
let newArr = [3,5,8,3,5]
//console.log(newArr);

 const ArrStr = newArr.join()
//console.log(ArrStr);

// Important Slice and Splice

console.log( "A","Original" ,newArr);

let Myslice = newArr.slice(3,8)
console.log(Myslice)
console.log( "B","Slice",newArr);

let Mysplice = newArr.splice(3,8)
console.log(Mysplice)
console.log( "c","splice",newArr);




