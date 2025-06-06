
let coding = ["js","python","java","c++"]

//function
coding.forEach( function (items) {
    // console.log(items);
    
})

let codings = ["js","python","java","c++"]

//Arrow function
codings.forEach( (items) =>{
//  console.log(items);
 
})

//outer side of function in foreach loop..
function printme(items) {
    // console.log(items);
    
}
// coding.forEach(printme)
coding.forEach( (items,index,arr)=> {
     console.log(items,index,arr);
     
})




let arrMyobject =[
    {
        languageName: "javasript",
  languageFilename : "js"
    },
     {
        languageName: "java",
  languageFilename : "java"
    },
     {
        languageName: "python",
  languageFilename : "py"
    },
]

arrMyobject.forEach( (items)=> {
    //  console.log(items.languageName);
     
})