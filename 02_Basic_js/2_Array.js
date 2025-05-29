let marvelHero = ["CaptianAmerica","Thor","IronMan"]
let dcHero = ["SuperMan","BatMan","Flash"]

// console.log(marvelHero);
// console.log(dcHero);

// marvelHero.push(dcHero)
// console.log(marvelHero[3])

let anotherHero = marvelHero.concat(dcHero)
// console.log(anotherHero)

// spread syntax
let anotherHero2 = [...marvelHero,...dcHero]   //most coder used this syntax
// console.log(anotherHero2);


const MyArr = [1,3,4,[4,5],[7,8,9,[4,6,7]]]
const MyArr2 = MyArr.flat(Infinity)
console.log(MyArr2);


// String convert into Array
//  console.log(Array.from("Aditya"))
//   console.log(Array.from({name:"Aditya"}))  //interesting
 
 // Number convert into Array
 let score1 = 100
 let score2 = 500
 let score3 = 400
//  console.log(Array.of(score1,score2,score3))




