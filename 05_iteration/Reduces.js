let arr = [1,2,3]

let arrNew = arr.reduce((acc,currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
},0);
const Hotel = arr.reduce((acc,curr) => acc +curr,0)
// console.log(arrNew);

let shoppingCards = [
    {
        itemName : "java course",
        Price : 1999
    },
     {
        itemName : "js course",
        Price : 2999
    },
     {
        itemName : "React native course",
        Price : 19999
    },
     {
        itemName : "python course",
        Price : 999
    },
]
let pay = shoppingCards.reduce( (acc,item) => (item.Price + acc ),0)
console.log(pay);
