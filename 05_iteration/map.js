const arrNum = [1,2,3,4,5,6,7,8,9,10]
let maparrNum = arrNum.map((num) => (num));
console.log(maparrNum);

const arrNums = [1,2,3,4,5,6,7,8,9,10]
let maparrNums = arrNums
                .map((num) => (num))
                .map((num) => (num *10))
                .filter((num) =>(num>=40))
console.log(maparrNums);
