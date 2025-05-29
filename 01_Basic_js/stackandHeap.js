
//Two types of Memory
//stack(primitive) and Heap(Non-primitive)
//stack ---> copy
//Hape ---> reference.


// Stack--->copy values
let Email = "Adityaraja@gmail.com"
let AnotherEmail = Email
AnotherEmail = "Rahulpatel@gmail.com"
console.log(Email);
console.log(AnotherEmail);

//Heap --> original values to store in memory
let UserOne = {
    name :"aditya",
    age :23,
    id:"21eptcs007"
}
let UserTwo = UserOne

UserTwo.name = "raj "

console.log(UserOne);
console.log(UserTwo);




