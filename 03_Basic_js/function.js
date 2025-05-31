

//console.log() ---->functionname()
//return ----------->console.log(functionname())

//function ko variable v store kar sath ha
//console.log() ---->functionname() --->undefined(beacuse using console.log)
//return ----------->console.log(functionname())--->get  value(beacuse of  console.log)

function Myname() {
console.log("A");
console.log("d");
console.log("I");
console.log("T");
console.log("Y");
console.log("A");
}
// Myname()

// Add two number 

function TwoNumber(num1,num2) { 
     console.log(num1 +num2);
}
// TwoNumber(5,4)




function TwoNum(num1,num2) {
    let result = num1 +num2
    console.log(result);
}
// TwoNum(3,4)



function TwoNums(num1,num2) {
    
     return num1 +num2

}

// console.log(TwoNums(9,4));
//
//function ko variable v store kar sath ha
function Two(num1,num2) { 
     console.log(num1 +num2);
}
Two(5,3)
 let result = Two(5,4)
 console.log("result",result);                //undefined
 

 
 function Twoo(num1,num2) { 
    // let rsults = num1 + num2
    //  return rsults
    return num1 +num2

}
console.log(Twoo(90,3));

 let results = Twoo(90,4)
  console.log("result",results);






function Username(username) {
   if (username === undefined) {
     console.log("please enter your name");
     return
   }
    
    return username
}

//  console.log(Username('aditya'));
