let arr = [1,2,3]

let arrNew = arr.reduce((acc,currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
},0);
const Hotel = arr.reduce((acc,curr) => acc +curr,0)
console.log(arrNew);

