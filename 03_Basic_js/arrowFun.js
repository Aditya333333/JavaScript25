const Myobject = {
    username : "aditya",
    price : 999,
    MyFunction : function () {
         console.log(`i am ${this.username}`);
        //  console.log(this)
         
    }
    
}
// Myobject.MyFunction()
 
// not used this properties on function methods

function This() {
    username: "raja"
    // console.log(this.username);         //undefined
     
}
// This()

let MYFun = function() {
   username: "raja"
    // console.log(this.username); 
    
}
// MYFun()

//Arrow Function
const Fun =  (num1, num2) => {
    return(num1 + num2);
    
}
// console.log(Fun(50,90))

// also arrow Function  not this properties works
let arrFun = () =>{
   username: "raja"
    console.log(this.username); 
    
}
arrFun()

// Also Arrow Function but mostly widly used react

const arrowFuns = (num3, num4) => num3 + num4

// console.log(arrowFuns(39,90));

// Also Arrow Function but mostly widly used react

const reactarrowFun = (num1, num2) => (num1 + num2)
// console.log(reactarrowFun(34,90));

const arrowMyobject = () =>({username:"aditya"})
// console.log(arrowMyobject())
