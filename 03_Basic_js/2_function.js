function cardListsinglePrice(num) {
    return num
}
// console.log(cardListsinglePrice(200,400,600));

//muti price
function CardListMutiPrice(...num) {
    return num
}
// console.log(CardListMutiPrice(200,400,600));

// create object than deploy function
//create Object
const MyObject ={
    username : "aditya",
    Price :399
}
//create both object function
const MyObjectFun = ({
    username :"raj",
    Price :199
})
function  MyFun(anyother) {
    // console.log(`i am ${anyother.username} and price is ${anyother.Price}`);
    return(`i am ${anyother.username} and price is ${anyother.Price}`);
    
}
// MyFun(MyObject)
console.log(MyFun(MyObject));
console.log(MyFun(MyObjectFun));

//Similary to array parts
const arr = [30,50,34,"aditya"]

function Myarr(arrs) {

    // return `${arr[0]}`
    return arrs[3]
}
console.log(Myarr(arr));

