let date = new Date()
// console.log(date);              //2025-05-28T15:12:35.436Z
// console.log(date.toString());                   //Wed May 28 2025 20:42:35 GMT+0530 (India Standard Time)
// console.log(date.toDateString());               //Wed May 28 2025
// console.log(date.toISOString());                //2025-05-28T15:12:35.436Z
// console.log(date.toJSON());                         //2025-05-28T15:12:35.436Z
// console.log(date.toLocaleDateString());                 //28/5/2025
// console.log(date.toLocaleString());                         //28/5/2025, 8:42:35 pm

// create own custom Date
//  let MyDate = new Date(2025,0,25)        
//  let MyDate = new Date(2025, 0, 25, 5, 3)
// let MyDate = new Date("2025-01-23")                                
//  let MyDate = new Date("2-01-2003")         //Indian
// console.log(MyDate.toLocaleString());

// TimeStamp
// let createTimeStamp = Date.now()
// console.log(createTimeStamp);
// console.log(Date.now());
// console.log(Math.floor(Date.now()))


// Partical Date,time etc..
 let createMyDate =  new Date(2025,1,23)
// console.log(createMyDate.getFullYear());
console.log(createMyDate.getDate());

createMyDate.toLocaleString('default',{
    weekday:"long"
    
})








