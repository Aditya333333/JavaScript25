// const myArry = []
// %DebugPrint(myArry)


//continious/ PACKED_SMI_ELEMENTS, Holey
// SMI(small integer)
//Packed element
// Double (float,string,function)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS
arrTwo.push('8')
// PACKED_ELEMENTS


 arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10)

//holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

//SMI > DOUBlE > PACKED
//H_SMI > H_DOUBLE > H_PACKED

const arrfour = new Array(3)
// just 3 holes.HOLEY_SMI_ELEMENTS
arrfour[0] = '1'// HOLEY_ELEMENTS
arrfour[1] = '2'// HOLEY_ELEMENTS
arrfour[2] = '3'// HOLEY_ELEMENTS
const arrfive = []
arrfive.push('1') // PACKED_ELEMENTS
arrfive.push('2') // PACKED_ELEMENTS
arrfive.push('3') // PACKED_ELEMENTS

const arrsix =[1,2,3,4,5]

arrsix.push(Infinity)

// for, for-of , forEach, for-in
