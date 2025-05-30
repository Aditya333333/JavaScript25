// console.log("hello world");

//******************************************variables************************************************
// let name = "aditya"
// console.log(name);
// const id = 34      // cannot change the value
// console.log(id);
// var city = "jaipur" // can't use beacause block and  function set
// console.log(city)
// state = "bihar"
// console.log(state);

// let a;
// console.log(a)

// now change each variable 
// name = "rahul"
// console.log(name)
// city = "MP"
// console.log(city)
// console.log(typeof id)

//************************************************Datatypes***************************** 
/* 
Primitive Datatypes
Number
Bigint
string
boolean
undefined
null
symbols

Non- Primitive Datatypes

*/
//++++++++++++++++++++++++++++++++++++++++++Primitive 
// let n = 23
// console.log(n)
// console.log(typeof n)
// let B = 45698869879698n
// console.log(B);
// console.log(typeof B);
// let name = "Aditya"
// console.log(name);

// console.log(typeof name);
// let Bool = true
// console.log(Bool);
// console.log(typeof Bool);
// let nll = null
// console.log(null);
// console.log(typeof nll);
// let un ;
// console.log(un);
// console.log(typeof un);

//+++++++++++++++++++++++++++++++++Non-Primitve 
// let arr =[1,2,4,true,"aditya"]
// console.log(arr);
// let obj = {
//     name : "raj",
//     age :23
// }
// console.log(obj);

// let fun = function name() {
//     console.log("I am Function but take a variable name is  fun")
// }
// fun()

// function hello() {
//     console.log("I am original function ")
// }
// hello()


//*************************************Conversion and Operation*****************************
// Number,string,boolean,null

//+++++++++++++Conversion
// Number into string
// let num = null
// console.log(num);
// let numStr = String(num)
// console.log(numStr);
// console.log(typeof numStr);

//string into Number
// let str = "1abc"
// console.log(str);
// let strNum = Number(str)
// console.log(strNum);
// console.log(typeof strNum);

//string into boolean
// let str = null
// console.log(str);
// let strBool = Boolean(str)
// console.log(strBool);
// console.log(typeof strBool);

//boolean into string
// let bool = 0
// console.log(bool);
// let BollStr = String(bool)
// console.log(BollStr);
// console.log(typeof BollStr);

//++++++++++++++++++++++++Operation

// console.log(3+3);
// console.log(3-3);
// console.log(3**3);
// console.log(3*3);
// console.log(3/3);
// console.log(3%3);
// console.log(3+3*4/5); // useless operation


// console.log("2"+2);
// console.log(2+"2");
// console.log("2"+2+2);
// console.log(2+2+"2");

// //Add to string for operation
// let st = "aditya"
// let st2 = "raj"
// let str3 = st + st2
// console.log(str3);

//*****************************************memory(Stack and Heap)*******************************************
//++++++++++++++++++Stack(copy)

// let Email = "adityaraj@gmail.com"
// console.log(Email);
// let Emailname = Email
// console.log(Emailname);

// //+++++++++++++++++++++++++Heap-->original
// let myHeap = {
//     name :"aditya",
//     age1 : 23
// }
// let heap = myHeap
// console.log(heap);



//****************************************Number and Maths************************************* */
//++++++++++++++++++++++Number
// let num = 12
// console.log(num);

// let num1 = new Number(23.00)  //go any browers and open console write a code this then many properties or Methods
// console.log(num1);
// console.log(num1.toFixed(2));
// console.log(num1.toPrecision(3));

// convert number into string
// console.log(num1.toString());
// let lakhs = 1000000
// console.log(lakhs.toLocaleString());

//+++++++++++++++++++++++++++Math

// console.log(Math); // old

// console.log(Math.abs(-8));
// console.log(Math.ceil(3,5,6));
// console.log(Math.floor(24.9)); //don't no..

// console.log(Math.min(4.9))
// console.log(Math.max(4.5))

//*********************************************String************************** */
// let s = "aditya"  //old
// console.log(s);
// //concat
// let n = "aditya"
// let r = "raj"
// console.log(`i am ${n}${r}from bihar`);


// let str = new String("adityaraj") //new
// console.log(str);
// console.log(str.charAt(0));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.indexOf('a'));
// console.log(str.length);
// console.log(str.substring(0,3));




// let Email = "2021piet21cs007@#poornima.org"
// console.log(Email.replace('#',''));




// let n1 = "              Aditya"
// console.log(n1);
// console.log(n1.trim(n1));

//***********************************************Date and Time*************************** */
// let d= Date()
// // console.log(d);

// // create own and custom date

// let date1 = new Date('2025-1-2')      //2025-01-01T18:30:00.000Z
// // console.log(date1);

// let date2 = new Date(2023,12,23,23,5)
// console.log(date2);
// // method of date
// // console.log(date2.getDate());
// //date into string
// console.log(date2.toString());
// console.log(date2.toDateString());
// console.log(date2.toISOString());
// console.log(date2.toJSON());
// console.log(date2.toLocaleDateString());
// console.log(date2.toLocaleTimeString());

//TimeStamp

// let Ts = Date.now()
// console.log(Ts);

// console.log(Date.now());
// console.log(Math.floor(Date.now()));

//******************************************Array******************* */

// let arr = [1,2,3,true,"aditya"]
// console.log(arr);

// let arr1 = new Array(1,2,4,true,"aditya")
// console.log(arr1);
// // console.log(arr1.slice(0,2));
// console.log(arr1.splice(0,2));

// arr1.push(12)
// console.log(arr1);
// arr1.pop()
// console.log(arr1);
// arr1.unshift(12)
// console.log(arr1);
// arr1.shift()
// console.log(arr1);

// console.log("A",arr1);
// console.log(arr1.slice(0,2));
// console.log("B",arr1);
// console.log(arr1.splice(0,2));
// console.log("C",arr1);


// array  into string
// console.log(arr1.toString());
// console.log(arr1.toString().length);

//********************************************Advance Array**************************** */

// let marvelHero= ["captainAmerica","ironman","thor",4,89.887,true,90]
// console.log(marvelHero);
// let dc = ["superman","flash","batman",89,90.00]
// console.log(dc);
// marvelHero.push(dc)
// console.log(marvelHero);
// console.log(marvelHero[7]);


//concat.....
// let another = marvelHero.concat(dc)
// console.log(another);

//spread......
// let anotherHero = [...marvelHero,...dc]
// console.log(anotherHero);

// let y = [34,56,[78,98],90,[89,65,[768],[89,[90]]],90]
// let z = y.flat(Infinity)
// console.log(z);


//string into array
// let na= "Rahul"
// console.log(Array.from(na));



//number into Array
// let score1 = 200
// let score2 =400
// console.log(Array.of(score1,score2));
























































